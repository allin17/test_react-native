import type {Node} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
              name="Home"
              component={Home}
              options={{
                  headerShown: false
              }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
