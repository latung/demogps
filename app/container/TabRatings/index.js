import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Platform } from 'react-native';
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

                <View
                    style={{
                        flex: 8,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text>Comming soon</Text>
                    {/* <TouchableOpacity
                        onPress={() => navigation.navigate(stackNavigator.STEP)}
                        style={{
                            height: 40,
                            width: 200,
                            backgroundColor: 'violet',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text>Đi đến màn hình Đi dạo</Text>
                    </TouchableOpacity> */}
                </View>
            </SafeAreaView>
        );
    }
}

export default TabRatings;
