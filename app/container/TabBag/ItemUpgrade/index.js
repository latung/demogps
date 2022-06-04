import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  Modal,
  Platform,
  FlatList,
  ImageBackground,
} from 'react-native';
import {getSize, Colors} from '../../../common';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {stackNavigator} from '../../../navigation/nameNavigator';
import * as _action from '../../../redux/action/ActionHandle';
import {color} from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function ItemUpgrade({item, index}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [modalTransfer, setmodalTransfer] = useState(false);

  const image =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogMFHOw0CKtwUvuJmhgcSi18GmfqlCxUI6g&usqp=CAU';
  const imageSneakers =
    'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg';

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          flex: 6,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: getSize.scale(16),
        }}>
        <TouchableOpacity onPress={() => setmodalTransfer(!modalTransfer)}>
          <Image
            source={{uri: 'ic_tabbag_select_shoe'}}
            style={{
              width: getSize.Width,
              height: getSize.Width,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity>
          <Image
            source={{uri: 'ic_bn_upgrade'}}
            style={{
              width: getSize.Width,
              height: getSize.scale(58),
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>

      {/* Switch popup details */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalTransfer}
        onRequestClose={() => setmodalTransfer(!modalTransfer)}>
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
            <View style={{flex: 1}} />
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
                  keyExtractor={(item, index) => index}
                  data={data}
                  renderItem={({item, index}) => (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        onPress={() => setmodalTransfer(!modalTransfer)}>
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
                                  {`# 25698765`}
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
                                  {`Jogging`}
                                </Text>
                                <View
                                  style={{
                                    marginLeft: getSize.scale(5),
                                    flexDirection: 'row',
                                  }}>
                                  <Image
                                    source={{uri: 'ic_ray'}}
                                    style={{
                                      width: getSize.scale(12),
                                      height: getSize.scale(12),
                                      resizeMode: 'contain',
                                    }}
                                  />
                                  <Image
                                    source={{uri: 'ic_ray'}}
                                    style={{
                                      width: getSize.scale(12),
                                      height: getSize.scale(12),
                                      resizeMode: 'contain',
                                    }}
                                  />
                                </View>
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
              <TouchableOpacity
                onPress={() => setmodalTransfer(!modalTransfer)}>
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
    </View>
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
