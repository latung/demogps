import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, Modal, Platform } from 'react-native';
import { getSize, Colors } from '../../../common';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { stackNavigator } from '../../../navigation/nameNavigator';
import * as _action from '../../../redux/action/ActionHandle';

export default function ItemGems({ item, index }) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [modalBuy, setmodalBuy] = useState(false);
    const [modalTransfer, setmodalTransfer] = useState(false);

    const image =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogMFHOw0CKtwUvuJmhgcSi18GmfqlCxUI6g&usqp=CAU';
    const imageSneakers = 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg';

    return (
        <View
            key={index}
            style={{
                width: getSize.Width / 2.09,
                height: getSize.Width / 2,
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
                            flex: 1,
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
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontStyle: 'italic',
                                    fontWeight: 'bold',
                                    color: '#fff'
                                }}>
                                #
                            </Text>
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontStyle: 'italic',
                                    fontWeight: 'bold',
                                    marginLeft: getSize.scale(2),
                                    color: '#fff'
                                }}>
                                {item.gemsId}
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
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingVertical: getSize.scale(8),
                                    paddingHorizontal: getSize.scale(32)
                                }}>
                                <View style={{ flex: 1 }}>
                                    <Text
                                        style={{
                                            color: item.color,
                                            fontSize: 11
                                        }}>
                                        {`+${item.mint}`}
                                    </Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text
                                        style={{
                                            color: '#000',
                                            fontSize: 11
                                        }}>{`lv${item.level}`}</Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    flex: 8,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Image
                                    source={{ uri: image }}
                                    style={{
                                        width: getSize.scale(60),
                                        height: getSize.scale(60),
                                        resizeMode: 'contain'
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1.5, backgroundColor: '#F6F6F6' }}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginHorizontal: getSize.scale(16)
                            }}>
                            <View
                                style={{
                                    flex: 6,
                                    justifyContent: 'center'
                                }}>
                                <Text
                                    style={{
                                        fontSize: 13,
                                        fontStyle: 'italic'
                                    }}>{`+${item.mint} Gallery`}</Text>
                            </View>
                            {/* <View style={{ flex: 4 }}>
                                <Modal
                                    animationType="fade"
                                    transparent={true}
                                    visible={modalBuy}
                                    onRequestClose={() => setmodalBuy(!modalBuy)}>
                                    <TouchableOpacity
                                        onPress={() => setmodalBuy(!modalBuy)}
                                        activeOpacity={1}
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                        <View
                                            style={{
                                                height: getSize.Height / 2.5,
                                                width: getSize.Width - getSize.scale(64),
                                                borderRadius: 20,
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                shadowColor: '#000',
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 2
                                                },
                                                shadowOpacity: 0.25,
                                                shadowRadius: 4,
                                                elevation: 5,
                                                backgroundColor: Colors.WHITE
                                            }}>
                                            <View
                                                style={{
                                                    flex: 1,
                                                    width: '100%',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    flexDirection: 'row'
                                                }}>
                                                <View style={{ flex: 1 }} />
                                                <View
                                                    style={{
                                                        flex: 8,
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                    <Text
                                                        style={{
                                                            fontSize: 16,
                                                            fontStyle: 'italic',
                                                            fontWeight: 'bold',
                                                            textAlign: 'center'
                                                        }}>
                                                        BUY
                                                    </Text>
                                                </View>
                                                <TouchableOpacity
                                                    onPress={() => setmodalBuy(!modalBuy)}
                                                    style={{
                                                        flex: 1,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        overflow: 'hidden'
                                                    }}>
                                                    <Image
                                                        style={{
                                                            width: 20,
                                                            height: 20,
                                                            borderRadius: 50,
                                                            resizeMode: 'cover'
                                                        }}
                                                        source={{ uri: image }}
                                                    />
                                                </TouchableOpacity>
                                            </View>

                                            <View
                                                style={{
                                                    flex: 8,
                                                    width: '100%',
                                                    paddingHorizontal: getSize.scale(16),
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between'
                                                }}>
                                                <View
                                                    style={{
                                                        flex: 4,
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center'
                                                    }}>
                                                    <View
                                                        style={{
                                                            flex: 5,
                                                            padding: getSize.scale(8),
                                                            borderWidth: 1,
                                                            borderRadius: 7,
                                                            justifyContent: 'center',
                                                            alignItems: 'center'
                                                        }}>
                                                        <Image
                                                            style={{
                                                                height: 60,
                                                                width: 60,
                                                                resizeMode: 'contain'
                                                            }}
                                                            source={{
                                                                uri: image
                                                            }}
                                                        />
                                                    </View>
                                                    <View
                                                        style={{
                                                            flex: 3,
                                                            justifyContent: 'center',
                                                            alignItems: 'center'
                                                        }}>
                                                        <Text
                                                            style={{
                                                                color: item.color,
                                                                fontWeight: 'bold',
                                                                fontSize: 14
                                                            }}>
                                                            {`Resilience Gem (Lv.${item.level})`}
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                            flex: 1.5,
                                                            flexDirection: 'row',
                                                            borderWidth: 1,
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            borderRadius: 20,
                                                            padding: getSize.scale(2),
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
                                                                    fontSize: 10
                                                                }}>
                                                                #
                                                            </Text>
                                                        </View>
                                                        <Text
                                                            style={{
                                                                color: item.color,
                                                                fontSize: 10,
                                                                marginHorizontal: getSize.scale(4)
                                                            }}>
                                                            {item.gemsId}
                                                        </Text>
                                                    </View>
                                                </View>

                                                <View
                                                    style={{
                                                        flex: 1,
                                                        justifyContent: 'space-evenly',
                                                        alignItems: 'center',
                                                        backgroundColor: Colors.GRAY238,
                                                        width: '100%',
                                                        marginTop: getSize.scale(16),
                                                        borderRadius: 7,
                                                        borderWidth: 1,
                                                        paddingHorizontal: getSize.scale(16),
                                                        flexDirection: 'row'
                                                    }}>
                                                    <View style={{ flex: 1 }}>
                                                        <Text
                                                            style={{
                                                                color: Colors.GREY_DARK,
                                                                fontStyle: 'italic'
                                                            }}>
                                                            Attribute
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                            flex: 1,
                                                            alignItems: 'flex-end'
                                                        }}>
                                                        <Text
                                                            style={{
                                                                fontWeight: '600',
                                                                fontStyle: 'italic',
                                                                color: 'violet'
                                                            }}>
                                                            {`+${item.mint} Resilience`}
                                                        </Text>
                                                    </View>
                                                </View>

                                                <View
                                                    style={{
                                                        flex: 1,
                                                        justifyContent: 'space-evenly',
                                                        alignItems: 'center',
                                                        backgroundColor: Colors.GRAY238,
                                                        width: '100%',
                                                        marginTop: getSize.scale(16),
                                                        borderRadius: 7,
                                                        borderWidth: 1,
                                                        paddingHorizontal: getSize.scale(16),
                                                        flexDirection: 'row'
                                                    }}>
                                                    <View style={{ flex: 1 }}>
                                                        <Text
                                                            style={{
                                                                color: Colors.GREY_DARK,
                                                                fontStyle: 'italic'
                                                            }}>
                                                            Const
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                            flex: 1,
                                                            alignItems: 'flex-end'
                                                        }}>
                                                        <Text
                                                            style={{
                                                                fontWeight: '600',
                                                                fontStyle: 'italic'
                                                            }}>
                                                            {`${item.sol} SOL`}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>

                                            <View
                                                style={{
                                                    flex: 2,
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    flexDirection: 'row'
                                                }}>
                                                <View style={{ flex: 1 }}>
                                                    <TouchableOpacity
                                                        onPress={() => setmodalBuy(!modalBuy)}
                                                        style={{
                                                            width: getSize.Width / 3,
                                                            marginHorizontal: getSize.scale(16),
                                                            paddingVertical: getSize.scale(6),
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            borderRadius: 20,
                                                            borderWidth: 1,
                                                            borderBottomWidth: 3,
                                                            borderRightWidth: 3,
                                                            backgroundColor: Colors.WHITE
                                                        }}>
                                                        <Text
                                                            style={{
                                                                fontSize: 14,
                                                                fontStyle: 'italic',
                                                                fontWeight: 'bold',
                                                                color: '#000'
                                                            }}>
                                                            CANCEL
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            setmodalTransfer(!modalTransfer);
                                                            return setmodalBuy(!modalBuy);
                                                        }}
                                                        style={{
                                                            width: getSize.Width / 3,
                                                            marginHorizontal: getSize.scale(16),
                                                            paddingVertical: getSize.scale(6),
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            borderRadius: 20,
                                                            borderWidth: 1,
                                                            borderBottomWidth: 3,
                                                            borderRightWidth: 3,
                                                            backgroundColor: Colors.GREEN
                                                        }}>
                                                        <Text
                                                            style={{
                                                                fontSize: 14,
                                                                fontStyle: 'italic',
                                                                fontWeight: 'bold',
                                                                color: '#000'
                                                            }}>
                                                            CONFIRM
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </Modal>
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center'
                                    }}>
                                    <TouchableOpacity
                                        onPress={() => setmodalBuy(!modalBuy)}
                                        style={{
                                            borderWidth: 1,
                                            borderColor: '#000',
                                            borderRadius: 20,
                                            backgroundColor: '#33FF99',
                                            overflow: 'hidden'
                                        }}>
                                        <View
                                            style={{
                                                paddingVertical: getSize.scale(4),
                                                borderRadius: 20,
                                                borderBottomWidth: 1,
                                                borderRightWidth: 1,
                                                width: '100%',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: 13,
                                                    fontStyle: 'italic'
                                                }}>
                                                BUY
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View> */}
                        </View>
                    </View>
                </View>
            </View>
            {/* Switch popup when not enough Sol */}
            {/* <Modal
                animationType="fade"
                transparent={true}
                visible={modalTransfer}
                onRequestClose={() => setmodalTransfer(!modalTransfer)}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <View
                        style={{
                            height: getSize.Height / 2.5,
                            width: getSize.Width - getSize.scale(64),
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 2
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5,
                            backgroundColor: Colors.WHITE
                        }}>
                        <View
                            style={{
                                flex: 1,
                                width: '100%',
                                padding: getSize.scale(8)
                            }}>
                            <TouchableOpacity
                                onPress={() => setmodalTransfer(!modalTransfer)}
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'flex-end'
                                }}>
                                <Image
                                    style={{
                                        width: 20,
                                        height: 20,
                                        borderRadius: 50,
                                        resizeMode: 'cover'
                                    }}
                                    source={{ uri: image }}
                                />
                            </TouchableOpacity>
                        </View>

                        <View
                            style={{
                                flex: 6,
                                width: '100%',
                                paddingHorizontal: getSize.scale(16),
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingTop: Platform.OS === 'android' ? getSize.scale(16) : 0
                            }}>
                            <View
                                style={{
                                    flex: 4,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontStyle: 'italic',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        color: Colors.BLACK
                                    }}>
                                    {`INSUFFICIENT SOL IN `}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontStyle: 'italic',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        color: Colors.GREEN
                                    }}>
                                    {`SPENDING ACCOUNT`}
                                </Text>
                                <Image
                                    style={{
                                        height: 60,
                                        width: 60,
                                        resizeMode: 'contain',
                                        marginVertical: getSize.scale(8)
                                    }}
                                    source={{
                                        uri: image
                                    }}
                                />
                            </View>

                            <View
                                style={{
                                    flex: 3,
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                    backgroundColor: Colors.GRAY238,
                                    width: '100%',
                                    marginTop:
                                        Platform.OS === 'android'
                                            ? getSize.scale(32)
                                            : getSize.scale(16),
                                    borderRadius: 7,
                                    borderWidth: 1,
                                    paddingHorizontal: getSize.scale(16)
                                }}>
                                <Text
                                    style={{
                                        color: Colors.GREY_DARK,
                                        fontStyle: 'italic'
                                    }}>
                                    Don't worry! just transfer enough SOL from wallet to the
                                    spending account and you are good to go!
                                </Text>
                            </View>

                            <View
                                style={{
                                    flex: 1,
                                    paddingTop: getSize.scale(8),
                                    justifyContent: 'space-evenly',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            color: Colors.GREY_DARK,
                                            fontStyle: 'italic',
                                            fontWeight: '500'
                                        }}>
                                        Cost
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'flex-end'
                                    }}>
                                    <Text
                                        style={{
                                            fontStyle: 'italic',
                                            fontWeight: '500'
                                        }}>
                                        {`${item.sol} SOL`}
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View
                            style={{
                                flex: 2,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity
                                    onPress={() => setmodalTransfer(!modalTransfer)}
                                    style={{
                                        width: getSize.Width / 3,
                                        marginHorizontal: getSize.scale(16),
                                        paddingVertical: getSize.scale(6),
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 20,
                                        borderWidth: 1,
                                        borderBottomWidth: 3,
                                        borderRightWidth: 3,
                                        backgroundColor: Colors.WHITE
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontStyle: 'italic',
                                            fontWeight: 'bold',
                                            color: '#000'
                                        }}>
                                        CANCEL
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <TouchableOpacity
                                    onPress={() => setmodalTransfer(!modalTransfer)}
                                    style={{
                                        width: getSize.Width / 3,
                                        marginHorizontal: getSize.scale(16),
                                        paddingVertical: getSize.scale(6),
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 20,
                                        borderWidth: 1,
                                        borderBottomWidth: 3,
                                        borderRightWidth: 3,
                                        backgroundColor: Colors.GREEN
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontStyle: 'italic',
                                            fontWeight: 'bold',
                                            color: '#000'
                                        }}>
                                        TRANSFER
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal> */}
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
