import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen } from "./screens";
import { Provider } from "react-redux";
import { store } from "./store";
import { NativeBaseProvider } from "native-base";
import * as SplashScreen from "expo-splash-screen";

const Stack = createNativeStackNavigator();

export default function App() {
  const { height: screenHeight, width: screenWidth } = Dimensions.get(
    "window"
  );
  const [isReady, setIsReady] = useState(false);
  const _cacheResourcesAsync = async () => {
    SplashScreen.hideAsync();
    await sleep(3000);
    setIsReady(true);
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  if (!isReady) {
    return (
      <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
        <Image
          source={require("./assets/splash.png")}
          onLoad={_cacheResourcesAsync}
          style={{ width: screenWidth, height: screenHeight }}
        />
      </View>
    );
  }
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}


