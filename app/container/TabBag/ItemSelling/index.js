import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';
import { getSize, Colors } from '../../../common';
import * as _action from '../../../redux/action/ActionHandle';
import { InfoItemModal } from '../../../components/InfoItemModal';

export default function ItemSelling({ item, index }) {
  const [modalInfo, setModalInfo] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => setModalInfo(true)}
        key={index}
        style={{
          width: getSize.Width / 2.09,
          height: getSize.Width / 1.5,
          marginTop: index === 0 || index === 1 ? getSize.scale(16) : 0,
          marginVertical: getSize.scale(4),
        }}>
        <ImageBackground
          source={{ uri: 'ic_tabbag_items' }}
          style={{
            width: '100%',
            height: getSize.scale(240),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                width: '70%',
                position: 'relative',
              }}>
              <ImageBackground
                source={{ uri: 'ic_head_frame_shoe' }}
                style={{
                  width: '100%',
                  height: getSize.scale(30),
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: getSize.scale(-16),
                }}>
                <View
                  style={{
                    width: '100%',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                    }}>
                    <Text
                      style={{
                        fontSize: getSize.scale(12),
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        color: '#2C2C2C',
                      }}>
                      {item.classify}
                    </Text>
                    <View
                      style={{
                        marginLeft: getSize.scale(5),
                        flexDirection: 'row',
                      }}>
                      <Image
                        source={{ uri: 'ic_ray' }}
                        style={{
                          width: getSize.scale(12),
                          height: getSize.scale(12),
                          resizeMode: 'contain',
                        }}
                      />
                      <Image
                        source={{ uri: 'ic_ray' }}
                        style={{
                          width: getSize.scale(12),
                          height: getSize.scale(12),
                          resizeMode: 'contain',
                        }}
                      />
                      <Image
                        source={{ uri: 'ic_ray' }}
                        style={{
                          width: getSize.scale(12),
                          height: getSize.scale(12),
                          resizeMode: 'contain',
                        }}
                      />
                    </View>
                  </View>
                </View>
              </ImageBackground>

              <View style={{ flex: 6 }}>
                <TouchableOpacity
                  disabled
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={{
                      uri: item.category === 'gem' ? 'ic_tree_coin' : 'ic_git',
                    }}
                    style={{
                      flex: 7,
                      width: getSize.scale(60),
                      // height: getSize.scale(90),
                      resizeMode: 'contain',
                    }}
                  />
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        backgroundColor: '#565874',
                        paddingHorizontal: getSize.scale(8),
                        paddingVertical: getSize.scale(2),
                      }}>
                      <Text
                        numberOfLines={1}
                        style={{
                          color: '#fff',
                          fontWeight: 'bold',
                          textTransform: 'capitalize',
                          marginLeft: getSize.scale(2),
                          fontSize: getSize.scale(12),
                        }}>
                        {item?.type?.split('_').join(' ')}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flex: 1.5,
                      // width: '85%',
                      paddingHorizontal: getSize.scale(16),
                      // flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    {/* <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                    }}>
                    <Text
                      style={{
                        color: '#000',
                        fontSize: getSize.scale(10),
                      }}>
                      Type:
                    </Text>
                    <Text
                      style={{
                        color: '#000',
                        fontSize: getSize.scale(10),
                        fontWeight: 'bold',
                      }}>
                      {item.type}
                    </Text>
                  </View> */}
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 0.5 }} />
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <InfoItemModal
        visible={modalInfo}
        setVisible={values => setModalInfo(values)}
        item={item}
        isGemItem={item.category === 'gem' ? true : false}
        isShoebox={item.category === 'box' ? true : false}
        allowUnSell
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: getSize.scale(16),
    marginVertical: getSize.moderateScale(8),
    backgroundColor: Colors.WHITE,
    borderRadius: 7,
    resizeMode: 'cover',
    overflow: 'hidden',
    // android
    elevation: 3,
    // ios
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    flexDirection: 'row',
  },
});
