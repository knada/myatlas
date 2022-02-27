import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Onboarding from './screens/Onboarding';

type RootStackParamList = {
    Home: undefined;
    Onboarding: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Onboarding">
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
