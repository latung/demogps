import React, { Component, createRef } from 'react';
import { View, Text, SafeAreaView, Animated, ImageBackground, ScrollView, TouchableWithoutFeedback, StatusBar, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';

import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';
import PoupBottom from "./poupBottom";
import Poup from "./modal";
import PoupBottomR from "./poupBottomR";
import PoupExternal from "./poupExternal";
const popuList = [
    { id: 1, Name: "solana" }, { id: 2, Name: "BNB Smart Chain (BEP20)" }
]
class WalletHome extends Component
{
    constructor(props)
    {
        super(props);
        this.popupBotomRef = new createRef();
        this.popupRef = new createRef();
        this.popupBotomRRef = new createRef();
        this.popupExternalRef = new createRef();
        this.state = {
            isSpending: false,
            isWallet: true,
            modalVisibles: false,
            data: [
                { id: 2, Name: "MOVE", amount: '8.888', icon: "ic_location" }, { id: 1, Name: "BNB", amount: '8.888', icon: "ic_coin" },
            ],
            data1: [
                { id: 1, Name: "Sneakers", amount: 15 }, { id: 2, Name: "Shoeboxes", amount: 52 }, { id: 2, Name: "Gems", amount: 16 }
            ],
            data2: [{ name: "SOL", icon: "#000000" }, { name: "BUSD", icon: "#d2c402" }, { name: "BUSD", icon: "#d2c402" }, { name: "USDT", icon: "blue" }],
            data3: [{ name: "SOL", icon: "#000000" }, { name: "BUSD", icon: "#777777" }, { name: "USDT", icon: "blue" }],
            istop: true,
            viewState: true,
            animationValue: new Animated.Value(60),
            animationOpacity: new Animated.Value(0),
            animationOpacity1: new Animated.Value(1),
        };
    }
    toggleAnimation = (type) =>
    {
        if (type) {
            this.setState(state =>
            {
                return {
                    viewState: false
                }
            }, () =>
            {
                Animated.timing(this.state.animationValue, {
                    toValue: 150,
                    duration: 500,
                    useNativeDriver: false
                }).start();
                Animated.timing(this.state.animationOpacity, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: false
                }).start();
            })
            // Animated.timing(this.state.animationOpacity1, {
            //     toValue: 0,
            //     duration: 300,
            //     useNativeDriver: false
            // }).start(() =>
            // {

            // });


        } else {

            Animated.timing(this.state.animationValue, {
                toValue: 60,
                duration: 300,
                useNativeDriver: false
            }).start();

            Animated.timing(this.state.animationOpacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false
            }).start(() =>
            {
                this.setState(state =>
                {
                    return {
                        viewState: true
                    }
                }, () =>
                {
                    Animated.timing(this.state.animationOpacity1, {
                        toValue: 1,
                        duration: 300,
                        useNativeDriver: false
                    }).start();
                })
            });

        }

        // if (this.state.viewState == true) {
        //     Animated.timing(this.state.animationValue, {
        //         toValue: 150,
        //         duration: 500,
        //         useNativeDriver: false
        //     }).start(() =>
        //     {
        //         this.setState(state =>
        //         {
        //             return {
        //                 viewState: false
        //             }
        //         })
        //     });
        //     Animated.timing(this.state.animationOpacity, {
        //         toValue: 1,
        //         duration: 500,
        //         useNativeDriver: false
        //     }).start(() =>
        //     {
        //         this.setState(state =>
        //         {
        //             return {
        //                 viewState: false
        //             }
        //         })
        //     });
        // } else {

        //     Animated.timing(this.state.animationValue, {
        //         toValue: 63,
        //         duration: 500,
        //         useNativeDriver: false
        //     }).start(() =>
        //     {
        //         this.setState(state =>
        //         {
        //             return {
        //                 viewState: true
        //             }
        //         })
        //     });

        //     Animated.timing(this.state.animationOpacity, {
        //         toValue: 0,
        //         duration: 500,
        //         useNativeDriver: false
        //     }).start(() =>
        //     {
        //         this.setState(state =>
        //         {
        //             return {
        //                 viewState: true
        //             }
        //         })
        //     });

        // }

    }
    componentDidMount()
    {
        // this.onShowPoup()
    }
    onShowPoupBottomR = () =>
    {
        this.popupBotomRRef.Show();

    }
    onColsePopupBottomR = () =>
    {
        this.popupBotomRRef.Close();

    }
    onShowPoupBottom = () =>
    {
        this.popupBotomRef.Show();

    }
    onColsePopupBottom = () =>
    {
        this.popupBotomRef.Close();

    }
    onShowPoup = () =>
    {
        this.popupRef.Show();

    }

    onColsePopup = () =>
    {
        this.popupRef.Close();

    }
    onShowPoupExternal = () =>
    {
        this.popupExternalRef.Show();

    }
    onColsePopupExternal = () =>
    {
        this.popupExternalRef.Close();

    }
    renderItem = ({ item, index }) =>
    {

        return <ImageBackground source={{ uri: 'ic_frame_coin' }} style={{
            width: "100%", height: 66,
            // flex: 1
            marginBottom: 10

        }}>
            <TouchableOpacity activeOpacity={1} style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                paddingHorizontal: 20,
                height: 66,
                // borderBottomWidth: index == (this.state.data.length - 1) ? 0 : 1,
                // borderColor: "#000000",


            }} onPress={() =>
            {
                this.props.navigation.navigate(
                    stackNavigator.WALLET_COIN
                )
            }}>
                <Image style={{
                    resizeMode: 'contain', width: 35,
                    height: 35
                }} source={{ uri: item.icon }} />
                <View style={{
                    width: "77%",
                    justifyContent: "flex-start",
                    marginLeft: 10
                }}>
                    <Text
                        style={{
                            fontWeight: '100',
                            fontSize: 18,
                            fontStyle: "italic",
                            fontWeight: "bold"
                        }}>{item.Name}</Text>
                </View>
                <View style={{

                    height: 30,
                    width: 30,
                    alignItems: "center",
                    justifyContent: "center"
                }}><Text style={{
                    fontWeight: '100',
                    fontSize: 20,
                    fontStyle: "italic",
                    fontWeight: "bold"
                }} >{item.amount}</Text></View>
            </TouchableOpacity>
        </ImageBackground>
    }
    renderItem1 = ({ item, index }) =>
    {

        return <ImageBackground source={{ uri: 'ic_frame_coin_small' }} style={{
            width: "100%", height: 34.9,
            // flex: 1,
            marginBottom: 10
        }}>
            <TouchableOpacity activeOpacity={1} style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                paddingHorizontal: 20,
                height: 35,
                // borderBottomWidth: index == (this.state.data.length - 1) ? 0 : 1,
                // borderColor: "#000000",


            }} onPress={() =>
            {
                this.props.navigation.navigate(
                    stackNavigator.WALLET_COIN
                )
            }}>

                <View style={{
                    width: "70%",
                    justifyContent: "flex-start"
                }}>
                    <Text
                        style={{
                            fontWeight: '100',
                            fontSize: 18,
                            fontStyle: "italic",
                            fontWeight: "bold"
                        }}>{item.Name}</Text>
                </View>
                <View style={{

                    height: 35,
                    width: 35,
                    alignItems: "center",
                    justifyContent: "center"
                }}><Text style={{
                    fontWeight: '100',
                    fontSize: 15,
                    fontStyle: "italic",
                    fontWeight: "bold"
                }} >{item.amount}</Text></View>
            </TouchableOpacity>
        </ImageBackground>
    }
    render()
    {
        const { navigation } = this.props;
        const { isSpending, isWallet, data, data1, istop, viewState
        } = this.state;
        const animatedStyle = {

            with: this.state.animationValue
        }
        return (

            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "#ffffff"
            }}>
                <TouchableWithoutFeedback onPress={() =>
                {
                    this.toggleAnimation(false)
                }} style={{
                    backgroundColor: "red",
                    flex: 1
                }} >
                    <View style={{
                        flex: 10,
                        backgroundColor: "#F6F6F6"
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

                                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>WALLET</Text>
                                        {/* <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        borderWidth: 1,
                                        borderRadius: 30,
                                        backgroundColor: '#D6D6D6',
                                        overflow: 'hidden',
                                        flex: 1,
                                        height: 50,
                                    }}>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={{
                                            flex: 0.5,
                                            height: "100%",
                                            alignItems: 'center',
                                            borderWidth: isSpending ? 1 : 0,
                                            borderRadius: isSpending ? 30 : 0,
                                            overflow: 'hidden'
                                        }}
                                        onPress={() =>
                                            this.setState({
                                                isSpending: true,
                                                isWallet: false,
                                                isBadges: false
                                            }, () =>
                                            {

                                                this.props.navigation.navigate(
                                                    stackNavigator.SPENDING_WALLET
                                                )

                                            })
                                        }>
                                        <View
                                            style={{
                                                height: "100%",
                                                backgroundColor: isSpending
                                                    ? 'white'
                                                    : '#D6D6D6',
                                                paddingVertical: 4,
                                                width: '100%',
                                                alignItems: 'center',
                                                justifyContent: 'space-around',
                                                flexDirection: "row",
                                                paddingHorizontal: 10
                                            }}>
                                            <View style={{
                                                backgroundColor: "#000000",
                                                height: 25,
                                                width: 25
                                            }}>

                                            </View>
                                            <Text>Spending</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={{
                                            flex: 0.5,
                                            height: "100%",
                                            alignItems: 'center',
                                            borderWidth: isWallet ? 1 : 0,
                                            borderRadius: isWallet ? 30 : 0,
                                            overflow: 'hidden'
                                        }}
                                        onPress={() =>
                                            this.setState({
                                                isSpending: false,
                                                isWallet: true,
                                                isBadges: false
                                            }, () =>
                                            {
                                                // this.onShowPoup()
                                                // this.props.navigation.navigate(
                                                //     stackNavigator.ROFILE_PASS_CODE
                                                // )
                                                // this.props.navigation.navigate(
                                                //     stackNavigator.ROFILE_PASS_CODE
                                                // )

                                            })
                                        }>
                                        <View
                                            style={{
                                                height: "100%",
                                                backgroundColor: isWallet
                                                    ? 'white'
                                                    : '#D6D6D6',
                                                paddingVertical: 4,
                                                width: '100%',
                                                alignItems: 'center',
                                                justifyContent: 'space-around',
                                                flexDirection: "row",
                                                paddingHorizontal: 10
                                            }}>
                                            <View style={{
                                                backgroundColor: "#000000",
                                                height: 25,
                                                width: 25
                                            }}>
                                            </View>
                                            <Text>Wallet</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View> */}
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
                                            <Image style={{
                                                width: 20,
                                                height: 20, resizeMode: 'contain'
                                            }} source={{ uri: 'ic_settings' }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>

                        <ScrollView style={{
                            flex: 1,

                        }}>
                            <View
                                style={{
                                    flex: 2,
                                    paddingHorizontal: 20,
                                    overflow: 'hidden',
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#F6F6F6",
                                    paddingBottom: 20,
                                    paddingVertical: 10,
                                    borderBottomLeftRadius: 30,
                                    borderBottomRightRadius: 30
                                }}>
                                <View style={{
                                    // marginVertical: 10
                                }}>
                                    <Text style={{
                                        color: "#767676",
                                        fontStyle: "italic"
                                    }}>Total balance</Text>
                                    {/* <TouchableOpacity style={{
                                        borderRadius: 100,
                                        borderWidth: 1,
                                        borderColor: "#000000",
                                        flexDirection: "row",

                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        backgroundColor: "#ffffff",
                                        borderRadius: 30,
                                        borderColor: "#000000",
                                        borderWidth: 1,
                                        borderBottomWidth: 3,
                                        borderRightWidth: 3,
                                        width: 80,
                                        height: 30,
                                        paddingHorizontal: 10,
                                        backgroundColor: "#64ffcb",
                                    }} onPress={this.onShowPoupBottom}>
                                        <Text>Solana</Text>
                                        <Text>v</Text>
                                    </TouchableOpacity> */}
                                </View>
                                <View style={{

                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    // marginVertical: 10
                                }}>
                                    <Text style={{
                                        fontSize: 40,
                                        fontWeight: "bold",
                                        fontStyle: "italic",
                                        color: "#F44369"
                                    }}>$9,260.02</Text>
                                    <Text style={{
                                        fontSize: 15,
                                        fontWeight: "bold",
                                        fontStyle: "italic",
                                        color: "#2C2C2C",
                                        marginRight: 10
                                    }}>MOV: 158.5</Text>

                                </View>
                                <View style={{
                                    borderRadius: 30,
                                    // borderColor: "#000000",
                                    // borderWidth: 1,
                                    // borderBottomWidth: 3,
                                    // borderRightWidth: 3,
                                    paddingHorizontal: 30,
                                    paddingVertical: 6,
                                    backgroundColor: "#A79BBF",
                                    marginVertical: 10
                                }}>
                                    <Text style={{ color: "#ffffff", fontWeight: "bold" }}>kjjhajdd...2554fw</Text>

                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    width: "90%",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                    marginVertical: 10
                                }}>
                                    <View style={{
                                        justifyContent: "center",
                                        alignItems: "center",

                                    }}>
                                        <TouchableOpacity style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 50,
                                            // borderWidth: 2,
                                            // borderColor: "#000000",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            // backgroundColor: "#ffffff",
                                        }}
                                            onPress={() =>
                                            {
                                                navigation.navigate(stackNavigator.RECVICE);
                                            }}
                                        >
                                            {/* <View style={{
                                                width: 30,
                                                height: 30,
                                                backgroundColor: "#d9fff2"
                                            }}></View> */}
                                            <Image style={{ width: 60, height: 60, resizeMode: 'contain' }} source={{ uri: 'ic_btn_recvice' }} />
                                        </TouchableOpacity>
                                        <View style={{
                                            // backgroundColor: "#0a970a",
                                            height: 45,
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}>
                                            <Text style={{
                                                fontWeight: "bold",
                                                fontStyle: "italic",
                                                fontSize: 14
                                            }}>Receive</Text>

                                        </View>

                                    </View>

                                    <View style={{
                                        justifyContent: "center",
                                        alignItems: "center",

                                    }}>
                                        {/* <Animated.View style={{
                                            borderRadius: 50,
                                        
                                            backgroundColor: !viewState ? "#ffffff" : "transparent",
                                            overflow: "hidden",
                                            width: this.state.animationValue,
                                            justifyContent: "space-between",
                                            flexDirection: "row",
                                         
                                        }}>
                                            <Animated.View style={{


                                            }}> */}
                                        <TouchableOpacity style={{
                                            width: 60,
                                            height: 60,

                                            justifyContent: "center",
                                            alignItems: "center",
                                            // backgroundColor: "#a70707"
                                        }} onPress={() =>
                                        {
                                            this.props.navigation.navigate(
                                                stackNavigator.TRANSFER
                                            )
                                        }}>
                                            {/* <View style={{
                                                        width: 30,
                                                        height: 30,
                                                        backgroundColor: "#d9fff2"
                                                    }}></View> */}
                                            <Image style={{ width: 60, height: 60, resizeMode: 'contain' }} source={{ uri: 'ic_btn_transfer' }} />
                                        </TouchableOpacity>
                                        {/* </Animated.View> */}
                                        {/* <Animated.View>
                                                <TouchableOpacity style={{
                                                    width: 60,
                                                    height: 60,

                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    backgroundColor: "#ffffff"
                                                }} onPress={() =>
                                                {
                                                    // this.toggleAnimation(true);
                                                    this.onShowPoupExternal()
                                                }}>

                                                    <Image style={{ width: 60, height: 60, resizeMode: 'contain' }} source={{ uri: 'ic_btn_transfer' }} />
                                                </TouchableOpacity>
                                            </Animated.View> */}
                                        {/* </Animated.View> */}


                                        <View style={{
                                            justifyContent: "center",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            width: 60,
                                            // backgroundColor: "red"
                                            // backgroundColor: "#0a970a",
                                            height: 45
                                        }}>
                                            {/* <Animated.View style={{
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                // display: viewState ? "none" : "flex",
                                                opacity: this.state.animationOpacity
                                            }}>

                                                <Text style={{
                                                    fontSize: 14,
                                                    fontStyle: "italic",

                                                    fontWeight: "bold"
                                                }}>To</Text>
                                                <Text style={{
                                                    fontSize: 14,
                                                    fontStyle: "italic",

                                                    fontWeight: "bold"
                                                }}>Spending</Text>
                                            </Animated.View> */}
                                            {/* <Animated.View style={{
                                                justifyContent: "center",
                                                alignItems: "center",
                                                // width: this.state.animationValue,
                                                display: !viewState ? "none" : "flex",
                                                opacity: this.state.animationOpacity1,

                                            }}> */}
                                            <Text style={{
                                                fontSize: 14,
                                                fontStyle: "italic",

                                                fontWeight: "bold"
                                            }}>Transfer</Text>
                                            {/* </Animated.View> */}
                                            {/* <Animated.View style={{
                                                justifyContent: "center",
                                                alignItems: "center",
                                                // display: viewState ? "none" : "flex",
                                                opacity: this.state.animationOpacity
                                            }}>
                                                <Text style={{
                                                    fontSize: 14,
                                                    fontStyle: "italic",
                                                    fontWeight: "bold"
                                                }}>To</Text>
                                                <Text style={{
                                                    fontSize: 14,
                                                    fontStyle: "italic",
                                                    fontWeight: "bold"
                                                }}>External</Text>
                                            </Animated.View> */}
                                        </View>
                                    </View>
                                    <View style={{
                                        justifyContent: "center",
                                        alignItems: "center",

                                    }}>
                                        <TouchableOpacity style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 50,
                                            // borderWidth: 2,
                                            // borderColor: "#000000",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            backgroundColor: "#ffffff"
                                        }}
                                            onPress={() =>
                                            {
                                                this.props.navigation.navigate(stackNavigator.SWAP)
                                            }}
                                        >
                                            <Image style={{ width: 60, height: 60, resizeMode: 'contain' }} source={{ uri: 'ic_btn_trade' }} />

                                        </TouchableOpacity>
                                        <View style={{
                                            // backgroundColor: "#0a970a",
                                            height: 45,
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}>
                                            <Text style={{
                                                fontWeight: "bold",
                                                fontStyle: "italic"
                                            }}>Trade</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={{
                                flex: 5,

                            }}>
                                <View style={{
                                    marginTop: 20,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginHorizontal: 20,
                                }}>
                                    <View style={{

                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}
                                    >
                                        <Text style={{
                                            // fontStyle: "italic",
                                            fontWeight: "bold",
                                            fontSize: 20
                                        }}>Wallet Account</Text>

                                    </View>
                                    <View>

                                        <TouchableOpacity style={{
                                            // borderRadius: 100,
                                            // borderWidth: 1,
                                            // borderColor: "#000000",
                                            height: 30, width: 30,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            // backgroundColor: "#64ffcb",
                                            marginLeft: 10
                                        }} onPress={this.onShowPoup}>
                                            {/* <Text style={{
                                                fontStyle: "italic",
                                                fontWeight: "bold",
                                                fontSize: 15,

                                            }}>?</Text> */}
                                            <Image style={{ height: 30, width: 30, resizeMode: 'contain' }} source={{ uri: 'ic_question_grey' }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{

                                    justifyContent: "space-between",
                                    marginHorizontal: 20,
                                    marginTop: 20
                                }}
                                >
                                    <FlatList style={{
                                        marginBottom: 20,
                                        // borderRadius: 30,
                                        // borderWidth: 1,
                                        // borderBottomWidth: 3,
                                        // borderRightWidth: 3,

                                    }}
                                        showsVerticalScrollIndicator={false}
                                        data={data}
                                        renderItem={this.renderItem}
                                        extraData={data}
                                        keyExtractor={(item, index) => index.toString()}
                                        // ItemSeparatorComponent={this.renderSeparator}
                                        contentContainerStyle={{
                                            padding: 0
                                        }}
                                    >

                                    </FlatList>


                                </View>
                                <View style={{
                                    marginTop: 20,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginHorizontal: 20,
                                }}>
                                    <View style={{

                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}
                                    >
                                        <Text style={{
                                            // fontStyle: "italic",
                                            fontWeight: "bold",
                                            fontSize: 20
                                        }}>NFT Assets </Text>

                                    </View>
                                    <View>

                                    </View>
                                </View>
                                <View style={{

                                    justifyContent: "space-between",
                                    marginHorizontal: 20,
                                    marginVertical: 10
                                }}
                                >
                                    <FlatList style={{
                                        // marginBottom: 20,
                                        // borderRadius: 30,
                                        // borderWidth: 1,
                                        // borderBottomWidth: 3,
                                        // borderRightWidth: 3,

                                    }}
                                        showsVerticalScrollIndicator={false}
                                        data={data1}
                                        renderItem={this.renderItem1}
                                        extraData={data}
                                        keyExtractor={(item, index) => index.toString()}
                                        // ItemSeparatorComponent={this.renderSeparator}
                                        contentContainerStyle={{
                                            padding: 0
                                        }}
                                    >

                                    </FlatList>


                                </View>
                                <View
                                    style={{
                                        justifyContent: "flex-end",
                                        flex: 0.5,

                                    }}
                                >

                                </View>
                            </View>
                        </ScrollView>

                    </View>
                </TouchableWithoutFeedback >
                <Poup
                    ref={(target) => { this.popupRef = target }}
                    onTouchOutside={this.onColsePopup}
                    title={"Solana WALLET"}
                    navigation={navigation}
                    stackNavigator={stackNavigator}
                />
                <PoupBottom
                    ref={(target) => { this.popupBotomRef = target }}
                    onTouchOutside={this.onColsePopupBottom}
                    title={"MUTI-CHAIN SWITCH"}
                    data={popuList}
                />
                <PoupExternal
                    ref={(target) => { this.popupExternalRef = target }}
                    onTouchOutside={this.onColsePopupExternal}
                    title={"MUTI-CHAIN SWITCH"}
                    data={istop ? this.state.data2 : this.state.data3}
                    navigation={navigation}
                    stackNavigator={stackNavigator}

                />
                <PoupBottomR
                    ref={(target) => { this.popupBotomRRef = target }}
                    onTouchOutside={this.onColsePopupBottomR}
                    title={"RECEIVE"}
                    data={popuList}
                />

            </SafeAreaView >

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
export default WalletHome;
