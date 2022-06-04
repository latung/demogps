import React, { useCallback, useState } from 'react';
import { View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Colors, getSize } from '../../common';
import { AddButtonBig } from './AddButtonBig';
import { AddButtonSmall } from './AddButtonSmall';
import { Container } from './Container';
import { ModalSelectShoe } from './ModalSelectShoe';
import * as _action from '../../redux/action/ActionHandle';
import { ModalSelectGem } from './ModalSelectGem';
import { UpgradeSuccessModal } from './UpgradeSuccessModal/index';
import * as ApiServices from '../../service';
import * as ACTION_CONST from '../../redux/action/ActionType';
import Toast from 'react-native-simple-toast';

const upgradeButton = require('../../assets/images/upgradeButton.png');
const gem = require('../../assets/images/gem1.png');

export const UpgradeSneaker: React.FC = ({ dataSneakers, dataGem }: any) => {
  const [showShoeModal, setShowShoeModal] = useState(false);
  const [showGemNumberModal, setShowGemNumberModal] = useState(null);
  const [upgradedShoe, setUpgradedShoe] = useState(null);
  const [selectedGems, setSelectedGems] = useState({
    gem1: null,
    gem2: null,
    gem3: null,
  });
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const onUpgradeShoe = () => {
    setUpgradedShoe(selectedShoe);
    setSelectedGems({ gem1: null, gem2: null, gem3: null });
    setSelectedShoe(null);
  };

  const handleUnlockGem = () => {
    setLoading(true);
    ApiServices.onUnlockGemSlot(selectedShoe?._id)
      .then(res1 => {
        if (res1.code === 200) {
          setSelectedShoe({
            ...selectedShoe,
            currentGemSlot: selectedShoe?.currentGemSlot + 1,
          });
        }
        setLoading(false);
        if (res1?.message) {
          Toast.showWithGravity(res1.message, Toast.LONG, Toast.CENTER);
        }
      })
      .catch(err => {
        setLoading(false);
        Toast.showWithGravity(err, Toast.LONG, Toast.CENTER);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 80,
      }}>
      {loading && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 4,
          }}>
          <ActivityIndicator color={Colors.WHITE} size={getSize.scale(32)} />
        </View>
      )}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Container
          buttonLeft={
            <AddButtonSmall
              minLevel={10}
              currentSlot={3}
              selectedShoe={selectedShoe}
              image={!!selectedGems?.gem1 && gem}
              onAddGem={() => {
                setShowGemNumberModal(1);
              }}
              onUnlockGem={handleUnlockGem}
            />
          }
          buttonRight={
            <AddButtonSmall
              minLevel={15}
              currentSlot={2}
              selectedShoe={selectedShoe}
              image={!!selectedGems?.gem2 && gem}
              onAddGem={() => {
                setShowGemNumberModal(2);
              }}
              onUnlockGem={handleUnlockGem}
            />
          }
          buttonTop={
            <AddButtonSmall
              minLevel={20}
              currentSlot={1}
              selectedShoe={selectedShoe}
              image={!!selectedGems?.gem3 && gem}
              onAddGem={() => {
                setShowGemNumberModal(3);
              }}
              onUnlockGem={handleUnlockGem}
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
          }}
          onPress={onUpgradeShoe}>
          <Image source={upgradeButton} />
        </TouchableOpacity>
      </View>
      <ModalSelectShoe
        data={dataSneakers?.filter(i => i.level > 5)}
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
      <UpgradeSuccessModal
        selectedItem={upgradedShoe}
        setVisible={() => {
          setUpgradedShoe(null);
        }}
        visible={!!upgradedShoe}
      />
    </View>
  );
};
