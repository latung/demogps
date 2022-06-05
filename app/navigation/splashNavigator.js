import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../container/Splash';
import { stackNavigator } from './nameNavigator';

const SplashStack = createNativeStackNavigator();

const SplashStackNavigator = () => {
    return (
        <SplashStack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <SplashStack.Screen
                name={stackNavigator.SPLASH}
                component={Splash}
            />
        </SplashStack.Navigator>
    );
};

export default SplashStackNavigator;
