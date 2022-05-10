import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/SignIn';
import { Home } from '../screens/Home';
import { MotoDetails } from '../screens/MotoDetails';
import { SchedulingMotoDetails } from '../screens/SchedulingMotoDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';


const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return(
   <Navigator
    screenOptions={{ headerShown: false }}
   >
      <Screen 
        name='SignIn'
        component={SignIn}
      />
      <Screen 
        name='Home'
        component={Home}
      />

      <Screen 
        name='MotoDetails'
        component={MotoDetails}
      />

      <Screen 
        name='SchedulingMotoDetails'
        component={SchedulingMotoDetails}
      />

      <Screen 
        name='SchedulingComplete'
        component={SchedulingComplete}
      />
   </Navigator>
  );
}