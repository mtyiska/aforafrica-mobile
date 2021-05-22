import React, { ReactElement } from "react";
import { AuthProvider } from "./context/auth-context";
import Home from "./screens/home/home";
import Login from "./screens/login/login";
export default function App(): ReactElement {
  return (
    <AuthProvider>
      <Home />
      <Login />
    </AuthProvider>
  );
}
