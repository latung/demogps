import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Keyboard, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

class ProfileEditName extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name: "",
            isHiddenBottom: false,
            disabledTouch: true,
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
        let { isHiddenBottom } = this.state
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

                                        justifyContent: "flex-start",
                                        alignItems: "center",

                                    }}>
                                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>NAME</Text>
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
                                            Name
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

export default ProfileEditName;
