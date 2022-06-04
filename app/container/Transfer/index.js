import React, { Component, createRef } from 'react';
import
{
    View,
    Text,
    SafeAreaView,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    ImageBackground,
    Image,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';
import { getSize, location, Colors } from '../../common';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _action from '../../redux/action/ActionHandle';

import PopupBottom from "./poupBottom";

import * as ApiServices from "./../../service/index";

class Transfer extends Component
{
    constructor(props)
    {
        super(props);
        this.popupRef = new createRef();
        this.state = {
            isExternal: false,
            isSpending: true,
            data: [{ name: "MOV", icon: "ic_location", next: false }, { name: "BNB", icon: "ic_coin", next: false }, { name: "BUSD", icon: "ic_coin", next: false }],
            from: { icon: "ic_btn_wallet", name: "MOV", value: "1", type: "isWallet" },
            to: { icon: "ic_btn_spending", name: "MOV", value: "1", type: "spending" },
            isSpendingC: true,
            isWallet: false,
            isBadges: false,
            isHiddenBottom: false,
            toAddress: "",
            amount: "",
            toggle: false,
            isTransfer: false
        };
    }

    _handleTabbarMini = (key) =>
    {
        const { action, screenState } = this.props;
        if (key === 'isSpending') {
            this.setState({ ...this.state, isSpending: true, isExternal: false });
        }
        if (key === 'isExternal') {
            this.setState({ ...this.state, isSpending: false, isExternal: true });
        }
    };

    ToggleTrasfer = () =>
    {
        let { from, to } = this.state;
        let tmp = from;
        from = to;
        to = tmp;

        this.setState(state =>
        {
            return {
                from: from,
                to: to,
                toggle: !state.toggle
            }
        })
    }
    onShowPoup = () =>
    {
        this.popupRef.Show();
        // setTimeout(() =>
        // {
        //     this.popupRef.toggleBackgroundColor();
        // }, 300);

    }
    BalanceUserIdBnb = () =>
    {

        const { action, user } = this.props;
        ApiServices.userIdBnb({ _id: user._id }).then(res =>
        {   //
            console.log("res", res);
            if (res.code === 200) {
                action.userIdBnb(res.data)
            }

        }).catch(err =>
        {

        })


    }
    BalanceUserId = () =>
    {
        const { action, user } = this.props;
        ApiServices.userId({ _id: user._id }).then(res =>
        {
            if (res.code === 200) {
                action.userId(res.data)
            }

        }).catch(err =>
        {

        })
    }
    transfer = () =>
    {

        const { from, to } = this.state;

        const { action, user } = this.props;


        this.setState(state =>
        {
            return {
                isTransfer: true
            }
        }, () =>
        {
            if (from.type === "isWallet") {

                ApiServices.transfer({
                    userId: user._id,
                    amount: from.value,
                    type: 'busd'
                }).then(res =>
                {

                    if (res.code === 200) {
                        alert(res.message);
                        action.transfer(res.data);
                        this.BalanceUserId();
                        this.BalanceUserIdBnb();
                    }
                    if (res.code === 404) {
                        alert(res.message)
                    }
                    this.setState(state =>
                    {
                        return {
                            isTransfer: false
                        }
                    });
                }).catch(err =>
                {
                    alert("Fail!");
                    this.setState(state =>
                    {
                        return {
                            isTransfer: false
                        }
                    });
                })


            }
            if (from.type === "spending") {

                ApiServices.transferSpending({
                    userId: user._id,
                    amount: from.value,
                    to: "none"
                }).then(res =>
                {

                    if (res.code === 200) {
                        alert(res.message);
                        action.transferSpending(res.data);
                        this.BalanceUserId();
                        this.BalanceUserIdBnb();
                    }
                    if (res.code === 404) {
                        alert(res.message)
                    }
                    this.setState(state =>
                    {
                        return {
                            isTransfer: false
                        }
                    });
                }).catch(err =>
                {
                    alert("Fail!");
                    this.setState(state =>
                    {
                        return {
                            isTransfer: false
                        }
                    });
                })

            }
        })
    }

    onColsePopup = () =>
    {
        this.popupRef.Close();

    }
    onChangeText = (name, value) =>
    {
        if (name === "from") {
            this.setState(state =>
            {
                return {
                    from: { ...state.from, value: value }
                }
            })
        }
        else {
            this.setState(state =>
            {
                return {
                    [name]: value
                }
            })
        }
    }
    SetIsHiddenBottom = (type) =>
    {
        if (!type) {
            setTimeout(() =>
            {
                this.setState(state =>
                {
                    return {
                        isHiddenBottom: type
                    }
                })
            }, 50);
        }
        else {
            this.setState(state =>
            {
                return {
                    isHiddenBottom: type
                }
            })
        }

    }
    render()
    {

        const { navigation } = this.props;
        const { isSpending, isSpendingC, isExternal,
            isWallet,
            isBadges, isHiddenBottom, isTransfer } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground
                    style={{
                        width: getSize.Width,
                        height: getSize.scale(100),
                        position: 'absolute',
                        resizeMode: 'cover',
                        zIndex: -1,
                        top: Platform.OS === 'android' ? getSize.scale(-32) : 0
                    }}
                    source={{ uri: 'ic_top_bar' }}
                />
                {isTransfer && <View style={{
                    position: "absolute",
                    flex: 1,
                    height: "100%",
                    width: "100%",
                    top: 0,
                    backgroundColor: "#0000006b",
                    zIndex: 10,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <ActivityIndicator size="large" color="#2EDBDC" />
                </View>}
                <View
                    style={{
                        flex: 1,
                        marginVertical: Platform.OS === 'android' ? getSize.scale(8) : 0
                    }}>
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
                            onPress={() => navigation.goBack()}
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
                                {'SWAP'}
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 2,
                                justifyContent: 'center',
                                alignItems: 'flex-end'
                            }}
                        />
                    </View>
                </View>

                <View style={{ flex: 9 }}>
                    <View
                        style={{
                            flex: 0.5,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: getSize.scale(30),
                                borderRadius: 20,
                                overflow: 'hidden',
                                width: '60%',
                                borderWidth: 1,
                                borderColor: 'rgba(255, 255, 255, 0.6)',
                                elevation: 2,
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 0
                                },
                                shadowOpacity: 0.5,
                                shadowRadius: 8,
                                overflow: 'hidden'
                            }}>
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => this._handleTabbarMini('isSpending')}
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    borderRadius: isSpending ? 20 : 0,
                                    overflow: 'hidden',
                                    margin: getSize.scale(3)
                                }}>
                                <View
                                    style={{
                                        flex: 1,
                                        backgroundColor: isSpending ? '#2EDBDC' : 'transparent',
                                        width: '100%',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: 'bold',
                                            color: isSpending ? '#fff' : '#000'
                                        }}>
                                        To Spending
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={1}
                                // onPress={() => this._handleTabbarMini('isExternal')}
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    borderRadius: isExternal ? 20 : 0,
                                    overflow: 'hidden',
                                    margin: getSize.scale(3)
                                }}>
                                <View
                                    style={{
                                        flex: 1,
                                        backgroundColor: isExternal ? '#2EDBDC' : 'transparent',
                                        width: '100%',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: 'bold',
                                            color: isExternal ? '#fff' : '#000'
                                        }}>
                                        To External
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={{
                            width: '100%',
                            flex: 9,
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            paddingVertical: 20
                        }}>
                        {isSpending && (
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginTop: getSize.scale(32)
                                    }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(14),
                                                fontStyle: 'italic'
                                            }}>
                                            From
                                        </Text>
                                        <Image
                                            style={{
                                                width: getSize.scale(87),
                                                height: getSize.scale(34),
                                                resizeMode: 'contain',
                                                marginLeft: getSize.scale(8)
                                            }}
                                            source={{ uri: this.state.from.icon }}
                                        />
                                    </View>

                                    <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={this.ToggleTrasfer} >
                                        <Image
                                            style={{
                                                width: getSize.scale(25),
                                                height: getSize.scale(25),
                                                resizeMode: 'contain'
                                            }}
                                            source={{ uri: 'ic_swap_red' }}
                                        />
                                    </TouchableOpacity>

                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(14),
                                                fontStyle: 'italic',
                                                marginLeft: getSize.scale(-8)
                                            }}>
                                            To
                                        </Text>
                                        <Image
                                            style={{
                                                width: getSize.scale(104),
                                                height: getSize.scale(34),
                                                resizeMode: 'contain',
                                                marginLeft: getSize.scale(8)
                                            }}
                                            source={{ uri: this.state.to.icon }}
                                        />
                                    </View>
                                </View>

                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        marginTop: getSize.scale(24)
                                    }}>
                                    <View
                                        style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <View
                                            style={{
                                                width: '100%',
                                                marginVertical: 8,
                                                justifyContent: 'flex-start'
                                            }}>
                                            <Text
                                                style={{
                                                    color: 'rgba(118, 118, 118, 1)',
                                                    fontStyle: 'italic'
                                                }}>
                                                Asset
                                            </Text>
                                        </View>
                                        <ImageBackground
                                            source={{ uri: 'ic_frame' }}
                                            style={{
                                                width: getSize.Width - getSize.scale(32),
                                                height: getSize.scale(97),
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    marginHorizontal: getSize.scale(16)
                                                }}>
                                                <View
                                                    style={{
                                                        flex: 1,
                                                        flexDirection: 'row'
                                                    }}>
                                                    <TextInput
                                                        onFocus={() => this.SetIsHiddenBottom(true)}
                                                        value={this.state.from.value}
                                                        onChangeText={(itemValue) => this.onChangeText("from", itemValue)}
                                                        style={{
                                                            fontWeight: 'bold',
                                                            fontStyle: 'italic',
                                                            fontSize: getSize.scale(24),
                                                            color: "#000000"
                                                        }} />

                                                </View>
                                                <View
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-around'
                                                    }}>
                                                    <Image
                                                        style={{
                                                            width: getSize.scale(30),
                                                            height: getSize.scale(30),
                                                            resizeMode: 'contain'
                                                        }}
                                                        source={{ uri: 'ic_coin' }}
                                                    />
                                                    <TouchableOpacity
                                                        onPress={this.onShowPoup}
                                                        style={{
                                                            flexDirection: 'row',
                                                            justifyContent: 'center',
                                                            alignItems: 'center'
                                                        }}
                                                    >
                                                        <Text
                                                            style={{
                                                                fontSize: getSize.scale(14),
                                                                fontWeight: 'bold',
                                                                fontStyle: 'italic',
                                                                marginHorizontal: getSize.scale(8)
                                                            }}>
                                                            {'BUSD'}
                                                        </Text>
                                                        <Image
                                                            style={{
                                                                width: getSize.scale(11),
                                                                height: getSize.scale(11),
                                                                resizeMode: 'contain'
                                                            }}
                                                            source={{ uri: 'ic_arrow_grey' }}
                                                        />
                                                        <Text
                                                            style={{
                                                                fontSize: getSize.scale(14),
                                                                marginLeft: getSize.scale(16),
                                                                fontWeight: 'bold',
                                                                color: '#2EDBDC',
                                                                fontStyle: 'italic'
                                                            }}>
                                                            All
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </ImageBackground>
                                        {/* <View
                                            style={{
                                                width: '100%',
                                                marginTop: getSize.scale(8),
                                                justifyContent: 'flex-start'
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: getSize.scale(12),
                                                    color: '#767676',
                                                    fontStyle: 'italic'
                                                }}>
                                                Available: 15
                                            </Text>
                                        </View> */}
                                    </View>

                                    <View
                                        style={{
                                            justifyContent: 'flex-end',
                                            alignItems: 'center',
                                            flex: 1
                                        }}>
                                        <TouchableOpacity
                                            onPress={() => this.transfer()}
                                            style={{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: getSize.Width - getSize.scale(32),
                                                height: getSize.scale(55)
                                            }}>
                                            <Image
                                                style={{
                                                    width: getSize.Width - getSize.scale(32),
                                                    height: getSize.scale(55),
                                                    resizeMode: 'contain'
                                                }}
                                                source={{ uri: 'ic_btn_confirm_long' }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                        {isExternal && (
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: getSize.scale(32)
                                    }}>
                                    <Image
                                        style={{
                                            width: getSize.scale(116),
                                            height: getSize.scale(115),
                                            resizeMode: 'contain'
                                        }}
                                        source={{ uri: 'ic_token' }}
                                    />
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        width: getSize.Width - getSize.scale(32),
                                        marginTop: getSize.scale(16)
                                    }}>
                                    <View style={{ flex: 1 }}>
                                        <Text
                                            style={{
                                                color: 'rgba(118, 118, 118, 1)',
                                                fontStyle: 'italic'
                                            }}>
                                            To Address
                                        </Text>
                                        <ImageBackground
                                            source={{ uri: 'ic_frame_coin' }}
                                            style={{
                                                width: '100%',
                                                height: getSize.scale(70.5),
                                                marginVertical: getSize.scale(8)
                                            }}>
                                            <View
                                                style={{
                                                    flex: 1,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    paddingHorizontal: getSize.scale(16)
                                                }}>
                                                <Text
                                                    style={{
                                                        fontSize: getSize.scale(16),
                                                        fontWeight: 'bold'
                                                    }}>
                                                    moveeam.bnb
                                                </Text>
                                                <TouchableOpacity style={{}}>
                                                    <Image
                                                        style={{
                                                            height: getSize.scale(24),
                                                            width: getSize.scale(24),
                                                            resizeMode: 'contain'
                                                        }}
                                                        source={{ uri: 'ic_scan' }}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        </ImageBackground>

                                        <Text
                                            style={{
                                                color: 'rgba(118, 118, 118, 1)',
                                                fontStyle: 'italic',
                                                marginTop: getSize.scale(8)
                                            }}>
                                            Amount
                                        </Text>
                                        <ImageBackground
                                            source={{ uri: 'ic_frame_coin' }}
                                            style={{
                                                width: '100%',
                                                height: getSize.scale(70.5),
                                                marginVertical: getSize.scale(8)
                                            }}>
                                            <View
                                                style={{
                                                    flex: 1,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    paddingHorizontal: getSize.scale(16)
                                                }}>
                                                <Text
                                                    style={{
                                                        fontSize: getSize.scale(16),
                                                        fontWeight: 'bold'
                                                    }}></Text>
                                                <TouchableOpacity

                                                    style={{ flexDirection: 'row' }}>
                                                    <Text
                                                        style={{
                                                            fontSize: getSize.scale(14),
                                                            fontWeight: 'bold',
                                                            marginHorizontal: getSize.scale(16)
                                                        }}>
                                                        MOV
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            fontSize: getSize.scale(14),
                                                            fontWeight: 'bold',
                                                            fontStyle: 'italic',
                                                            color: 'rgba(244, 67, 105, 1)'
                                                        }}>
                                                        All
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </ImageBackground>

                                        <Text
                                            style={{
                                                fontStyle: 'italic',
                                                color: 'rgba(118, 118, 118, 1)',
                                                fontSize: getSize.scale(12)
                                            }}>
                                            Balance: 0.0098686 BNB
                                        </Text>
                                    </View>
                                </View>

                                <View
                                    style={{
                                        justifyContent: 'flex-end',
                                        alignItems: 'center',
                                        flex: 1
                                    }}>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.goBack()}
                                        style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: getSize.Width - getSize.scale(32),
                                            height: getSize.scale(55)
                                        }}>
                                        <Image
                                            style={{
                                                width: getSize.Width - getSize.scale(32),
                                                height: getSize.scale(55),
                                                resizeMode: 'contain'
                                            }}
                                            source={{ uri: 'ic_btn_confirm_long' }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </View>
                </View>
                <PopupBottom
                    ref={(target) => { this.popupRef = target }}
                    onTouchOutside={this.onColsePopup}
                    title={"MUTI-CHAIN SWITCH"}
                // data={istop ? this.state.data2 : this.state.data3}
                // setFromTo={this.setFromTo}

                />
            </SafeAreaView>
        );
    }
}


const mapStateToProps = (state) => ({
    isSignIn: state.initReducer.isSignIn,
    screenState: state.initReducer.screenState,
    userId: state.initReducer.userId,
    user: state.initReducer.user,
    getRate: state.initReducer.getRate,
    transfer: state.initReducer.transfer,
    transferSpending: state.initReducer.transferSpending,
});
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(_action, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Transfer);
