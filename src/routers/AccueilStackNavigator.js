import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Services from '../screens/Services'
import Message from '../screens/Message'
import Profile from '../screens/Profile'


const Stack = createStackNavigator()

function AccueilStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Services' component={Services} />
      <Stack.Screen name='Message' component={Message} />
      <Stack.Screen name='Profile' component={Profile} />


    </Stack.Navigator>
  )
}

export default AccueilStackNavigator
