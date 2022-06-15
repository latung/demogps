import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
  ActivityIndicator,
} from 'react-native';
import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';
import { updateWallets } from '../../service';
import { getSize, location, Colors } from '../../common';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _action from '../../redux/action/ActionHandle';
class WalletImport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      verificationcode: '',
      isHiddenBottom: false,
      disabledTouch: true,
      isUpdate: false,
    };
  }
  onChangeText = (name, itemValue) => {
    this.setState(state => {
      return {
        [name]: itemValue,
      };
    });
  };
  SetIsHiddenBottom = type => {
    if (!type) {
      setTimeout(() => {
        this.setState(state => {
          return {
            isHiddenBottom: type,
          };
        });
      }, 50);
    } else {
      this.setState(state => {
        return {
          isHiddenBottom: type,
        };
      });
    }
  };

  importWallet = async () => {
    const { user } = this.props;
    this.setState(
      state => {
        return {
          isUpdate: true,
        };
      },
      async () => {
        let data = await updateWallets(user._id, this.state.verificationcode);
        // console.log('okk', data);
        if (Number(data.data.code) == 200) {
          alert('successfully!');
          console.log('update successs');
        } else {
          alert('error!');
          console.log('error');
        }
        this.setState(state => {
          return {
            isUpdate: false,
          };
        });
      },
    );
  };
  render() {
    const { isHiddenBottom, isUpdate } = this.state;
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior="padding"
          style={{
            width: '100%',
            backgroundColor: '#000000',
            flex: 1,
          }}>
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
          {isUpdate && (
            <View
              style={{
                position: 'absolute',
                flex: 1,
                height: '100%',
                width: '100%',
                top: 0,
                backgroundColor: '#0000006b',
                zIndex: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator size="large" color="#2EDBDC" />
            </View>
          )}
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
              this.SetIsHiddenBottom(false);
            }}
            style={{}}>
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                // alignItems: 'center',
                flex: 1,
                position: 'absolute',
                top: 0,
              }}>
              <View
                style={{
                  width: getSize.Width,
                  height: getSize.scale(320),
                  backgroundColor: '#555774',
                  borderBottomLeftRadius: getSize.scale(32),
                  borderBottomRightRadius: getSize.scale(32),
                  zIndex: -2,
                  position: 'absolute',
                  top: Platform.OS === 'android' ? getSize.scale(-32) : 0,
                }}
              />
              <View
                style={{
                  width: '100%',
                  borderBottomLeftRadius: 30,
                  flex: 8,
                }}>
                <View
                  style={{
                    width: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    height: 70,
                    flexDirection: 'row',
                    flex: 1,
                  }}>
                  <ImageBackground
                    style={{
                      width: getSize.Width,
                      height: getSize.scale(100),
                      position: 'absolute',
                      resizeMode: 'cover',
                      zIndex: -1,
                      top: Platform.OS === 'android' ? getSize.scale(-10) : 0,
                    }}
                    source={{ uri: 'ic_top_bar' }}
                  />
                  <View
                    style={{
                      width: getSize.Width,
                      height: getSize.scale(430),
                      borderBottomLeftRadius: getSize.scale(32),
                      borderBottomRightRadius: getSize.scale(32),
                      zIndex: -2,
                      position: 'absolute',
                      top: Platform.OS === 'android' ? getSize.scale(-32) : 0,
                    }}
                  />
                  <View
                    style={{
                      flex: 1,
                      marginVertical:
                        Platform.OS === 'android' ? getSize.scale(8) : 0,
                    }}>
                    {/* HeaderMini */}
                    <View
                      style={{
                        flex: 1.2,
                        minHeight:
                          Platform.OS === 'ios' ? 0 : getSize.scale(30),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginHorizontal: getSize.scale(16),
                        // backgroundColor: "red"
                      }}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate(stackNavigator.SPENDING_WALLET)
                        }
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
                          {'WALLET'}
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 2,
                          justifyContent: 'center',
                          alignItems: 'flex-end',
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.props.navigation.navigate(
                              stackNavigator.WALLET_SETTINGS,
                            );
                          }}>
                          <Image
                            style={{
                              width: getSize.scale(20),
                              height: getSize.scale(20),
                              resizeMode: 'contain',
                            }}
                            source={{ uri: 'ic_settings' }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    flex: 6,
                    paddingHorizontal: 20,
                    marginTop: getSize.scale(30),
                  }}>
                  <View
                    style={{
                      width: '100%',
                      marginBottom: 30,
                      paddingTop: getSize.scale(40),
                      position: 'relative',
                      height: getSize.scale(200),
                      paddingHorizontal: 20,
                    }}>
                    <Text
                      style={{
                        color: '#999999',
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                      }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      flex: 4,
                      position: 'relative',
                    }}>
                    <Text
                      style={{
                        color: '#999999',
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        marginBottom: 10,
                      }}>
                      Paste your private key
                    </Text>
                    <View
                      style={{
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: '#FFFFFF',
                        height: 150,
                        padding: 10,
                      }}>
                      {/* <Text style={{
                                                color: "#999999",
                                                fontStyle: "italic",
                                                fontWeight: "bold"
                                            }}>
                                                Enter seed phrase word and separate with space
                                            </Text> */}
                      <TextInput
                        placeholderTextColor={'#999999'}
                        onChangeText={itemValue =>
                          this.onChangeText('verificationcode', itemValue)
                        }
                        value={this.state.verificationcode}
                        // autoFocus={true}
                        onFocus={() => this.SetIsHiddenBottom(true)}
                        style={{
                          height: '100%',
                          width: '100%',
                          // marginTop: 10,
                          // borderWidth: 1,
                          borderRadius: 10,
                          paddingHorizontal: 10,
                          // borderColor: "#000000",
                          // borderWidth: 1,
                          // borderBottomWidth: 3,
                          // borderRightWidth: 3
                          fontSize: 20,
                          textAlignVertical: 'top',
                          color: 'white',
                        }}
                        placeholder={
                          'Example: d984d05135a85ea503ac26d6f48a0deb4e999588612c4c1fe14cc46da0757d9f'
                        }></TextInput>
                    </View>
                    {/* <TouchableOpacity style={{
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flex: 1,
                                            height: getSize.scale(100)
                                        }}>
                                            <Text style={{
                                                color: "#2EDBDC",
                                                fontStyle: "italic",
                                                fontWeight: "bold",
                                                marginBottom: 10,
                                                fontSize: 20
                                            }}>
                                                QR code
                                            </Text>
                                        </TouchableOpacity> */}
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          {!isHiddenBottom && (
            <View
              style={{
                // position: "absolute",
                // bottom: 0,
                height: 100,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 0,
              }}>
              <TouchableOpacity
                onPress={this.importWallet}
                // disabled={this.state.disabledTouch}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 8,
                  paddingHorizontal: 3,
                  borderRadius: 50,
                  borderColor: '#888888',
                  color: '#000000',
                  borderWidth: 1,
                  borderBottomWidth: 2,
                  borderRightWidth: 2,
                  backgroundColor: '#2EDBDC',
                  // opacity: this.state.disabledTouch ? 0.5 : 1,
                  width: '60%',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    color: '#ffffff',
                  }}>
                  {' '}
                  UPDATE
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({
  user: state.initReducer.user,
});
const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(_action, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(WalletImport);
