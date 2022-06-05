import React, { Component } from 'react';
import
{
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native';

import { tabNavigator, stackNavigator } from '../../navigation/nameNavigator';
import * as _action from '../../redux/action/ActionHandle';
import { location, getSize, Colors } from '../../common/';

class Activicaction extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        const { email, password } = this.props;

        return (
            <View
                style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingHorizontal: getSize.scale(16)
                }}>
                <View
                    style={{
                        width: '100%',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                    <View
                        style={{
                            width: '100%',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                        <View
                            style={{
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginVertical: getSize.scale(8)
                            }}>
                            <ImageBackground
                                source={{ uri: 'ic_form_login' }}
                                style={{
                                    width: '100%',
                                    height: getSize.scale(70.5),
                                    justifyContent: 'center'
                                }}>
                                <TextInput
                                    onChangeText={(itemValue) =>
                                        this.props.onChangeText('email', itemValue)
                                    }
                                    value={email}
                                    // value="dat19952010@gmail.com"
                                    style={{
                                        paddingHorizontal: getSize.scale(50),
                                        fontSize: getSize.scale(20),
                                        fontWeight: 'bold',
                                        fontStyle: 'italic',
                                        color: '#767676'
                                    }}
                                    placeholder="Email address"></TextInput>
                            </ImageBackground>
                        </View>
                        <View
                            style={{
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                                marginVertical: getSize.scale(8)
                            }}>
                            <ImageBackground
                                source={{ uri: 'ic_form_lock' }}
                                style={{
                                    width: '100%',
                                    height: getSize.scale(70.5),
                                    justifyContent: 'center'
                                }}>
                                <TextInput
                                    onChangeText={(itemValue) => this.props.onChangeText("password", itemValue)}
                                    secureTextEntry={true}
                                    value={password}
                                    style={{
                                        paddingHorizontal: getSize.scale(50),
                                        fontSize: getSize.scale(20),
                                        fontWeight: 'bold',
                                        fontStyle: 'italic',
                                        color: '#767676'
                                    }}
                                    placeholder="Password"></TextInput>
                            </ImageBackground>
                        </View>

                        <View
                            style={{
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginVertical: getSize.scale(20)
                            }}>
                            <TouchableOpacity
                                style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                onPress={() =>
                                {
                                    this.props.Login()
                                }}>
                                <Image
                                    style={{
                                        width: '80%',
                                        height: getSize.scale(60),
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: 'ic_btn_login' }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginVertical: getSize.scale(8)
                                }}>
                                <Text
                                    style={{
                                        color: '#FFFFFF',
                                        fontSize: getSize.scale(13),
                                        fontStyle: 'italic'
                                    }}
                                    onPress={() =>
                                    {
                                        this.props.navigation.navigate(
                                            stackNavigator.SIGNUP, { isForgotPass: true }
                                        );
                                    }}>
                                    Forgot password?
                                </Text>
                            </TouchableOpacity>
                            <View style={{
                                width: getSize.scale(80), height: getSize.scale(2),
                                backgroundColor: "#C1BACF",
                                marginVertical: getSize.scale(10)
                            }}>

                            </View>
                            <TouchableOpacity
                                style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginVertical: getSize.scale(8)
                                }}
                                onPress={() =>
                                {
                                    return this.props.navigation.navigate(
                                        stackNavigator.SIGNUP
                                    );
                                }}>
                                <Image
                                    style={{
                                        width: '80%',
                                        height: getSize.scale(60),
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: 'ic_btn_signup' }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
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
        // backgroundColor: "#ffffff",
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
export default Activicaction;
