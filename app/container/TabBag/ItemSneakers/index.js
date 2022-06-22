import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  Modal,
  Platform,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { getSize, Colors } from '../../../common';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { stackNavigator } from '../../../navigation/nameNavigator';
import * as _action from '../../../redux/action/ActionHandle';
import { Button } from '@rneui/base';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default forwardRef(function ItemSneakers(
  {
    item,
    index,
    price,
    onChangeText,
    putShoe,
    isPutShoe,
    shoesIdWear,
    isshoesIdWear,
    constShoe,
    sellShoe,
    unSellShoe,
  },
  ref,
) {
  const navigation = useNavigation();
  const selector = useSelector(state => ({
    shoes: state.initReducer.shoes,
  }));

  const dispatch = useDispatch();
  const [modalBuy, setmodalBuy] = useState(false);
  const [priceTxt, setPriceTxt] = useState('');

  const [modalTransfer, setmodalTransfer] = useState(false);
  const [modalPrice, setModalPrice] = useState(false);
  useImperativeHandle(ref, () => ({
    // methods connected to `ref`
    ClosemodalTransfer: () => {
      ClosemodalTransfer();
    },
    ClosemodalmodalBuy: () => {
      ClosemodalmodalBuy();
    },
  }));
  const ClosemodalmodalBuy = () => {
    setmodalBuy(false);
  };
  const ClosemodalTransfer = () => {
    setmodalTransfer(false);
  };
  useEffect(() => {
    return () => {
      if (selector.shoes.isSuccess) {
        setmodalTransfer(false);
        setmodalBuy(false);
        console.log(modalTransfer);
      }
    };
  }, [selector.shoes]);
  const image =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogMFHOw0CKtwUvuJmhgcSi18GmfqlCxUI6g&usqp=CAU';
  const imageSneakers =
    'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg';

  const icons = [];
  for (let index = 0; index < item.energy; index++) {
    icons.push(
      <Image
        source={{ uri: 'ic_ray' }}
        style={{
          width: getSize.scale(12),
          height: getSize.scale(12),
          resizeMode: 'contain',
        }}
      />,
    );
  }

  return (
    <>
      <View
        style={[
          {
            width: (getSize.Width - 36) / 2,
            height: getSize.scale(300),
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 10,
            marginTop: index === 0 || index === 1 ? getSize.scale(16) : 0,
            marginVertical: getSize.scale(32),
          },
          index % 2 === 0 ? { marginRight: 8 } : { marginLeft: 8 },
        ]}>
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
                      textTransform: 'capitalize',
                    }}>
                    {item?.class ?? 'none'}
                  </Text>
                  <View
                    style={{
                      marginLeft: getSize.scale(5),
                      flexDirection: 'row',
                    }}>
                    {icons}
                  </View>
                </View>
              </View>
            </ImageBackground>

            <View style={{ flex: 6 }}>
              <TouchableOpacity
                onPress={() => setmodalTransfer(!modalTransfer)}
                style={{
                  flex: 1,
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  padding: 22,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '60%',
                  }}>
                  <View
                    style={{
                      borderRadius: 50,
                      flexDirection: 'row',
                      backgroundColor: '#565874',
                      paddingHorizontal: getSize.scale(8),
                      paddingVertical: getSize.scale(2),
                      borderColor: '#FFFFFF',
                      borderWidth: 1,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        marginLeft: getSize.scale(2),
                        fontSize: getSize.scale(12),
                      }}>
                      {`# ${item?.readableId && item?.readableId}`}
                    </Text>
                  </View>
                </View>
                <Image
                  source={{
                    uri: item?.img,
                  }}
                  style={{
                    width: getSize.scale(136),
                    height: getSize.scale(136),
                    resizeMode: 'contain',
                  }}
                />
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: getSize.scale(12),
                      fontStyle: 'italic',
                    }}>
                    Mint
                  </Text>
                  <Text
                    style={{
                      fontSize: getSize.scale(12),
                      fontWeight: 'bold',
                    }}>
                    {item?.currentMint}
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: getSize.scale(12),
                      fontStyle: 'italic',
                    }}>
                    Energy
                  </Text>
                  <Text
                    style={{
                      fontSize: getSize.scale(12),
                      fontWeight: 'bold',
                    }}>
                    {item?.energy}
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: getSize.scale(12),
                      fontStyle: 'italic',
                    }}>
                    Speed
                  </Text>
                  <Text
                    style={{
                      fontSize: getSize.scale(12),
                      fontWeight: 'bold',
                    }}>
                    {item?.class === 'runner' ? '6-20km' : '1-6km'}
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: getSize.scale(12),
                      fontStyle: 'italic',
                    }}>
                    Lucky
                  </Text>
                  <Text
                    style={{
                      fontSize: getSize.scale(12),
                      fontWeight: 'bold',
                    }}>
                    {item?.attributes?.luck}
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: getSize.scale(12),
                      fontStyle: 'italic',
                    }}>
                    Durability
                  </Text>
                  <Text
                    style={{
                      fontSize: getSize.scale(12),
                      fontWeight: 'bold',
                    }}>
                    {item?.durability}
                  </Text>
                </View>
                {/* {[
                  {title: 'Energy', value: item?.energy && item?.energy},
                  {
                    title: 'Speed',
                    value: `${constShoe?.SPEED_RANGE[item?.quality].min} - ${
                      constShoe?.SPEED_RANGE[item?.quality].max
                    } km/h`,
                  },
                  {title: 'Luck', value: `${constShoe?.LUCK[item?.quality]}`},
                  {title: 'Durability', value: 40},
                ].map((i, index) => (
                  <View
                    key={index}
                    style={{
                      width: '85%',
                      paddingHorizontal: getSize.scale(16),
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: getSize.scale(2),
                    }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                      }}>
                      <Text
                        style={{
                          color: '#000000',
                          fontStyle: 'italic',
                          fontSize: getSize.scale(10),
                        }}>
                        {i.title}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                      }}>
                      <Text
                        style={{
                          color: '#000',
                          fontSize: getSize.scale(10),
                          fontWeight: 'bold',
                        }}>
                        {i.value}
                      </Text>
                    </View>
                  </View>
                ))} */}
              </TouchableOpacity>
            </View>

            <View style={{ flex: 0.3 }} />
          </View>
        </View>
      </View>
      {/* Switch popup details */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalBuy}
        // onRequestClose={() => setmodalBuy(!modalBuy)}
      >
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              flex: 1,
              height: '100%',
              width: '100%',
              top: 0,
              position: 'absolute',
              backgroundColor: '#0000007f',
              // zIndex: 11
            }}>
            {/* <TouchableOpacity
                        // onPress={() => setmodalBuy(!modalBuy)}
                        style={{
                            height: "100%",
                            width: '100%',
                        }}>

                    </TouchableOpacity> */}
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
                height: getSize.Height / 1.5,
                width: getSize.Width - getSize.scale(45),

                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  // flex: 20,
                  flex: 0.4,
                  width: '100%',
                  paddingHorizontal: getSize.scale(16),
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#96CFE1',
                  paddingVertical: 10,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'space-between',
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
                    flex: 1,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      // height: 40
                    }}>
                    <View
                      style={{
                        // flexDirection: '',
                        // borderWidth: 1,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        borderRadius: 20,

                        // padding: getSize.scale(2),
                        // borderColor: item?.color,
                        width: '100%',
                        marginVertical: getSize.scale(20),
                      }}>
                      <TextInput
                        onChangeText={itemValue =>
                          onChangeText('price', itemValue)
                        }
                        value={price}
                        style={{
                          height: 45,
                          width: '100%',
                          marginTop: 10,
                          borderWidth: 1,
                          borderRadius: 10,
                          paddingHorizontal: 10,
                          borderColor: '#000000',
                          borderWidth: 1,
                          borderBottomWidth: 3,
                          borderRightWidth: 3,
                          color: '#000000',
                        }}
                      />
                    </View>
                  </View>
                </View>

                {isPutShoe && (
                  <View
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <ActivityIndicator size="large" color="#565874" />
                  </View>
                )}
                <View
                  style={{
                    // flex: 1,
                    alignItems: 'flex-end',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      item?._id && putShoe(!item?.isSelling, item?._id);
                    }}
                    style={{
                      width: getSize.Width / 1.3,
                      marginHorizontal: getSize.scale(16),
                      paddingVertical: getSize.scale(6),
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      style={{ width: '100%', height: 46 }}
                      source={{ uri: 'ic_wallet_btn_confirm' }}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  // flex: 2,
                  width: '100%',
                  // height: 120,
                  // backgroundColor: "#ffffff",
                  paddingVertical: 16,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'space-between',

                  paddingHorizontal: getSize.scale(16),
                  // marginTop: 20
                }}>
                <View
                  style={{
                    // flex: 1.5,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={
                      {
                        // flex: 1
                      }
                    }>
                    <TouchableOpacity
                      onPress={() => {
                        // setmodalTransfer(!modalTransfer);
                        return setmodalBuy(!modalBuy);
                      }}
                      style={{
                        width: getSize.Width / 3,
                        marginHorizontal: getSize.scale(16),
                        paddingVertical: getSize.scale(6),
                        alignItems: 'center',
                        justifyContent: 'center',
                        // borderRadius: 20,
                        // borderWidth: 1,
                        // borderBottomWidth: 3,
                        // borderRightWidth: 3,
                        // backgroundColor: Colors.WHITE
                      }}>
                      <Image
                        style={{
                          width: 30,
                          height: 30,
                          resizeMode: 'contain',
                        }}
                        source={{ uri: 'ic_close_red' }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
            backgroundColor: '#000000bf',
          }}></View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalPrice}
          onRequestClose={() => setModalPrice(!modalPrice)}>
          <View
            style={{
              height: '100%',
              width: '100%',
              top: 0,
              position: 'absolute',
              backgroundColor: '#000000bf',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                width: '80%',
                height: 150,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TextInput
                placeholder="Price"
                keyboardType="numeric"
                onChangeText={text => setPriceTxt(text)}
                value={priceTxt}
                style={{
                  padding: 5,
                  height: 40,
                  borderRadius: 8,
                  borderColor: '#565874',
                  borderWidth: 1,
                  width: '90%',
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  width: '90%',
                  marginTop: 15,
                }}>
                <Button
                  onPress={() => setModalPrice(!modalPrice)}
                  buttonStyle={{
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderRadius: 20,
                    width: 100,
                  }}
                  title="Cancel"
                  titleStyle={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}
                />
                <Button
                  buttonStyle={{
                    backgroundColor: '#3EF1F2',
                    borderRadius: 20,
                    width: 100,
                  }}
                  onPress={() => {
                    sellShoe(item?._id, priceTxt);
                    setModalPrice(!modalPrice);
                    setmodalBuy(false);
                  }}
                  disabled={priceTxt.length ? false : true}
                  title="Confirm"
                  titleStyle={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
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
                alignItems: 'center',
                justifyContent: 'space-between',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}>
              {isPutShoe && (
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 0,
                    zIndex: 111,
                    // backgroundColor: "#0000004e"
                  }}>
                  <ActivityIndicator size="large" color="#565874" />
                </View>
              )}
              {isshoesIdWear && (
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 0,
                    zIndex: 111,
                    // backgroundColor: "#0000004e"
                  }}>
                  <ActivityIndicator size="large" color="#565874" />
                </View>
              )}
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <Image
                  style={{
                    width: 250,
                    height: 150,
                    resizeMode: 'contain',
                    marginVertical: getSize.scale(8),
                  }}
                  source={{
                    uri: item?.img,
                  }}
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
                      {`# ${item?.readableId}`}
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
                      {item?.class}
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
                      {item?.quality}
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
                      {`${item?.energy}`}
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  marginTop: getSize.scale(8),
                }}>
                {/* <Text
                                    style={{
                                        color: '#767676',
                                        fontStyle: 'italic'
                                    }}>
                                    Item
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                    <View style={{ flex: 1 }}>
                                        <View
                                            style={{
                                                justifyContent: 'center',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                borderWidth: 0.5,
                                                borderRadius: 20,
                                                marginVertical: getSize.scale(8),
                                                marginRight: getSize.scale(8),
                                                paddingVertical: getSize.scale(4)
                                            }}>
                                            <Text
                                                style={{
                                                    color: '#000',
                                                    fontWeight: 'bold',
                                                    fontSize: getSize.scale(12)
                                                }}>
                                                {`Shoelace`}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{ flex: 1 }}>
                                        <View
                                            style={{
                                                justifyContent: 'center',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                borderWidth: 0.5,
                                                borderRadius: 20,
                                                marginVertical: getSize.scale(8),
                                                marginRight: getSize.scale(8),
                                                paddingVertical: getSize.scale(4)
                                            }}>
                                            <Text
                                                style={{
                                                    color: '#000',
                                                    fontWeight: 'bold',
                                                    fontSize: getSize.scale(12)
                                                }}>
                                                {`Led Light`}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{ flex: 1 }}>
                                        <View
                                            style={{
                                                justifyContent: 'center',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                borderWidth: 0.5,
                                                borderRadius: 20,
                                                marginVertical: getSize.scale(8),
                                                marginRight: getSize.scale(8),
                                                paddingVertical: getSize.scale(4)
                                            }}>
                                            <Text
                                                style={{
                                                    color: '#000',
                                                    fontWeight: 'bold',
                                                    fontSize: getSize.scale(12)
                                                }}>
                                                {`Martens`}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{ flex: 1 }}>
                                        <View
                                            style={{
                                                justifyContent: 'center',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                borderWidth: 0.5,
                                                borderRadius: 20,
                                                marginVertical: getSize.scale(8),
                                                marginRight: getSize.scale(8),
                                                paddingVertical: getSize.scale(4)
                                            }}>
                                            <Text
                                                style={{
                                                    color: '#000',
                                                    fontWeight: 'bold',
                                                    fontSize: getSize.scale(12)
                                                }}>
                                                {`Back wire`}
                                            </Text>
                                        </View>
                                    </View>
                                </View> */}
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  // marginTop: getSize.scale(16),
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
                    height: getSize.scale(135),
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
                        {item?.class === 'runner' ? '6-20km' : '1-6km'}
                        {/* {`${constShoe?.SPEED_RANGE[item?.quality].min} - ${
                          constShoe?.SPEED_RANGE[item?.quality].max
                        }`}{' '}
                        km/h */}
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
                        {`${item?.energy}`}
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
                        Efficiency
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
                        {/* {`${constShoe?.LUCK[item?.quality]}`} */}
                        {item?.attributes?.efficiency}
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
                        Resilience
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
                        {/* {`${constShoe?.LUCK[item?.quality]}`} */}
                        {item?.attributes?.resilience}
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
                        {/* {`${constShoe?.LUCK[item?.quality]}`} */}
                        {item?.attributes?.luck}
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
                        Level
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
                        {/* {`${constShoe?.LUCK[item?.quality]}`} */}
                        {item?.level}
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
                        Quality
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
                        {/* {`${constShoe?.LUCK[item?.quality]}`} */}
                        {item?.quality}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  disabled={item?.isWearing || item?.isSelling}
                  style={{
                    width: getSize.Width * 0.7,
                    opacity: item?.isSelling ? 0.5 : 1,
                    // marginHorizontal: getSize.scale(16),
                    paddingVertical: getSize.scale(6),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    borderColor: '#888888',
                    opacity: item?.isWearing || item?.isSelling ? 0.5 : 1,
                    borderWidth: 1,
                    borderBottomWidth: 2,
                    borderRightWidth: 2,
                    backgroundColor: '#2EDBDC',
                  }}
                  onPress={() => item?._id && shoesIdWear(item?._id)}>
                  {/* <Image
                                        style={{
                                            width: getSize.Width,
                                            height: getSize.scale(45),
                                            resizeMode: 'contain'
                                        }}
                                        source={{
                                            uri: 'ic_btn_confirm_long'
                                        }}
                                    /> */}
                  <Text
                    style={{
                      fontStyle: 'italic',
                      color: '#ffffff',
                      fontWeight: 'bold',
                    }}>
                    USE
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  // flex: 1,
                  flexDirection: 'row',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: getSize.scale(16),
                  marginVertical: getSize.scale(10),
                  // backgroundColor: "red"
                }}>
                <TouchableOpacity
                  disabled={item?.isSelling || item?.isLockSell ? true : false}
                  onPress={() => {
                    // setmodalBuy(!modalBuy);
                    setModalPrice(true);
                  }}
                  style={{
                    width: getSize.Width * 0.3,
                    opacity: item?.isSelling || item?.isLockSell ? 0.5 : 1,
                    // marginHorizontal: getSize.scale(16),
                    paddingVertical: getSize.scale(6),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    borderColor: '#888888',

                    borderWidth: 1,
                    borderBottomWidth: 2,
                    borderRightWidth: 2,
                    backgroundColor: '#2EDBDC',
                  }}>
                  {/* <Text
                                                                    style={{
                                                                        fontSize: 14,
                                                                        fontStyle: 'italic',
                                                                        fontWeight: 'bold',
                                                                        color: '#000'
                                                                    }}>
                                                                    CONFIRM
                                                                </Text> */}
                  {/* <Image style={{ width: "100%", height: 44 }} source={{ uri: "ic_btn_confirm_long" }} /> */}
                  <Text
                    style={{
                      fontStyle: 'italic',
                      color: '#ffffff',
                      fontWeight: 'bold',
                    }}>
                    Sell
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={item?.isSelling ? false : true}
                  onPress={() => {
                    unSellShoe(item?._id);
                    setmodalTransfer(false);
                    // item?._id && putShoe(!item?.isSelling, item?._id);
                  }}
                  style={{
                    width: getSize.Width * 0.3,
                    // marginHorizontal: getSize.scale(16),
                    opacity: item?.isSelling ? 1 : 0.5,
                    paddingVertical: getSize.scale(6),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    borderColor: '#888888',

                    borderWidth: 1,
                    borderBottomWidth: 2,
                    borderRightWidth: 2,
                    backgroundColor: '#2EDBDC',
                  }}>
                  {/* <Text
                                                                    style={{
                                                                        fontSize: 14,
                                                                        fontStyle: 'italic',
                                                                        fontWeight: 'bold',
                                                                        color: '#000'
                                                                    }}>
                                                                    CONFIRM
                                                                </Text> */}
                  {/* <Image style={{ width: "100%", height: 44 }} source={{ uri: "ic_btn_confirm_long" }} /> */}
                  <Text
                    style={{
                      fontStyle: 'italic',
                      color: '#ffffff',
                      fontWeight: 'bold',
                    }}>
                    UnSell
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                justifyContent: 'center',
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
    </>
  );
});

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
