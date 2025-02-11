import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';

import MainAppbar from './components/MainAppbar';
import Map from './screens/Map';
import Settings from './screens/Settings';

const Stack = createNativeStackNavigator();

export default function App() {
  const [icon, setIcon] = useState('map');
  const [location, setLocation] = useState({
    latitude: 65.0800,
    longitude: 25.4800,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [mapType, setMapType] = useState('standard');
  const [backgroundColor, setBackgroundColor] = useState();

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Map"
          screenOptions={{
            header: (props) => (
              <MainAppbar 
                {...props}
                backgroundColor={backgroundColor}
                icon={icon}
                getUserPosition={() => console.log("Get User Position")}
              />
            ),
          }}
        >
          <Stack.Screen name="Map">
            {() => <Map location={location} mapType={mapType} />}
          </Stack.Screen>
          <Stack.Screen name="Settings">
            {() => (
              <Settings 
                backgroundColor={backgroundColor} 
                mapType={mapType} 
                setMapType={setMapType} 
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
