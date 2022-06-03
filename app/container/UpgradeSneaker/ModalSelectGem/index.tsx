import React, { useState } from 'react';
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

const gem = require('../../../assets/images/gem1.png');
const cancelButton = require('../../../assets/images/cancelButton.png');
const selectButton = require('../../../assets/images/selectButton.png');

interface Props {
  data: any[];
  modalTransfer: boolean;
  toggleModalTransfer: () => void;
  onSelectedGem: (item) => void;
}

export const ModalSelectGem: React.FC<Props> = React.memo(
  ({ data, modalTransfer, toggleModalTransfer, onSelectedGem }) => {
    const [displayDetailItem, setDisplayDetailItem] = useState(null);

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
        {!!!displayDetailItem && (
          <TouchableOpacity
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
                    SELECT GEM
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
                    keyExtractor={(item, index) => index}
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
                            setDisplayDetailItem(item);
                          }}>
                          <ImageBackground
                            style={{
                              width: getSize.Width / 1.2,
                              height: getSize.scale(130),
                              resizeMode: 'contain',
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
                                  width: getSize.scale(42),
                                  height: getSize.scale(80),
                                  resizeMode: 'contain',
                                }}
                                source={gem}
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
                                    marginRight: 30,
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    backgroundColor: 'rgba(26, 91, 168, 1)',
                                    paddingHorizontal: getSize.scale(12),
                                    paddingVertical: getSize.scale(2),
                                  }}>
                                  <Text
                                    style={{
                                      color: '#fff',
                                      fontWeight: 'bold',
                                      marginLeft: getSize.scale(2),
                                      fontSize: getSize.scale(12),
                                    }}>
                                    {`# ${item?._id}`}
                                  </Text>
                                </View>
                              </View>

                              <View
                                style={{
                                  flex: 1,
                                  justifyContent: 'flex-start',
                                  alignItems: 'center',
                                  marginRight: 30,
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
                                    {item?.type.replaceAll('_', ' ')}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </ImageBackground>
                        </TouchableOpacity>
                      </View>
                    )}
                    // refreshControl={<RefreshControl onRefresh={this.handleReload} refreshing={false} />}
                    // ListEmptyComponent={this.renderEmptyList()}
                    // ListFooterComponent={this.renderFooter()}
                    // onEndReached={this.handleLoadMore}
                    // onEndReachedThreshold={0.2}
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
        )}

        {!!displayDetailItem && (
          <TouchableOpacity
            // onPress={() => setVisible(!visible)}
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
                  <Image
                    style={{
                      width: getSize.scale(100),
                      height: getSize.scale(100),
                      resizeMode: 'contain',
                      marginVertical: getSize.scale(8),
                    }}
                    source={gem}
                  />
                  <View
                    style={{
                      justifyContent: 'flex-start',
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '100%',
                      // backgroundColor: "red"
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
                        {`# ${displayDetailItem?._id}`}
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    marginTop: getSize.scale(8),
                  }}></View>

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
                          Type
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
                            textTransform: 'capitalize',
                          }}>
                          {/* {`${constShoe?.LUCK[item?.quality]}`} */}
                          {displayDetailItem?.type.replaceAll('_', ' ')}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginTop: 20,
                    width: '100%',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setDisplayDetailItem(null);
                    }}>
                    <Image source={cancelButton} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      onSelectedGem(displayDetailItem);
                      setDisplayDetailItem(null);
                      toggleModalTransfer();
                    }}>
                    <Image source={selectButton} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </Modal>
    );
  },
);
