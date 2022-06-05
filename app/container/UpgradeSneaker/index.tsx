import React, { useCallback, useEffect, useState } from 'react';
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
import Toast from 'react-native-simple-toast';
import { useDispatch } from 'react-redux';
import * as ACTION_CONST from '../../redux/action/ActionType';

const upgradeButton = require('../../assets/images/upgradeButton.png');

export const UpgradeSneaker: React.FC = ({ dataSneakers, dataGem }: any) => {
  const [showShoeModal, setShowShoeModal] = useState(false);
  const [showGemNumberModal, setShowGemNumberModal] = useState(null);
  const [upgradedShoe, setUpgradedShoe] = useState(null);
  const dispatch = useDispatch();
  const [selectedGems, setSelectedGems] = useState({
    gem1: null,
    gem2: null,
    gem3: null,
  });
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedShoe?._id) {
      const currentGems = {};
      selectedShoe.gems?.map((item, index) => {
        currentGems[`gem${index + 1}`] = item;
      });

      setSelectedGems(currentGems as any);
    }
  }, [selectedShoe?._id]);

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

  const onUpgradeShoe = () => {
    setLoading(true);
    ApiServices.onUpgradeShoeLevel(selectedShoe?._id)
      .then(res1 => {
        if (res1.code === 200) {
          setSelectedShoe(res1?.data?.updatedShoes);
          setUpgradedShoe(res1?.data?.updatedShoes);
          ApiServices.shoes().then(response => {
            if (response.code === 200) {
              dispatch({
                type: ACTION_CONST.SHOES_SUCCESS,
                data: response.data,
              });
            }
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

  const handleAddGem = (gem, slot) => {
    setLoading(true);
    ApiServices.onAddGem({ item_type: gem?.type }, selectedShoe?._id)
      .then(res1 => {
        if (res1.code === 200) {
          setSelectedShoe(res1?.data?.updatedShoes);
          setSelectedGems(oldGem => {
            return { ...oldGem, [`gem${slot}`]: gem };
          });
          ApiServices.shoes().then(response => {
            if (response.code === 200) {
              dispatch({
                type: ACTION_CONST.SHOES_SUCCESS,
                data: response.data,
              });
            }
          });
          ApiServices.getMyBox()
            .then(res => {
              if (res.code === 200) {
                dispatch({
                  type: ACTION_CONST.GET_BOX_SUCCESS,
                  data: res?.data,
                });
              }
            })
            .catch(err => {
              console.log('LoadData', err);
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
              minLevel={20}
              currentSlot={3}
              selectedShoe={selectedShoe}
              selectedGem={selectedGems?.gem3}
              onAddGem={() => {
                setShowGemNumberModal(3);
              }}
              onUnlockGem={handleUnlockGem}
            />
          }
          buttonRight={
            <AddButtonSmall
              minLevel={15}
              currentSlot={2}
              selectedShoe={selectedShoe}
              selectedGem={selectedGems?.gem2}
              onAddGem={() => {
                setShowGemNumberModal(2);
              }}
              onUnlockGem={handleUnlockGem}
            />
          }
          buttonTop={
            <AddButtonSmall
              minLevel={10}
              currentSlot={1}
              selectedShoe={selectedShoe}
              selectedGem={selectedGems?.gem1}
              onAddGem={() => {
                setShowGemNumberModal(1);
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
          disabled={!!!selectedShoe}
          style={{
            width: getSize.scale(276),
            height: getSize.scale(58),
          }}
          onPress={onUpgradeShoe}>
          <Image source={upgradeButton} />
        </TouchableOpacity>
      </View>
      <ModalSelectShoe
        data={dataSneakers.filter(item => item.level > 10)}
        modalTransfer={showShoeModal}
        toggleModalTransfer={onToggleSelectModal}
        onSelectedShoe={onSelectedShoe}
      />
      <ModalSelectGem
        data={dataGem}
        modalTransfer={!!showGemNumberModal}
        toggleModalTransfer={onToggleSelectGemModal}
        onSelectedGem={item => {
          handleAddGem(item, showGemNumberModal);
        }}
      />
      <UpgradeSuccessModal
        selectedItem={upgradedShoe}
        visible={!!upgradedShoe}
        setVisible={() => {
          setUpgradedShoe(null);
        }}
      />
    </View>
  );
};
