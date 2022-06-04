import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { getSize } from '../../../common';

const addIcon = require('../../../assets/images/add.png');
const closeIcon = require('../../../assets/images/close.png');
const lockIcon = require('../../../assets/images/lock.png');

interface Props {
  selectedShoe: any;
  image: string;
  currentSlot: number;
  minLevel: number;
  onAddGem: () => void;
  onUnlockGem: () => void;
}

export const AddButtonSmall: React.FC<Props> = ({
  selectedShoe,
  image,
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

    return (
      <Image
        style={{ width: getSize.scale(24), height: getSize.scale(24) }}
        source={addIcon}
      />
    );
  };

  return (
    <TouchableOpacity
      disabled={disabled}
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
      {/* {!!!image && <Image source={addIcon} />}
      {!!image && (
        <Image
          style={{
            width: getSize.scale(50),
            height: getSize.scale(50),
            resizeMode: 'contain',
          }}
          source={image as any}
        />
      )} */}

      {renderIcon()}
    </TouchableOpacity>
  );
};
