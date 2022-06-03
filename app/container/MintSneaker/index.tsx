import React, { useState } from 'react';
import { TouchableOpacity, View, Image, ActivityIndicator } from 'react-native';
import { Colors, getSize } from '../../common';
import { Container } from './Container';
import { MatchingShoeModal } from './MatchingShoeModal';
import { SelectShoeButton } from './SelectShoeButton';
import * as ApiServices from '../../service';
import { useDispatch } from 'react-redux';
import * as ACTION_CONST from '../../redux/action/ActionType';
import Toast from 'react-native-simple-toast';
import { MintSuccessModal } from './MintSuccessModal';
import { ModalSelectShoe } from './ModalSelectShoe';

const mintButton = require('../../assets/images/mintButton.png');

export const MintSneaker: React.FC = ({ dataSneakers }: any) => {
  const dispatch = useDispatch();
  const [openShoeModal, setOpenShoeModal] = useState(null);
  const [mintedShoe, setMintedShoe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedShoes, setSelectedShoes] = useState({
    shoe1: null,
    shoe2: null,
  });

  const onCloseShoeModal = () => {
    setOpenShoeModal(null);
  };

  const handleSelectedShoe = item => {
    if (openShoeModal === 1) {
      setSelectedShoes({ ...selectedShoes, shoe1: item });
    } else {
      setSelectedShoes({ ...selectedShoes, shoe2: item });
    }
  };

  const sneakersData = () => {
    return dataSneakers?.filter(item => {
      if (openShoeModal === 1) {
        return item?._id !== selectedShoes.shoe2?._id;
      }

      return item?._id !== selectedShoes.shoe1?._id;
    });
  };

  const onMintShoe = () => {
    setLoading(true);
    ApiServices.onMintShoes({
      shoesIds: [selectedShoes?.shoe1, selectedShoes?.shoe2],
    })
      .then(res => {
        setLoading(false);
        if (res.code === 200) {
          ApiServices.shoes().then(response => {
            if (response.code === 200) {
              dispatch({
                type: ACTION_CONST.SHOES_SUCCESS,
                data: response.data,
              });
            }
          });
        } else {
          if (res?.message) {
            Toast.showWithGravity(res.message, Toast.LONG, Toast.CENTER);
          }
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
        <Container>
          <View
            style={{
              borderColor: '#fff',
              borderWidth: 1,
              width: getSize.scale(311),
              height: getSize.scale(119),
              backgroundColor: '#5A5B79',
              opacity: 0.95,
              borderRadius: 10,
              flexDirection: 'row',
            }}>
            <SelectShoeButton
              selectedShoe={selectedShoes.shoe1}
              onPress={() => setOpenShoeModal(1)}
            />
            <View
              style={{
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: getSize.scale(103),
                  width: 0,
                  borderWidth: 2,
                  borderColor: '#8CA7AF',
                }}
              />
            </View>
            <SelectShoeButton
              selectedShoe={selectedShoes.shoe2}
              onPress={() => setOpenShoeModal(2)}
            />
          </View>
        </Container>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          disabled={!selectedShoes.shoe1 || !selectedShoes.shoe2}
          style={{
            width: getSize.scale(199),
            height: getSize.scale(58),
          }}
          onPress={() => {
            onMintShoe();
          }}>
          <Image source={mintButton} />
        </TouchableOpacity>
      </View>
      <MatchingShoeModal
        visible={openShoeModal === 2}
        data={sneakersData()}
        setVisible={() => {
          onCloseShoeModal();
        }}
        onSelectedShoe={item => {
          handleSelectedShoe(item);
        }}
      />
      <MintSuccessModal
        visible={!!mintedShoe}
        selectedItem={mintedShoe}
        setVisible={() => {
          setMintedShoe(null);
        }}
      />
      <ModalSelectShoe
        data={sneakersData()}
        modalTransfer={openShoeModal === 1}
        toggleModalTransfer={() => {
          onCloseShoeModal();
        }}
        onSelectedShoe={item => {
          handleSelectedShoe(item);
        }}
      />
    </View>
  );
};
