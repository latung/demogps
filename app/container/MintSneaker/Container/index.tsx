import React from 'react';
import { getSize } from '../../../common';
import { View } from 'react-native';

export const Container = ({ children }) => {
  return (
    <View
      style={{
        width: getSize.scale(251),
        height: getSize.scale(251),
        borderRadius: getSize.scale(251) / 2,
        borderColor: '#C0BFBF',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{ zIndex: 2 }}>{children}</View>
      <View
        style={{
          position: 'absolute',
          width: getSize.scale(205),
          height: getSize.scale(205),
          borderRadius: getSize.scale(205) / 2,
          borderColor: '#C0BFBF',
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            width: getSize.scale(153),
            height: getSize.scale(153),
            borderRadius: getSize.scale(153) / 2,
            borderColor: '#C0BFBF',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              position: 'absolute',
              width: getSize.scale(93),
              height: getSize.scale(93),
              borderRadius: getSize.scale(93) / 2,
              borderColor: '#C0BFBF',
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
