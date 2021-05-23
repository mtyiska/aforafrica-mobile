import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { View, Text } from "react-native";
import {
  DeliusUnicase_400Regular,
  DeliusUnicase_700Bold,
  useFonts,
} from "@expo-google-fonts/delius-unicase";
import AppLoading from "expo-app-loading";

type AppBootstrapProps = {
  children: ReactNode;
};

export default function AppBootstrap({
  children,
}: AppBootstrapProps): ReactElement {
  useEffect(() => {
    //similate other assets loading
    setTimeout(() => {
      setAppLoaded(true);
    }, 5000);
  }, []);
  const [fontLoaded] = useFonts({
    DeliusUnicase_400Regular,
    DeliusUnicase_700Bold,
  });

  const [appLoaded, setAppLoaded] = useState(false);

  return fontLoaded && appLoaded ? <>{children}</> : <AppLoading />;
}
