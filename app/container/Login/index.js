import React, { Component } from 'react';
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
import * as ApiServices from "./../../service/index";
import { CONST_STORAGE, storage } from '../../common';
const Stack = createNativeStackNavigator();
class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            email: 'dat19952010@gmail.com',
            verificationcode: '',
            password: '123456789',
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

    componentDidMount()
    {

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

    Login = () =>
    {

        const { password, email } = this.state;
        const { action, navigation } = this.props;
        if (email && password) {
            this.setState(state =>
            {
                return {
                    isLogin: true
                }
            }, () =>
            {
                console.log("ok");
                ApiServices.postLogin({
                    email: email,
                    password: password,

                }).then(res =>
                {
                    if (res.code === 200) {

                        const { token } = res.data;
                        storage.setItem(CONST_STORAGE.TOKEN_ACCESS, token);
                        this.setState(state =>
                        {
                            return {
                                isLogin: false
                            }
                        }, () =>
                        {
                            action.postLogin(res.data)
                            action.login(true);

                        })

                    }
                    if (res.code === 400) {


                        this.setState(state =>
                        {
                            return {
                                isLogin: false
                            }
                        }, () =>
                        {
                            alert(res.message);
                        })

                    }


                }).catch(err =>
                {

                    this.setState(state =>
                    {
                        return {
                            isLogin: false
                        }
                    })

                })

            })
        }
    }


    render()
    {
        const { isHiddenBottom, password, email, isLogin } = this.state
        const { action } = this.props;

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
                {isLogin && <View style={{
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
                            this.SetIsHiddenBottom(false);
                        }}
                        style={{ flex: 1 }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
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
                                    height: !isHiddenBottom ? getSize.scale(100) : getSize.scale(60)
                                }}>
                                <Text
                                    style={{
                                        fontStyle: 'italic',
                                        fontWeight: 'bold',
                                        fontSize: getSize.scale(30)
                                    }}>
                                    LOGIN NOW
                                </Text>
                            </View>

                            <Activication
                                action={this.props.action}
                                navigation={this.props.navigation}
                                SetIsHiddenBottom={this.SetIsHiddenBottom}
                                onChangeText={this.onChangeText}
                                password={password} email={email}
                                Login={this.Login}
                            />

                            {!isHiddenBottom && (
                                <View
                                    style={{
                                        width: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        justifyContent: 'flex-end'
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: getSize.scale(12),
                                            width: '70%',
                                            textAlign: 'center'
                                        }}>
                                        Registration means that you agree to Movearn
                                        <Text
                                            style={{
                                                color: 'red'
                                            }}>
                                            {' '}
                                            User Agreement
                                        </Text>{' '}
                                        &
                                        <Text
                                            style={{
                                                color: 'red'
                                            }}>
                                            {' '}
                                            User Privacy
                                        </Text>
                                    </Text>
                                </View>
                            )}
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
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
    postLogin: state.initReducer.postLogin,
    submitCode: state.initReducer.submitCode,
    user: state.initReducer.user,
});
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(_action, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
