import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  forwardRef,
} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Platform,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { getPreciseDistance } from 'geolib';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { getSize, location } from '../../../common';
import Geolocation from 'react-native-geolocation-service';
import {
  stackNavigator,
  tabNavigator,
} from '../../../navigation/nameNavigator';
import * as _action from '../../../redux/action/ActionHandle';
import moment from 'moment';

function ItemCongrats() {
  const navigation = useNavigation();
  const selector = useSelector(state => ({
    screenState: state.initReducer.screenState,
    initReducer: state.initReducer,
  }));
  const dispatch = useDispatch();

  // TIMER
  const formatTime = timer => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
    return timer > 3599
      ? `${getHours}:${getMinutes}:${getSeconds}`
      : `${getMinutes}:${getSeconds}`;
  };

  return (
    <View style={{ flex: 1, width: getSize.Width }}>
      <ImageBackground
        style={{
          width: getSize.Width,
          height: getSize.scale(100),
          position: 'absolute',
          resizeMode: 'cover',
          zIndex: -1,
          top:
            Platform.OS === 'android' ? getSize.scale(-32) : getSize.scale(-48),
        }}
        source={{ uri: 'ic_top_bar' }}
      />
      <ImageBackground
        style={{
          width: getSize.Width,
          height: getSize.scale(390),
          position: 'absolute',
          resizeMode: 'contain',
          zIndex: -2,
          top:
            Platform.OS === 'android' ? getSize.scale(-80) : getSize.scale(-48),
        }}
        source={{ uri: 'ic_img_maps' }}
      />
      {/* Header */}
      <View style={{ flex: 2 / 1.5 }}>
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
              dispatch(
                _action.changeScreenState({
                  ...selector.screenState,
                  isScreenCongrats: false,
                }),
              );
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
              {'CONGRATS!'}
            </Text>
          </View>
          <View style={{ flex: 2 }} />
        </View>
      </View>

      {/* Content */}
      <View
        style={{ flex: 7, justifyContent: 'flex-end', alignItems: 'center' }}>
        <ImageBackground
          style={{
            width: getSize.Width - getSize.scale(32),
            height: getSize.scale(82),
            resizeMode: 'contain',
          }}
          source={{ uri: 'ic_frame_congrats' }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
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
                  flex: 1,
                  justifyContent: 'center',
                  marginLeft: getSize.scale(8),
                }}>
                <Text
                  style={{
                    fontSize: getSize.scale(14),
                    color: 'rgba(44, 44, 44, 1)',
                    fontWeight: 'bold',
                  }}>
                  {selector.initReducer.user?.username}
                </Text>
                <Text
                  style={{
                    fontSize: getSize.scale(14),
                    color: 'rgba(118, 118, 118, 1)',
                  }}>
                  {moment(selector.screenState?.timeFinish).format(
                    'DD/MM/YYYY HH:MM',
                  )}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: getSize.scale(33),
                  color: 'rgba(244, 67, 105, 1)',
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                }}>
                {selector.screenState?.totalDistance?.toFixed(2)}
              </Text>
              <Text
                style={{
                  fontSize: getSize.scale(14),
                  color: 'rgba(118, 118, 118, 1)',
                  marginLeft: getSize.scale(2),
                  top: getSize.scale(-4),
                }}>
                Km
              </Text>
            </View>
          </View>
        </ImageBackground>
        <Image
          style={{
            marginTop: getSize.scale(16),
            width: getSize.scale(195),
            height: getSize.scale(195),
            resizeMode: 'contain',
          }}
          source={{ uri: 'ic_congrats_sneakers' }}
        />

        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            marginHorizontal: getSize.scale(70),
            marginTop: getSize.scale(16),
          }}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  width: getSize.scale(22),
                  height: getSize.scale(22),
                  resizeMode: 'contain',
                }}
                source={{ uri: 'ic_location' }}
              />
              <Text
                style={{
                  fontSize: getSize.scale(20),
                  marginLeft: getSize.scale(8),
                  color: '#000',
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                }}>
                {selector.screenState?.moneyEarned.toFixed(2)}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}>
              <Text
                style={{
                  fontSize: getSize.scale(14),
                  color: '#000',
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                }}>
                {`BFI`}
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'center',
              marginLeft: getSize.scale(116),
            }}>
            <View style={{ flex: 1 }}>
              <View
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  style={{
                    width: getSize.scale(22),
                    height: getSize.scale(22),
                    resizeMode: 'contain',
                  }}
                  source={{ uri: 'ic_congrats_energy' }}
                />
                <Text
                  style={{
                    fontSize: getSize.scale(20),
                    marginLeft: getSize.scale(8),
                    color: '#000',
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                  }}>
                  {selector.screenState?.energy}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{
                    fontSize: getSize.scale(14),
                    color: '#000',
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                  }}>
                  {`ENERGY`}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginHorizontal: getSize.scale(70),
            marginTop: getSize.scale(32),
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'row',
            }}>
            <Image
              style={{
                width: getSize.scale(16),
                height: getSize.scale(16),
                resizeMode: 'contain',
              }}
              source={{ uri: 'ic_clock_grey' }}
            />
            <Text
              style={{
                fontSize: getSize.scale(14),
                color: 'rgba(44, 44, 44, 1)',
                fontStyle: 'italic',
                marginLeft: getSize.scale(8),
              }}>
              {selector.screenState?.totalTime}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'center',
              marginLeft: getSize.scale(116),
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  width: getSize.scale(16),
                  height: getSize.scale(16),
                  resizeMode: 'contain',
                }}
                source={{ uri: 'ic_fast' }}
              />
              <Text
                style={{
                  fontSize: getSize.scale(14),
                  color: 'rgba(44, 44, 44, 1)',
                  fontStyle: 'italic',
                  marginLeft: getSize.scale(8),
                }}>
                {+selector.screenState.totalDistance > 0
                  ? (
                      +selector.screenState.totalDistance /
                      (selector.screenState.totalSecond / 3600)
                    ).toFixed(2)
                  : '0.00'}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'row',
          marginHorizontal: getSize.scale(16),
          marginTop: getSize.scale(16),
        }}>
        <TouchableOpacity
          onPress={() => {
            dispatch(
              _action.changeScreenState({
                ...selector.screenState,
                isScreenCongrats: false,
                isScreenShare: false,
              }),
            );
            return navigation.navigate(tabNavigator.TAB_HOME);
          }}>
          <ImageBackground
            style={{
              width: getSize.scale(100),
              height: getSize.scale(40),
              resizeMode: 'contain',
            }}
            source={{ uri: 'ic_btn_congrats_cancel' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(
              _action.changeScreenState({
                ...selector.screenState,
                isScreenCongrats: false,
                isScreenShare: true,
              }),
            );
            // return navigation.navigate(tabNavigator.TAB_HOME);
          }}>
          <ImageBackground
            style={{
              width: getSize.scale(227),
              height: getSize.scale(40),
              resizeMode: 'contain',
            }}
            source={{ uri: 'ic_btn_congrats_share' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ItemCongrats;
