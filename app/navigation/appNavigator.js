import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { useSelector } from 'react-redux';
import AuthenNavigator from './authenNavigator';
import MainNavigator from './mainNavigator';

enableScreens();

const AppContainer = () => {
    const isSignIn = useSelector((state) => state.initReducer.isSignIn)
    return <NavigationContainer
        theme={{
            colors: {
                ...DefaultTheme.colors,
                background: 'white'
            }
        }}>
        {isSignIn ? <MainNavigator /> : <AuthenNavigator />}
    </NavigationContainer>
}
export default AppContainer