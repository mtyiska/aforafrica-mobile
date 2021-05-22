import React from "react";
import { View, Text } from "react-native";
import { useAuth } from "../../context/auth-context";

export default function Home() {
  const { user } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hi {user?.name}, welcome to Home</Text>
    </View>
  );
}
