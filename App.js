import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// REALM
import { RealmProvider } from "./app/models/Project";

// SCREENS
import { HomeScreen } from "./app/HomeScreen";
import { ProjectScreen } from "./app/ProjectScreen";

const Stack = createNativeStackNavigator();
function AppWrapper() {
  if (!RealmProvider) {
    return null;
  }
  return (
    <RealmProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Projects" component={ProjectScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </RealmProvider>
  );
}

export default AppWrapper;
