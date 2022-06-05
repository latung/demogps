import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView, Image } from 'react-native';
import { getSize } from '../../common';
import { LineDotsLoader } from 'react-native-indicator'
class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View
                    style={styles.container}>
                    <Image style={styles.logo} source={{ uri: 'ic_loation_blue' }} resizeMode={'contain'} />
                    <LineDotsLoader size={getSize.scale(8)} />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: getSize.scale(80),
        height: getSize.scale(80),
        marginBottom: getSize.scale(16)
    },
})

export default Splash;
