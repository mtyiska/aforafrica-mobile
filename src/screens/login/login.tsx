import React, { ReactElement } from "react";
import { View, Text, Button } from "react-native";
import { useAuth } from "../../context/auth-context";

export default function Login(): ReactElement {
  const { setUser } = useAuth();

  const login = () => {
    setUser({ name: "Michael", username: "mtyiska" });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login</Text>
      <Button title="click here" onPress={login} />
    </View>
  );
}
