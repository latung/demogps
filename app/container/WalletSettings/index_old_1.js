import React, { Component, createRef } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, ImageBackground, StatusBar, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';

class WalletSettings extends Component
{
    constructor(props)
    {
        super(props);
        this.popupRef = new createRef();
        this.state = {
            isSpending: true,
            isWallet: false,
            modalVisibles: false,

        };
    }
    componentDidMount()
    {
        // this.onShowPoup()
    }

    // componentWillUnmount()
    // {
    //     this.setState(state =>
    //     {
    //         return {
    //             isWallet: false
    //         }
    //     })
    // }
    onShowPoup = () =>
    {
        this.popupRef.Show();
        // setTimeout(() =>
        // {
        //     this.popupRef.toggleBackgroundColor();
        // }, 300);

    }
    onColsePopup = () =>
    {
        this.popupRef.Close();

    }

    render()
    {
        const { navigation } = this.props;
        const { isSpending, isWallet, data, data1 } = this.state;
        return (

            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "#ffffff"
            }}>

                <View style={{
                    flex: 1,

                }}>


                    <View
                        style={{

                            justifyContent: "center",
                            alignItems: "center",

                            height: 100

                        }}>
                        <ImageBackground source={{ uri: 'ic_top_bar' }} style={{
                            width: "100%", height: "100%",


                        }}>
                            {/* <Image style={{
                                resizeMode: 'contain', width: "100%", position: "absolute",
                                height: "100%"
                            }} source={{ uri: 'ic_top_bar' }} /> */}
                            <View style={{
                                width: "100%",
                                height: "100%",
                                flexDirection: "row",
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

                                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>SETTINGS</Text>

                                </View>
                                <View style={{ width: "30%", justifyContent: "center", alignItems: "flex-end", }}>
                                    {/* <TouchableOpacity style={{
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
                                        <Image style={{
                                            width: 20,
                                            height: 20, resizeMode: 'contain'
                                        }} source={{ uri: 'ic_settings' }} />
                                    </TouchableOpacity> */}
                                </View>
                            </View>
                        </ImageBackground>
                    </View>



                    <View style={{
                        flex: 2.8,
                        paddingHorizontal: 20,
                        marginTop: 30
                    }}>
                        <TouchableOpacity activeOpacity={1} style={{

                            borderColor: "#000000",
                            borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: "#b1ffe5",
                            marginVertical: 5,


                            overflow: "hidden"
                        }} onPress={() =>
                        {
                            // this.props.navigation.navigate(
                            //     stackNavigator.ROFILE_PASS_CODE
                            // )
                            this.props.navigation.navigate(
                                stackNavigator.BACKUP_WALLET
                            )
                        }}>
                            <View style={{
                                flexDirection: "row",
                                width: "100%",
                                padding: 20,
                                justifyContent: "space-between"
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}>
                                    <View style={{
                                        width: 30,
                                        height: 30,
                                        backgroundColor: "#000000",
                                        marginRight: 30
                                    }}>
                                    </View>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontStyle: "italic",
                                    }}>Backup</Text>
                                </View>


                                <View style={{
                                    width: 30,
                                    height: 30,

                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Text style={{
                                        color: "#afafaf",
                                        fontSize: 20
                                    }}>{">"}</Text>
                                </View>
                            </View>
                            <View style={{
                                backgroundColor: "#ffffff",
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                marginTop: 2
                            }}><Text style={{
                                fontSize: 11,
                                fontStyle: "italic",
                                color: "#afafaf"
                            }}>You 12-word Seed Phrase is the ONLY way to recover your funds if you lose access to your wallet </Text></View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} style={{

                            borderColor: "#000000",
                            borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: "#b1ffe5",
                            marginVertical: 5,


                            overflow: "hidden"
                        }} onPress={() =>
                        {
                            this.props.navigation.navigate(
                                stackNavigator.WALLET_PASSCODE
                            )
                        }}>
                            <View style={{
                                flexDirection: "row",
                                width: "100%",
                                padding: 20,
                                justifyContent: "space-between"
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}>
                                    <View style={{
                                        width: 30,
                                        height: 30,
                                        backgroundColor: "#000000",
                                        marginRight: 30
                                    }}>
                                    </View>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontStyle: "italic",
                                    }}>Reset with Passcode</Text>
                                </View>


                                <View style={{
                                    width: 30,
                                    height: 30,

                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Text style={{
                                        color: "#afafaf",
                                        fontSize: 20
                                    }}>{">"}</Text>
                                </View>
                            </View>
                            <View style={{
                                backgroundColor: "#ffffff",
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                marginTop: 2
                            }}><Text style={{
                                fontSize: 11,
                                fontStyle: "italic",
                                color: "#afafaf"
                            }}>Keep your assets safe by enabling passcode protection. </Text></View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} style={{

                            borderColor: "#000000",
                            borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: "#b1ffe5",
                            marginVertical: 5,


                            overflow: "hidden"
                        }}
                            onPress={() =>
                            {
                                this.props.navigation.navigate(
                                    stackNavigator.RESTORE_WALLET
                                )
                            }}
                        >
                            <View style={{
                                flexDirection: "row",
                                width: "100%",
                                padding: 20,
                                justifyContent: "space-between"
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}>
                                    <View style={{
                                        width: 30,
                                        height: 30,
                                        backgroundColor: "#000000",
                                        marginRight: 30
                                    }}>
                                    </View>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontStyle: "italic",
                                    }}>Restore walet</Text>
                                </View>


                                <View style={{
                                    width: 30,
                                    height: 30,

                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Text style={{
                                        color: "#afafaf",
                                        fontSize: 20
                                    }}>{">"}</Text>
                                </View>
                            </View>
                            <View style={{
                                backgroundColor: "#ffffff",
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                marginTop: 2
                            }}><Text style={{
                                fontSize: 11,
                                fontStyle: "italic",
                                color: "#afafaf"
                            }}>Overwrite your current Mobile wallet using a Seed Prase   </Text></View>
                        </TouchableOpacity>
                        <View
                            style={{
                                flex: 0.3,
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        ><Text style={{
                            fontSize: 15,
                            fontWeight: "bold",
                            fontStyle: "italic"
                        }}>Bace on Solana</Text>
                        </View>
                    </View>

                </View>

            </SafeAreaView >

        );
    }
}

export default WalletSettings;
