import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import QuilometrosXMilha from './componentes/km_mi';
import MilhaXQuilometros from './componentes/mi_km';

const Abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          tabBarStyle: {
            height: 60
          },
        }}
      >
        <Abas.Screen 
          name='Quilômetros para Milhas'
          component={QuilometrosXMilha}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="ruler" size={24} color="#000" />
            ),
            headerShown: false,
          }}
        />

        <Abas.Screen 
          name='Milhas para Quilômetros'
          component={MilhaXQuilometros}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="ruler-combined" size={24} color="#000" />
            ),
            headerShown: false,
          }}
        />
      </Abas.Navigator>
    </NavigationContainer>
  );
}


