{/* Import libraries/Functions */}
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

{/* Import screens from src folder */}
import Home from "./src/screens/Home";
import Rules from "./src/screens/Rules";
import Credits from "./src/screens/Credits";

{/* Create Stack constant variable for navigator */}
const Stack = createNativeStackNavigator();


export default function App() {
  return (    
    <NavigationContainer>
      {/* Create a stack of screens within a navigation container */}
      {/* Setting headerShown to false allows 'Home' to become the direct child of the navigator 
      and allows the navigation prop to not get lost or overridden */}
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name = "Home" component = {Home} />
        <Stack.Screen name = "Rules" component = {Rules} />
        <Stack.Screen name = "Credits" component = {Credits} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



