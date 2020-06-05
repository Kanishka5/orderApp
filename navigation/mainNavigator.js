import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNav from './tabNavigator';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home" independent={true}>
        <Drawer.Screen name="Home" component={TabNav} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
