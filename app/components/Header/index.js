/** @format */

import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Tooltip } from 'react-native';

import { getSize, Colors } from '../../common';
import { tabNavigator, stackNavigator } from '../../navigation/nameNavigator';

class Index extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            modalVisibles: true, // true,
            toolTipStart: false,
            toolTipSneaker: false,
            toolTipProfile: false,
            toolTipSol: false,
            refreshing: false
        };
    }
    render()
    {
        const { navigation, balanceUserId } = this.props
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginHorizontal: getSize.scale(16)
                }}>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <Tooltip
                        isVisible={this.state.toolTipProfile}
                        content={
                            <View style={{ flex: 1, width: '100%' }}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontSize: getSize.scale(14),
                                        position: 'absolute',
                                        top: 0,
                                        right: 0
                                    }}>
                                    STEP 5/5
                                </Text>
                                <View
                                    style={{
                                        flex: 1,
                                        padding: getSize.scale(16)
                                    }}>
                                    <Text
                                        style={{
                                            marginTop: getSize.scale(18),
                                            textAlign: 'center',
                                            fontSize: getSize.scale(14)
                                        }}>
                                        Spending account shows tokens you can spend in
                                        MOVEARN
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        paddingBottom: getSize.scale(16)
                                    }}>
                                    <TouchableOpacity
                                        onPress={() =>
                                            this.setState({ toolTipProfile: false })
                                        }
                                        style={{
                                            justifyContent: 'center',
                                            flexDirection: 'row',
                                            alignItems: 'center'
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
                                                    height: 2
                                                },
                                                shadowOpacity: 0.25,
                                                shadowRadius: 4
                                            }}>
                                            <Text
                                                style={{
                                                    color: '#fff',
                                                    fontStyle: 'italic',
                                                    fontWeight: 'bold',
                                                    fontSize: getSize.scale(18)
                                                }}>
                                                FINISH
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                        placement="bottom">
                        <View style={{ width: '100%' }}>
                            <TouchableOpacity
                                disabled={this.state.toolTipProfile}
                                onPress={() => navigation.navigate(stackNavigator.PROFILE)}>
                                <Image
                                    style={{
                                        width: getSize.scale(48),
                                        height: getSize.scale(48),
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: 'ic_user' }}
                                />
                                <Text
                                    style={{
                                        color: '#fff',
                                        position: 'absolute',
                                        bottom: 1,
                                        left: getSize.scale(6),
                                        fontSize: getSize.scale(11),
                                        fontWeight: 'bold'
                                    }}>
                                    {'80 km'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Tooltip>
                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <Tooltip
                        isVisible={this.state.toolTipSol}
                        content={
                            <View style={{ flex: 1, width: '100%' }}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontSize: getSize.scale(14),
                                        position: 'absolute',
                                        top: 0,
                                        right: 0
                                    }}>
                                    STEP 4/5
                                </Text>
                                <View
                                    style={{
                                        flex: 1,
                                        padding: getSize.scale(16)
                                    }}>
                                    <Text
                                        style={{
                                            marginTop: getSize.scale(18),
                                            textAlign: 'center',
                                            fontSize: getSize.scale(14)
                                        }}>
                                        Deposit MOV to Wallet in order to fund your
                                        Spending account
                                    </Text>
                                    <Text
                                        style={{
                                            marginTop: getSize.scale(18),
                                            textAlign: 'center',
                                            fontSize: getSize.scale(14)
                                        }}>
                                        Wallet shows tokens you can deposit or withdraw
                                        to/from outside address
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'space-evenly',
                                        flexDirection: 'row',
                                        paddingBottom: getSize.scale(16)
                                    }}>
                                    <TouchableOpacity
                                        onPress={() => this.setState({ toolTipSol: false })}
                                        style={{
                                            justifyContent: 'center',
                                            flexDirection: 'row',
                                            alignItems: 'center'
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
                                                    height: 2
                                                },
                                                shadowOpacity: 0.25,
                                                shadowRadius: 4
                                            }}>
                                            <Text
                                                style={{
                                                    color: '#fff',
                                                    fontStyle: 'italic',
                                                    fontWeight: 'bold',
                                                    fontSize: getSize.scale(18)
                                                }}>
                                                SKIP
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() =>
                                            this.setState({
                                                toolTipSol: false,
                                                toolTipProfile: true
                                            })
                                        }
                                        style={{
                                            justifyContent: 'center',
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}>
                                        <View
                                            style={{
                                                width: getSize.scale(100),
                                                height: getSize.scale(40),
                                                borderRadius: 20,
                                                overflow: 'hidden',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: 'rgba(244, 67, 105, 1)',
                                                borderWidth: 1,
                                                borderColor: 'rgba(244, 67, 105, 0.3)',
                                                elevation: 4,
                                                shadowColor: 'rgba(89, 89, 89, 0.3)', // "rgba(52, 52, 52, alpha)", //trong suốt
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 2
                                                },
                                                shadowOpacity: 0.25,
                                                shadowRadius: 4
                                            }}>
                                            <Text
                                                style={{
                                                    color: '#fff',
                                                    fontStyle: 'italic',
                                                    fontWeight: 'bold',
                                                    fontSize: getSize.scale(18)
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
                                width: '100%',
                                justifyContent: 'flex-end',
                                flexDirection: 'row'
                            }}>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    flexDirection: 'row'
                                }}>
                                <Image
                                    style={{
                                        width: getSize.scale(25),
                                        height: getSize.scale(25),
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: 'ic_location' }}
                                />
                                <Text
                                    style={{
                                        marginHorizontal: getSize.scale(4),
                                        fontSize: getSize.scale(12)
                                    }}>
                                    {balanceUserId && balanceUserId.mer ? Number(balanceUserId.mer).toFixed(2) : "0"}
                                </Text>
                                <Image
                                    style={{
                                        width: getSize.scale(25),
                                        height: getSize.scale(25),
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: 'ic_coin' }}
                                />
                                <Text
                                    style={{
                                        marginHorizontal: getSize.scale(4),
                                        fontSize: getSize.scale(12)
                                    }}>
                                    {balanceUserId && balanceUserId.usdt ? Number(balanceUserId.usdt).toFixed(2) : "0"}
                                </Text>

                            </View>
                            <TouchableOpacity
                                disabled={this.state.toolTipSol}
                                onPress={
                                    // () => navigation.navigate(stackNavigator.WALLET_HOME)
                                    () =>
                                        navigation.navigate(stackNavigator.SPENDING_WALLET)
                                }>
                                <Image
                                    style={{
                                        width: getSize.scale(37),
                                        height: getSize.scale(37),
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: 'ic_wallet' }}
                                />
                            </TouchableOpacity>
                        </View>
                    </Tooltip>
                </View>
            </View>
        );
    }
}
export default Index;