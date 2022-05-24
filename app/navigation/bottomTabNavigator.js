import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabNavigator } from './nameNavigator';
import { getSize } from '../common';
import { MyTabBar } from '../components';
import { TabHome, TabBag, TabRatings, TabStore } from '../container';
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return <BottomTab.Navigator
        tabBar={(props) => (
            <View
                style={styles.container}>
                <MyTabBar {...props} />
            </View>
        )}
        tabBarOptions={{
            tabBarVisible: false,
            scrollEnabled: true
        }}
        screenOptions={{ headerShown: false }}>
        <BottomTab.Screen
            name={tabNavigator.TAB_HOME}
            component={TabHome}
        />
        <BottomTab.Screen
            name={tabNavigator.TAB_BAG}
            component={TabBag}
        />
        <BottomTab.Screen
            name={tabNavigator.TAB_RATINGS}
            component={TabRatings}
        />
        <BottomTab.Screen
            name={tabNavigator.TAB_STORE}
            component={TabStore}
        />
    </BottomTab.Navigator>
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        position: 'absolute',
        left: getSize.scale(16),
        right: getSize.scale(16),
        bottom: getSize.scale(0)
    }
})
export default BottomTabNavigator