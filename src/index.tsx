import React, { ReactElement } from "react";
import AppBootstrap from "./components/app-bootstrap/app-bootstrap";
import { AuthProvider } from "./context/auth-context";
import Navigator from "./config/navigator";
export default function App(): ReactElement {
  return (
    <AuthProvider>
      <AppBootstrap>
        <Navigator />
      </AppBootstrap>
    </AuthProvider>
  );
}
