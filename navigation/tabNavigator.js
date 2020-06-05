import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/home';
import Schedule from '../screens/schedule';
import Fav from '../screens/fav';
import Cart from '../screens/cart';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        independent={true}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Schedule') {
              iconName = 'event';
            } else if (route.name === 'Favourite') {
              iconName = 'grade';
            } else if (route.name === 'Cart') {
              iconName = 'shopping-cart';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Schedule" component={Schedule} />
        <Tab.Screen name="Favourite" component={Fav} />
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
