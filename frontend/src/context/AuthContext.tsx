import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
  id: string;
  username: string;
  email: string;
}

interface StoredUser extends User {
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication - in real app, this would call an API
    const users: StoredUser[] = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find((u: StoredUser) => u.email === email && u.password === password);
    
    if (foundUser) {
      const userData = { id: foundUser.id, username: foundUser.username, email: foundUser.email };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    // Mock registration - in real app, this would call an API
    const users: StoredUser[] = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.find((u: StoredUser) => u.email === email)) {
      return false; // User already exists
    }

    const newUser: StoredUser = {
      id: Date.now().toString(),
      username,
      email,
      password // In real app, this would be hashed
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    const userData = { id: newUser.id, username: newUser.username, email: newUser.email };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};