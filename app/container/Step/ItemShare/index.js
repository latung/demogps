import React, { useState, useCallback, useRef, useEffect, forwardRef } from 'react';
import { View, Image, TouchableOpacity, Text, Platform, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { getPreciseDistance } from 'geolib';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { getSize, location } from '../../../common';
import Geolocation from 'react-native-geolocation-service';
import { stackNavigator, tabNavigator } from '../../../navigation/nameNavigator';
import * as _action from '../../../redux/action/ActionHandle';

function ItemShare()
{
    const navigation = useNavigation();
    const selector = useSelector((state) => ({
        screenState: state.initReducer.screenState,
        initReducer: state.initReducer
    }));
    const dispatch = useDispatch();

    // TIMER
    const formatTime = (timer) =>
    {
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
                        marginHorizontal: getSize.scale(16)
                    }}>
                    <TouchableOpacity
                        onPress={() =>
                        {
                            dispatch(
                                _action.changeScreenState({
                                    ...selector.screenState,
                                    isScreenCongrats: false,
                                    isScreenShare: false
                                })
                            );
                            return navigation.navigate(tabNavigator.TAB_HOME);
                        }}
                        style={{ flex: 2, justifyContent: 'center' }}>
                        <Image
                            style={{
                                width: getSize.scale(28),
                                height: getSize.scale(28),
                                resizeMode: 'contain'
                            }}
                            source={{ uri: 'ic_back' }}
                        />
                    </TouchableOpacity>
                    <View
                        style={{
                            flex: 6,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                        <Text
                            style={{
                                fontSize: getSize.scale(18),
                                color: '#000',
                                fontWeight: 'bold'
                            }}>
                            {'SHARE'}
                        </Text>
                    </View>
                    <View style={{ flex: 2 }} />
                </View>
            </View>

            {/* Content */}
            <View
                style={{
                    flex: 7,
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: getSize.scale(-32)
                }}>
                <View style={{ flex: 8 }}>
                    <View
                        style={{
                            flex: 7,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            width: getSize.Width - getSize.scale(32),
                            borderRadius: getSize.scale(16)
                        }}>
                        <View
                            style={{
                                flex: 1.5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}>
                            <Image
                                style={{
                                    width: getSize.scale(54),
                                    height: getSize.scale(54),
                                    resizeMode: 'contain'
                                }}
                                source={{ uri: 'ic_congrats_avata' }}
                            />
                            <View
                                style={{
                                    justifyContent: 'center',
                                    marginLeft: getSize.scale(8)
                                }}>
                                <Text
                                    style={{
                                        fontSize: getSize.scale(16),
                                        color: 'rgba(44, 44, 44, 1)',
                                        fontWeight: 'bold'
                                    }}>
                                    Michael Blue
                                </Text>
                                <Text
                                    style={{
                                        fontSize: getSize.scale(14),
                                        color: 'rgba(118, 118, 118, 1)',
                                        fontStyle: 'italic'
                                    }}>
                                    15/4/2022 15:32
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flex: 3,
                                justifyContent: 'center',
                                alignItems: 'center',
                                top: getSize.scale(-16)
                            }}>
                            <Image
                                style={{
                                    width: getSize.Width - getSize.scale(64),
                                    height: getSize.Width,
                                    resizeMode: 'contain'
                                }}
                                source={{ uri: 'ic_share_maps' }}
                            />
                        </View>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'space-evenly',
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderWidth: 0.5,
                                borderColor: 'rgba(236, 236, 236, 1)',
                                width: getSize.Width - getSize.scale(64),
                                borderRadius: getSize.scale(16),
                                top: getSize.scale(-8)
                            }}>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Text
                                    style={{
                                        fontSize: getSize.scale(24),
                                        color: '#000',
                                        fontWeight: 'bold',
                                        fontStyle: 'italic'
                                    }}>
                                    {`1.42`}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: getSize.scale(12),
                                        color: '#000',
                                        fontStyle: 'italic'
                                    }}>
                                    {`Km`}
                                </Text>
                            </View>

                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Text
                                    style={{
                                        fontSize: getSize.scale(24),
                                        color: '#000',
                                        fontWeight: 'bold',
                                        fontStyle: 'italic'
                                    }}>
                                    {`0:25:12`}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: getSize.scale(12),
                                        color: '#000',
                                        fontStyle: 'italic'
                                    }}>
                                    {`Time`}
                                </Text>
                            </View>

                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Text
                                    style={{
                                        fontSize: getSize.scale(24),
                                        color: 'rgba(244, 67, 105, 1)',
                                        fontWeight: 'bold',
                                        fontStyle: 'italic'
                                    }}>
                                    {`0.42`}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: getSize.scale(12),
                                        color: '#000',
                                        fontStyle: 'italic'
                                    }}>
                                    {`MOV`}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 2,
                            justifyContent: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            borderRadius: getSize.scale(16),
                            marginVertical: getSize.scale(8),
                            overflow: 'hidden'
                        }}>
                        <View
                            style={{
                                flex: 7,
                                justifyContent: 'center',
                                marginLeft: getSize.scale(32)
                            }}>
                            <Text
                                style={{
                                    marginVertical: getSize.scale(4),
                                    fontSize: getSize.scale(24),
                                    color: 'rgba(44, 44, 44, 1)',
                                    fontWeight: 'bold',
                                    fontStyle: 'italic',
                                    top: getSize.scale(-8)
                                }}>
                                {`MOVERN `}
                            </Text>
                            <Text
                                style={{
                                    fontSize: getSize.scale(12),
                                    color: 'rgba(118, 118, 118, 1)',
                                    fontStyle: 'italic'
                                }}>
                                {`Make memories became treasury`}
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 3,
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgba(244, 67, 105, 1)'
                            }}>
                            <Image
                                style={{
                                    width: getSize.scale(80),
                                    height: getSize.scale(80),
                                    resizeMode: 'contain'
                                }}
                                source={{ uri: 'ic_qrcode' }}
                            />
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        flex: 2,
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        flexDirection: 'row',
                        top: getSize.scale(48)
                    }}>
                    <TouchableOpacity>
                        <Image
                            style={{
                                width: getSize.Width / 4.2,
                                height: getSize.scale(100),
                                resizeMode: 'contain'
                            }}
                            source={{ uri: 'ic_btn_download' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{
                                width: getSize.Width / 4.2,
                                height: getSize.scale(100),
                                resizeMode: 'contain'
                            }}
                            source={{ uri: 'ic_btn_telegram' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{
                                width: getSize.Width / 4.2,
                                height: getSize.scale(100),
                                resizeMode: 'contain'
                            }}
                            source={{ uri: 'ic_btn_facebook' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{
                                width: getSize.Width / 4.2,
                                height: getSize.scale(100),
                                resizeMode: 'contain'
                            }}
                            source={{ uri: 'ic_btn_twitter' }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View
                style={{
                    flex: 1,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginHorizontal: getSize.scale(16),
                    marginTop: getSize.scale(16)
                }}>
                <TouchableOpacity
                    onPress={() =>
                    {
                        dispatch(
                            _action.changeScreenState({
                                ...selector.screenState,
                                isScreenCongrats: false,
                                isScreenShare: false
                            })
                        );
                        return navigation.navigate(tabNavigator.TAB_HOME);
                    }}>
                    <ImageBackground
                        style={{
                            width: getSize.Width - getSize.scale(32),
                            height: getSize.scale(45),
                            resizeMode: 'contain'
                        }}
                        source={{ uri: 'ic_btn_share_cancel' }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ItemShare;
