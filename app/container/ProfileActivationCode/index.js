import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

class ProfileActivationCode extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View
                    style={{
                        flex: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: "100%",
                        justifyContent: "space-between",
                    }}>
                    <View style={{
                        flex: 3,
                        backgroundColor: "#d9fff2",
                        width: "100%",
                        paddingHorizontal: 20,
                        // paddingTop: 20,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        justifyContent: "flex-start",
                        alignItems: "center"
                    }}>
                        <View style={{
                            width: "100%",
                            justifyContent: 'flex-start',
                            alignItems: "center",
                            flex: 0.5,
                            flexDirection: "row",


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
                                <Text style={{ fontSize: 20, fontWeight: "bold" }}>ACTIVATION CODE</Text>
                            </View>
                        </View>
                        <View style={{
                            flex: 1,
                            width: "100%",
                            justifyContent: "flex-start",
                            alignItems: "center"
                        }}>
                            <View style={{
                                width: "100%",
                                height: 150,
                                paddingHorizontal: 20,
                                backgroundColor: "#ffffff",
                                borderColor: "#000000",
                                borderWidth: 2,
                                borderRightWidth: 4,
                                borderBottomWidth: 4,
                                borderRadius: 30,
                                justifyContent: "center",
                                alignItems: "center"

                            }}>
                                <Text
                                    style={{
                                        color: "#9b9b9b",
                                        fontStyle: "italic"
                                    }}
                                >Avalable/Total</Text>
                                <Text style={{
                                    color: "#000000",
                                    fontStyle: "italic",
                                    fontSize: 30,
                                    fontWeight: "bold"
                                }}>0/0</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        width: "100%",
                        flex: 5,
                        justifyContent: "center",
                        alignItems: "center",
                        paddingVertical: 20,
                    }}>
                        <View style={{
                            width: "85%",
                            flex: 1,
                            paddingHorizontal: 20,
                            backgroundColor: "#ffffff",
                            borderColor: "#000000",
                            borderWidth: 2,
                            borderRightWidth: 4,
                            borderBottomWidth: 4,
                            borderRadius: 30,
                            justifyContent: "center",
                            alignItems: "center",


                        }}>

                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default ProfileActivationCode;
