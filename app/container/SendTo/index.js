import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Keyboard, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { stackNavigator } from '../../navigation/nameNavigator';
class SendTo extends Component
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
            isShowPass: true,
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
                                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>SEND TO</Text>
                                    </View>
                                </View>
                                <View style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginVertical: 10
                                }}>
                                    <View style={{
                                        width: 50,
                                        height: 50,
                                        backgroundColor: "#000000",
                                        borderRadius: 100
                                    }}></View>
                                </View>
                                <View style={{
                                    width: "100%",
                                    alignItems: "center",
                                    flex: 6,
                                    marginTop: 20
                                }}>
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
                                            To Adress
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
                                            right: 20,
                                            top: 42,
                                            height: 20,
                                            width: 20,
                                            borderWidth: 1,
                                            lineHeight: 12,
                                        }}>


                                        </TouchableOpacity>
                                    </View>
                                    <View style={{
                                        width: "100%",
                                        marginBottom: 10,
                                        position: "relative",
                                    }}>
                                        <Text style={{
                                            color: "#999999",
                                            fontStyle: "italic",
                                            fontWeight: "bold"
                                        }}>
                                            Account
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
                                            right: 20,
                                            top: 42,
                                            flexDirection: "row",
                                            width: 55,
                                            lineHeight: 12,
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        }}

                                            onPress={this.setCountDown}>

                                            <Text style={{
                                                fontSize: 15,
                                                fontWeight: "bold",
                                                color: "#000000",
                                            }}>SOL</Text>

                                            <Text style={{
                                                fontSize: 10,
                                                fontWeight: "bold",
                                                color: "#f9b846",
                                            }}>All</Text>

                                        </TouchableOpacity>
                                    </View>
                                    <View style={{
                                        width: "100%",

                                    }}>
                                        <Text style={{
                                            fontStyle: "italic",
                                            color: "#999999",
                                            fontSize: 12
                                        }}>Balance: 0 SOL</Text>
                                    </View>
                                    <View style={{
                                        width: "100%",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginTop: 20,
                                        backgroundColor: "#f4f4f4",
                                        padding: 16,
                                        borderRadius: 10,
                                    }} >
                                        <Text style={{ fontSize: 11, lineHeight: 18, fontStyle: "italic" }}>The network you have selected is <Text style={{
                                            color: "red"
                                        }}>Solana</Text>. Please ensure that the withdraw address supports the <Text style={{
                                            color: "red"
                                        }}>Solana</Text> network. <Text style={{
                                            color: "red"
                                        }}> You will lose your assets</Text> if the chosen platform does not suport retrievals. </Text>


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
                            // onPress={() => this.props.navigation.goBack()}
                            // disabled={this.state.disabledTouch}
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
                                // opacity: this.state.disabledTouch ? 0.5 : 1,
                                width: "80%"

                            }}>
                            <Text style={{
                                fontSize: 20,
                                fontStyle: "italic",
                                fontWeight: "bold"
                            }}>  CONFIRM</Text>
                        </TouchableOpacity>

                    </View>}
                </KeyboardAvoidingView >
            </SafeAreaView >
        );
    }
}

export default SendTo;
