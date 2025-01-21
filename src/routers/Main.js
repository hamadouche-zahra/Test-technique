import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { enableFreeze } from 'react-native-screens'
import { navigationRef } from '../services/NavigationService'
import Login from '../screens/auth/Login'
import UserSpace from './UserSpace'

enableFreeze(true)
const Stack = createStackNavigator()
export default function Main() {
    return(
    <NavigationContainer ref={navigationRef}>
     <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen name="Login" component={Login}/>
     <Stack.Screen name="UserSpace" component={UserSpace}/>
  
     </Stack.Navigator>
    </NavigationContainer>
    )
}