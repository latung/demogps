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

    Platform,
    ImageBackground,
    ActivityIndicator,
    TouchableWithoutFeedback,

    Image
} from 'react-native';
import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';
import { getSize, location, Colors } from '../../common';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _action from '../../redux/action/ActionHandle';

class ProfileChangePass extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            email: '',
            password: '',
            verificationcode: '',
            isHiddenBottom: false,
            disabledTouch: true,
            isCountDown: false,
            count: 56,
            isShowPass: true,
            isGetcode: false,
            isSubmitCode: false,
            isGetCodeSuccess: false,
            inputEmail: '',
            inputVerificationCode: '',
            inputPassword: '',
            inputPasswordNew: '',
            inputPasswordConfirm: ''
        };
    }
    setCountDown = () =>
    {
        this.setState(
            (state) =>
            {
                return {
                    isCountDown: true
                };
            },
            () =>
            {
                this.countDown();
            }
        );
    };
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
            this.setState((state) =>
            {
                return {
                    count: count
                };
            });
        }, 1000);
    };
    onChangeText = (name, itemValue) =>
    {
        this.setState((state) =>
        {
            return {
                [name]: itemValue
            };
        });
    };
    SetIsHiddenBottom = (type) =>
    {
        if (!type) {
            setTimeout(() =>
            {
                this.setState((state) =>
                {
                    return {
                        isHiddenBottom: type
                    };
                });
            }, 50);
        } else {
            this.setState((state) =>
            {
                return {
                    isHiddenBottom: type
                };
            });
        }
    };

    getCode = () =>
    {
        const { action } = this.props;
        const { inputPasswordNew, inputPasswordConfirm } = this.state;
        if (inputPasswordNew && inputPasswordConfirm) {


            this.setState(state =>
            {
                return {
                    isGetcode: true,
                }
            }, () =>
            {
                if (inputPasswordNew !== inputPasswordConfirm) {
                    alert("Password Confirm is wrong!");
                    this.setState(state =>
                    {
                        return {
                            isGetcode: false,
                        }
                    })
                    return;
                }
                action.changePassword({ password: inputPasswordNew });
                let time_ = setInterval(() =>
                {
                    const { changePassword } = this.props;
                    if (!changePassword.isFetching) {
                        clearInterval(time_)
                        this.setState(state =>
                        {
                            return {
                                isGetcode: false,
                            }
                        })

                    }
                    if (changePassword.isSuccess) {
                        clearInterval(time_)
                        this.setState(state =>
                        {
                            return {
                                isGetcode: false,
                                isGetCodeSuccess: true
                            }
                        })
                        return;
                    }
                    if (changePassword.isError) {
                        clearInterval(time_)
                        this.setState(state =>
                        {
                            return {
                                isGetcode: false,

                            }
                        })
                        if (changePassword.msgError) {
                            alert(changePassword.msgError)
                        }
                        else {
                            alert("Fail!")
                        }

                        return;
                    }
                }, 300);

            })
        }
    }

    SubmitCode = () =>
    {
        const { action } = this.props;
        const { inputVerificationCode } = this.state;
        if (inputVerificationCode) {
            this.setState(state =>
            {
                return {
                    isSubmitCode: true,
                }
            }, () =>
            {

                action.submitChangePassword({ verificationCode: inputVerificationCode });
                let time_ = setInterval(() =>
                {
                    const { submitChangePassword } = this.props;
                    if (!submitChangePassword.isFetching) {
                        clearInterval(time_)
                        this.setState(state =>
                        {
                            return {
                                isSubmitCode: false,
                            }
                        })

                    }
                    if (submitChangePassword.isSuccess) {
                        clearInterval(time_)
                        this.setState(state =>
                        {
                            return {
                                isSubmitCode: false,
                            }
                        })
                        alert("Successfullly!")
                        return;
                    }
                    if (submitChangePassword.isError) {
                        clearInterval(time_)
                        this.setState(state =>
                        {
                            return {
                                isSubmitCode: false,
                            }
                        })
                        if (submitChangePassword.msgError) {
                            // Keyboard.dismiss();
                            alert(submitChangePassword.msgError)
                        }
                        else {
                            alert("Fail!")
                        }

                        return;
                    }
                }, 300);

            })
        }
    }
    render()
    {
        let { isHiddenBottom, isCountDown, count, isGetCodeSuccess, isGetcode, isSubmitCode } = this.state;
        const { navigation, action, user, userId } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <TouchableWithoutFeedback
                    onPress={() =>
                    {
                        Keyboard.dismiss();
                        this.SetIsHiddenBottom(false);
                    }}
                    style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
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
                        {isSubmitCode && <View style={{
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
                                        {'CHANGE PASSWORD'}
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
                            <View
                                style={{
                                    flex: 9,
                                    alignItems: 'flex-start',
                                    justifyContent: 'space-between',
                                    width: getSize.Width,
                                    paddingHorizontal: getSize.scale(16)
                                }}>
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(14),
                                                color: 'rgba(118, 118, 118, 1)',
                                                fontStyle: 'italic',
                                                marginVertical: getSize.scale(8)
                                            }}>
                                            Email
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
                                            <TextInput
                                                style={{
                                                    flex: 1,
                                                    paddingHorizontal: getSize.scale(16),
                                                    fontSize: getSize.scale(16)
                                                }}
                                                onChangeText={(text) =>
                                                    this.setState({ ...this.state, inputEmail: text })
                                                }
                                                value={user.email}
                                                placeholder={'Enter your email'}
                                            />
                                        </ImageBackground>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(14),
                                                color: 'rgba(118, 118, 118, 1)',
                                                fontStyle: 'italic',
                                                marginVertical: getSize.scale(8)
                                            }}>
                                            New password
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
                                            <TextInput
                                                secureTextEntry={true}
                                                style={{
                                                    flex: 1,
                                                    paddingHorizontal: getSize.scale(16),
                                                    fontSize: getSize.scale(16)
                                                }}
                                                onChangeText={(text) =>
                                                    this.setState({
                                                        ...this.state,
                                                        inputPasswordNew: text
                                                    })
                                                }
                                                value={this.state.inputPasswordNew}
                                                placeholder={'New password'}
                                            />
                                        </ImageBackground>
                                    </View>
                                </View>

                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(14),
                                                color: 'rgba(118, 118, 118, 1)',
                                                fontStyle: 'italic',
                                                marginVertical: getSize.scale(8)
                                            }}>
                                            Confirm new password
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
                                            <TextInput
                                                secureTextEntry={true}
                                                style={{
                                                    flex: 1,
                                                    paddingHorizontal: getSize.scale(16),
                                                    fontSize: getSize.scale(16)
                                                }}
                                                onChangeText={(text) =>
                                                    this.setState({
                                                        ...this.state,
                                                        inputPasswordConfirm: text
                                                    })
                                                }
                                                value={this.state.inputPasswordConfirm}
                                                placeholder={'Confirm new password'}
                                            />
                                        </ImageBackground>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(14),
                                                color: 'rgba(118, 118, 118, 1)',
                                                fontStyle: 'italic',
                                                marginVertical: getSize.scale(8)
                                            }}>
                                            Verification code
                                        </Text>
                                        <ImageBackground
                                            style={{
                                                width: getSize.Width - getSize.scale(32),
                                                height: getSize.scale(70.5),
                                                resizeMode: 'contain',
                                                overflow: 'hidden',
                                                justifyContent: 'space-between',
                                                flexDirection: 'row',
                                                alignItems: 'center'
                                            }}
                                            source={{ uri: 'ic_user_form_input' }}>
                                            <TextInput
                                                style={{
                                                    flex: 1,
                                                    paddingHorizontal: getSize.scale(16),
                                                    fontSize: getSize.scale(16)
                                                }}
                                                onChangeText={(text) =>
                                                    this.setState({
                                                        ...this.state,
                                                        inputVerificationCode: text
                                                    })
                                                }
                                                value={this.state.inputVerificationCode}
                                                placeholder={'Enter verification code'}
                                            />
                                            <TouchableOpacity
                                                onPress={this.getCode}
                                            >
                                                {isGetcode &&
                                                    <ActivityIndicator size="small" color="#F44369" style={
                                                        {
                                                            marginRight: 10
                                                        }
                                                    } />
                                                }
                                                {!isGetcode && <Text
                                                    style={{
                                                        fontSize: getSize.scale(14),
                                                        color: 'rgba(244, 67, 105, 1)',
                                                        fontStyle: 'italic',
                                                        marginHorizontal: getSize.scale(16),
                                                        fontWeight: 'bold'
                                                    }}>
                                                    Get Code
                                                </Text>}
                                            </TouchableOpacity>
                                        </ImageBackground>
                                    </View>
                                </View>

                                {/* <View
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <View style={{ justifyContent: 'center' }}>
                                <Text
                                    style={{
                                        fontSize: getSize.scale(14),
                                        color: 'rgba(118, 118, 118, 1)',
                                        fontStyle: 'italic',
                                        marginVertical: getSize.scale(8)
                                    }}>
                                    Current password
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
                                    <TextInput
                                        style={{
                                            flex: 1,
                                            paddingHorizontal: getSize.scale(16),
                                            fontSize: getSize.scale(16)
                                        }}
                                        onChangeText={(text) =>
                                            this.setState({
                                                ...this.state,
                                                inputPassword: text
                                            })
                                        }
                                        value={this.state.inputPassword}
                                        placeholder={'Enter password'}
                                    />
                                </ImageBackground>
                            </View>
                        </View>
 */}

                            </View>
                            <View style={{ flex: 2 }} />
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    width: getSize.Width,
                                    paddingHorizontal: getSize.scale(16)
                                }}>
                                <TouchableOpacity
                                    disabled={!isGetCodeSuccess}
                                    onPress={this.SubmitCode}
                                    style={{
                                        opacity: isGetCodeSuccess ? 1 : 0.5
                                    }}>
                                    <Image
                                        style={{
                                            width: getSize.Width,
                                            height: getSize.scale(55),
                                            resizeMode: 'contain'
                                        }}
                                        source={{ uri: 'ic_user_btn_save' }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => ({
    initReducer: state.initReducer,
    screenState: state.initReducer.screenState,
    user: state.initReducer.user,
    userId: state.initReducer.userId,
    changePassword: state.initReducer.changePassword,
    submitChangePassword: state.initReducer.submitChangePassword,
});
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(_action, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileChangePass);

