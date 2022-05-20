/** @format */

import React from 'react';
import { View, Text } from 'react-native';
import { getSize, Colors } from '../../common';

export default function NoData({ label = 'Không có dữ liệu', marginTop = getSize.scale(16) }) {
    return (
        <View
            style={{
                alignItems: 'center',
                paddingVertical: getSize.scale(30),
                height: '100%',
                marginTop,
                flex: 1
            }}>
            <Text
                style={{
                    color: Colors.GREY_DARKING,
                    fontSize: getSize.scale(14),
                    lineHeight: getSize.scale(14 + 14 / 3),
                    fontWeight: 'bold'
                }}>
                {label}
            </Text>
        </View>
    );
}
