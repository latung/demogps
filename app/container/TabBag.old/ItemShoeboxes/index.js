import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, Modal, Platform } from 'react-native';
import { getSize, Colors } from '../../../common';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { stackNavigator } from '../../../navigation/nameNavigator';
import * as _action from '../../../redux/action/ActionHandle';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function ItemShoeboxes({ item, index }) {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const image =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogMFHOw0CKtwUvuJmhgcSi18GmfqlCxUI6g&usqp=CAU';
    const imageSneakers = 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg';

    return (
        <View
            key={index}
            style={{
                width: getSize.Width / 2.09,
                height: getSize.Width / 1.5,
                paddingHorizontal: getSize.scale(8),
                paddingTop: index === 0 || index === 1 ? getSize.scale(8) : 0,
                marginVertical: getSize.scale(4)
            }}>
            <View
                style={{
                    flex: 1,
                    borderWidth: 2,
                    borderRadius: 20,
                    overflow: 'hidden'
                }}>
                <View
                    style={{
                        flex: 1,
                        borderRadius: 18,
                        borderBottomWidth: 2,
                        borderRightWidth: 3,
                        overflow: 'hidden'
                    }}>
                    <View
                        style={{
                            flex: 1 / 1.4,
                            marginHorizontal: getSize.scale(32),
                            backgroundColor: item.color,
                            borderBottomEndRadius: 10,
                            borderBottomLeftRadius: 10
                        }}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Image
                                source={{
                                    uri: item.img
                                }}
                                style={{
                                    width: 12,
                                    height: 12,
                                    resizeMode: 'contain'
                                }}
                            />
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontStyle: 'italic',
                                    marginLeft: getSize.scale(8),
                                    color: '#fff'
                                }}>
                                {item.classify}
                            </Text>
                        </View>
                    </View>

                    <View style={{ flex: 6 }}>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Image
                                source={{ uri: item.img }}
                                style={{
                                    width: getSize.scale(120),
                                    height: getSize.scale(120),
                                    resizeMode: 'contain'
                                }}
                            />
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    borderWidth: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    padding: getSize.scale(4),
                                    borderColor: item.color
                                }}>
                                <View
                                    style={{
                                        width: getSize.scale(15),
                                        height: getSize.scale(15),
                                        borderRadius: 50,
                                        backgroundColor: item.color,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            color: '#fff',
                                            fontWeight: 'bold',
                                            fontSize: 13
                                        }}>
                                        #
                                    </Text>
                                </View>
                                <Text
                                    style={{
                                        color: item.color,
                                        top: getSize.scale(-2),
                                        marginLeft: getSize.scale(8)
                                    }}>
                                    {item.shoesId}
                                </Text>
                            </View>

                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingVertical: getSize.scale(8),
                                    paddingHorizontal: getSize.scale(40)
                                }}>
                                <View style={{ flex: 1 }}>
                                    <Text
                                        style={{
                                            color: '#000',
                                            fontSize: 11
                                        }}>{`Mint: ${item.mint}`}</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text
                                        style={{
                                            color: '#000',
                                            fontSize: 11
                                        }}>{`Lv ${item.level}`}</Text>
                                </View>
                            </View>

                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    paddingHorizontal: getSize.scale(40)
                                }}>
                                <View
                                    style={{
                                        flex: 1,
                                        height: 8,
                                        backgroundColor: '#D6D6D6',
                                        borderRadius: 20,
                                        flexDirection: 'row',
                                        overflow: 'hidden'
                                    }}>
                                    <View
                                        style={{
                                            flex: 0.8,
                                            backgroundColor: '#33ff99',
                                            borderRadius: 20
                                        }}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* <View style={{ flex: 1.5, backgroundColor: '#F6F6F6' }}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginHorizontal: getSize.scale(4)
                            }}>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    flexDirection: 'row'
                                }}>
                                <Image
                                    source={{ uri: image }}
                                    style={{
                                        width: getSize.scale(15),
                                        height: getSize.scale(15),
                                        resizeMode: 'contain',
                                        marginHorizontal: 2
                                    }}
                                />
                                <Text
                                    style={{
                                        fontSize: 13,
                                        fontStyle: 'italic'
                                    }}>{`${item.level}2`}</Text>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    flexDirection: 'row'
                                }}>
                                <Image
                                    source={{ uri: image }}
                                    style={{
                                        width: getSize.scale(15),
                                        height: getSize.scale(15),
                                        resizeMode: 'contain',
                                        marginHorizontal: 2
                                    }}
                                />
                                <Text
                                    style={{
                                        fontSize: 13,
                                        fontStyle: 'italic'
                                    }}>{`${item.level}2`}</Text>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    flexDirection: 'row'
                                }}>
                                <Image
                                    source={{ uri: image }}
                                    style={{
                                        width: getSize.scale(15),
                                        height: getSize.scale(15),
                                        resizeMode: 'contain',
                                        marginHorizontal: 2
                                    }}
                                />
                                <Text
                                    style={{
                                        fontSize: 13,
                                        fontStyle: 'italic'
                                    }}>{`${item.level}2`}</Text>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    flexDirection: 'row'
                                }}>
                                <Image
                                    source={{ uri: image }}
                                    style={{
                                        width: getSize.scale(15),
                                        height: getSize.scale(15),
                                        resizeMode: 'contain',
                                        marginHorizontal: 2
                                    }}
                                />
                                <Text
                                    style={{
                                        fontSize: 13,
                                        fontStyle: 'italic'
                                    }}>{`${item.level}2`}</Text>
                            </View>
                        </View>
                    </View> */}
                </View>
            </View>
            <View
                style={[
                    {
                        flex: 1,
                        position: 'absolute',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        top: getSize.scale(32),
                        backgroundColor: item.color,
                        padding: 3
                    },
                    {
                        transform: [{ rotate: '-45deg' }]
                    }
                ]}>
                <Text
                    style={{
                        fontSize: 9,
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        color: '#fff'
                    }}>{`NEW`}</Text>
            </View>
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
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        flexDirection: 'row'
    }
});
