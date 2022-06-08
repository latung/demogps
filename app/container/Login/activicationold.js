import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { tabNavigator } from '../../navigation/nameNavigator';
import * as _action from '../../redux/action/ActionHandle';

class Activicaction extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {


        };
    }

    render()
    {
        const { isAccount, isCountDown, count, email, verificationcode, password } = this.props;

        return (

            <View style={{
                width: "100%",
                alignItems: 'center',
                justifyContent: 'center',
                // height: 550,



                paddingHorizontal: 16,
                // backgroundColor: "red",
                // height: 350
            }} >

                <View style={{
                    width: "100%",

                    // backgroundColor: "transparent",
                    flex: 1,

                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: 30,
                    borderColor: "#000000",
                    borderWidth: 2,
                    borderRightWidth: 4,
                    paddingTop: 30,

                }} >
                    <View style={{
                        width: "50%",
                        height: 40,
                        justifyContent: 'flex-start',
                        alignItems: "center",

                    }}>
                        {/* <Image style={{ width: "100%", height: "100%" }} source={logonho} /> */}
                        <Text>BINANSTEP</Text>
                    </View>

                    <View style={{
                        width: "100%",
                        // height: "70%",
                        justifyContent: 'flex-start',
                        alignItems: "center",

                    }}>
                        <View style={{
                            width: "100%",
                            justifyContent: 'center',
                            alignItems: "center",
                        }}>
                            <TextInput
                                onChangeText={(itemValue) => this.props.onChangeText("email", itemValue)}

                                value={email}
                                // autoFocus={true}
                                style={{ ...styles.input }}
                                onFocus={() => { this.props.SetIsHiddenBottom(true) }}
                                placeholder="Email"
                            ></TextInput>
                        </View>
                        {!isAccount && <View style={{
                            width: "100%",
                            justifyContent: 'center',
                            alignItems: "center",
                            position: 'relative',
                            marginVertical: 10
                        }}>

                            <TextInput
                                onChangeText={(itemValue) => this.props.onChangeText("verificationcode", itemValue)}
                                secureTextEntry={true}
                                value={verificationcode}
                                // autoFocus={true}
                                onFocus={() => { this.props.SetIsHiddenBottom(true) }}

                                style={{ ...styles.input, marginBottom: 3 }}
                                placeholder="Email verification code"
                            ></TextInput>
                            <TouchableOpacity style={{
                                position: "absolute",
                                right: 10,
                                top: !isCountDown ? 25 : 30,

                            }} onPress={this.props.setCountDown}>
                                {!isCountDown && <Text style={{
                                    fontSize: 12,
                                    fontWeight: "bold",
                                    color: "#f9b846",
                                    width: 50,
                                    lineHeight: 12,
                                }}>Send code</Text>
                                }
                                {isCountDown && <Text style={{
                                    fontSize: 12,
                                    fontWeight: "bold",
                                    color: "#f9b846",
                                    width: 50,
                                    lineHeight: 12,
                                }}>{count}s</Text>
                                }
                            </TouchableOpacity>
                            <Text style={{
                                color: "#9a9a9a",
                                fontSize: 12,
                                marginBottom: 15,
                                fontStyle: 'italic'
                            }}>Account will be automatically registered</Text>
                        </View>
                        }
                        {isAccount && <View style={{
                            width: "100%",
                            justifyContent: 'center',
                            alignItems: "center",
                            position: 'relative',
                            marginVertical: 10
                        }}>

                            <TextInput
                                onChangeText={(itemValue) => this.props.onChangeText("password", itemValue)}
                                secureTextEntry={true}
                                value={password}
                                // autoFocus={true}
                                onFocus={() => { this.props.SetIsHiddenBottom(true) }}

                                style={{ ...styles.input, marginBottom: 3 }}
                                placeholder="Password"
                            ></TextInput>
                            {!isCountDown &&
                                <Text style={{ ...styles.sendcodeText, opacity: !isAccount ? 1 : 0 }}>Send code</Text>}
                            {isCountDown &&
                                <Text style={{ ...styles.sendcodeText, opacity: !isAccount ? 1 : 0 }}>56s</Text>}
                            <Text style={{
                                color: "#9a9a9a",
                                fontSize: 12,
                                marginBottom: 15,
                                fontStyle: 'italic',
                                opacity: !isAccount ? 1 : 0
                            }}>Account will be automatically registered</Text>
                        </View>
                        }
                        <View style={{
                            width: "100%",
                            justifyContent: 'center',
                            alignItems: "center",
                            marginVertical: 20
                        }}>
                            <TouchableOpacity
                                style={{ ...styles.btnWarning, width: "50%", marginBottom: 10 }}
                                onPress={() =>
                                {
                                    console.log("ok");
                                    this.props.action.login(true);
                                    return this.props.navigation.navigate(
                                        tabNavigator.TAB_HOME
                                    );
                                }}
                            >
                                <Text style={{
                                    color: "#000000",
                                    fontSize: 15,
                                    fontWeight: "bold"
                                }}>LOGIN</Text>
                            </TouchableOpacity>
                            <Text style={{
                                color: "#000000",
                                fontSize: 15,
                                fontWeight: "bold",
                                textDecorationLine: 'underline'
                            }} onPress={() =>
                            {
                                this.props.SetIsAccount();
                            }}>{!isAccount ? "Account Login" : "Activation code"}</Text>
                        </View>
                    </View>
                </View>

            </View >

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
        // backgroundColor: "#ffffff",
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
export default Activicaction;
