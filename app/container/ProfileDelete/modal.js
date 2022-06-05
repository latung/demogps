import React, { Component } from 'react';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import { View, Text, SafeAreaView, TouchableOpacity, Keyboard, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
class Poup extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isEnabled: true,
            verificationcode: "",
            heightForm: false,
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

    SetHeightForm = () =>
    {
        this.setState(state =>
        {
            return {
                SetHeightForm: !state.SetHeightForm
            }
        })
    }
    render()
    {
        const { SetHeightForm } = this.state;
        return (

            <KeyboardAvoidingView style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "#0000006f",
                position: "absolute",

                width: "100%",
                height: "100%",
                zIndex: 1
            }}>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }} style={{

                }} >
                    <View
                        style={{
                            height: "50%",
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 20,
                            position: "absolute",

                        }}>
                        <View
                            style={{
                                height: 220,
                                width: "85%",
                                backgroundColor: "#ffffff",
                                borderRadius: 20,


                            }}>
                            <TouchableOpacity style={{
                                position: "absolute",
                                right: 10,
                                top: 10,
                                borderRadius: 100,
                                borderColor: "#000000",
                                borderWidth: 1,
                                borderRightWidth: 3,
                                borderBottomWidth: 2,
                                height: 30,
                                width: 30,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#64ffcb"
                            }}
                                onPress={this.props.setShowModal}
                            >
                                <Text>✖</Text>
                            </TouchableOpacity>
                            <View style={{
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                height: 50
                            }}>
                                <Text style={{
                                    fontStyle: "italic",
                                    fontSize: 20,
                                    fontWeight: "bold",

                                }}>DELETE ACCOUNT</Text>
                            </View>
                            <View style={{
                                width: "100%",
                                flexWrap: "wrap",
                                paddingHorizontal: 20,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginTop: 20,
                            }}>

                                <View style={{
                                    width: "100%",
                                    marginBottom: 30,
                                    position: "relative",
                                }}>

                                    <TextInput
                                        onChangeText={(itemValue) => this.onChangeText("verificationcode", itemValue)}
                                        onFocus={() => this.SetHeightForm(true)}
                                        value={this.state.verificationcode}

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
                                        right: -30,
                                        top: 23,

                                        width: 100,
                                        lineHeight: 12,
                                    }}><Text style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color: "#f9b846",
                                    }}>Send code</Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={{
                                width: "100%",
                                flexDirection: "row",
                                justifyContent: "space-around",
                                alignItems: "center"
                            }}>
                                <TouchableOpacity style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingVertical: 7,
                                    paddingHorizontal: 3,
                                    borderRadius: 50,
                                    borderColor: "#000000",
                                    color: '#000000',

                                    borderWidth: 2,
                                    borderBottomWidth: 4,
                                    borderRightWidth: 4,
                                    backgroundColor: "#ffffff",
                                    width: 130
                                }}
                                >
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontStyle: "italic",
                                        fontSize: 18
                                    }}>
                                        CANCLE
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    disabled={this.state.isEnabled}
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingVertical: 7,
                                        paddingHorizontal: 3,
                                        borderRadius: 50,
                                        borderColor: "#000000",
                                        color: '#000000',
                                        opacity: this.state.isEnabled ? 0.5 : 1,
                                        borderWidth: 2,
                                        borderBottomWidth: 4,
                                        borderRightWidth: 4,
                                        backgroundColor: "#64ffcb",
                                        width: 130
                                    }}
                                >
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontStyle: "italic",
                                        fontSize: 18
                                    }}>
                                        NEXT
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        );
    }

};

export default Poup;
