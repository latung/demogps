import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { getSize } from '../../../common';

const bigShoesPick = require('../../../assets/images/bigShoesPick.png');
const addLinearIcon = require('../../../assets/images/addLinear.png');

export const SelectShoeButton = ({ selectedShoe, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      {!!!selectedShoe && (
        <>
          <View
            style={{
              alignContent: 'center',
              justifyContent: 'center',
              marginRight: getSize.scale(5),
            }}>
            <View>
              <Text
                style={{
                  fontStyle: 'italic',
                  fontWeight: '400',
                  fontSize: getSize.scale(11),
                  color: '#30D6D7',
                  marginBottom: getSize.scale(4),
                }}>
                Matching Shoe
              </Text>
            </View>
            <Image
              source={bigShoesPick}
              style={{
                width: getSize.scale(47),
                marginLeft: getSize.scale(10),
              }}
            />
          </View>
          <View
            style={{
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <Image source={addLinearIcon} />
          </View>
        </>
      )}
      {!!selectedShoe && (
        <Image
          resizeMode="contain"
          source={{ uri: selectedShoe?.img }}
          style={{ width: getSize.scale(110), height: getSize.scale(110) }}
        />
      )}
    </TouchableOpacity>
  );
};
