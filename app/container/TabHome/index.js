import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  Modal,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';
import Tooltip from 'react-native-walkthrough-tooltip';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _action from '../../redux/action/ActionHandle';
import { Button } from '@rneui/base';
import Toast from 'react-native-simple-toast';

import Head from './../../components/head/index';
import { location, getSize, Colors } from '../../common/';

import * as ApiServices from './../../service/index';
import AsyncStorage from '@react-native-community/async-storage';

class TabHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisibles: true, // true,
      toolTipStart: false,
      toolTipSneaker: false,
      toolTipProfile: false,
      toolTipSol: false,
      refreshing: false,
      modalBuy: false,
      modalTransfer: false,
      price: '0',
      isPutShoe: false,
      isshoesIdWear: false,
      isShowModalInstruction: true,
      modalPrice: false,
      priceTxt: '',
    };
  }

  componentDidUpdate(preProp) {
    if (preProp?.shoesIdWear !== this.props.shoesIdWear) {
      this.LoadData();
    }
  }

  shoesIdWear = id => {
    const { action } = this.props;
    this.setState(
      state => {
        return {
          isshoesIdWear: true,
        };
      },
      () => {
        ApiServices.shoesIdWear({ _id: id })
          .then(res => {
            if (res.code === 200) {
              action.shoesIdWear(res.data);
              this.LoadData();
              this.setState(
                state => {
                  return {
                    isshoesIdWear: false,
                  };
                },
                () => {
                  this.setmodalBuy(false);
                  this.setmodalTransfer(false);
                },
              );
            }
            if (res.code === 404) {
              alert(res.message);
            }
          })
          .catch(err => {
            alert('Fail!');
            this.setState(state => {
              return {
                isshoesIdWear: false,
              };
            });
          });
      },
    );
  };
  putShoe = (isSelling, id) => {
    const { action } = this.props;
    const { price } = this.state;
    let pr = isSelling ? price : 0;
    this.setState(
      state => {
        return {
          isPutShoe: true,
        };
      },
      () => {
        ApiServices.putShoesId({ price: pr, isSelling: isSelling, _id: id })
          .then(res => {
            console.log('putShoe', res);
            if (res.code === 200) {
              action.putShoesId(res.data);
              this.LoadData();
              this.setState(
                state => {
                  return {
                    isPutShoe: false,
                  };
                },
                () => {
                  this.setmodalBuy(false);
                  this.setmodalTransfer(false);
                },
              );
            }
            if (res.code === 404) {
              alert(res.message);
            }
          })
          .catch(err => {
            alert('Fail!');
            this.setState(state => {
              return {
                isPutShoe: false,
              };
            });
          });
      },
    );
  };
  setmodalBuy = type => {
    this.setState(state => {
      return {
        modalBuy: type,
      };
    });
  };
  setmodalTransfer = type => {
    this.setState(state => {
      return {
        modalTransfer: type,
      };
    });
  };

  getIsShowModalInstruction = async () => {
    const isShow = await AsyncStorage.getItem('NOT_SHOW_INSTRUCTION');
    this.setState({
      isShowModalInstruction: isShow === 'having' ? false : true,
    });
  };

  componentDidMount = () => {
    // Permissions location
    location.requestPermissions();
    this._getCurrentLocation();
    this.getIsShowModalInstruction();
    this.LoadData();
  };
  _onRefresh = () => {
    const { action } = this.props;
    this.setState(
      state => {
        return { refreshing: true };
      },
      () => {
        ApiServices.shoes()
          .then(res => {
            console.log(res);
            if (res.code === 200) {
              this.setState(
                state => {
                  return { refreshing: false };
                },
                () => {
                  action.shoes(res.data);
                  this.setShoeCurrentWear(res.data, action);
                },
              );
            }
          })
          .catch(err => { });
      },
    );
  };
  LoadData = () => {
    const { action } = this.props;
    ApiServices.getConstShoe()
      .then(res => {
        if (res.code === 200) {
          action.getConstShoe(res.data);
        }
      })
      .catch(err => { });
    ApiServices.shoes()
      .then(res => {
        if (res.code === 200) {
          action.shoes(res.data);
          this.setShoeCurrentWear(res.data, action);
        }
      })
      .catch(err => { });
    ApiServices.market({ pageSize: 20, page: 1 })
      .then(res => {
        if (res.code === 200) {
          action.market(res.data.shoes);
        }
      })
      .catch(err => { });
  };

  setShoeCurrentWear = (shoes, action) => {
    for (let i = 0; i < shoes.length; i++) {
      const element = shoes[i];
      if (element.isWearing) {
        // shoeResutl = element;

        action.shoeCurrentWear(element);
        // action.getShoesId({ _id: element._id });
        console.log('shoeCurrentWear', element);
      }
    }
  };

  setKeyIsShowModalInstruction = async () => {
    await AsyncStorage.setItem('NOT_SHOW_INSTRUCTION', 'having');
  };

  onChangeText = (name, itemValue) => {
    this.setState(state => {
      return {
        [name]: itemValue,
      };
    });
  };
  _getCurrentLocation = async () => {
    const { action, screenState } = this.props;
    return location
      .getCurrentLocation()
      .then(currentLocation => {
        if (currentLocation) {
          const { longitude, latitude } = currentLocation;
          action.changeScreenState({
            ...screenState,
            currentLocation: {
              longitude: Number(longitude),
              latitude: Number(latitude),
            },
          });
        }
      })
      .catch(err => {
        if (err === 1) {
          return Toast.show('Location permission has not been granted');
        }
        if (err === 2) {
          return Toast.show('Unstable network connection');
        }
        if (err === 3) {
          return Toast.show('Server response timeout');
        }
      });
  };

  sellShoe = (id, price) => {
    ApiServices.onSellShoe(id, { isSelling: true, price })
      .then(res => {
        if (res.code === 200) {
          this.LoadData();
          setTimeout(() => {
            Toast.show('Sell Successfully');
          }, 1000);
        } else {
          setTimeout(() => {
            Toast.show(
              res?.message ?? 'Somethings went wrong. Please try again',
            );
          }, 1000);
        }
      })
      .catch(err => {
        setTimeout(() => {
          Toast.show(err.message);
        }, 1000);
      });
  };

  render() {
    const {
      navigation,
      screenState,
      getConstShoe,
      action,
      getShoesId,
      userId,
      shoeCurrentWear,
      shoes,
    } = this.props;
    const {
      modalVisible,
      modalTransfer,
      modalBuy,
      price,
      isPutShoe,
      isshoesIdWear,
      isShowModalInstruction,
      modalPrice,
      priceTxt,
    } = this.state;
    const balanceUserId = userId.data ? userId.data : { mer: 0, usdt: 0 };
    let dataS = shoes.data
      ? shoes.data
        .filter((item, index) => {
          return !item.isWearing;
        })
        .slice(-4)
      : [];
    if (dataS.length < 4) {
      dataS.push({});
    }
    const datashoes = dataS ? dataS : [];
    const constShoe = getConstShoe.data ? getConstShoe.data : [];

    let isWearr = shoeCurrentWear._id ? true : false;
    const ShoeWeared = isWearr ? shoeCurrentWear : getShoesId.data;

    let item;

    if (modalTransfer) {
      item = datashoes?.find(e => e.readableId === modalTransfer);
    }

    return (
      <SafeAreaView style={{ flex: 1, position: 'relative' }}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalPrice}
          onRequestClose={() => this.setState({ modalPrice: false })}>
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
                onChangeText={text => this.setState({ priceTxt: text })}
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
                  onPress={() => this.setState({ modalPrice: false })}
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
                    this.sellShoe(item?._id, priceTxt);
                    this.setState({ modalTransfer: null });
                    // setModalPrice(!modalPrice);
                    // setmodalBuy(false);
                    this.setState({ modalPrice: false });
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
        <ImageBackground
          style={{
            width: getSize.Width,
            height: getSize.Height,
            position: 'absolute',
            resizeMode: 'contain',
            zIndex: -2,
          }}
          source={{ uri: 'ic_background' }}
        />

        <View
          style={{
            minHeight: getSize.scale(45),
            marginVertical: getSize.scale(8),
          }}>
          <Head navigation={navigation} />
        </View>

        <ScrollView
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }>
          <View style={{ flex: 1, height: getSize.Height / 1.12 }}>
            <View
              style={{
                flex: 1.5,

                margin: getSize.scale(16),
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Tooltip
                  isVisible={this.state.toolTipSneaker}
                  content={
                    <View style={{ flex: 1, backgroundColor: '#d1f4f2' }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: getSize.scale(14),
                          position: 'absolute',
                          top: 5,
                          right: 5,
                        }}>
                        STEP 3/5
                      </Text>
                      <View
                        style={{
                          flex: 1,
                          padding: getSize.scale(16),
                        }}>
                        <Text
                          style={{
                            marginTop: getSize.scale(18),
                            textAlign: 'center',
                            fontSize: getSize.scale(14),
                          }}>
                          To use the app, you MUST buy or rent an NFT Sneaker
                          from the Marketplace
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'space-evenly',
                          flexDirection: 'row',
                          paddingBottom: getSize.scale(16),
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({ toolTipSneaker: false });
                            this.setKeyIsShowModalInstruction();
                          }}
                          style={{
                            justifyContent: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              width: getSize.scale(100),
                              height: getSize.scale(40),
                              borderRadius: 20,
                              overflow: 'hidden',
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: 'rgba(89, 89, 89, 0.6)',
                              borderWidth: 1,
                              borderColor: 'rgba(89, 89, 89, 0.1)',
                              elevation: 4,
                              shadowColor: 'rgba(89, 89, 89, 0.3)',
                              shadowOffset: {
                                width: 0,
                                height: 2,
                              },
                              shadowOpacity: 0.25,
                              shadowRadius: 4,
                            }}>
                            <Text
                              style={{
                                color: '#fff',
                                fontStyle: 'italic',
                                fontWeight: 'bold',
                                fontSize: getSize.scale(18),
                              }}>
                              SKIP
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({
                              toolTipSneaker: false,
                              toolTipSol: true,
                            });
                            this.setKeyIsShowModalInstruction();
                          }}
                          style={{
                            justifyContent: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              width: getSize.scale(100),
                              height: getSize.scale(40),
                              borderRadius: 20,
                              overflow: 'hidden',
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: '#2EDBDC',
                              borderWidth: 1,
                              borderColor: 'rgba(244, 67, 105, 0.3)',
                              elevation: 4,
                              shadowColor: 'rgba(89, 89, 89, 0.3)', // "rgba(52, 52, 52, alpha)", //trong suốt
                              shadowOffset: {
                                width: 0,
                                height: 2,
                              },
                              shadowOpacity: 0.25,
                              shadowRadius: 4,
                            }}>
                            <Text
                              style={{
                                color: '#fff',
                                fontStyle: 'italic',
                                fontWeight: 'bold',
                                fontSize: getSize.scale(18),
                              }}>
                              NEXT
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  }
                  placement="bottom">
                  <View
                    style={{
                      width: getSize.Width - getSize.scale(32),
                      height: getSize.Width / 2,
                    }}>
                    {!isWearr && (
                      <ImageBackground
                        style={{
                          flex: 1,
                          resizeMode: 'contain',
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'row',
                          padding: getSize.scale(16),
                        }}
                        source={{ uri: 'ic_home_frame' }}>
                        <View
                          style={{
                            flex: 1,
                            marginLeft: getSize.scale(16),
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Image
                            source={{ uri: 'ic_shoe_das' }}
                            style={{
                              width: '60%',
                              height: '60%',
                              resizeMode: 'contain',
                            }}
                          />
                        </View>
                      </ImageBackground>
                    )}
                    {isWearr && (
                      <ImageBackground
                        style={{
                          flex: 1,
                          resizeMode: 'contain',
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'row',
                          padding: getSize.scale(5),
                        }}
                        source={{ uri: 'ic_home_frame' }}>
                        <View style={{ flex: 1, marginLeft: getSize.scale(5) }}>
                          <View
                            style={{
                              borderWidth: 1,
                              borderRadius: 20,
                              marginHorizontal: getSize.scale(16),
                              marginVertical: getSize.scale(8),
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: '#0974F1',
                              borderColor: '#1A5BA8',
                            }}>
                            <Text
                              style={{
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: getSize.scale(16),
                                padding: getSize.scale(4),
                              }}>
                              # {ShoeWeared.readableId}
                            </Text>
                          </View>
                          {/* <View
                            style={{
                              borderWidth: 1,
                              borderRadius: 20,
                              marginHorizontal: getSize.scale(16),
                              marginVertical: getSize.scale(8),
                              justifyContent: 'center',
                              alignItems: 'flex-start',
                              width: '50%',
                              backgroundColor: '#ECE9F2',
                              borderColor: '#A79BBF',
                            }}>
                            <View
                              style={{
                                borderRadius: 20,
                                borderWidth: 1,
                                paddingHorizontal: getSize.scale(8),
                                backgroundColor: '#2EDBDC',
                                borderColor: '#2EDBDC',
                                margin: 1,
                              }}>
                              <Text
                                style={{
                                  color: '#fff',
                                  fontWeight: 'bold',
                                }}>
                                {ShoeWeared.energy}/2
                              </Text>
                            </View>
                          </View> */}
                          <View
                            style={{
                              borderWidth: 1,
                              borderRadius: 20,
                              marginHorizontal: getSize.scale(16),
                              marginVertical: getSize.scale(8),
                              justifyContent: 'center',
                              alignItems: 'center',
                              width: '50%',
                              borderColor: '#A79BBF',
                              backgroundColor: '#FFFFFF',
                            }}>
                            <Text
                              style={{
                                color: '#A79BBF',
                                fontWeight: 'bold',
                              }}>
                              Energy: {ShoeWeared.energy}
                            </Text>
                          </View>
                          <View
                            style={{
                              borderWidth: 1,
                              borderRadius: 20,
                              marginHorizontal: getSize.scale(16),
                              marginVertical: getSize.scale(8),
                              justifyContent: 'center',
                              alignItems: 'center',
                              width: '30%',
                              borderColor: '#A79BBF',
                              backgroundColor: '#FFFFFF',
                            }}>
                            <Text
                              style={{
                                color: '#A79BBF',
                                fontWeight: 'bold',
                              }}>
                              Lv {ShoeWeared.level}
                            </Text>
                          </View>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Image
                            style={{
                              width: getSize.scale(176),
                              height: getSize.scale(176),
                              resizeMode: 'contain',
                            }}
                            source={{ uri: ShoeWeared.img }}
                          />
                        </View>
                      </ImageBackground>
                    )}
                    {isWearr && (
                      <View
                        style={{
                          position: 'absolute',
                          top: getSize.scale(3),
                          right: getSize.scale(-10),
                          marginHorizontal: getSize.scale(32),
                          borderWidth: 1,
                          borderRadius: 10,
                          borderColor: '#A79BBF',
                          paddingHorizontal: getSize.scale(16),
                          paddingVertical: getSize.scale(4),
                          backgroundColor: '#ECECEC',
                          flexDirection: 'row',
                        }}>
                        <Text
                          style={{
                            fontSize: getSize.scale(14),
                            fontWeight: 'bold',
                          }}>
                          {ShoeWeared.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: getSize.scale(14),
                            fontWeight: 'bold',
                          }}>
                          {ShoeWeared.class}
                        </Text>
                        {/* <Image
                          style={{
                            width: 16,
                            height: 16,
                            resizeMode: 'contain',
                          }}
                          source={{ uri: 'ic_ray' }}
                        />
                        <Image
                          style={{
                            width: 16,
                            height: 16,
                            resizeMode: 'contain',
                          }}
                          source={{ uri: 'ic_ray' }}
                        />
                        <Image
                          style={{
                            width: 16,
                            height: 16,
                            resizeMode: 'contain',
                          }}
                          source={{ uri: 'ic_ray' }}
                        /> */}
                      </View>
                    )}
                  </View>
                </Tooltip>
              </View>
            </View>

            <View
              style={{
                flex: 0.5,
                //marginTop: getSize.scale(-64),
                justifyContent: 'space-between',
                marginHorizontal: getSize.scale(16),
                flexDirection: 'row',
                zIndex: -1,
                marginBottom: getSize.scale(10),
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      width: getSize.scale(34),
                      height: getSize.scale(34),
                      resizeMode: 'contain',
                    }}
                    source={{ uri: 'ic_mail' }}
                  />
                  <View
                    style={{
                      borderRadius: 10,
                      overflow: 'hidden',
                      marginLeft: getSize.scale(4),
                    }}>
                    <Text
                      style={{
                        backgroundColor: '#A79BBF',
                        color: '#fff',
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        fontSize: getSize.scale(10),
                        padding: getSize.scale(4),
                      }}>
                      Feedback
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      width: getSize.scale(34),
                      height: getSize.scale(34),
                      resizeMode: 'contain',
                    }}
                    source={{ uri: 'ic_cmm' }}
                  />
                  <View
                    style={{
                      borderRadius: 10,
                      overflow: 'hidden',
                      marginLeft: getSize.scale(4),
                    }}>
                    <Text
                      style={{
                        backgroundColor: '#A79BBF',
                        color: '#fff',
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        fontSize: getSize.scale(10),
                        padding: getSize.scale(4),
                      }}>
                      FAQ
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      width: getSize.scale(34),
                      height: getSize.scale(34),
                      resizeMode: 'contain',
                    }}
                    source={{ uri: 'ic_question' }}
                  />
                  <View
                    style={{
                      borderRadius: 10,
                      overflow: 'hidden',
                      marginLeft: getSize.scale(4),
                    }}>
                    <Text
                      style={{
                        backgroundColor: '#A79BBF',
                        color: '#fff',
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        fontSize: getSize.scale(10),
                        padding: getSize.scale(4),
                      }}>
                      About
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <View style={{ flex: 1, zIndex: 1 }}>
                <Tooltip
                  isVisible={this.state.toolTipStart}
                  content={
                    <View style={{ flex: 1, backgroundColor: '#d1f4f2' }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: getSize.scale(14),
                          position: 'absolute',
                          top: 5,
                          right: 5,
                        }}>
                        STEP 2/5
                      </Text>
                      <View
                        style={{
                          flex: 1,
                          padding: getSize.scale(16),
                        }}>
                        <Text
                          style={{
                            marginTop: getSize.scale(18),
                            textAlign: 'center',
                            fontSize: getSize.scale(14),
                          }}>
                          Start walking, jogging or running outdoor and make
                          token earnings
                        </Text>
                      </View>

                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'space-evenly',
                          flexDirection: 'row',
                          paddingBottom: getSize.scale(16),
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({ toolTipStart: false });
                            this.setKeyIsShowModalInstruction();
                          }}
                          style={{
                            justifyContent: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              width: getSize.scale(100),
                              height: getSize.scale(40),
                              borderRadius: 20,
                              overflow: 'hidden',
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: 'rgba(89, 89, 89, 0.6)',
                              borderWidth: 1,
                              borderColor: 'rgba(89, 89, 89, 0.1)',
                              elevation: 4,
                              shadowColor: 'rgba(89, 89, 89, 0.3)', // "rgba(52, 52, 52, alpha)", //trong suốt
                              shadowOffset: {
                                width: 0,
                                height: 2,
                              },
                              shadowOpacity: 0.25,
                              shadowRadius: 4,
                            }}>
                            <Text
                              style={{
                                color: '#fff',
                                fontStyle: 'italic',
                                fontWeight: 'bold',
                                fontSize: getSize.scale(18),
                              }}>
                              SKIP
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({
                              toolTipStart: false,
                              toolTipSneaker: true,
                            });
                            this.setKeyIsShowModalInstruction();
                          }}
                          style={{
                            justifyContent: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              width: getSize.scale(100),
                              height: getSize.scale(40),
                              borderRadius: 20,
                              overflow: 'hidden',
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: '#2EDBDC',
                              borderWidth: 1,
                              borderColor: 'rgba(244, 67, 105, 0.3)',
                              elevation: 4,
                              shadowColor: 'rgba(89, 89, 89, 0.3)', // "rgba(52, 52, 52, alpha)", //trong suốt
                              shadowOffset: {
                                width: 0,
                                height: 2,
                              },
                              shadowOpacity: 0.25,
                              shadowRadius: 4,
                            }}>
                            <Text
                              style={{
                                color: '#fff',
                                fontStyle: 'italic',
                                fontWeight: 'bold',
                                fontSize: getSize.scale(18),
                              }}>
                              NEXT
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  }
                  placement="top">
                  <TouchableOpacity
                    style={{ alignItems: 'center' }}
                    disabled={this.state.toolTipStart}
                    onPress={() => {
                      // action.changeScreenState({
                      //   ...screenState,
                      //   isStateCountDown: true,
                      // });
                      // return navigation.navigate(stackNavigator.COUNT_DOWN);
                      if (shoeCurrentWear?._id) {
                        ApiServices.getShoesById(shoeCurrentWear?._id)
                          .then(res => {
                            if (res.code === 200) {
                              const shoe = res?.data;
                              if (shoe?.energy > 0) {
                                action.changeScreenState({
                                  ...screenState,
                                  isStateCountDown: true,
                                });
                                navigation.navigate(stackNavigator.COUNT_DOWN);
                              } else {
                                Toast.showWithGravity(
                                  'The energy was exhausted. Please select another shoe',
                                  Toast.LONG,
                                  Toast.CENTER,
                                );
                              }
                            }
                            if (res.code === 404) {
                              alert(res.message);
                            }
                          })
                          .catch(err => {
                            Toast.showWithGravity(
                              err?.message,
                              Toast.LONG,
                              Toast.CENTER,
                            );
                          });
                      } else {
                        Toast.showWithGravity(
                          'Please select one of your shoes',
                          Toast.LONG,
                          Toast.CENTER,
                        );
                      }
                    }}>
                    <Image
                      style={{
                        width: getSize.scale(193),
                        height: getSize.scale(58),
                        resizeMode: 'contain',
                      }}
                      source={{ uri: 'ic_btn_start_red' }}
                    />
                  </TouchableOpacity>
                </Tooltip>
              </View>
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {isShowModalInstruction && (
            <Modal
              animationType="none"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => this.setState({ modalVisible: false })}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(89, 89, 89, 0.6)',
                  position: 'relative',
                }}>
                <View
                  style={{
                    width: getSize.Width - getSize.scale(48),
                    height: getSize.Width / 2,
                    backgroundColor: '#d1f4f2',
                    borderRadius: 20,
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                  }}>
                  <View style={{ flex: 1 }}>
                    <View
                      style={{
                        flex: 1,
                        padding: getSize.scale(32),
                      }}>
                      <Text
                        style={{
                          marginTop: getSize.scale(16),
                          textAlign: 'center',
                          fontSize: getSize.scale(18),
                          fontWeight: 'bold',
                        }}>
                        WELCOME TO BINANSTEP
                      </Text>
                      <Text
                        style={{
                          marginTop: getSize.scale(18),
                          textAlign: 'center',
                          fontSize: getSize.scale(14),
                        }}>
                        BINANSTEP is a digital platform through which users can
                        generate real-world financial and community values by
                        gamifying personal fitness & traveling experience
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 10,
                    width: '100%',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        modalVisible: false,
                        toolTipStart: false,
                      });
                      this.setKeyIsShowModalInstruction();
                    }}
                    style={{
                      justifyContent: 'center',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: getSize.scale(100),
                        height: getSize.scale(40),
                        borderRadius: 20,
                        overflow: 'hidden',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // backgroundColor: 'rgba(89, 89, 89, 0.6)',
                        // borderWidth: 1,
                        // borderColor: 'rgba(89, 89, 89, 0.1)',
                        elevation: 4,
                        shadowColor: 'rgba(89, 89, 89, 0.3)',
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          fontSize: getSize.scale(18),
                        }}>
                        SKIP
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: getSize.scale(18),
                      fontWeight: 'bold',
                      color: '#FFFFFF',
                    }}>
                    STEP 1/5
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        modalVisible: false,
                        toolTipStart: true,
                      });
                      this.setKeyIsShowModalInstruction();
                    }}
                    style={{
                      justifyContent: 'center',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: getSize.scale(100),
                        height: getSize.scale(40),
                        borderRadius: 20,
                        overflow: 'hidden',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // backgroundColor: 'rgba(244, 67, 105, 1)',
                        // borderWidth: 1,
                        // borderColor: 'rgba(244, 67, 105, 0.3)',
                        elevation: 4,
                        shadowColor: 'rgba(89, 89, 89, 0.3)', // "rgba(52, 52, 52, alpha)", //trong suốt
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          color: '#2EDBDC',
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          fontSize: getSize.scale(18),
                        }}>
                        NEXT
                      </Text>
                      <Image
                        source={{ uri: 'ic_next' }}
                        style={{
                          width: 20,
                          height: 20,
                          resizeMode: 'contain',
                          marginLeft: 5,
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  isSignIn: state.initReducer.isSignIn,
  screenState: state.initReducer.screenState,
  getUser: state.initReducer.getUser,
  shoes: state.initReducer.shoes,
  getShoesId: state.initReducer.getShoesId,
  userId: state.initReducer.userId,
  user: state.initReducer.user,
  getConstShoe: state.initReducer.getConstShoe,
  shoeCurrentWear: state.initReducer.shoeCurrentWear,
  putShoesId: state.initReducer.putShoesId,
  shoesIdWear: state.initReducer.shoesIdWear,
});
const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(_action, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(TabHome);
// export default TabHome;
