import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { useSelector } from 'react-redux';
import AuthenNavigator from './authenNavigator';
import MainNavigator from './mainNavigator';
import SplashNavigator from './splashNavigator'

enableScreens();
const TIME_HIDE_SPLASH = 5;
const AppContainer = () => {
    const isSignIn = useSelector((state) => state.initReducer.isSignIn)
    const [isSplash, setIsPlash] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsPlash(false)
        }, TIME_HIDE_SPLASH * 1000);
    }, [])
    return <NavigationContainer
        theme={{
            colors: {
                ...DefaultTheme.colors,
                background: 'white'
            }
        }}>
        {isSplash ? <SplashNavigator /> : isSignIn ? <MainNavigator /> : <AuthenNavigator />}
    </NavigationContainer>
}
export default AppContainer