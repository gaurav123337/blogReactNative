import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import { Feather } from '@expo/vector-icons';

import { Provider } from '../blog/src/context/BlogContext';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index" >
        <Stack.Screen name="Index" component={IndexScreen} options={{ title: 'Blogs' }}

          options={({ navigation, route }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => { navigation.navigate('Create') }}>
                <Feather name="plus" size={30} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Show" component={ShowScreen} options={{ title: 'Show Blogs' }} />
        <Stack.Screen name="Create" component={CreateScreen} options={{ title: 'Create Blogs' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <Provider><App /></Provider>
}
