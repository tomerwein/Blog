import React, { createContext, useState, useEffect, useContext } from "react";
import Cookies from 'js-cookie';

interface IUser {
  id: number;
  email: string;
  name: string;
  username: string;
}

interface IAuthContext {
  token: string | null;
  setToken: (token: string | null) => void;
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

interface AuthProviderProps {
    children: React.ReactNode;
  }

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<IUser | null>(null);


  useEffect(() => {
    const savedToken = Cookies.get("token");
    const savedUser = Cookies.get("user");

    if (savedToken) {
      setToken(savedToken);
    }

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser  }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
