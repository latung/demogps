import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Text,
    Modal,
    Platform
} from 'react-native';
import { getSize, Colors } from '../../../common';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { stackNavigator } from '../../../navigation/nameNavigator';
import * as _action from '../../../redux/action/ActionHandle';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function ItemPromos({ item, index }) {
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
                width: getSize.Width,
                justifyContent: 'center',
                alignItems: 'center',
                // height: getSize.Width / 1.5,
                // paddingHorizontal: getSize.scale(8),
                paddingTop: index === 0 ? getSize.scale(8) : 0
                // marginVertical: getSize.scale(4),
                // marginBottom: 25
            }}>
            <ImageBackground
                source={{ uri: 'ic_frame_card' }}
                style={{
                    width: getSize.Width - getSize.scale(16),
                    height: getSize.scale(190),
                    flexDirection: 'row',
                    alignItems: 'center',
                    left: -8
                    // justifyContent: 'center'
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-between',
                        paddingHorizontal: getSize.scale(16)
                    }}>
                    <View
                        style={{
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            width: '70%',
                            paddingHorizontal: getSize.scale(40),
                            paddingVertical: getSize.scale(8)
                        }}>
                        <Text
                            style={{
                                color: '#767676',
                                fontSize: getSize.scale(18)
                            }}>
                            Sale off
                        </Text>
                        <View
                            style={{
                                width: '100%',
                                justifyContent: 'center',
                                // alignItems: "center",
                                marginVertical: getSize.scale(5)
                            }}>
                            <Image
                                style={{ width: getSize.scale(120), height: getSize.scale(45) }}
                                source={{ uri: 'ic_70per' }}
                            />
                        </View>
                        <Text
                            style={{
                                color: '#0974F1',
                                fontSize: getSize.scale(18),
                                fontStyle: 'italic',
                                fontWeight: 'bold'
                            }}>
                            All Sneakers Items
                        </Text>
                        <View
                            style={{
                                width: '100%',
                                height: 30,
                                justifyContent: 'flex-end',
                                alignItems: 'center'
                            }}>
                            <Text
                                style={{
                                    color: '#767676'
                                }}>
                                15/4/2022 - 15/6/2022
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '1%',
                            left: getSize.scale(-4),
                            height: '80%'
                        }}>
                        <Image
                            source={{ uri: 'ic_line_ver' }}
                            style={{ width: 5, height: '100%' }}
                        />
                    </View>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '30%'
                        }}>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    color: '#F44369',
                                    fontSize: 30,
                                    fontWeight: 'bold'
                                }}>
                                BUY
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            {/* Switch popup when not enough Sol */}
            <Modal
                Modal
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
                            height: getSize.Height / 2.6,
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
                                        height: 80,
                                        width: 80,
                                        resizeMode: 'contain'
                                    }}
                                    source={{
                                        uri: item.img
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
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        flexDirection: 'row'
    }
});
