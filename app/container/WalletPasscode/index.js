import React, { Component } from 'react';
import
{
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Keyboard,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    ImageBackground,
    Image,
    ActivityIndicator
} from 'react-native';
import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';
import { getSize, location, Colors } from '../../common';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _action from '../../redux/action/ActionHandle';
import { set_pass, check_pass } from '../../service';

class WalletPasscode extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            isHiddenBottom: false,
            disabledTouch: true,

            inputPasscode: '',
            isCreate: true,
            inputCreatePasscode: '',
            isConfirm: false,
            inputConfirmPasscode: '',
            isSetpass: false
        };
    }
    componentDidMount()
    {


    }
    handle = () =>
    {
        const { navigation, action, userIdBnb, user } = this.props;
        let isPass = userIdBnb.data.isPass;

        if (!isPass) {

            if (this.state.isCreate) {

                this.setState(state =>
                {
                    return {
                        isConfirm: true,
                        isCreate: false
                    }
                })

            }

            if (this.state.isConfirm) {


                if (this.state.inputCreatePasscode === this.state.inputConfirmPasscode) {

                    this.setState(state =>
                    {
                        return {
                            isSetpass: true
                        }
                    }, async () =>
                    {
                        // action.passCodeWallet({ _id: user._id, pass: this.state.inputConfirmPasscode });
                        let dataSet = await set_pass(user._id, this.state.inputConfirmPasscode);
                        // console.log(' dataSet í s', dataSet);
                        this.setState({
                            isSetpass: false
                        })
                        if (Number(dataSet.data.code) == 200) {
                            navigation.navigate(stackNavigator.WALLET_HOME);
                        } else {
                            alert(dataSet.data.message)
                        }
                        this.setState(state =>
                        {
                            return {
                                isSetpass: false
                            }
                        })
                    })

                }
                else {
                    alert("Confirm Passcode is wrong")
                }


            }

        }
        else {
            this.setState(state =>
            {
                return {
                    isSetpass: true
                }
            }, async () =>
            {
                let dataSet = await check_pass(user._id, this.state.inputPasscode);
                // let dataSet = await check_pass("627b6068698ae1a4a6a142eb", "1");
                if (Number(dataSet.data.code) == 200) {
                    if (!dataSet.data.data.isPass) { // Hard
                        navigation.navigate(stackNavigator.WALLET_HOME);
                    } else {
                        console.log('error');
                    }


                } else {
                    alert(dataSet.data.message)
                }
                this.setState(state =>
                {
                    return {
                        isSetpass: false
                    }
                })

            })
        }
        // this.setState({ ...this.state, isCreate: true });

    };

    render()
    {
        const { navigation, action, userIdBnb, passCodeWallet } = this.props;
        const { isSetpass, isCreate } = this.state;

        let isPass = userIdBnb.data.isPass;


        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#000000", }}>
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
                {isSetpass && <View style={{
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
                                {'SECURED CODE'}
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

                <View
                    style={{
                        flex: 9,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <View style={{ flex: 3, justifyContent: 'space-between' }}>
                        <View
                            style={{
                                flex: 4,
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                width: getSize.Width,
                                paddingHorizontal: getSize.scale(16)
                            }}>
                            <View style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        fontSize: getSize.scale(14),
                                        color: 'rgba(118, 118, 118, 1)',
                                        fontStyle: 'italic',
                                        marginVertical: getSize.scale(8)
                                    }}>
                                    {isPass && "Enter passcode"}
                                    {!isPass && this.state.isCreate && 'Create your passcode'}
                                    {!isPass && !this.state.isCreate && 'Confirm your passcode'}
                                </Text>
                                <ImageBackground
                                    style={{
                                        width: getSize.Width - getSize.scale(32),
                                        height: getSize.scale(70.5),
                                        resizeMode: 'contain',
                                        overflow: 'hidden',
                                        justifyContent: 'center'
                                    }}
                                    source={{ uri: 'ic_user_form_input' }}>
                                    {isPass && <TextInput
                                        secureTextEntry={true}
                                        style={{
                                            flex: 1,
                                            paddingHorizontal: getSize.scale(16),
                                            fontSize: getSize.scale(16),
                                            fontWeight: 'bold',
                                            color: "#000000"
                                        }}
                                        onChangeText={(text) =>
                                        {
                                            this.setState({
                                                ...this.state,
                                                inputPasscode: text
                                            })
                                        }
                                        }
                                        value={() =>
                                        {
                                            this.state.inputPasscode
                                        }}
                                        placeholder={'******'}
                                    />}
                                    {!isPass && this.state.isCreate && <TextInput
                                        secureTextEntry={true}
                                        style={{
                                            flex: 1,
                                            paddingHorizontal: getSize.scale(16),
                                            fontSize: getSize.scale(16),
                                            fontWeight: 'bold',
                                            color: "#000000"
                                        }}
                                        onChangeText={(text) =>
                                        {
                                            this.setState({
                                                ...this.state,
                                                inputCreatePasscode: text
                                            })
                                        }
                                        }
                                        value={() =>
                                        {
                                            this.state.inputCreatePasscode
                                        }}
                                        placeholder={'******'}
                                    />}
                                    {!isPass && !this.state.isCreate && <TextInput
                                        secureTextEntry={true}
                                        style={{
                                            flex: 1,
                                            paddingHorizontal: getSize.scale(16),
                                            fontSize: getSize.scale(16),
                                            fontWeight: 'bold',
                                            color: "#000000"
                                        }}
                                        onChangeText={(text) =>
                                        {
                                            this.setState({
                                                ...this.state,
                                                inputConfirmPasscode: text
                                            })
                                        }
                                        }
                                        value={() =>
                                        {
                                            this.state.inputConfirmPasscode
                                        }}
                                        placeholder={'******'}
                                    />}

                                </ImageBackground>
                            </View>
                        </View>
                        <View style={{ flex: 3.5 }} />
                        <View
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                width: getSize.Width,
                                paddingHorizontal: getSize.scale(16)
                            }}>
                            {!isPass &&
                                <TouchableOpacity
                                    onPress={this.handle}
                                    style={{
                                        opacity: this.state.inputCreatePasscode === '' && this.state.isCreate ? 0.5 : 1
                                    }}
                                    disabled={
                                        this.state.inputCreatePasscode === '' && this.state.isCreate
                                    }>

                                    {isPass && <Image
                                        style={{
                                            width: getSize.Width,
                                            height: getSize.scale(55),
                                            resizeMode: 'contain'
                                        }}
                                        source={{
                                            uri: "ic_wallet_btn_ok"
                                        }}
                                    />}
                                    {!isPass && this.state.isCreate &&
                                        <Image
                                            style={{
                                                width: getSize.Width,
                                                height: getSize.scale(55),
                                                resizeMode: 'contain'
                                            }}
                                            source={{
                                                uri: "ic_wallet_btn_next_1"
                                            }}
                                        />
                                    }
                                    {!isPass && !this.state.isCreate &&
                                        <Image
                                            style={{
                                                width: getSize.Width,
                                                height: getSize.scale(55),
                                                resizeMode: 'contain'
                                            }}
                                            source={{
                                                uri: "ic_wallet_btn_confirm"
                                            }}
                                        />
                                    }

                                </TouchableOpacity>
                            }
                            {isPass &&
                                <TouchableOpacity
                                    onPress={this.handle}
                                    style={{
                                        opacity: this.state.inputPasscode === '' ? 0.5 : 1
                                    }}
                                    disabled={
                                        this.state.inputPasscode === ''
                                    }>

                                    {isPass && <Image
                                        style={{
                                            width: getSize.Width,
                                            height: getSize.scale(55),
                                            resizeMode: 'contain'
                                        }}
                                        source={{
                                            uri: "ic_wallet_btn_ok"
                                        }}
                                    />}
                                    {!isPass && this.state.isCreate &&
                                        <Image
                                            style={{
                                                width: getSize.Width,
                                                height: getSize.scale(55),
                                                resizeMode: 'contain'
                                            }}
                                            source={{
                                                uri: "ic_wallet_btn_next_1"
                                            }}
                                        />
                                    }
                                    {!isPass && !this.state.isCreate &&
                                        <Image
                                            style={{
                                                width: getSize.Width,
                                                height: getSize.scale(55),
                                                resizeMode: 'contain'
                                            }}
                                            source={{
                                                uri: "ic_wallet_btn_confirm"
                                            }}
                                        />
                                    }

                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                </View>
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
    userIdBnb: state.initReducer.userIdBnb,
    passCodeWallet: state.initReducer.passCodeWallet,
});
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(_action, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(WalletPasscode);
