import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService } from '../services/api';
import type { User, LoginCredentials, SignupData, AuthResult } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (credentials: LoginCredentials) => Promise<AuthResult>;
  signup: (userData: SignupData) => Promise<AuthResult>;
  logout: () => Promise<void>;
  updateUser: (userData: Partial<User>) => Promise<AuthResult>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async (): Promise<void> => {
    if (authService.isAuthenticated()) {
      try {
        const userData = await authService.getProfile();
        setUser(userData);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Auth check failed:', error);
        logout();
      }
    }
    setLoading(false);
  };

  const login = async (credentials: LoginCredentials): Promise<AuthResult> => {
    try {
      const data = await authService.login(credentials);
      setUser(data.user);
      setIsAuthenticated(true);
      return { success: true, data };
    } catch (error) {
      console.error('Login error details:', error);
      const err = error as { code?: string; response?: { data?: { error?: string } } };
      if (err.code === 'ERR_NETWORK') {
        return {
          success: false,
          error: 'Cannot connect to server. Is Django running on port 8000?',
        };
      }
      if (err.response?.data?.error) {
        return {
          success: false,
          error: err.response.data.error,
        };
      }
      return {
        success: false,
        error: 'Login failed. Please try again.',
      };
    }
  };

  const signup = async (userData: SignupData): Promise<AuthResult> => {
    try {
      const data = await authService.signup(userData);
      setUser(data.user);
      setIsAuthenticated(true);
      return { success: true, data };
    } catch (error) {
      console.error('Signup error details:', error);
      const err = error as { code?: string; response?: { data?: string | Record<string, string[]> }; message?: string };
      if (err.code === 'ERR_NETWORK') {
        return {
          success: false,
          error: 'Cannot connect to server. Is Django running on port 8000?',
        };
      }
      if (err.response) {
        // Server responded with error
        return {
          success: false,
          error: err.response.data || 'Signup failed',
        };
      }
      return {
        success: false,
        error: err.message || 'Signup failed',
      };
    }
  };

  const logout = async (): Promise<void> => {
    await authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateUser = async (userData: Partial<User>): Promise<AuthResult> => {
    try {
      const updatedUser = await authService.updateProfile(userData);
      setUser(updatedUser);
      return { success: true, data: { user: updatedUser, tokens: { access: '', refresh: '' } } };
    } catch (error) {
      const err = error as { response?: { data?: string } };
      return {
        success: false,
        error: err.response?.data || 'Update failed',
      };
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated,
    loading,
    login,
    signup,
    logout,
    updateUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
