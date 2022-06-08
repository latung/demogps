import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';
import Tooltip from 'react-native-walkthrough-tooltip';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _action from '../../redux/action/ActionHandle';
import { location, getSize, Colors } from '../../common/';
import * as ApiServices from "./../../service/index";
class index extends Component
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
    componentDidMount = () =>
    {
        const { getUser, userId } = this.props
        if (userId) {

        }
        this.GetUser();

    };
    GetUser = () =>
    {
        const { action } = this.props;
        ApiServices.getUser().then(res =>
        {

            if (res.code === 200) {
                action.getUser(res.data);
                action.setUser(res.data);
                ApiServices.userId({ _id: res.data && res.data._id }).then(res =>
                {
                    if (res.code === 200) {
                        action.userId(res.data)
                    }

                }).catch(err =>
                {

                })
            }
        }).catch(err =>
        {

        })
    }
    render()
    {
        const { navigation, userId } = this.props;
        const balanceUserId = userId.data ? userId.data : { mer: 0, usdt: 0 };
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
                                        BINANSTEP
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
                                    source={{ uri: 'ic_congrats_avata' }}
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
                                    {/* {'80 km'} */}
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
                                        fontSize: getSize.scale(12),
                                        color: "#FFFFFF"
                                    }}>
                                    {balanceUserId && balanceUserId.bfi ? Number(balanceUserId.bfi).toFixed(2) : "0"}
                                </Text>
                                <Image
                                    style={{
                                        width: getSize.scale(25),
                                        height: getSize.scale(25),
                                        resizeMode: 'contain',
                                    }}
                                    source={{ uri: 'ic_coin_t' }}
                                />
                                <Text
                                    style={{
                                        marginHorizontal: getSize.scale(4),
                                        fontSize: getSize.scale(12),
                                        color: "#FFFFFF"
                                    }}>
                                    {balanceUserId && balanceUserId.pay ? Number(balanceUserId.pay).toFixed(2) : "0"}
                                </Text>
                                {/* <Image
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
                                        fontSize: getSize.scale(12),
                                        color: "#FFFFFF"
                                    }}>
                                    {balanceUserId && balanceUserId.busd ? Number(balanceUserId.busd).toFixed(2) : "0"}
                                </Text> */}
                            </View>
                            {/* <TouchableOpacity
                                style={{
                                    position: "relative",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginRight: 10
                                }}
                                disabled={this.state.toolTipSol}
                                onPress={
                                    // () => navigation.navigate(stackNavigator.WALLET_HOME)
                                    () =>
                                        navigation.navigate(stackNavigator.SPENDING_WALLET)
                                }>
                                <Image
                                    style={{
                                        width: getSize.scale(25),
                                        height: getSize.scale(25),
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: 'ic_plus' }}
                                />

                            </TouchableOpacity> */}
                            <TouchableOpacity
                                style={{
                                    position: "relative"
                                }}
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
                                <View style={{
                                    position: "absolute",
                                    right: -5,
                                    top: -5,
                                    backgroundColor: "#2EDBDC",
                                    borderRadius: 50,
                                    width: getSize.scale(20),
                                    height: getSize.scale(20),
                                    zIndex: 10,
                                    justifyContent: "center",
                                    alignItems: "center"

                                }}>
                                    <Text style={{
                                        color: "#FFFFFF"
                                    }}>0</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Tooltip>
                </View>
            </View>
        );
    }
}
const mapStateToProps = (state) => ({
    isSignIn: state.initReducer.isSignIn,
    screenState: state.initReducer.screenState,
    getUser: state.initReducer.getUser,
    shoes: state.initReducer.shoes,
    getShoesId: state.initReducer.getShoesId,
    userId: state.initReducer.userId,
    user: state.initReducer.user,
    getConstShoe: state.initReducer.getConstShoe,
    shoeCurrentWear: state.initReducer.shoeCurrentWear,
});
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(_action, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(index);

