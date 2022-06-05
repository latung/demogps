import React, { Component, createRef } from 'react';
import
{
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    Image,
    Modal,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';
import { getSize, location, Colors } from '../../common';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _action from '../../redux/action/ActionHandle';
import * as ApiServices from "./../../service/index";
class Swap extends Component
{
    constructor(props)
    {
        super(props);
        this.popupRef = new createRef();
        this.popupSettingRef = new createRef();
        this.state = {
            isSpending: true,
            isWallet: false,
            modalVisible: false,
            isHiddenBottom: false,
            data: [
                { id: 2, Name: 'BUSD', amount: 0 },
                { id: 1, Name: 'MOV', amount: 0 },
                { id: 0, Name: 'USDT', amount: 0 }
            ],
            data1: [
                { id: 1, Name: 'Sneakers', amount: 0 },
                { id: 2, Name: 'Shoeboxes', amount: 0 },
                { id: 2, Name: 'Gems', amount: 0 }
            ],
            data2: [
                { name: 'BUSD', icon: '#000000' },
                { name: 'MOV', icon: '#d2c402' },
                { name: 'USDT', icon: 'blue' }
            ],
            data3: [
                { name: 'BUSD', icon: '#000000' },
                { name: 'MOV', icon: '#777777' },
                { name: 'USDT', icon: 'blue' }
            ],
            from: { icon: 'blue', name: 'USDT', value: '0.00' },
            to: { icon: '#777777', name: 'MOV', value: '42.5' },
            istop: true,
            disabledTouch: true,
            isCreateToken: false,
            Percent: 0.5,
            isSwap: false
        };
    }

    Refresh_ = () =>
    {
        this.setState(state =>
        {
            return {
                from: { icon: 'blue', name: 'USDT', value: '0.00' },
                to: { icon: '#777777', name: 'MOV', value: '42.5' },
            }
        })
    }

    Swap_ = () =>
    {

        const { from, to } = this.state;
        const { action, user } = this.props;

        this.setState(state =>
        {
            return {
                isSwap: true
            }
        }, () =>
        {
            ApiServices.swap({
                userId: user._id,
                amount: from.value,
            }).then(res =>
            {

                if (res.code === 200) {
                    alert(res.message);
                    action.swap(res.data);
                    this.BalanceUserId();
                    this.BalanceUserIdBnb();
                }
                if (res.code === 409) {
                    alert(res.message)
                }
                this.setState(state =>
                {
                    return {
                        isSwap: false
                    }
                });
            }).catch(err =>
            {
                alert("Fail!");
                this.setState(state =>
                {
                    return {
                        isSwap: false
                    }
                });
            })

        })
    }
    onChangeText = (type, value) =>
    {
        const { getRate } = this.props;
        const rate = getRate.data.price;
        let to = value / rate;
        if (type === "from") {
            this.setState(state =>
            {
                return {
                    from: {
                        ...state.from, value: value.toString()
                    },
                    to: {
                        ...state.to, value: to.toString()
                    }
                }
            })
        }

    }

    setIstop = (type) =>
    {
        this.setState(state =>
        {
            return {
                istop: type
            }
        })
    }
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
                to: to
            }
        })
    }
    componentDidMount()
    {
        // this.onShowPoup()
    }

    // componentWillUnmount()
    // {
    //     this.setState(state =>
    //     {
    //         return {
    //             isWallet: false
    //         }
    //     })
    // }
    onShowPopupsetting = () =>
    {
        this.popupSettingRef.Show();
        // setTimeout(() =>
        // {
        //     this.popupBotomRef.toggleBackgroundColor();
        // }, 300);

    }
    onColsePopupsetting = () =>
    {
        this.popupSettingRef.Close();

    }
    onShowPoup = () =>
    {
        this.popupRef.Show();
        // setTimeout(() =>
        // {
        //     this.popupRef.toggleBackgroundColor();
        // }, 300);

    }
    onColsePopup = () =>
    {
        this.popupRef.Close();

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

    setFromTo = (item) =>
    {

        let { istop } = this.state;
        if (istop) {
            this.setState(state =>
            {
                return {
                    from: {
                        ...state.from, name: item.name, icon: item.icon
                    },

                }
            })
        } else {
            this.setState(state =>
            {
                return {

                    to: {
                        ...state.to, name: item.name, icon: item.icon
                    }
                }
            })
        }
        this.onColsePopup()
    }


    CreateToken = () =>
    {
        this.setState(state =>
        {
            return {
                isCreateToken: true
            }
        }, () =>
        {
            setTimeout(() =>
            {
                this.setState(state =>
                {
                    return {
                        isCreateToken: false
                    }
                }, () =>
                {
                    this.Confirm()
                })
            }, 2000);
        })
    }
    setModalVisible = (visible) =>
    {
        this.setState({ modalVisible: visible });
    }
    Confirm = () =>
    {
        this.setModalVisible(true);
        setTimeout(() =>
        {
            this.setModalVisible(false);
        }, 1000);
        let { stringdata, stringCorect } = this.state;
        if (stringdata === stringCorect) {
            this.setModalVisible(true);
            setTimeout(() =>
            {
                this.setModalVisible(false);
            }, 1000);
        }
    }

    setPerCent = (Percent) =>
    {
        this.setState(state =>
        {
            return {
                Percent: Percent
            }
        })
    }
    render()
    {
        const { navigation, getRate, userIdBnb } = this.props;
        const { isSpending, isWallet, data, data1, isSwap, isHiddenBottom, istop, modalVisible
        } = this.state;
        const rate = getRate.data.price;
        const oneChange = 1 / rate;
        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: '#000000'
                }}>
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
                {isSwap && <View style={{
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
                    <ActivityIndicator size="large" color="#F44369" />
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
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <TouchableOpacity
                                onPress={this.Refresh_}>
                                <Image
                                    style={{
                                        width: getSize.scale(20),
                                        height: getSize.scale(20),
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: 'ic_refresh' }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 9 }}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: getSize.scale(16)
                        }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                <Text
                                    style={{
                                        fontStyle: 'italic',
                                        fontSize: getSize.scale(14),
                                        color: 'rgba(118, 118, 118, 1)'
                                    }}>
                                    From
                                </Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text
                                    style={{
                                        fontStyle: 'italic',
                                        fontSize: getSize.scale(14),
                                        color: 'rgba(118, 118, 118, 1)'
                                    }}>
                                    Balance: {userIdBnb.data.usdt ? Number(userIdBnb.data.usdt).toFixed(2) : "0"}
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                marginVertical: getSize.scale(8)
                            }}>
                            <ImageBackground
                                source={{ uri: 'ic_frame' }}
                                style={{
                                    width: getSize.Width - getSize.scale(32),
                                    height: getSize.scale(97)
                                }}>
                                <View
                                    style={{
                                        flex: 1,
                                        paddingHorizontal: getSize.scale(16),
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                    <TextInput
                                        // onFocus={() => this.SetIsHiddenBottom(true)}
                                        value={this.state.from.value}
                                        onChangeText={(itemValue) => this.onChangeText("from", itemValue)}
                                        style={{
                                            fontSize: getSize.scale(24),
                                            fontWeight: 'bold',
                                            fontStyle: 'italic',
                                            color: "#000000"
                                        }} />
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-around'
                                        }}>
                                        <Image
                                            style={{
                                                width: getSize.scale(32),
                                                height: getSize.scale(32),
                                                resizeMode: 'contain'
                                            }}
                                            source={{ uri: 'ic_coin_t' }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(14),
                                                fontWeight: 'bold',
                                                marginLeft: getSize.scale(8)
                                            }}>
                                            {this.state.from.name}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(14),
                                                fontWeight: 'bold',
                                                fontStyle: 'italic',
                                                color: '#2EDBDC',
                                                marginLeft: getSize.scale(16)
                                            }}>
                                            All
                                        </Text>
                                    </View>
                                </View>
                            </ImageBackground>
                            <View
                                style={{
                                    alignItems: 'flex-start',
                                    flexDirection: 'row',
                                    marginTop: getSize.scale(8)
                                }}>
                                <Text
                                    style={{
                                        color: '#afafaf',
                                        fontSize: getSize.scale(12),
                                        fontStyle: 'italic'
                                    }}>
                                    Transfer fee{' '}
                                </Text>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: getSize.scale(12),
                                        color: '#000'
                                    }}>
                                    (5%)
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={{ uri: 'ic_swap' }}
                            style={{
                                width: getSize.scale(35),
                                height: getSize.scale(35)
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: getSize.scale(16)
                        }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                <Text
                                    style={{
                                        fontStyle: 'italic',
                                        fontSize: getSize.scale(14),
                                        color: 'rgba(118, 118, 118, 1)'
                                    }}>
                                    To (Estimate)
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginVertical: getSize.scale(8) }}>
                            <ImageBackground
                                source={{ uri: 'ic_frame' }}
                                style={{
                                    width: getSize.Width - getSize.scale(32),
                                    height: getSize.scale(97)
                                }}>
                                <View
                                    style={{
                                        flex: 1,
                                        paddingHorizontal: getSize.scale(16),
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                    <TextInput
                                        onChangeText={(itemValue) => this.onChangeText("to", itemValue)}
                                        value={this.state.to.value}
                                        editable={false}
                                        style={{
                                            fontSize: getSize.scale(24),
                                            fontWeight: 'bold',
                                            fontStyle: 'italic',
                                            color: "#000000"
                                        }} />
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-around'
                                        }}>
                                        <Image
                                            style={{
                                                width: getSize.scale(32),
                                                height: getSize.scale(32),
                                                resizeMode: 'contain'
                                            }}
                                            source={{ uri: 'ic_location' }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(14),
                                                fontWeight: 'bold',
                                                marginLeft: getSize.scale(8)
                                            }}>
                                            {this.state.to.name}
                                        </Text>
                                    </View>
                                </View>
                            </ImageBackground>
                            <View style={{ alignItems: 'flex-start', marginTop: getSize.scale(16) }}>
                                <Text
                                    style={{
                                        color: 'rgba(44, 44, 44, 1)',
                                        fontSize: getSize.scale(12),
                                        fontStyle: 'italic'
                                    }}>
                                    1 USDT = {oneChange} MOV
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'flex-end', alignItems: 'center', flex: 2 }}>
                        <TouchableOpacity
                            onPress={() => this.Swap_()}
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                height: getSize.scale(48),
                                marginVertical: getSize.scale(32)
                            }}>
                            <Image
                                style={{
                                    width: '100%',
                                    height: getSize.scale(48),
                                    resizeMode: 'contain'
                                }}
                                source={{ uri: 'ic_btn_confirm_long' }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: '#000000ac',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center'
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: '#F194FF'
    },
    buttonClose: {
        backgroundColor: '#2196F3'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalText: {
        textAlign: 'center',
        color: '#f0f0f0'
    }
});
const mapStateToProps = (state) => ({
    isSignIn: state.initReducer.isSignIn,
    screenState: state.initReducer.screenState,
    userId: state.initReducer.userId,
    user: state.initReducer.user,
    getRate: state.initReducer.getRate,
    swap: state.initReducer.swap,
    userIdBnb: state.initReducer.userIdBnb,
});
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(_action, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Swap);

