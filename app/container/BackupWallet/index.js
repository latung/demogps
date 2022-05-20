import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Keyboard, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';
class BackupWallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            verificationcode: "",
            isHiddenBottom: false,
            disabledTouch: true,
        };
    }
    onChangeText = (name, itemValue) => {
        this.setState(state => {
            return {
                [name]: itemValue
            }
        })
    }
    SetIsHiddenBottom = (type) => {
        if (!type) {
            setTimeout(() => {
                this.setState(state => {
                    return {
                        isHiddenBottom: type
                    }
                })
            }, 50);
        }
        else {
            this.setState(state => {
                return {
                    isHiddenBottom: type
                }
            })
        }

    }
    render() {
        let { isHiddenBottom } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{

                    flex: 1,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",

                }}>
                    <View style={{
                        marginBottom: 50
                    }}>
                        <View>
                            <View style={{ width: 100, height: 100, backgroundColor: "#64ffcb" }}></View>
                        </View>
                    </View>
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        paddingHorizontal: 40
                    }}>
                        <View style={{
                            marginBottom: 30
                        }}>
                            <Text style={{
                                fontSize: 22,
                                fontWeight: "500",
                                fontStyle: "italic"
                            }}>Are you being watched?</Text>
                        </View>
                        <View style={{
                            marginBottom: 30
                        }}>
                            <Text style={{
                                fontSize: 14,
                                textAlign: "center",
                                color: "#999999",
                                fontStyle: "italic"
                            }}>Never share your Seed Phrase Anyone who has it can access your funds from anywhere</Text>
                        </View>
                        <View style={{
                            marginBottom: 30
                        }}>
                            <Text style={{
                                fontSize: 12,
                                textAlign: "center",
                                color: "#999999",
                                fontStyle: "italic"
                            }}>View in private with no cameras around.</Text>
                        </View>

                        <TouchableOpacity style={{
                            marginBottom: 30,
                            marginTop: 50
                        }}>
                            <Text style={{
                                fontSize: 22,
                                fontWeight: "500",
                                fontStyle: "italic",
                                color: "#64ffcb",
                                fontWeight: "bold"
                            }}>View Seed Phrase</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate(
                            stackNavigator.WALLET_SETTINGS
                        )}
                        // disabled={this.state.disabledTouch}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',

                            borderRadius: 100,
                            borderColor: "#000000",
                            color: '#000000',
                            borderWidth: 2,
                            borderBottomWidth: 4,
                            borderRightWidth: 4,
                            backgroundColor: "#64ffcb",
                            // opacity: this.state.disabledTouch ? 0.5 : 1,
                            width: 40,
                            height: 40,
                            marginTop: 10,

                        }}>
                        <Text style={{
                            fontSize: 15,

                            fontWeight: "bold"
                        }}>X</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        );
    }
}

export default BackupWallet;
