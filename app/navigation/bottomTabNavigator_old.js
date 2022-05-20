import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabNavigator } from './nameNavigator';
import { getSize } from '../common';
import { MyTabBar } from '../components';
import { TabHome, TabBag, TabRatings, TabStore } from '../container';

const BottomTab = createBottomTabNavigator();

class BottomTabNavigator extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <BottomTab.Navigator
                tabBar={(props) => (
                    <View
                        style={{
                            backgroundColor: 'transparent',
                            borderTopWidth: 0,
                            position: 'absolute',
                            left: getSize.scale(16),
                            right: getSize.scale(16),
                            bottom: getSize.scale(16)
                        }}>
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
        );
    }
}

const mapStateToProps = function () {
    return {};
};

const mapDispatchToProps = function () {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomTabNavigator);
