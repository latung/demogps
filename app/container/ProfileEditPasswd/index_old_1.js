import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Keyboard, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

class ProfileChangePass extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            email: "",
            password: "",
            verificationcode: "",
            isHiddenBottom: false,
            disabledTouch: true,
            isCountDown: false,
            count: 56,
            isShowPass: true
        };
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
    onChangeText = (name, itemValue) =>
    {
        this.setState(state =>
        {
            return {
                [name]: itemValue
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
    render()
    {
        let { isHiddenBottom, isCountDown, count } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView behavior='padding' style={{
                    width: "100%",
                    backgroundColor: "#ffffff",
                    flex: 1,
                }} >
                    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); this.SetIsHiddenBottom(false); }} style={{

                    }} >
                        <View
                            style={{
                                width: "100%",
                                justifyContent: 'space-between',
                                // alignItems: 'center',
                                flex: 1,
                                position: "absolute",
                                top: 0
                            }}>

                            <View style={{
                                width: "100%",
                                paddingHorizontal: 20,
                                borderBottomLeftRadius: 30,
                                flex: 8,
                            }}>
                                <View style={{
                                    width: "100%",
                                    justifyContent: 'flex-start',
                                    alignItems: "center",
                                    height: 70,
                                    flexDirection: "row",
                                    flex: 1,

                                }} >
                                    <TouchableOpacity style={{
                                        fontStyle: "italic", fontWeight: 'bold',
                                        borderRightWidth: 3,
                                        // borderBottomWidth: 3,
                                        borderWidth: 1,
                                        borderColor: "#000000",
                                        width: 40,
                                        height: 40,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",

                                        position: "absolute",
                                        zIndex: 1,
                                        borderRadius: 100,
                                        backgroundColor: "#64ffcb"

                                    }}
                                        onPress={() => this.props.navigation.goBack()}
                                    >
                                        <Text style={{

                                        }}>Back</Text>

                                    </TouchableOpacity>
                                    <View style={{
                                        width: "100%",
                                        justifyContent: "center",
                                        // backgroundColor: "red",
                                        alignItems: "center",

                                    }}>
                                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>  CHANGE PASSWORD</Text>
                                    </View>
                                </View>
                                <View style={{
                                    width: "100%",
                                    alignItems: "center",
                                    flex: 6,

                                }}>
                                    <View style={{
                                        width: "100%",
                                        marginBottom: 30
                                    }}>
                                        <Text style={{
                                            color: "#999999",
                                            fontStyle: "italic",
                                            fontWeight: "bold"
                                        }}>
                                            New Email
                                        </Text>
                                        <TextInput
                                            onChangeText={(itemValue) => this.onChangeText("email", itemValue)}

                                            value={this.state.email}
                                            onFocus={() => this.SetIsHiddenBottom(true)}
                                            style={{
                                                height: 45,
                                                width: "100%",
                                                marginTop: 10,
                                                borderWidth: 1,
                                                borderRadius: 10,
                                                paddingHorizontal: 10,
                                                borderColor: "#000000",
                                                borderWidth: 1,
                                                borderBottomWidth: 3,
                                                borderRightWidth: 3
                                            }}


                                        ></TextInput>
                                    </View>
                                    <View style={{
                                        width: "100%",
                                        marginBottom: 30,
                                        position: "relative",
                                    }}>
                                        <Text style={{
                                            color: "#999999",
                                            fontStyle: "italic",
                                            fontWeight: "bold"
                                        }}>
                                            Verificationcode
                                        </Text>
                                        <TextInput
                                            onChangeText={(itemValue) => this.onChangeText("verificationcode", itemValue)}

                                            value={this.state.verificationcode}
                                            // autoFocus={true}
                                            onFocus={() => this.SetIsHiddenBottom(true)}
                                            style={{
                                                height: 45,
                                                width: "100%",
                                                marginTop: 10,
                                                borderWidth: 1,
                                                borderRadius: 10,
                                                paddingHorizontal: 10,
                                                borderColor: "#000000",
                                                borderWidth: 1,
                                                borderBottomWidth: 3,
                                                borderRightWidth: 3
                                            }}


                                        ></TextInput>
                                        <TouchableOpacity style={{
                                            position: "absolute",
                                            right: !isCountDown ? -30 : -50,
                                            top: 42,

                                            width: 100,
                                            lineHeight: 12,
                                        }}

                                            onPress={this.setCountDown}>

                                            {!isCountDown && <Text style={{
                                                fontSize: 12,
                                                fontWeight: "bold",
                                                color: "#f9b846",
                                            }}>Send code</Text>
                                            }
                                            {isCountDown && <Text style={{
                                                fontSize: 12,
                                                fontWeight: "bold",
                                                color: "#f9b846",
                                            }}>{count}s</Text>
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{
                                        width: "100%",

                                        position: "relative"
                                    }}>
                                        <Text style={{
                                            color: "#999999",
                                            fontStyle: "italic",
                                            fontWeight: "bold"
                                        }}>
                                            Password
                                        </Text>
                                        <TextInput
                                            onChangeText={(itemValue) => this.onChangeText("password", itemValue)}
                                            secureTextEntry={this.state.isShowPass}
                                            value={this.state.password}
                                            onFocus={() => this.SetIsHiddenBottom(true)}
                                            style={{
                                                height: 45,
                                                width: "100%",
                                                marginTop: 10,
                                                borderWidth: 1,
                                                borderRadius: 10,
                                                paddingHorizontal: 10,
                                                borderColor: "#000000",
                                                borderWidth: 1,
                                                borderBottomWidth: 3,
                                                borderRightWidth: 3
                                            }}


                                        ></TextInput>
                                        <TouchableOpacity style={{
                                            position: "absolute",
                                            right: -70,
                                            top: 42,
                                            justifyContent: "flex-end",
                                            width: 100,
                                            lineHeight: 12,
                                        }} onPress={() =>
                                        {
                                            this.setState(state =>
                                            {
                                                return {
                                                    isShowPass: !state.isShowPass
                                                }
                                            })
                                        }}><Text style={{
                                            fontSize: 12,
                                            fontWeight: "bold",
                                            color: "#555555",
                                        }}>----</Text></TouchableOpacity>
                                    </View>
                                    <View style={{
                                        width: "100%",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginTop: 10

                                    }}>
                                        <Text style={{
                                            color: "red"
                                        }}>
                                            Please set password first
                                        </Text>
                                    </View>


                                </View>

                            </View>

                        </View>

                    </TouchableWithoutFeedback>
                    {!isHiddenBottom && <View style={{
                        // position: "absolute",
                        // bottom: 0,
                        height: 100,
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        bottom: 0
                    }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            disabled={this.state.disabledTouch}
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingVertical: 8,
                                paddingHorizontal: 3,
                                borderRadius: 50,
                                borderColor: "#000000",
                                color: '#000000',
                                borderWidth: 2,
                                borderBottomWidth: 4,
                                borderRightWidth: 4,
                                backgroundColor: "#64ffcb",
                                opacity: this.state.disabledTouch ? 0.5 : 1,
                                width: "60%"

                            }}>
                            <Text style={{
                                fontSize: 20,
                                fontStyle: "italic",
                                fontWeight: "bold"
                            }}>  SAVE</Text>
                        </TouchableOpacity>

                    </View>}
                </KeyboardAvoidingView >
            </SafeAreaView >
        );
    }
}

export default ProfileChangePass;
