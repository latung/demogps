import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Modal,
  Text,
  ImageBackground,
  FlatList,
} from 'react-native';
import { getSize } from '../../../common';

interface Props {
  data: any[];
  modalTransfer: boolean;
  toggleModalTransfer: () => void;
  onSelectedShoe: (item: any) => void;
}

export const ModalSelectShoe: React.FC<Props> = React.memo(
  ({ data, modalTransfer, toggleModalTransfer, onSelectedShoe }) => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalTransfer}
        onRequestClose={() => toggleModalTransfer()}>
        <View
          style={{
            height: '100%',
            width: '100%',
            top: 0,
            position: 'absolute',
            backgroundColor: '#0000007f',
          }}></View>
        <TouchableOpacity
          // onPress={() => setmodalTransfer(!modalTransfer)}
          activeOpacity={1}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              width: getSize.Width - getSize.scale(64),
            }}>
            <View style={{ flex: 1 }} />
            <View
              style={{
                flex: 7,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                marginTop: getSize.scale(8),
                borderRadius: getSize.scale(16),
              }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: getSize.scale(18),
                    fontWeight: 'bold',
                    color: 'rgba(44, 44, 44, 1)',
                  }}>
                  SELECT SHOE
                </Text>
              </View>
              <View
                style={{
                  flex: 9,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item, index) => index as any}
                  data={data}
                  renderItem={({ item, index }) => (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          onSelectedShoe(item);
                          toggleModalTransfer();
                        }}>
                        <ImageBackground
                          style={{
                            width: getSize.Width / 1.2,
                            height: getSize.scale(130),
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                          }}
                          source={{
                            uri: 'ic_tabbag_frame_select_shoe',
                          }}>
                          <View
                            style={{
                              flex: 1,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Image
                              style={{
                                width: getSize.scale(94),
                                height: getSize.scale(94),
                                resizeMode: 'contain',
                              }}
                              source={{
                                uri: 'ic_shoe_jogging',
                              }}
                            />
                          </View>
                          <View
                            style={{
                              flex: 1,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <View
                              style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: getSize.scale(8),
                              }}>
                              <View
                                style={{
                                  borderRadius: 50,
                                  justifyContent: 'center',
                                  maxWidth: 150,
                                  marginRight: 20,
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  backgroundColor: 'rgba(26, 91, 168, 1)',
                                  paddingHorizontal: getSize.scale(8),
                                  paddingVertical: getSize.scale(2),
                                }}>
                                <Text
                                  style={{
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    marginLeft: getSize.scale(2),
                                    fontSize: getSize.scale(12),
                                  }}>
                                  {`# ${item?.attributes?._id}`}
                                </Text>
                              </View>
                            </View>

                            <View
                              style={{
                                flex: 1,
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                              }}>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  borderWidth: 1,
                                  borderRadius: 20,
                                  borderColor: 'rgba(236, 236, 236, 1)',
                                  padding: getSize.scale(8),
                                  paddingVertical: getSize.scale(2),
                                }}>
                                <Text
                                  style={{
                                    fontSize: getSize.scale(12),
                                    fontStyle: 'italic',
                                    fontWeight: 'bold',
                                    color: '#000',
                                  }}>
                                  {item?.class}
                                </Text>
                                <View
                                  style={{
                                    marginLeft: getSize.scale(5),
                                    flexDirection: 'row',
                                  }}>
                                  <>
                                    {new Array(item?.energy || 0).map(
                                      (_, index) => {
                                        <Image
                                          key={index}
                                          source={{ uri: 'ic_ray' }}
                                          style={{
                                            width: getSize.scale(12),
                                            height: getSize.scale(12),
                                            resizeMode: 'contain',
                                          }}
                                        />;
                                      },
                                    )}
                                  </>
                                </View>
                              </View>
                            </View>
                          </View>
                        </ImageBackground>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
            </View>

            <View
              style={{
                flex: 1.5,
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: getSize.scale(16),
              }}>
              <TouchableOpacity onPress={() => toggleModalTransfer()}>
                <Image
                  style={{
                    width: getSize.scale(32),
                    height: getSize.scale(32),
                    resizeMode: 'contain',
                  }}
                  source={{
                    uri: 'ic_close_red',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  },
);
