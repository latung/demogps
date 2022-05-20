import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, SafeAreaView, TouchableOpacity, Keyboard, KeyboardAvoidingView, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { tabNavigator, stackNavigator } from '../../navigation/nameNavigator';
import * as _action from '../../redux/action/ActionHandle';
import { location, getSize, Colors } from '../../common/';
import Activication from "./activication";

import Account from "./account";
const Stack = createNativeStackNavigator();
class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            email: "",
            verificationcode: "",
            password: "",
            isHiddenBottom: false,
            isAccount: false,
            isCountDown: false,
            count: 56
        };
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
    setCountDown = () =>
    {
        this.setState(state =>
        {
            return {
                isCountDown: true
            }
        }, () =>
        {
            this.countDown()
        })
    }
    countDown = () =>
    {
        let { count } = this.state;
        // console.log(count)
        setInterval(() =>
        {
            if (count === 0) {
                clearInterval();
            }
            count--;
            this.setState(state =>
            {
                return {
                    count: count
                }
            })
        }, 1000);
    }
    componentDidMount()
    {
        this.setState(state =>
        {
            return {
                isHiddenBottom: false,
                isAccount: false,

            }
        })
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

    SetIsAccount = () =>
    {

        this.setState(state =>
        {
            return {
                isAccount: !state.isAccount
            }
        })


    }


    render()
    {
        let { User, isHiddenBottom, isAccount, isCountDown, count, password, email, verificationcode } = this.state
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
                >
                    <KeyboardAvoidingView behavior='padding' style={styles.container} >
                        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); this.SetIsHiddenBottom(false) }} style={styles.container} >

                            <View style={{
                                flex: 8,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: "100%",

                                position: "absolute",
                                top: 0,
                                left: 0,
                                backgroundColor: "red"
                                // height: "100%",
                                // backgroundColor: "red",

                            }} >

                                <View style={{
                                    width: "100%",
                                    justifyContent: 'flex-start',
                                    paddingVertical: 16,
                                    alignItems: "center",
                                    height: !isHiddenBottom ? 100 : 60,
                                    marginBottom: !isHiddenBottom ? 50 : 0,


                                }} >
                                    <View style={{}}>

                                        <Image source={{ uri: "ic_loation_blue" }}
                                            style={{
                                                width: 100,
                                                height: 100
                                            }} />
                                    </View>
                                    <Text style={{ fontStyle: "italic", fontWeight: 'bold', fontSize: 20 }}>{!isAccount ? "LOGIN / SIGN UP" : "ACCOUNT LOGIN"}</Text>
                                </View>


                                <Activication User={User} action={this.props.action} navigation={this.props.navigation} SetIsAccount={this.SetIsAccount} SetIsHiddenBottom={this.SetIsHiddenBottom} isAccount={isAccount} isCountDown={isCountDown} setCountDown={this.setCountDown} count={count} onChangeText={this.onChangeText} password={password} email={email} verificationcode={verificationcode} />
                                {/* {isAccount && <Account User={User} SetIsAccount={this.SetIsAccount} SetIsHiddenBottom={this.SetIsHiddenBottom} />} */}

                            </View>

                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                    {!isAccount && !isHiddenBottom && <View style={{
                        width: "100%",
                        justifyContent: 'center',
                        alignItems: "center",
                        position: "absolute",
                        bottom: 0,
                        justifyContent: 'flex-end',
                        height: 80,
                        // backgroundColor: '#490909',
                        paddingBottom: 30

                    }} >
                        <Text style={{
                            fontSize: 12,
                            width: "56%",
                            textAlign: "justify"
                        }}>
                            Registration means that you agree to MOVEARN
                            <Text style={{
                                color: "red",

                            }}> User Agreement</Text>  &
                            <Text style={{
                                color: "red"
                            }}> User Privacy</Text>
                        </Text>
                    </View>}
                </ImageBackground>
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
        width: "100%",
        height: "100%"
    },
    container1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        position: "absolute",
        top: "20%",
        left: 0,
        height: 400,
    },
    input: {
        height: 50,
        width: "90%",
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: "#000000",
        borderWidth: 2,
        borderBottomWidth: 4,
        borderRightWidth: 4
    },
    sendcodeText: {
        position: "absolute",
        right: 10,
        top: 25,
        fontSize: 12,
        fontWeight: "bold",
        color: "#f9b846",
        width: 50,
        lineHeight: 12,
    },
    btnWarning: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 3,
        borderRadius: 50,
        borderColor: "#000000",
        color: '#000000',
        borderWidth: 2,
        borderBottomWidth: 4,
        borderRightWidth: 4,
        backgroundColor: "#64ffcb",
        // fontSize: 20

    },
    containerForm: {
        width: "80%",
        backgroundColor: "#ffffff",
        height: 400,
        minHeight: 250,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        borderColor: "#000000",
        borderWidth: 2,
        borderRightWidth: 4,

    },
    borderStyle: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: "green"
    },
    btn: {
        minWidth: "30%", minHeight: 30,
        maxWidth: "45%",
        width: 200,
        // marginHorizontal: 50,
        marginVertical: 8,
        padding: 12,
        justifyContent: "center",
        alignContent: 'center',

        borderRadius: 5
    }
});
const mapStateToProps = (state) => ({
    isSignIn: state.initReducer.isSignIn
});
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(_action, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
