import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, Modal, Platform } from 'react-native';
import { getSize, Colors } from '../../../common';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { stackNavigator } from '../../../navigation/nameNavigator';
import * as _action from '../../../redux/action/ActionHandle';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function ItemUpgrade({ item, index })
{
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const image =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogMFHOw0CKtwUvuJmhgcSi18GmfqlCxUI6g&usqp=CAU';
    const imageSneakers = 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg';

    return (
        <View

            style={{
                width: getSize.Width / 2.09,
                height: getSize.Width / 1.5,
                paddingHorizontal: getSize.scale(8),
                paddingTop: index === 0 || index === 1 ? getSize.scale(8) : 0,
                marginVertical: getSize.scale(4),
                width: "100%",

                justifyContent: "center",
                alignItems: "center",
                flex: 0.5
            }}>
            <View style={{
                width: "100%",

                justifyContent: "center",
                alignItems: "center"
            }}><Image source={{ uri: 'ic_shoe_das' }} style={{
                width: 100,
                height: 100,


            }} />

                <Text style={{ color: "#A79BBF" }}>There is no item</Text></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: getSize.scale(16),
        marginVertical: getSize.moderateScale(8),
        backgroundColor: Colors.WHITE,
        borderRadius: 7,
        resizeMode: 'cover',
        overflow: 'hidden',
        // android
        elevation: 3,
        // ios
        shadowColor: Colors.BLACK,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        flexDirection: 'row'
    }
});
