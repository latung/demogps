import React, { useCallback, useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { getSize } from '../../common';
import { AddButtonBig } from './AddButtonBig';
import { AddButtonSmall } from './AddButtonSmall';
import { Container } from './Container';
import { ModalSelectShoe } from './ModalSelectShoe';
import * as _action from '../../redux/action/ActionHandle';
import { ModalSelectGem } from './ModalSelectGem';

const upgradeButton = require('../../assets/images/upgradeButton.png');
const gem = require('../../assets/images/gem1.png');

export const UpgradeSneaker: React.FC = ({ dataSneakers, dataGem }: any) => {
  const [showShoeModal, setShowShoeModal] = useState(false);
  const [showGemNumberModal, setShowGemNumberModal] = useState(null);
  const [selectedGems, setSelectedGems] = useState({
    gem1: null,
    gem2: null,
    gem3: null,
  });
  const [selectedShoe, setSelectedShoe] = useState(null);

  const onToggleSelectModal = useCallback(() => {
    setShowShoeModal(!showShoeModal);
  }, [showShoeModal]);

  const onToggleSelectGemModal = useCallback(
    (gemNumber?: any) => {
      setShowGemNumberModal(gemNumber);
    },
    [showGemNumberModal],
  );

  const onSelectedShoe = useCallback((item: any) => {
    setSelectedShoe(item);
  }, []);

  const onSelectedGem = (item: any) => {
    setSelectedGems(oldGem => {
      return { ...oldGem, [`gem${showGemNumberModal}`]: item };
    });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
        justifyContent: 'space-between',
        marginBottom: 80,
      }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Container
          buttonLeft={
            <AddButtonSmall
              image={!!selectedGems?.gem1 && gem}
              onPress={() => {
                setShowGemNumberModal(1);
              }}
            />
          }
          buttonRight={
            <AddButtonSmall
              image={!!selectedGems?.gem2 && gem}
              onPress={() => {
                setShowGemNumberModal(2);
              }}
            />
          }
          buttonTop={
            <AddButtonSmall
              image={!!selectedGems?.gem3 && gem}
              onPress={() => {
                setShowGemNumberModal(3);
              }}
            />
          }>
          <AddButtonBig
            image={!!selectedShoe ? 'ic_shoe_jogging' : ''}
            onPress={() => {
              setShowShoeModal(!showShoeModal);
            }}
          />
        </Container>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: getSize.scale(276),
            height: getSize.scale(58),
            resizeMode: 'contain',
          }}>
          <Image source={upgradeButton} />
        </TouchableOpacity>
      </View>
      <ModalSelectShoe
        data={dataSneakers}
        modalTransfer={showShoeModal}
        toggleModalTransfer={onToggleSelectModal}
        onSelectedShoe={onSelectedShoe}
      />
      <ModalSelectGem
        data={dataGem}
        modalTransfer={!!showGemNumberModal}
        toggleModalTransfer={onToggleSelectGemModal}
        onSelectedGem={onSelectedGem}
      />
    </View>
  );
};
