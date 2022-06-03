import React from 'react';
import { Modal, View, TouchableOpacity, Image, Text } from 'react-native';
import { getSize } from '../../../common';
import { ImageContainer } from '../ImageContainer';

const confirmLongButton = require('../../../assets/images/confirmLongButton.png');

interface Props {
  visible: boolean;
  selectedItem: any;
  setVisible: () => void;
}

export const MintSuccessModal: React.FC<Props> = ({
  visible,
  setVisible,
  selectedItem,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible()}>
      <View
        style={{
          height: '100%',
          width: '100%',
          top: 0,
          position: 'absolute',
          backgroundColor: '#000000bf',
        }}></View>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            width: getSize.Width - getSize.scale(64),
          }}>
          <View
            style={{
              width: '100%',
              paddingHorizontal: getSize.scale(16),
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#96CFE1',
              paddingVertical: getSize.scale(10),
              borderRadius: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}>
              <Text
                style={{
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: 18,
                }}>
                upgrade completed
              </Text>
              <ImageContainer>
                <Image
                  style={{
                    height: getSize.scale(150),
                    width: getSize.scale(150),
                    resizeMode: 'contain',
                    marginVertical: getSize.scale(8),
                  }}
                  source={{
                    uri: 'ic_shoe_jogging', // item?.img
                  }}
                />
              </ImageContainer>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: getSize.scale(16),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{ flex: 1 }} />
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: getSize.scale(18),
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                      }}>
                      Attributes
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    }}>
                    <Text
                      style={{
                        fontSize: getSize.scale(12),
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        color: 'rgba(118, 118, 118, 1)',
                      }}>
                      Base
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: getSize.scale(96),
                    padding: getSize.scale(16),
                    borderRadius: getSize.scale(16),
                    marginVertical: getSize.scale(8),
                    borderWidth: 1,
                    borderColor: 'rgba(217, 215, 222, 1)',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 9,
                    elevation: 2,
                    overflow: 'hidden',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                    }}>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: getSize.scale(12),
                          fontStyle: 'italic',
                          color: '#000000',
                        }}>
                        Speed
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: getSize.scale(12),
                          fontWeight: 'bold',
                          color: '#000000',
                        }}>
                        {selectedItem?.class === 'runner' ? '6-20km' : '1-6km'}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                    }}>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: getSize.scale(12),
                          fontStyle: 'italic',
                          color: '#000000',
                        }}>
                        Durability
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: getSize.scale(12),
                          fontWeight: 'bold',
                          color: '#000000',
                        }}>
                        {selectedItem?.energy || ''}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                    }}>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: getSize.scale(12),
                          fontStyle: 'italic',
                          color: '#000000',
                        }}>
                        Luck
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: getSize.scale(12),
                          fontWeight: 'bold',
                          color: '#000000',
                        }}>
                        {selectedItem?.attributes?.luck}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 0.5,
                    borderRadius: 20,
                    marginVertical: getSize.scale(8),
                    marginRight: getSize.scale(8),
                    paddingVertical: getSize.scale(4),
                    paddingHorizontal: getSize.scale(32),
                    backgroundColor: '#565874',
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: getSize.scale(14),
                    }}>
                    {`# ${selectedItem?.readableId || ''}`}
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: getSize.scale(8),
              }}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: '#000000',
                    fontStyle: 'italic',
                  }}>
                  Class
                </Text>
                <View
                  style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 0.5,
                    borderRadius: 20,
                    marginVertical: getSize.scale(8),
                    marginRight: getSize.scale(8),
                    paddingVertical: getSize.scale(4),
                  }}>
                  <Text
                    style={{
                      color: '#000',
                      fontWeight: 'bold',
                      fontSize: getSize.scale(14),
                      textTransform: 'uppercase',
                    }}>
                    {selectedItem?.class}
                  </Text>
                </View>
              </View>

              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: '#000000',
                    fontStyle: 'italic',
                  }}>
                  Rarity
                </Text>
                <View
                  style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 0.5,
                    borderRadius: 20,
                    marginVertical: getSize.scale(8),
                    marginRight: getSize.scale(8),
                    paddingVertical: getSize.scale(4),
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontWeight: 'bold',
                      fontSize: getSize.scale(13),
                    }}>
                    {selectedItem?.quality}
                  </Text>
                </View>
              </View>

              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: '#000000',
                    fontStyle: 'italic',
                  }}>
                  Energy
                </Text>
                <View
                  style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 0.5,
                    borderRadius: 20,
                    marginVertical: getSize.scale(8),
                    marginRight: getSize.scale(8),
                    paddingVertical: getSize.scale(4),
                  }}>
                  <Text
                    style={{
                      color: '#000',
                      fontWeight: 'bold',
                      fontSize: getSize.scale(14),
                    }}>
                    {selectedItem?.energy || ''}
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                marginTop: 20,
                width: '100%',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setVisible();
                }}>
                <Image source={confirmLongButton} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
