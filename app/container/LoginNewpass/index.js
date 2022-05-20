import React, { Component, createRef } from 'react';
import
{
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    SafeAreaView,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    ImageBackground,
    TouchableWithoutFeedback,
    ActivityIndicator
} from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { tabNavigator, stackNavigator } from '../../navigation/nameNavigator';
import * as _action from '../../redux/action/ActionHandle';
import { location, getSize, Colors } from '../../common/';
import Activication from './activication';
import Poup from './modal';

import { CONST_STORAGE, storage } from '../../common';
import * as ApiServices from "./../../service/index";
const Stack = createNativeStackNavigator();
class LoginNewpass extends Component
{
    constructor(props)
    {
        super(props);
        this.popupRef = new createRef();
        this.state = {

            password: "",
            isSetPass: false
        };
    }
    backAction = () =>
    {
        this.props.navigation.goBack()
    };
    onShowPoup = () =>
    {
        this.popupRef.Show();

    }

    onColsePopup = () =>
    {
        this.popupRef.Close();

    }
    onChangeText = (name, itemValue) =>
    {
        this.setState(state =>
        {
            return {
                [name]: itemValue
            }
        })
    }
    componentDidMount()
    {

        try {

            BackHandler.addEventListener(
                "hardwareBackPress",
                this.backAction
            );
        } catch (error) {

        }

    }
    componentWillUnmount()
    {
        try {
            BackHandler.removeEventListener(
                "hardwareBackPress",
                this.backAction
            );
        } catch (error) {

        }
        // this.backHandler.remove();
    }
    SetPassWord = () =>
    {

        const { action, user, submitCode, setPassword } = this.props;
        const { password } = this.state;
        this.setState(state =>
        {
            return {
                isSetPass: true,
            }
        }, () =>
        {

            if (submitCode.data) {
                ApiServices.setPassword({
                    email: user.email,
                    password: password,

                }).then(res =>
                {
                    console.log(res);
                    if (res.code === 200) {
                        this.setState(state =>
                        {
                            return {
                                isSetPass: false
                            }
                        })
                        action.setPassword(res.data)
                        action.login(true)
                    }
                    if (res.code === 400) {
                        this.setState(state =>
                        {
                            return {
                                isSetPass: false
                            }
                        }, () =>
                        {
                            alert(res.message)
                        })
                    }
                }).catch(err =>
                {
                    this.setState(state =>
                    {
                        return {
                            isSetPass: false
                        }
                    }, () =>
                    {
                        alert("fail!")
                    })
                    console.log(err)
                })
                //     action.setPassword({
                //         email: user.email,
                //         password: password,
                //         token: submitCode.data.token
                //     });
                //     let time_ = setInterval(() =>
                //     {
                //         const { setPassword } = this.props;
                //         if (!setPassword.isFetching) {
                //             clearInterval(time_);
                //             this.setState(state =>
                //             {
                //                 return {
                //                     isSetPass: false,
                //                 }
                //             });

                //         }

                //         if (setPassword.isSuccess) {
                //             action.login(true)

                //         }
                //         if (setPassword.isError) {
                //             alert(setPassword.msgError)
                //         }

                //     }, 300);
            }
            else {
                // action.login(true)
                alert("fail")
            }
        })

    }

    render()
    {
        const { password, isSetPass } = this.state
        const { navigation, action, } = this.props;
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
                    source={{ uri: 'bg_login' }}
                />
                {isSetPass && <View style={{
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
                <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                    <TouchableWithoutFeedback
                        onPress={() =>
                        {
                            Keyboard.dismiss();

                        }}
                        style={{ flex: 1 }}>
                        <View
                            style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                            <View
                                style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: getSize.scale(200)
                                }}>
                                <Image
                                    source={{ uri: 'ic_loation_blue' }}
                                    style={{
                                        width: getSize.scale(132),
                                        height: getSize.scale(147)
                                    }}
                                />
                            </View>
                            <View
                                style={{
                                    width: '100%',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    height: getSize.scale(60)
                                }}>
                                <Text
                                    style={{
                                        fontStyle: 'italic',
                                        fontWeight: 'bold',
                                        fontSize: getSize.scale(30)
                                    }}>
                                    SET NEW PASSWORD
                                </Text>
                            </View>

                            <Activication
                                action={this.props.action}
                                navigation={this.props.navigation}
                                onChangeText={this.onChangeText}
                                password={password}
                                onShowPoup={this.onShowPoup}
                                SetPassWord={this.SetPassWord}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
                <Poup
                    ref={(target) =>
                    {
                        this.popupRef = target;
                    }}
                    onTouchOutside={this.onColsePopup}
                    title={'GET ACTIVATE CODE'}
                    navigation={navigation}
                    stackNavigator={stackNavigator}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: "#ffffff",
        width: '100%',
        height: '100%'
    },
    container1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        top: '20%',
        left: 0,
        height: 400
    },
    input: {
        height: 50,
        width: '90%',
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: '#000000',
        borderWidth: 2,
        borderBottomWidth: 4,
        borderRightWidth: 4
    },
    sendcodeText: {
        position: 'absolute',
        right: 10,
        top: 25,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#f9b846',
        width: 50,
        lineHeight: 12
    },
    btnWarning: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 3,
        borderRadius: 50,
        borderColor: '#000000',
        color: '#000000',
        borderWidth: 2,
        borderBottomWidth: 4,
        borderRightWidth: 4,
        backgroundColor: '#64ffcb'
        // fontSize: 20
    },
    containerForm: {
        width: '80%',
        backgroundColor: '#ffffff',
        height: 400,
        minHeight: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderColor: '#000000',
        borderWidth: 2,
        borderRightWidth: 4
    },
    borderStyle: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: 'green'
    },
    btn: {
        minWidth: '30%',
        minHeight: 30,
        maxWidth: '45%',
        width: 200,
        // marginHorizontal: 50,
        marginVertical: 8,
        padding: 12,
        justifyContent: 'center',
        alignContent: 'center',

        borderRadius: 5
    }
});
const mapStateToProps = (state) => ({
    isSignIn: state.initReducer.isSignIn,
    user: state.initReducer.user,
    submitCode: state.initReducer.submitCode,
    setPassword: state.initReducer.setPassword,
});
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(_action, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginNewpass);
