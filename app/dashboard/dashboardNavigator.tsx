import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./dash1"; // Main dashboard screen
import Screen1 from "./dash2"; // Example screen inside dashboard
import Screen2 from "./dash3";
import Screen3 from "./dash4";
import Screen4 from "./dash5";
import Screen5 from "./dash6";

export type DashboardStackParamList = {
  Dashboard: undefined;
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  Screen4: undefined;
  Screen5: undefined;
};

const Stack = createNativeStackNavigator<DashboardStackParamList>();

const DashboardNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
        <Stack.Screen name="Screen5" component={Screen5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DashboardNavigator;
