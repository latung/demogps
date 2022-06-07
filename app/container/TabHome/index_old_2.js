import React, { Component } from 'react';
import
{
    View,
    Text,
    Platform,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
    Image,
    TextInput,
    StatusBar,
    Modal
} from 'react-native';
import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';
import Tooltip from 'react-native-walkthrough-tooltip';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _action from '../../redux/action/ActionHandle';
import { Popup, Header } from '../../components';
import { location, getSize, Colors } from '../../common';
import { shadowOffset } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

class TabHome extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            modalVisibles: true, // true,
            toolTipStart: false,
            toolTipSneaker: false,
            toolTipProfile: false,
            toolTipSol: false
        };
    }

    componentDidMount = () =>
    {
        // Permissions location
        location.requestPermissions();
        this._getCurrentLocation();
    };

    _getCurrentLocation = async () =>
    {
        const { action, screenState } = this.props;
        return location
            .getCurrentLocation()
            .then((currentLocation) =>
            {
                if (currentLocation) {
                    const { longitude, latitude } = currentLocation;
                    action.changeScreenState({
                        ...screenState,
                        currentLocation: {
                            longitude: Number(longitude),
                            latitude: Number(latitude)
                        }
                    });
                }
            })
            .catch((err) =>
            {
                if (err === 1) {
                    return Toast.show('Chưa cấp quyền định vị');
                }
                if (err === 2) {
                    return Toast.show('Kết nối mạng không ổn định');
                }
                if (err === 3) {
                    return Toast.show('Hết thời gian phản hồi máy chủ');
                }
            });
    };

    render()
    {
        const { navigation, screenState, action } = this.props;
        const { modalVisible } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground
                    style={{
                        width: getSize.Width,
                        height: getSize.Height,
                        position: 'absolute',
                        resizeMode: 'contain',
                        zIndex: -2
                    }}
                    source={{ uri: 'ic_background' }}
                />

                <View
                    style={{
                        flex: Platform.OS === 'android' ? 0 : 1,
                        minHeight: Platform.OS === 'android' ? getSize.scale(48) : 0,
                        marginVertical: Platform.OS === 'android' ? getSize.scale(8) : 0
                    }}>
                    {/* <Header /> */}
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'row',
                            marginHorizontal: getSize.scale(16)
                        }}>
                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                            {/* <TouchableOpacity
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
                            </TouchableOpacity> */}
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
                                            {/* <TouchableOpacity
                                                onPress={() =>
                                                    this.setState({
                                                        toolTipProfile: false,
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
                                            </TouchableOpacity> */}
                                        </View>
                                    </View>
                                }
                                placement="bottom"
                                useInteractionManager={true}
                                topAdjustment={
                                    Platform.OS === 'android' ? -StatusBar.currentHeight : 0
                                }>
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
                            {/* <View
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
                                    {8.888}
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
                                    {8.888}
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate(stackNavigator.WALLET_HOME)}>
                                <Image
                                    style={{
                                        width: getSize.scale(37),
                                        height: getSize.scale(37),
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: 'ic_wallet' }}
                                />
                            </TouchableOpacity> */}
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
                                                Deposit BFI to Wallet in order to fund your
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
                                placement="bottom"
                                useInteractionManager={true}
                                topAdjustment={
                                    Platform.OS === 'android' ? -StatusBar.currentHeight : 0
                                }>
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
                                            {8.888}
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
                                            {8.888}
                                        </Text>
                                    </View>
                                    <TouchableOpacity
                                        disabled={this.state.toolTipSol}
                                        onPress={() =>
                                            navigation.navigate(stackNavigator.WALLET_HOME)
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
                </View>

                <View style={{ flex: 9 }}>
                    <View style={{ flex: 1, margin: getSize.scale(16) }}>
                        {/* <View style={{ flex: 1 }}>
                            <ImageBackground
                                style={{
                                    flex: 1,
                                    resizeMode: 'contain',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    padding: getSize.scale(16)
                                }}
                                source={{ uri: 'ic_home_frame' }}>
                                <View style={{ flex: 1 }}>
                                    <Image
                                        style={{
                                            width: getSize.scale(176),
                                            height: getSize.scale(176),
                                            resizeMode: 'contain'
                                        }}
                                        source={{ uri: 'ic_shoe_jogging' }}
                                    />
                                </View>
                                <View style={{ flex: 1, marginLeft: getSize.scale(16) }}>
                                    <View
                                        style={{
                                            borderWidth: 1,
                                            borderRadius: 20,
                                            marginHorizontal: getSize.scale(16),
                                            marginVertical: getSize.scale(8),
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#0974F1',
                                            borderColor: '#1A5BA8'
                                        }}>
                                        <Text
                                            style={{
                                                color: '#fff',
                                                fontWeight: 'bold',
                                                fontSize: getSize.scale(16),
                                                padding: getSize.scale(4)
                                            }}>
                                            # 25698765
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            borderWidth: 1,
                                            borderRadius: 20,
                                            marginHorizontal: getSize.scale(16),
                                            marginVertical: getSize.scale(8),
                                            justifyContent: 'center',
                                            alignItems: 'flex-start',
                                            width: '50%',
                                            backgroundColor: 'rgba(167, 155, 191, 0.2)',
                                            borderColor: '#A79BBF'
                                        }}>
                                        <View
                                            style={{
                                                borderRadius: 20,
                                                borderWidth: 1,
                                                paddingHorizontal: getSize.scale(8),
                                                backgroundColor: '#F44369',
                                                borderColor: '#F44369',
                                                margin: 1
                                            }}>
                                            <Text
                                                style={{
                                                    color: '#fff',
                                                    fontWeight: 'bold'
                                                }}>
                                                15/65
                                            </Text>
                                        </View>
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
                                            borderColor: '#A79BBF'
                                        }}>
                                        <Text
                                            style={{
                                                color: '#A79BBF',
                                                fontWeight: 'bold'
                                            }}>
                                            Lv 26
                                        </Text>
                                    </View>
                                </View>
                            </ImageBackground>

                            <View
                                style={{
                                    position: 'absolute',
                                    top: getSize.scale(-8),
                                    marginHorizontal: getSize.scale(32),
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    borderColor: '#A79BBF',
                                    paddingHorizontal: getSize.scale(16),
                                    paddingVertical: getSize.scale(4),
                                    backgroundColor: Colors.WHITE,
                                    flexDirection: 'row'
                                }}>
                                <Text style={{ fontSize: getSize.scale(14), fontWeight: 'bold' }}>
                                    Jogger
                                </Text>
                                <Image
                                    style={{ width: 16, height: 16, resizeMode: 'contain' }}
                                    source={{ uri: 'ic_ray' }}
                                />
                                <Image
                                    style={{ width: 16, height: 16, resizeMode: 'contain' }}
                                    source={{ uri: 'ic_ray' }}
                                />
                                <Image
                                    style={{ width: 16, height: 16, resizeMode: 'contain' }}
                                    source={{ uri: 'ic_ray' }}
                                />
                            </View>
                        </View> */}
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Tooltip
                                isVisible={this.state.toolTipSneaker}
                                content={
                                    <View style={{ flex: 1 }}>
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                fontSize: getSize.scale(14),
                                                position: 'absolute',
                                                top: 0,
                                                right: 0
                                            }}>
                                            STEP 3/5
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
                                                To use the app, you MUST buy or rent an NFT Sneaker
                                                from the Marketplace
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
                                                // onPress={() => action.shoes()}
                                                onPress={() =>
                                                    this.setState({ toolTipSneaker: false })
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
                                                        SKIP
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                // onPress={() => action.shoes()}
                                                onPress={() =>
                                                    this.setState({
                                                        toolTipSneaker: false,
                                                        toolTipSol: true
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
                                placement="bottom"
                                useInteractionManager={true}
                                topAdjustment={
                                    Platform.OS === 'android' ? -StatusBar.currentHeight : 0
                                }>
                                <View
                                    style={{
                                        width: getSize.Width - getSize.scale(32),
                                        height: getSize.Width / 2
                                    }}>
                                    <ImageBackground
                                        style={{
                                            flex: 1,
                                            resizeMode: 'contain',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            padding: getSize.scale(16)
                                        }}
                                        source={{ uri: 'ic_home_frame' }}>
                                        <View style={{ flex: 1 }}>
                                            <Image
                                                style={{
                                                    width: getSize.scale(176),
                                                    height: getSize.scale(176),
                                                    resizeMode: 'contain'
                                                }}
                                                source={{ uri: 'ic_shoe_jogging' }}
                                            />
                                        </View>
                                        <View style={{ flex: 1, marginLeft: getSize.scale(16) }}>
                                            <View
                                                style={{
                                                    borderWidth: 1,
                                                    borderRadius: 20,
                                                    marginHorizontal: getSize.scale(16),
                                                    marginVertical: getSize.scale(8),
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    backgroundColor: '#0974F1',
                                                    borderColor: '#1A5BA8'
                                                }}>
                                                <Text
                                                    style={{
                                                        color: '#fff',
                                                        fontWeight: 'bold',
                                                        fontSize: getSize.scale(16),
                                                        padding: getSize.scale(4)
                                                    }}>
                                                    # 25698765
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    borderWidth: 1,
                                                    borderRadius: 20,
                                                    marginHorizontal: getSize.scale(16),
                                                    marginVertical: getSize.scale(8),
                                                    justifyContent: 'center',
                                                    alignItems: 'flex-start',
                                                    width: '50%',
                                                    backgroundColor: 'rgba(167, 155, 191, 0.2)',
                                                    borderColor: '#A79BBF'
                                                }}>
                                                <View
                                                    style={{
                                                        borderRadius: 20,
                                                        borderWidth: 1,
                                                        paddingHorizontal: getSize.scale(8),
                                                        backgroundColor: '#F44369',
                                                        borderColor: '#F44369',
                                                        margin: 1
                                                    }}>
                                                    <Text
                                                        style={{
                                                            color: '#fff',
                                                            fontWeight: 'bold'
                                                        }}>
                                                        15/65
                                                    </Text>
                                                </View>
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
                                                    borderColor: '#A79BBF'
                                                }}>
                                                <Text
                                                    style={{
                                                        color: '#A79BBF',
                                                        fontWeight: 'bold'
                                                    }}>
                                                    Lv 26
                                                </Text>
                                            </View>
                                        </View>
                                    </ImageBackground>

                                    <View
                                        style={{
                                            position: 'absolute',
                                            top: getSize.scale(-8),
                                            marginHorizontal: getSize.scale(32),
                                            borderWidth: 1,
                                            borderRadius: 20,
                                            borderColor: '#A79BBF',
                                            paddingHorizontal: getSize.scale(16),
                                            paddingVertical: getSize.scale(4),
                                            backgroundColor: Colors.WHITE,
                                            flexDirection: 'row'
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(14),
                                                fontWeight: 'bold'
                                            }}>
                                            Jogger
                                        </Text>
                                        <Image
                                            style={{ width: 16, height: 16, resizeMode: 'contain' }}
                                            source={{ uri: 'ic_ray' }}
                                        />
                                        <Image
                                            style={{ width: 16, height: 16, resizeMode: 'contain' }}
                                            source={{ uri: 'ic_ray' }}
                                        />
                                        <Image
                                            style={{ width: 16, height: 16, resizeMode: 'contain' }}
                                            source={{ uri: 'ic_ray' }}
                                        />
                                    </View>
                                </View>
                            </Tooltip>
                        </View>
                    </View>

                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginHorizontal: getSize.scale(16),
                            justifyContent: 'space-between',
                            alignItems: 'flex-start'
                        }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <ImageBackground
                                style={{
                                    width: getSize.scale(80),
                                    height: getSize.scale(98),
                                    borderRadius: getSize.scale(17),
                                    resizeMode: 'contain',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                source={{ uri: 'ic_chest_slot' }}>
                                <View
                                    style={{
                                        flex: 6,
                                        justifyContent: 'center',
                                        marginVertical: getSize.scale(16)
                                    }}>
                                    <Image
                                        style={{ width: 48, height: 48, resizeMode: 'contain' }}
                                        source={{ uri: 'ic_chest' }}
                                    />
                                </View>
                                <View
                                    style={{
                                        flex: 4,
                                        width: '90%',
                                        borderRadius: 20,
                                        justifyContent: 'flex-start',
                                        alignItems: 'center'
                                    }}>
                                    <View
                                        style={{
                                            width: '90%',
                                            backgroundColor: '#F44369',
                                            borderRadius: 20,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(10),
                                                fontWeight: 'bold',
                                                color: '#fff',
                                                padding: getSize.scale(4)
                                            }}>
                                            Open
                                        </Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <ImageBackground
                                style={{
                                    width: getSize.scale(80),
                                    height: getSize.scale(98),
                                    borderRadius: getSize.scale(17),
                                    resizeMode: 'contain',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                source={{ uri: 'ic_chest_slot' }}>
                                <View
                                    style={{
                                        flex: 6,
                                        justifyContent: 'center',
                                        marginVertical: getSize.scale(16)
                                    }}>
                                    <Image
                                        style={{ width: 48, height: 48, resizeMode: 'contain' }}
                                        source={{ uri: 'ic_chest' }}
                                    />
                                </View>
                                <View
                                    style={{
                                        flex: 4,
                                        width: '90%',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center'
                                    }}>
                                    <View
                                        style={{
                                            width: '90%',
                                            backgroundColor: '#A79BBF',
                                            borderRadius: 10,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            padding: getSize.scale(4)
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(10),
                                                fontWeight: 'bold',
                                                color: '#fff'
                                            }}>
                                            Open Now
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(10),
                                                color: '#fff'
                                            }}>
                                            18 BFI
                                        </Text>
                                    </View>
                                </View>

                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: getSize.scale(-30),
                                        marginTop: getSize.scale(16),
                                        borderRadius: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        padding: getSize.scale(4)
                                    }}>
                                    <Image
                                        style={{
                                            width: 16,
                                            height: 16,
                                            resizeMode: 'contain'
                                        }}
                                        source={{ uri: 'ic_clock_red' }}
                                    />
                                    <View
                                        style={{
                                            borderRadius: 20,
                                            overflow: 'hidden',
                                            marginHorizontal: 2
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(10),
                                                color: '#fff',
                                                fontWeight: 'bold',
                                                fontStyle: 'italic',
                                                backgroundColor: '#F44369',
                                                paddingVertical: getSize.scale(2),
                                                paddingHorizontal: getSize.scale(4)
                                            }}>
                                            23h 59m
                                        </Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <ImageBackground
                                style={{
                                    width: getSize.scale(80),
                                    height: getSize.scale(98),
                                    borderRadius: getSize.scale(17),
                                    resizeMode: 'contain',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                source={{ uri: 'ic_chest_slot' }}>
                                <View
                                    style={{
                                        flex: 6,
                                        justifyContent: 'center',
                                        marginVertical: getSize.scale(16)
                                    }}>
                                    <Image
                                        style={{ width: 48, height: 48, resizeMode: 'contain' }}
                                        source={{ uri: 'ic_chest' }}
                                    />
                                </View>
                                <View
                                    style={{
                                        flex: 4,
                                        width: '90%',
                                        borderRadius: 20,
                                        justifyContent: 'flex-start',
                                        alignItems: 'center'
                                    }}>
                                    <View
                                        style={{
                                            width: '90%',
                                            backgroundColor: '#A79BBF',
                                            borderRadius: 20,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(10),
                                                fontWeight: 'bold',
                                                color: '#fff',
                                                padding: getSize.scale(4)
                                            }}>
                                            Locked 3h
                                        </Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <ImageBackground
                                style={{
                                    width: getSize.scale(80),
                                    height: getSize.scale(98),
                                    borderRadius: getSize.scale(17),
                                    resizeMode: 'contain',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                source={{ uri: 'ic_chest_slot' }}>
                                <Text
                                    style={{
                                        fontSize: getSize.scale(14),
                                        fontWeight: 'bold',
                                        color: '#A79BBF',
                                        padding: getSize.scale(8),
                                        textAlign: 'center'
                                    }}>
                                    Chest Slot
                                </Text>
                            </ImageBackground>
                        </View>
                    </View>

                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <View style={{ flex: 1, zIndex: 1 }}>
                            {/* <TouchableOpacity
                                style={{ alignItems: 'center' }}
                                onPress={() => {
                                    // Start
                                    action.changeScreenState({
                                        ...screenState,
                                        isStepStart: true,
                                        isStepPause: false
                                    });
                                    return navigation.navigate(stackNavigator.STEP);
                                }}>
                                <Image
                                    style={{
                                        width: getSize.scale(193),
                                        height: getSize.scale(58),
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: 'ic_btn_start_red' }}
                                />
                            </TouchableOpacity> */}
                            <Tooltip
                                isVisible={this.state.toolTipStart}
                                content={
                                    <View style={{ flex: 1 }}>
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                fontSize: getSize.scale(14),
                                                position: 'absolute',
                                                top: 0,
                                                right: 0
                                            }}>
                                            STEP 2/5
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
                                                Start walking, jogging or running outdoor and make
                                                token earnings
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
                                                // onPress={() => action.shoes()}
                                                onPress={() =>
                                                    this.setState({ toolTipStart: false })
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
                                                        SKIP
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                // onPress={() => action.shoes()}
                                                onPress={() =>
                                                    this.setState({
                                                        toolTipStart: false,
                                                        toolTipSneaker: true
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
                                placement="top"
                                // onClose={() => this.setState({ toolTipStart: false })}
                                useInteractionManager={true}
                                topAdjustment={
                                    Platform.OS === 'android' ? -StatusBar.currentHeight : 0
                                }>
                                <TouchableOpacity
                                    style={{ alignItems: 'center' }}
                                    disabled={this.state.toolTipStart}
                                    onPress={() =>
                                    {
                                        // Start
                                        this.setState({ toolTipStart: false });
                                        action.changeScreenState({
                                            ...screenState,
                                            isStepStart: true,
                                            isStepPause: false
                                        });
                                        return navigation.navigate(stackNavigator.STEP);
                                    }}>
                                    <Image
                                        style={{
                                            width: getSize.scale(193),
                                            height: getSize.scale(58),
                                            resizeMode: 'contain'
                                        }}
                                        source={{ uri: 'ic_btn_start_red' }}
                                    />
                                </TouchableOpacity>
                            </Tooltip>
                        </View>

                        {/* <View
                            style={{
                                flex: 4,
                                justifyContent: 'center',
                                backgroundColor: '#ecf0f1',
                                padding: 40
                            }}>
                            <Tooltip
                                isVisible={this.state.toolTipVisible}
                                content={
                                    <View>
                                        <Text>
                                            {' '}
                                            Hello i am tooltip for below! I get shown on mount of
                                            second screen.{' '}
                                        </Text>
                                    </View>
                                }
                                placement="top"
                                onClose={() => this.setState({ toolTipVisible: false })}
                                useInteractionManager={true}
                                topAdjustment={
                                    Platform.OS === 'android' ? -StatusBar.currentHeight : 0
                                }>
                                <TouchableOpacity
                                    // onPress={() => action.shoes()}
                                    onPress={() => this.setState({ toolTipVisible: true })}
                                    style={{
                                        width: '100%',
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                    <Image
                                        style={{
                                            width: getSize.scale(34),
                                            height: getSize.scale(34),
                                            resizeMode: 'contain'
                                        }}
                                        source={{ uri: 'ic_question' }}
                                    />
                                    <View
                                        style={{
                                            borderRadius: 10,
                                            overflow: 'hidden',
                                            marginLeft: getSize.scale(4)
                                        }}>
                                        <Text
                                            style={{
                                                backgroundColor: '#A79BBF',
                                                color: '#fff',
                                                fontStyle: 'italic',
                                                fontWeight: 'bold',
                                                fontSize: getSize.scale(10),
                                                padding: getSize.scale(4)
                                            }}>
                                            Support
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </Tooltip>
                        </View> */}

                        <View
                            style={{
                                flex: 3,
                                marginTop: getSize.scale(-64),
                                justifyContent: 'space-between',
                                marginHorizontal: getSize.scale(16),
                                flexDirection: 'row',
                                zIndex: -1
                            }}>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                <TouchableOpacity
                                    style={{
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                    <Image
                                        style={{
                                            width: getSize.scale(34),
                                            height: getSize.scale(34),
                                            resizeMode: 'contain'
                                        }}
                                        source={{ uri: 'ic_mail' }}
                                    />
                                    <View
                                        style={{
                                            borderRadius: 10,
                                            overflow: 'hidden',
                                            marginLeft: getSize.scale(4)
                                        }}>
                                        <Text
                                            style={{
                                                backgroundColor: '#A79BBF',
                                                color: '#fff',
                                                fontStyle: 'italic',
                                                fontWeight: 'bold',
                                                fontSize: getSize.scale(10),
                                                padding: getSize.scale(4)
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
                                    alignItems: 'center'
                                }}>
                                <TouchableOpacity
                                    style={{
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                    <Image
                                        style={{
                                            width: getSize.scale(34),
                                            height: getSize.scale(34),
                                            resizeMode: 'contain'
                                        }}
                                        source={{ uri: 'ic_cmm' }}
                                    />
                                    <View
                                        style={{
                                            borderRadius: 10,
                                            overflow: 'hidden',
                                            marginLeft: getSize.scale(4)
                                        }}>
                                        <Text
                                            style={{
                                                backgroundColor: '#A79BBF',
                                                color: '#fff',
                                                fontStyle: 'italic',
                                                fontWeight: 'bold',
                                                fontSize: getSize.scale(10),
                                                padding: getSize.scale(4)
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
                                    alignItems: 'center'
                                }}>
                                <TouchableOpacity
                                    // onPress={() => action.shoes()}
                                    style={{
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                    <Image
                                        style={{
                                            width: getSize.scale(34),
                                            height: getSize.scale(34),
                                            resizeMode: 'contain'
                                        }}
                                        source={{ uri: 'ic_question' }}
                                    />
                                    <View
                                        style={{
                                            borderRadius: 10,
                                            overflow: 'hidden',
                                            marginLeft: getSize.scale(4)
                                        }}>
                                        <Text
                                            style={{
                                                backgroundColor: '#A79BBF',
                                                color: '#fff',
                                                fontStyle: 'italic',
                                                fontWeight: 'bold',
                                                fontSize: getSize.scale(10),
                                                padding: getSize.scale(4)
                                            }}>
                                            Support
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                {/* <Tooltip
                                    isVisible={this.state.toolTipVisible}
                                    content={
                                        <View style={{ flex: 1 }}>
                                            <Text
                                                style={{
                                                    textAlign: 'center',
                                                    fontSize: getSize.scale(14),
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 0
                                                }}>
                                                STEP 2/6
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
                                                    Start walking, jogging or running outdoor and
                                                    make token earnings
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
                                                    // onPress={() => action.shoes()}
                                                    onPress={() =>
                                                        this.setState({ toolTipVisible: true })
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
                                                            backgroundColor:
                                                                'rgba(89, 89, 89, 0.6)',
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
                                                    // onPress={() => action.shoes()}
                                                    onPress={() =>
                                                        this.setState({ toolTipVisible: true })
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
                                                            backgroundColor:
                                                                'rgba(244, 67, 105, 1)',
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
                                    placement="top"
                                    // onClose={() => this.setState({ toolTipVisible: false })}
                                    useInteractionManager={true}
                                    topAdjustment={
                                        Platform.OS === 'android' ? -StatusBar.currentHeight : 0
                                    }>
                                    <TouchableOpacity
                                        // onPress={() => action.shoes()}
                                        onPress={() => this.setState({ toolTipVisible: true })}
                                        style={{
                                            width: '100%',
                                            justifyContent: 'center',
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}>
                                        <Image
                                            style={{
                                                width: getSize.scale(34),
                                                height: getSize.scale(34),
                                                resizeMode: 'contain'
                                            }}
                                            source={{ uri: 'ic_question' }}
                                        />
                                        <View
                                            style={{
                                                borderRadius: 10,
                                                overflow: 'hidden',
                                                marginLeft: getSize.scale(4)
                                            }}>
                                            <Text
                                                style={{
                                                    backgroundColor: '#A79BBF',
                                                    color: '#fff',
                                                    fontStyle: 'italic',
                                                    fontWeight: 'bold',
                                                    fontSize: getSize.scale(10),
                                                    padding: getSize.scale(4)
                                                }}>
                                                Support
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </Tooltip> */}
                            </View>
                        </View>
                    </View>
                </View>

                {/* <View style={{ flex: 2 }}>
                    <Popup modalVisibles={this.state.modalVisibles} title="Popup Phản hồi" />
                    <Popup modalVisibles={this.state.modalVisibles} title="Popup Gợi ý - Hỗ trợ" />
                    <Popup modalVisibles={this.state.modalVisibles} title="Popup Kiểm tra token" />
                </View>
                <View
                    style={{
                        flex: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 16
                    }}>
                    <Text>Hello! TabHome</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(tabNavigator.TAB_STORE)}
                        style={{
                            height: 40,
                            width: 200,
                            backgroundColor: 'violet',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 16
                        }}>
                        <Text>Cửa hàng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            // Start
                            action.changeScreenState({
                                ...screenState,
                                isStepStart: true,
                                isStepPause: false
                            });
                            return navigation.navigate(stackNavigator.STEP);
                        }}
                        style={{
                            height: 40,
                            width: 200,
                            backgroundColor: 'violet',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 16
                        }}>
                        <Text>
                            {!screenState.isStepPause ? 'Bắt đầu Đi dạo' : 'Tiếp tục đi dạo'}
                        </Text>
                    </TouchableOpacity>
                </View> */}
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
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
                                backgroundColor: 'rgba(89, 89, 89, 0.6)'
                            }}>
                            <View
                                style={{
                                    width: getSize.Width - getSize.scale(48),
                                    height: getSize.Width / 1.5,
                                    backgroundColor: 'white',
                                    borderRadius: 20,
                                    alignItems: 'center',
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 4,
                                    elevation: 5
                                }}>
                                <View style={{ flex: 1 }}>
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            fontSize: getSize.scale(14),
                                            position: 'absolute',
                                            top: getSize.scale(8),
                                            right: getSize.scale(16)
                                        }}>
                                        STEP 1/5
                                    </Text>
                                    <View
                                        style={{
                                            flex: 1,
                                            padding: getSize.scale(32)
                                        }}>
                                        <Text
                                            style={{
                                                marginTop: getSize.scale(16),
                                                textAlign: 'center',
                                                fontSize: getSize.scale(18),
                                                fontWeight: 'bold'
                                            }}>
                                            WELCOME TO MOVEARN
                                        </Text>
                                        <Text
                                            style={{
                                                marginTop: getSize.scale(18),
                                                textAlign: 'center',
                                                fontSize: getSize.scale(14)
                                            }}>
                                            MOVEARN is a digital platform through which users can
                                            generate real-world financial and community values by
                                            gamifying personal fitness & traveling experience
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flex: 1,
                                            justifyContent: 'space-evenly',
                                            flexDirection: 'row'
                                        }}>
                                        <TouchableOpacity
                                            onPress={() =>
                                                this.setState({
                                                    modalVisible: false,
                                                    toolTipStart: false
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
                                                    modalVisible: false,
                                                    toolTipStart: true
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
                            </View>
                        </View>
                    </Modal>
                    <TouchableOpacity
                        style={[
                            {
                                borderRadius: 7,
                                padding: 10,
                                elevation: 2
                            },
                            {
                                backgroundColor: '#F194FF'
                            }
                        ]}
                        onPress={() => setModalVisible(true)}>
                        <Text
                            style={{
                                color: 'black',
                                // fontWeight: 'bold',
                                textAlign: 'center'
                            }}>
                            {'Mở popup'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => ({
    isSignIn: state.initReducer.isSignIn,
    screenState: state.initReducer.screenState
});
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(_action, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(TabHome);
// export default TabHome;
