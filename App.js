import Home from './scre/Home';
import AddTodo from './scre/AddTodo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{headerShown:false}}
          />
          <Stack.Screen
            name='Add'
            component={AddTodo}
            options={{presentation:"modal"}}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
