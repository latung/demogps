import React from 'react';
import { View, Image } from 'react-native';
import { getSize } from '../../../common';

const energy = require('../../../assets/images/energy.png');

export const ImageContainer = ({ children }) => {
  return (
    <View
      style={{
        marginBottom: getSize.scale(10),
        width: getSize.scale(225),
        height: getSize.scale(225),
        borderRadius: getSize.scale(225) / 2,
        borderColor: '#F8F8F8',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{ zIndex: 5 }}>{children}</View>
      <View
        style={{
          position: 'absolute',
          width: getSize.scale(180),
          height: getSize.scale(140),
        }}>
        <Image
          style={{
            width: getSize.scale(37),
            height: getSize.scale(37),
            position: 'absolute',
            top: getSize.scale(-37 / 2),
            left: getSize.scale(-37 / 2),
          }}
          source={energy}
        />
        <Image
          style={{
            width: getSize.scale(37),
            height: getSize.scale(37),
            position: 'absolute',
            top: getSize.scale(-37 / 2),
            right: getSize.scale(-37 / 2),
          }}
          source={energy}
        />
        <Image
          style={{
            width: getSize.scale(37),
            height: getSize.scale(37),
            position: 'absolute',
            bottom: getSize.scale(-37 / 2),
            left: getSize.scale(-37 / 2),
          }}
          source={energy}
        />
        <Image
          style={{
            width: getSize.scale(37),
            height: getSize.scale(37),
            position: 'absolute',
            bottom: getSize.scale(-37 / 2),
            right: getSize.scale(-37 / 2),
          }}
          source={energy}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          width: getSize.scale(167),
          height: getSize.scale(167),
          borderRadius: getSize.scale(167) / 2,
          borderColor: '#F8F8F8',
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            width: getSize.scale(140),
            height: getSize.scale(140),
            borderRadius: getSize.scale(140) / 2,
            borderColor: '#F8F8F8',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              position: 'absolute',
              width: getSize.scale(109),
              height: getSize.scale(109),
              borderRadius: getSize.scale(109) / 2,
              borderColor: '#F8F8F8',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
            }}
          />
        </View>
      </View>
    </View>
  );
};
