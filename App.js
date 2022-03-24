import Pack from "./src/screens/Pack";
import Packs from "./src/screens/Packs";
import Login from "./src/screens/Login";
import { UserContext } from "./src/contexts/UserContext";
import { useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TasksList from "./src/components/TasksList";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#F7Efe7'
    },
  };

  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <UserContext.Provider value={{ user, setUser }}>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Packs" component={Packs} />
            <Stack.Screen name="TasksList" component={TasksList} />
            <Stack.Screen name="Pack" component={Pack} />
            {/* <Stack.Screen name="Grid" component={Grid} /> */}
          </Stack.Navigator>
        </UserContext.Provider>
      </NavigationContainer>
    </>
  );
}