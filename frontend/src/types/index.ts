export interface User {
  id?: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  profile?: {
    phone: string;
    address: string;
  };
}

export interface Tokens {
  access: string;
  refresh: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface SignupData {
  username: string;
  email: string;
  password: string;
  password_confirm: string;
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
}

export interface AuthResponse {
  user: User;
  tokens: Tokens;
}

export interface AuthResult {
  success: boolean;
  data?: AuthResponse;
  error?: string | Record<string, string[]>;
}

export interface ApiError {
  response?: {
    data?: string | Record<string, string[]>;
    status?: number;
  };
  code?: string;
  message?: string;
}
