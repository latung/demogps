import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { connect } from 'react-redux';
import AuthenNavigator from './authenNavigator';
import MainNavigator from './mainNavigator';

enableScreens();

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { isSignIn } = this.props;
        return (
            <NavigationContainer
                theme={{
                    colors: {
                        ...DefaultTheme.colors,
                        background: 'white'
                    }
                }}>
                {isSignIn ? <MainNavigator /> : <AuthenNavigator />}
            </NavigationContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    isSignIn: state.initReducer.isSignIn
});
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
