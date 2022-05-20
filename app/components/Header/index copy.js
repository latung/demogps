/** @format */

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getSize, Colors } from '../../common';
import { tabNavigator, stackNavigator } from '../../navigation/nameNavigator';

export default function Header({ ...props }) {
    const navigation = useNavigation();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                marginHorizontal: getSize.scale(16)
            }}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate(stackNavigator.PROFILE)}>
                    <Image
                        style={{
                            width: getSize.scale(48),
                            height: getSize.scale(48),
                            resizeMode: 'contain'
                        }}
                        source={{ uri: 'ic_user' }}
                    />
                    <Text
                        style={{
                            color: '#fff',
                            position: 'absolute',
                            bottom: 1,
                            left: getSize.scale(6),
                            fontSize: getSize.scale(11),
                            fontWeight: 'bold'
                        }}>
                        {'80 km'}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                    <Image
                        style={{
                            width: getSize.scale(25),
                            height: getSize.scale(25),
                            resizeMode: 'contain'
                        }}
                        source={{ uri: 'ic_location' }}
                    />
                    <Text
                        style={{ marginHorizontal: getSize.scale(4), fontSize: getSize.scale(12) }}>
                        {8.888}
                    </Text>
                    <Image
                        style={{
                            width: getSize.scale(25),
                            height: getSize.scale(25),
                            resizeMode: 'contain'
                        }}
                        source={{ uri: 'ic_coin' }}
                    />
                    <Text
                        style={{ marginHorizontal: getSize.scale(4), fontSize: getSize.scale(12) }}>
                        {8.888}
                    </Text>
                </View>
                <TouchableOpacity
                    // onPress={() => navigation.navigate(stackNavigator.WALLET_HOME)}>
                    onPress={() => navigation.navigate(stackNavigator.WALLET_PASSCODE)}>
                    <Image
                        style={{
                            width: getSize.scale(37),
                            height: getSize.scale(37),
                            resizeMode: 'contain'
                        }}
                        source={{ uri: 'ic_wallet' }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}
