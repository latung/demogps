import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Keyboard, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';
class NewWallet extends Component
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
            data: ["position", "improve", "near", "want", "crouch", "venue", "ivory", "middle", "hole", "lonely", "woman", "inject"]
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
        let { isHiddenBottom, data } = this.state
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
                                    {/* <TouchableOpacity style={{
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

                                    </TouchableOpacity> */}
                                    <View style={{
                                        width: "100%",
                                        justifyContent: "center",
                                        // backgroundColor: "red",
                                        alignItems: "center",

                                    }}>
                                        <Text style={{ fontSize: 20, fontWeight: "bold", fontStyle: "italic" }}>NEW WALLET</Text>
                                    </View>
                                </View>
                                <View style={{
                                    width: "100%",
                                    alignItems: "center",

                                    flex: 7,
                                }}>

                                    <View style={{
                                        borderWidth: 1,
                                        borderRadius: 20,
                                        flex: 0.8,
                                        padding: 10,
                                        width: "95%",
                                    }}>
                                        <View>
                                            <Text style={{
                                                color: "#ff4b4b",
                                                fontStyle: "italic",
                                                fontWeight: "bold",
                                                textAlign: "center",
                                                fontSize: 12,
                                                opacity: 0.5,
                                                lineHeight: 20
                                            }}>
                                                Don't rist losing your funds. Protect your wallet by saving your Seed phrase in a place your trust
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={{
                                                color: "#ff4b4b",
                                                fontStyle: "italic",
                                                fontWeight: "bold",
                                                textAlign: "center",
                                                fontSize: 12,
                                                lineHeight: 20
                                            }}>
                                                Is the only way to recover your wallet if you get locked out of the app or get a new device
                                            </Text>
                                        </View>
                                        <View style={{
                                            justifyContent: "center",
                                            alignItems: "center",
                                            marginTop: 20,

                                        }}>
                                            {data && data.map((item, index) =>
                                            {
                                                return <View key={index} style={{
                                                    flexDirection: "row",
                                                    width: 100,
                                                    marginVertical: 5,
                                                    alignContent: "space-around"
                                                }}>
                                                    <Text style={{ fontStyle: "italic", color: "#999999" }}>{index + 1}.</Text>
                                                    <Text style={{ fontStyle: "italic", marginLeft: 10 }}> {item}</Text>
                                                </View>
                                            })}

                                        </View>
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
                            onPress={() => this.props.navigation.navigate(
                                stackNavigator.WALLET_EXPORT
                            )}
                            // disabled={this.state.disabledTouch}
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingVertical: 10,
                                paddingHorizontal: 5,
                                borderRadius: 50,
                                borderColor: "#000000",
                                color: '#000000',
                                borderWidth: 2,
                                borderBottomWidth: 4,
                                borderRightWidth: 4,
                                backgroundColor: "#64ffcb",
                                // opacity: this.state.disabledTouch ? 0.5 : 1,
                                width: "60%"

                            }}>
                            <Text style={{
                                fontSize: 15,
                                fontStyle: "italic",
                                fontWeight: "bold"
                            }}>  I HAVE WRITEN DOWN</Text>
                        </TouchableOpacity>

                    </View>}
                </KeyboardAvoidingView >
            </SafeAreaView >
        );
    }
}

export default NewWallet;
