import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { getSize } from '../../../common';

const shoePick = require('../../../assets/images/shoesPick.png');
const addIcon = require('../../../assets/images/add.png');

interface Props {
  onPress: () => void;
  image: string;
}

export const AddButtonBig: React.FC<Props> = ({ image, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        height: getSize.scale(117),
        width: getSize.scale(117),
        borderRadius: getSize.scale(117) / 2,
        backgroundColor: '#565874',
        borderWidth: 1,
        borderColor: '#E7E7E7',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 4,
      }}
      onPress={onPress}>
      {!!!image && (
        <>
          <Text
            style={{
              fontSize: 11,
              fontWeight: '400',
              fontStyle: 'italic',
              color: '#2EDBDC',
            }}>
            Select Shoe
          </Text>
          <Image style={{ marginTop: 10, marginBottom: 10 }} source={addIcon} />
          <Image source={shoePick} />
        </>
      )}

      {!!image && (
        <Image
          style={{
            width: getSize.scale(100),
            height: getSize.scale(100),
            resizeMode: 'contain',
          }}
          source={{ uri: image }}
        />
      )}
    </TouchableOpacity>
  );
};
