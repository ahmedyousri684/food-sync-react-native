import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen, OpeningQtyScreen, FactoryScreen, TransferScreen, WasteScreen, SalesScreen, ClosingQtyScreen, ReportScreen } from "./screens";
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
            <Stack.Screen name='OpeningQty' component={OpeningQtyScreen} options={{ headerTintColor: "#F4891F", headerTitle: "Opening Quantities" }} />
            <Stack.Screen name='factory' component={FactoryScreen} options={{ headerTintColor: "#F4891F", headerTitle: "Factory" }} />
            <Stack.Screen name='transfer' component={TransferScreen} options={{ headerTintColor: "#F4891F", headerTitle: "Transfer In & Out" }} />
            <Stack.Screen name='sales' component={SalesScreen} options={{ headerTintColor: "#F4891F", headerTitle: "Sales" }} />
            <Stack.Screen name='waste' component={WasteScreen} options={{ headerTintColor: "#F4891F", headerTitle: "Waste" }} />
            <Stack.Screen name='closingQty' component={ClosingQtyScreen} options={{ headerTintColor: "#F4891F", headerTitle: "Closing Quantities" }} />
            <Stack.Screen name='report' component={ReportScreen} options={{ headerTintColor: "#F4891F", headerTitle: "Consumption Report" }} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}


