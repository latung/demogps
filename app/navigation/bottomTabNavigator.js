import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabNavigator, stackNavigator } from './nameNavigator';
import { getSize, Colors } from '../common';
import { MyTabBar } from '../components';
import { TabHome, TabBag, TabRatings, TabStore } from '../container';

const BottomTab = createBottomTabNavigator();

class BottomTabNavigator extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { navigation } = this.props;
        // const optionsHeader = {
        //     headerTitle: '',
        //     headerLeft: () => (
        //         <TouchableOpacity
        //             style={{ marginHorizontal: 16 }}
        //             onPress={() => navigation.navigate(stackNavigator.PROFILE)}>
        //             <Text style={{ color: 'blue' }}>Profile</Text>
        //         </TouchableOpacity>
        //     ),
        //     headerRight: () => (
        //         <TouchableOpacity
        //             style={{ marginHorizontal: 16 }}
        //             onPress={() => navigation.navigate(stackNavigator.SPENDING_WALLET)}>
        //             <Text style={{ color: 'blue' }}>Wallet</Text>
        //         </TouchableOpacity>
        //     )
        // };
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
                    // options={optionsHeader}
                />
                <BottomTab.Screen
                    name={tabNavigator.TAB_BAG}
                    component={TabBag}
                    // options={optionsHeader}
                />
                <BottomTab.Screen
                    name={tabNavigator.TAB_RATINGS}
                    component={TabRatings}
                    // options={optionsHeader}
                />
                <BottomTab.Screen
                    name={tabNavigator.TAB_STORE}
                    component={TabStore}
                    // options={optionsHeader}
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
