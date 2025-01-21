import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { View, StyleSheet } from 'react-native';
import AccueilStackNavigator from "./AccueilStackNavigator"
const Tab = createBottomTabNavigator();

function UserSpace() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#0474ED', 
        tabBarInactiveTintColor: '#13171B', 
      }}
    >
      {/* Écran "Catégories" */}
      <Tab.Screen
        name="categories"
        component={View}
        options={{
          tabBarLabel: 'Catégories',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="grid" size={24} color={focused ? '#0474ED' : color} />
          ),
        }}
      />

      {/* Écran "Réservations" */}
      <Tab.Screen
        name="reservations"
        component={View}
        options={{
          tabBarLabel: 'Réservations',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="clipboard" size={24} color={focused ? '#0474ED' : color} />
          ),
        }}
      />

      {/* Écran "Accueil" avec Services comme composant */}
      <Tab.Screen
        name="accueil"
        component={AccueilStackNavigator}
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="home" size={24} color={focused ? '#0474ED' : color} />
          ),
        }}
      />

      {/* Écran "Messages" */}
      <Tab.Screen
        name="messages"
        component={View}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="message-circle" size={24} color={focused ? '#0474ED' : color} />
          ),
        }}
      />

      {/* Écran "Profil" */}
      <Tab.Screen
        name="profil"
        component={View}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="user" size={24} color={focused ? '#0474ED' : color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#ffffff',
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    paddingBottom: 5,
  },
  
});

export default UserSpace;
