import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { getSize } from '../../../common';

const addIcon = require('../../../assets/images/add.png');
const closeIcon = require('../../../assets/images/close.png');
const lockIcon = require('../../../assets/images/lock.png');
const gem = require('../../../assets/images/gem1.png');

interface Props {
  selectedShoe: any;
  selectedGem: any;
  currentSlot: number;
  minLevel: number;
  onAddGem: () => void;
  onUnlockGem: () => void;
}

export const AddButtonSmall: React.FC<Props> = ({
  selectedShoe,
  selectedGem,
  minLevel,
  currentSlot,
  onAddGem,
  onUnlockGem,
}) => {
  const disabled = !!!selectedShoe || selectedShoe?.level < minLevel;
  const isLocked = !disabled && selectedShoe?.currentGemSlot < currentSlot;

  const renderIcon = () => {
    if (disabled) {
      return (
        <Image
          style={{ width: getSize.scale(24), height: getSize.scale(24) }}
          source={closeIcon}
        />
      );
    }

    if (isLocked) {
      return (
        <Image
          style={{ width: getSize.scale(24), height: getSize.scale(24) }}
          source={lockIcon}
        />
      );
    }

    if (!!selectedGem?.type) {
      return (
        <Image
          source={gem}
          style={{
            width: getSize.scale(50),
            height: getSize.scale(50),
            resizeMode: 'contain',
          }}
        />
      );
    }

    return (
      <Image
        style={{ width: getSize.scale(24), height: getSize.scale(24) }}
        source={addIcon}
      />
    );
  };

  return (
    <TouchableOpacity
      disabled={disabled || !!selectedGem}
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
      onPress={() => {
        if (isLocked) {
          onUnlockGem();
        } else {
          onAddGem();
        }
      }}>
      {renderIcon()}
    </TouchableOpacity>
  );
};
