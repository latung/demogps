import React from 'react';
import { getSize } from '../../../common';
import { View, Image, Text } from 'react-native';

const triangles = require('../../../assets/images/triangles.png');

export const Container = ({ children, buttonTop, buttonRight, buttonLeft }) => {
  return (
    <View
      style={{
        width: getSize.scale(315),
        height: getSize.scale(315),
        borderRadius: getSize.scale(315) / 2,
        borderColor: '#C0BFBF',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={triangles} />
        <View
          style={{
            position: 'absolute',
            top: getSize.scale(-32),
          }}>
          {buttonTop}
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: getSize.scale(-32),
            left: getSize.scale(-32),
          }}>
          {buttonLeft}
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: getSize.scale(-32),
            right: getSize.scale(-32),
          }}>
          {buttonRight}
        </View>
      </View>
      <View
        style={{
          width: getSize.scale(257),
          height: getSize.scale(257),
          borderRadius: getSize.scale(257) / 2,
          borderColor: '#C0BFBF',
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: getSize.scale(193),
            height: getSize.scale(193),
            borderRadius: getSize.scale(193) / 2,
            borderColor: '#C0BFBF',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {children}
        </View>
      </View>
    </View>
  );
};
