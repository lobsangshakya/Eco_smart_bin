import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/api';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
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

  const login = async (credentials) => {
    try {
      const data = await authService.login(credentials);
      setUser(data.user);
      setIsAuthenticated(true);
      return { success: true, data };
    } catch (error) {
      console.error('Login error details:', error);
      if (error.code === 'ERR_NETWORK') {
        return {
          success: false,
          error: 'Cannot connect to server. Is Django running on port 8000?',
        };
      }
      if (error.response?.data?.error) {
        return {
          success: false,
          error: error.response.data.error,
        };
      }
      return {
        success: false,
        error: 'Login failed. Please try again.',
      };
    }
  };

  const signup = async (userData) => {
    try {
      const data = await authService.signup(userData);
      setUser(data.user);
      setIsAuthenticated(true);
      return { success: true, data };
    } catch (error) {
      console.error('Signup error details:', error);
      if (error.code === 'ERR_NETWORK') {
        return {
          success: false,
          error: 'Cannot connect to server. Is Django running on port 8000?',
        };
      }
      if (error.response) {
        // Server responded with error
        return {
          success: false,
          error: error.response.data || 'Signup failed',
        };
      }
      return {
        success: false,
        error: error.message || 'Signup failed',
      };
    }
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateUser = async (userData) => {
    try {
      const updatedUser = await authService.updateProfile(userData);
      setUser(updatedUser);
      return { success: true, data: updatedUser };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || 'Update failed',
      };
    }
  };

  const value = {
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
