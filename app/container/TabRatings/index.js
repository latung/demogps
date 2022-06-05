import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Platform, ImageBackground } from 'react-native';
import { stackNavigator } from '../../navigation/nameNavigator';
import { Popup, Header } from '../../components';
import { getSize, location } from '../../common';

import Head from "./../../components/head/index";
class TabRatings extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        const { navigation } = this.props;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View
                    style={{
                        flex: Platform.OS === 'android' ? 0 : 1,
                        minHeight: Platform.OS === 'android' ? getSize.scale(48) : 0,
                        marginVertical: Platform.OS === 'android' ? getSize.scale(8) : 0
                    }}>
                    <Head navigation={navigation} />
                </View>

                <ImageBackground
                    style={{
                        width: getSize.Width,
                        height: getSize.Height,
                        position: 'absolute',
                        resizeMode: 'contain',
                        zIndex: -2
                    }}
                    source={{ uri: 'ic_bg_comingsoon' }}
                />
            </SafeAreaView>
        );
    }
}

export default TabRatings;
