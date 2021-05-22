import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

/**
 * This component allows you to set and use authUser as context
 */

// create types
type AuthContextType = {
  user: { [key: string]: any } | null;
  setUser: Dispatch<SetStateAction<{ [key: string]: any } | null>>;
};

// create Context so you can use it in provider below
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create custome hook to use Auth
const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an Auth Provider");
  }
  return context;
};

// Auth Provider that wraps the app
const AuthProvider = (props: { children: ReactNode }): ReactElement => {
  const [user, setUser] = useState<{ [key: string]: any } | null>(null);
  return <AuthContext.Provider {...props} value={{ user, setUser }} />;
};

export { useAuth, AuthProvider };
