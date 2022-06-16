import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme, StackRouter } from "@react-navigation/native";

import { useFonts } from "expo-font";

import Chat from './screens/Chat';
import Login from './screens/Login';

const Stack = createStackNavigator(); 

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {

  const [loaded] = useFonts({
    RobotoBold: require("./assets/Fonts/Roboto-Bold.ttf"),
    RobotoMedium: require("./assets/Fonts/Roboto-Medium.ttf"),
    Regular: require("./assets/Fonts/Roboto-Regular.ttf"),
    Thin: require("./assets/Fonts/Roboto-Thin.ttf")
  });

  if(!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// Login
// Home -> Message Page
// Notifications
// Quotes Status
