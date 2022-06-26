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
import { Popup, Header } from '../../components';
import { getSize, location, Colors } from '../../common';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _action from '../../redux/action/ActionHandle';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSound: false,
    };
  }

  componentDidMount() {
    const { action } = this.props;
    action.Totalkm();
  }

  render() {
    const { navigation, action, user, userId, Totalkm } = this.props;
    console.log('TotalkmTotalkmTotalkmTotalkmTotalkm', Totalkm);

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          style={{
            width: getSize.Width,
            height: getSize.scale(100),
            position: 'absolute',
            resizeMode: 'cover',
            zIndex: -1,
            top: Platform.OS === 'android' ? getSize.scale(-32) : 0,
          }}
          source={{ uri: 'ic_top_bar' }}
        />
        <ImageBackground
          style={{
            width: getSize.Width,
            height: getSize.scale(410),
            position: 'absolute',
            resizeMode: 'cover',
            zIndex: -2,
            top: Platform.OS === 'android' ? getSize.scale(-32) : 0,
          }}
          source={{ uri: 'ic_user_bg_account' }}
        />
        <View
          style={{
            flex: 1,
            marginVertical: Platform.OS === 'android' ? getSize.scale(8) : 0,
          }}>
          {/* HeaderMini */}
          <View
            style={{
              flex: 1 / 2.3,
              minHeight: Platform.OS === 'ios' ? 0 : getSize.scale(30),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: getSize.scale(16),
            }}>
            <TouchableOpacity
              onPress={() => {
                // return navigation.goBack();
                return navigation.navigate(tabNavigator.TAB_HOME);
              }}
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
                {'ACCOUNT'}
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
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{ flex: 1 }}
              // onPress={() => navigation.navigate(stackNavigator.PROFILE_DETAILS)}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  width: getSize.Width,
                  paddingHorizontal: getSize.scale(16),
                }}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{
                      width: getSize.scale(42),
                      height: getSize.scale(42),
                      resizeMode: 'contain',
                    }}
                    source={{ uri: 'ic_congrats_avata' }}
                  />
                  <View
                    style={{
                      justifyContent: 'center',
                      marginLeft: getSize.scale(8),
                    }}>
                    <Text
                      style={{
                        fontSize: getSize.scale(14),
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                      }}>
                      {`${user.username} `}
                      {user.gender == 1 && (
                        <Image
                          style={{
                            width: getSize.scale(15),
                            height: getSize.scale(15),
                            resizeMode: 'contain',
                          }}
                          source={{ uri: 'ic_user_gender_female' }}
                        />
                      )}
                      {user.gender == 2 && (
                        <Image
                          style={{
                            width: getSize.scale(15),
                            height: getSize.scale(15),
                            resizeMode: 'contain',
                          }}
                          source={{ uri: 'ic_user_gender_male' }}
                        />
                      )}
                      {user.gender == 3 && (
                        <Image
                          style={{
                            width: getSize.scale(15),
                            height: getSize.scale(15),
                            resizeMode: 'contain',
                          }}
                          source={{ uri: 'ic_user_gender_other' }}
                        />
                      )}
                      {user.gender == 4 && (
                        <Image
                          style={{
                            width: getSize.scale(15),
                            height: getSize.scale(15),
                            resizeMode: 'contain',
                          }}
                          source={{ uri: 'ic_user_gender_shield_lock' }}
                        />
                      )}
                    </Text>
                    <Text
                      style={{
                        fontSize: getSize.scale(14),
                        color: '#FFFFFF',
                      }}>
                      {`${user.email} `}
                    </Text>
                  </View>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <Image
                    style={{
                      width: getSize.scale(12),
                      height: getSize.scale(12),
                      resizeMode: 'contain',
                    }}
                    source={{ uri: 'ic_user_arrow_right' }}
                  />
                </View>
              </View>
            </TouchableOpacity>

            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: getSize.scale(16),
                marginVertical: getSize.scale(8),
              }}>
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() =>
                  navigation.navigate(stackNavigator.PROFILE_RUNNING_RECORD)
                }>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    flexDirection: 'row',
                    borderRadius: getSize.scale(16),
                    backgroundColor: '#fff',
                    padding: getSize.scale(16),
                  }}>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        marginLeft: getSize.scale(8),
                      }}>
                      <Text
                        style={{
                          fontSize: getSize.scale(14),
                          color: 'rgba(44, 44, 44, 1)',
                          fontWeight: 'bold',
                        }}>
                        Session history
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      flexDirection: 'row',
                    }}>
                    {/* <View
                      style={{
                        justifyContent: 'center',
                        marginLeft: getSize.scale(8),
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          fontSize: getSize.scale(14),
                          color: '#2EDBDC',
                          fontWeight: 'bold',
                        }}>
                        {Totalkm.data?.total_run_distance || 0}
                      </Text>
                      <Text
                        style={{
                          fontSize: getSize.scale(14),
                          marginLeft: getSize.scale(4),
                          color: 'rgba(44, 44, 44, 1)',
                        }}>
                        Km
                      </Text>
                    </View> */}
                    <Image
                      style={{
                        width: getSize.scale(12),
                        height: getSize.scale(12),
                        resizeMode: 'contain',
                      }}
                      source={{ uri: 'ic_user_arrow_right' }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            {/* <View
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                paddingHorizontal: getSize.scale(16)
                            }}>
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    borderRadius: getSize.scale(16),
                                    backgroundColor: '#fff',
                                    padding: getSize.scale(16)
                                }}>
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        flexDirection: 'row'
                                    }}>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            marginLeft: getSize.scale(8)
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(14),
                                                color: 'rgba(44, 44, 44, 1)',
                                                fontWeight: 'bold'
                                            }}>
                                            Daily Donation
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                        flexDirection: 'row'
                                    }}>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            flexDirection: 'row'
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(14),
                                                color: 'rgba(44, 44, 44, 1)',
                                                fontWeight: 'bold'
                                            }}>
                                            {0}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(14),
                                                marginLeft: getSize.scale(4),
                                                color: 'rgba(44, 44, 44, 1)'
                                            }}>
                                            BFI
                                        </Text>
                                    </View>
                                    <Image
                                        style={{
                                            width: getSize.scale(12),
                                            height: getSize.scale(12),
                                            resizeMode: 'contain'
                                        }}
                                        source={{ uri: 'ic_user_arrow_right' }}
                                    />
                                </View>
                            </View>
                        </View> */}
          </View>
          <View style={{ flex: 3, justifyContent: 'space-between' }}>
            <View style={{ flex: 1.5 }} />
            <View
              style={{
                flex: 1.5,
                alignItems: 'flex-start',
                justifyContent: 'space-evenly',
                width: getSize.Width,
                paddingHorizontal: getSize.scale(16),
              }}>
              {/* <View
                                style={{
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                <Text
                                    style={{
                                        fontSize: getSize.scale(14),
                                        color: 'rgba(44, 44, 44, 1)',
                                        fontWeight: 'bold'
                                    }}>
                                    Sound
                                </Text>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() =>
                                            this.setState({ isSound: !this.state.isSound })
                                        }>
                                        <Image
                                            style={{
                                                width: getSize.scale(46),
                                                height: getSize.scale(24),
                                                resizeMode: 'contain'
                                            }}
                                            source={{
                                                uri: !this.state.isSound
                                                    ? 'ic_user_switch'
                                                    : 'ic_user_switch_off'
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View> */}

              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: getSize.scale(14),
                    color: 'rgba(44, 44, 44, 1)',
                    fontWeight: 'bold',
                  }}>
                  Version
                </Text>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <Text
                    style={{
                      fontSize: getSize.scale(14),
                      color: 'rgba(44, 44, 44, 1)',
                      fontWeight: 'bold',
                    }}>
                    0.0.1
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ flex: 3 }} />
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                width: getSize.Width,
                paddingHorizontal: getSize.scale(16),
              }}>
              <TouchableOpacity onPress={() => action.login(false)}>
                <Image
                  style={{
                    width: getSize.scale(200),
                    height: getSize.scale(100),
                    resizeMode: 'contain',
                  }}
                  source={{ uri: 'ic_user_btn_logout' }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  initReducer: state.initReducer,
  screenState: state.initReducer.screenState,
  user: state.initReducer.user,
  userId: state.initReducer.userId,
  Totalkm: state.initReducer.Totalkm,
});
const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(_action, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
// export default Profile;
