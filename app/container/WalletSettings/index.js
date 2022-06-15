import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  ImageBackground,
  Image,
} from 'react-native';

import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';
import { getSize, location, Colors } from '../../common';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _action from '../../redux/action/ActionHandle';
import { isIphoneX } from 'react-native-iphone-x-helper';

class WalletSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModal: false,
      isModalGen: false,
      isModalDelete: false,
      user: {
        emai: 'datdoan@gmal.com',
        name: 'dat',
        gender: 'secrect',
      },
    };
  }

  SetInfoUser = (name, value) => {
    this.setState(state => {
      return {
        user: {
          ...state.user,
          [name]: value,
        },
      };
    });
  };
  setShowModalGen = () => {
    this.setState(state => {
      return {
        isModalGen: !state.isModalGen,
      };
    });
  };
  setShowModalDelete = () => {
    this.setState(state => {
      return {
        isModalDelete: !state.isModalDelete,
      };
    });
  };
  setShowModal = () => {
    this.setState(state => {
      return {
        isModal: !state.isModal,
      };
    });
  };
  render() {
    const { isModal, isModalGen, isModalDelete } = this.state;
    const { navigation, action } = this.props;
    // console.log(this.props);
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
        <ImageBackground
          style={{
            width: getSize.Width,
            height: getSize.scale(isIphoneX() ? 120 : 100),
            position: 'absolute',
            resizeMode: 'cover',
            zIndex: -1,
            top: Platform.OS === 'android' ? getSize.scale(-10) : 0,
          }}
          source={{ uri: 'ic_top_bar' }}
        />
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
            flex: 1,
            marginVertical: Platform.OS === 'android' ? getSize.scale(8) : 0,
          }}>
          {/* HeaderMini */}
          <View
            style={{
              flex: 1,
              minHeight: Platform.OS === 'ios' ? 0 : getSize.scale(30),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: getSize.scale(16),
              // backgroundColor: "red"
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ flex: 2, justifyContent: 'center' }}>
              <Image
                style={{
                  width: getSize.scale(28),
                  height: getSize.scale(28),
                  resizeMode: 'contain',
                }}
                source={{ uri: 'ic_back' }}
              />
            </TouchableOpacity>
            <View
              style={{
                flex: 6,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: getSize.scale(18),
                  color: '#000',
                  fontWeight: 'bold',
                }}>
                {'SETTINGS WALLET'}
              </Text>
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}
            />
          </View>
        </View>

        <View
          style={{
            flex: 9,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{ flex: 3, justifyContent: 'space-between' }}>
            <View style={{ flex: 0.2 }} />
            <View
              style={{
                flex: 3,
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                width: getSize.Width,
                paddingHorizontal: getSize.scale(16),
              }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: 'rgba(236, 236, 236, 1)',
                    width: '100%',
                    height: 1,
                    position: 'absolute',
                    top: 0,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(stackNavigator.WALLET_IMPORT)
                    }
                    style={{ flex: 1, flexDirection: 'row' }}>
                    <Text
                      style={{
                        flex: 1,
                        alignItems: 'flex-start',
                        fontSize: getSize.scale(14),
                        color: 'rgba(118, 118, 118, 1)',
                        fontWeight: 'bold',
                      }}>
                      Import a wallet
                    </Text>

                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        flexDirection: 'row',
                      }}>
                      <Image
                        style={{
                          width: getSize.scale(14),
                          height: getSize.scale(14),
                          resizeMode: 'contain',
                        }}
                        source={{
                          uri: 'ic_user_arrow_right',
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: 'rgba(236, 236, 236, 1)',
                    width: '100%',
                    height: 1,
                    position: 'absolute',
                    top: 0,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      // navigation.navigate(stackNavigator.WALLET_NEW)
                      navigation.navigate(stackNavigator.BACKUP_PASS_WALLET)
                    }
                    style={{ flex: 1, flexDirection: 'row' }}>
                    <Text
                      style={{
                        flex: 1,
                        alignItems: 'flex-start',
                        fontSize: getSize.scale(14),
                        color: 'rgba(118, 118, 118, 1)',
                        fontWeight: 'bold',
                      }}>
                      Backup wallet
                    </Text>

                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        flexDirection: 'row',
                      }}>
                      <Image
                        style={{
                          width: getSize.scale(14),
                          height: getSize.scale(14),
                          resizeMode: 'contain',
                        }}
                        source={{
                          uri: 'ic_user_arrow_right',
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{ flex: 3 }} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  // isSignIn: state.initReducer.isSignIn
});
const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(_action, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(WalletSettings);
