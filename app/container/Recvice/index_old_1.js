import React, { Component, createRef } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, Image, Modal, Keyboard, TouchableWithoutFeedback, TouchableOpacity, FlatList, StyleSheet } from 'react-native';


import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';

class Recvice extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            Address: "adwijdaodadkwadkwijad454dwad84"

        };
    }


    render()
    {
        const { navigation } = this.props;
        const { isSpending, isWallet, data, data1, isHiddenBottom, istop, modalVisible
        } = this.state;
        return (

            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "#ffffff"
            }}>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }} style={{

                }} >
                    <View style={{
                        flex: 1,

                    }}>


                        <View
                            style={{

                                // paddingHorizontal: 20,
                                overflow: 'hidden',


                                // paddingVertical: 10,
                                justifyContent: "center",
                                alignItems: "center",
                                // backgroundColor: "#d10c0c",
                                // position: "relative",
                                // shadowColor: "#000",
                                // shadowOffset: {
                                //     width: 0,
                                //     height: 2,
                                // },
                                // shadowOpacity: 0.25,
                                // shadowRadius: 4.84,
                                height: 100
                                // elevation: 5,

                            }}>
                            <ImageBackground source={{ uri: 'ic_top_bar' }} style={{
                                width: "100%", height: "100%",


                            }}>
                                {/* <Image style={{
                                resizeMode: 'contain', width: "100%", position: "absolute",
                                height: "100%"
                            }} source={{ uri: 'ic_top_bar' }} /> */}
                                <View style={{
                                    width: "100%", height: "100%", flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    paddingHorizontal: 20,


                                }}>
                                    <View style={{
                                        width: "30%",

                                    }}>
                                        <TouchableOpacity style={{
                                            fontStyle: "italic", fontWeight: 'bold',
                                            // borderRightWidth: 3,
                                            // borderBottomWidth: 3,

                                            width: 40,
                                            height: 40,
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",



                                        }} onPress={() => this.props.navigation.goBack()}>
                                            <Image style={{
                                                width: 40,
                                                height: 40, resizeMode: 'contain'
                                            }} source={{ uri: 'ic_back' }} />

                                        </TouchableOpacity>
                                    </View>
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: "center",
                                            alignItems: 'center',
                                            height: "100%",
                                            width: "30%",

                                        }}>

                                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>RECVICE</Text>

                                    </View>
                                    <View style={{ width: "30%", justifyContent: "center", alignItems: "flex-end", }}>
                                        <TouchableOpacity style={{
                                            width: 20,
                                            height: 20,
                                            // backgroundColor: "#000000",

                                        }}
                                            onPress={() =>
                                            {
                                                this.props.navigation.navigate(
                                                    stackNavigator.WALLET_SETTINGS
                                                )
                                            }}
                                        >

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>


                        <View style={{
                            flex: 2.8,
                            paddingHorizontal: 20,
                            marginTop: 10
                        }}>

                            <View style={{
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                flex: 2
                            }}>
                                <Image style={{
                                    width: 100,
                                    height: 100,
                                    resizeMode: "contain",

                                }} source={{ uri: "ic_scan" }} />
                                <Text style={{ color: "#2C2C2C", fontSize: 20, fontWeight: "bold", marginVertical: 10, marginTop: 30 }}>SCAN QR CODE</Text>
                                <Text style={{ color: "#767676", fontStyle: "italic" }}>Scan address to receive payment</Text>
                            </View>
                            <View style={{
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                flex: 1
                            }}>
                                <Text style={{ color: "#767676" }}>Wallet address</Text>
                                <View style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    marginTop: 10,
                                }}>
                                    <ImageBackground style={{
                                        width: "95%",
                                        height: 42,
                                        resizeMode: "contain",

                                    }} source={{ uri: "ic_frame_address" }} >
                                        <TextInput
                                            style={{
                                                paddingHorizontal: 30,
                                                fontSize: 15,
                                                color: "#ffffff"
                                            }}
                                            value={this.state.Address}
                                        />
                                    </ImageBackground>
                                </View>


                                <TouchableOpacity
                                    onPress={() => this.props.navigation.goBack()}
                                    // disabled={this.state.disabledTouch}
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        // paddingVertical: 10,
                                        // paddingHorizontal: 5,
                                        // borderRadius: 20,
                                        // borderColor: "#000000",
                                        // color: '#000000',
                                        // borderWidth: 2,
                                        // borderBottomWidth: 4,
                                        // borderRightWidth: 4,
                                        // backgroundColor: "#64ffcb",

                                        width: "100%",
                                        height: 100,
                                    }}>
                                    <Image style={{ width: "100%", height: 50, resizeMode: "contain" }}
                                        source={{ uri: "ic_copy_address" }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>


            </SafeAreaView >

        );
    }
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "#000000ac",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: "center",
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {

        textAlign: "center",
        color: "#f0f0f0"
    }
});
export default Recvice;
