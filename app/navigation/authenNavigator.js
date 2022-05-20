import React, { PureComponent, Component } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { connect } from 'react-redux';
import { Login } from '../container';
import { LoginSignup } from '../container';
import { LoginActiveCode } from '../container';
import { stackNavigator } from './nameNavigator';
import { LoginNewpass } from '../container';
const Stack = createNativeStackNavigator();

class AuthenNavigator extends PureComponent
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>

                <Stack.Screen name={stackNavigator.LOGIN} component={Login} />
                <Stack.Screen name={stackNavigator.SIGNUP} component={LoginSignup} />
                <Stack.Screen name={stackNavigator.ACTIVE_CODE} component={LoginActiveCode} />
                <Stack.Screen name={stackNavigator.NEW_PASS} component={LoginNewpass} />
            </Stack.Navigator>
        );
    }
}

const mapStateToProps = function ()
{
    return {};
};

const mapDispatchToProps = function ()
{
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthenNavigator);
