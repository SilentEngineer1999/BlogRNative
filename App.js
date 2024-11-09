import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/Screens/HomeScreen';
import { Provider} from './src/context/BlogContext';
import { ShowScreen } from './src/Screens/ShowScreen';
import { CreateScreen } from './src/Screens/CreateScreen';
import {TouchableOpacity} from "react-native";
import {Feather, EvilIcons} from "@expo/vector-icons";
import { EditScreen } from './src/Screens/EditScreen';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Blogs"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
              <Feather name="plus" size={30} style={{ marginRight: 10 }} />
            </TouchableOpacity>
          ),
        })}
      />
<Stack.Screen 
  name="ShowBlogs" 
  component={ShowScreen} 
  options={({ route, navigation }) => ({
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: route.params.id })}>
        <EvilIcons name="pencil" size={30} style={{ marginRight: 10 }} />
      </TouchableOpacity>
    ),
  })}
/>
        <Stack.Screen name="Create" component={CreateScreen}  />
        <Stack.Screen name="Edit" component={EditScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <Provider>
      <App />
  </Provider>
}