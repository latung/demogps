import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { getSize } from '../../../common';

const addIcon = require('../../../assets/images/add.png');

interface Props {
  image: string;
  onPress: () => void;
}

export const AddButtonSmall: React.FC<Props> = ({ image, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        height: getSize.scale(64),
        width: getSize.scale(64),
        borderRadius: getSize.scale(64) / 2,
        backgroundColor: '#565874',
        borderWidth: 1,
        borderColor: '#E7E7E7',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onPress}>
      {!!!image && <Image source={addIcon} />}
      {!!image && (
        <Image
          style={{
            width: getSize.scale(50),
            height: getSize.scale(50),
            resizeMode: 'contain',
          }}
          source={image}
        />
      )}
    </TouchableOpacity>
  );
};
