import React, { Component } from 'react';
import { LogBox, View, Text, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NetInfo from '@react-native-community/netinfo';
import AppContainer from './navigation/appNavigator';
import { Provider } from 'react-redux';
import store from './store';

console.disableYellowBox = true;
LogBox.ignoreAllLogs();
NetInfo.configure({
    reachabilityUrl: 'https://www.google.com.vn/',
    reachabilityTest: (response) => response.status === 204,
    reachabilityLongTimeout: 60 * 1000, // 60s
    reachabilityShortTimeout: 5 * 1000, // 5s
    reachabilityRequestTimeout: 15 * 1000 // 15s
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <SafeAreaProvider>
                <View style={{ flex: 1 }}>
                    <Provider store={store}>
                        <AppContainer />
                    </Provider>
                </View>
            </SafeAreaProvider>
        );
    }
}

export default App;
