import React, { Component, createRef } from 'react';
import { View, Text, SafeAreaView, Animated, ScrollView, TouchableWithoutFeedback, StatusBar, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';

import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';
import PoupBottom from "./poupBottom";
import Poup from "./modal";
import PoupBottomR from "./poupBottomR";
import PoupExternal from "./poupExternal";
const popuList = [
    { id: 1, Name: "bep20" }, { id: 2, Name: "BNB Smart Chain (BEP20)" }
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
                { id: 2, Name: "BUSD", amount: 0 }, { id: 1, Name: "MOV", amount: 0 }, { id: 2, Name: "MOV", amount: 0 }, { id: 2, Name: "USDT", amount: 0 }
            ],
            data1: [
                { id: 1, Name: "Sneakers", amount: 0 }, { id: 2, Name: "Shoeboxes", amount: 0 }, { id: 2, Name: "Gems", amount: 0 }
            ],
            data2: [{ name: "BUSD", icon: "#000000" }, { name: "MOV", icon: "#d2c402" }, { name: "MOV", icon: "#d2c402" }, { name: "USDT", icon: "blue" }],
            data3: [{ name: "BUSD", icon: "#000000" }, { name: "MOV", icon: "#777777" }, { name: "USDT", icon: "blue" }],
            istop: true,
            viewState: true,
            animationValue: new Animated.Value(63),
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
                toValue: 63,
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

        return <View style={{
            height: 60, flex: 1, alignItems: "center",

        }}>
            <TouchableOpacity activeOpacity={1} style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                paddingHorizontal: 20,
                height: 60,
                borderBottomWidth: index == (this.state.data.length - 1) ? 0 : 1,
                borderColor: "#000000",


            }} onPress={() =>
            {
                this.props.navigation.navigate(
                    stackNavigator.WALLET_COIN
                )
            }}>
                <View style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "blue"
                }}></View>
                <View style={{
                    width: "77%",
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

                    height: 30,
                    width: 30,
                    alignItems: "center",
                    justifyContent: "center"
                }}><Text style={{
                    fontWeight: '100',
                    fontSize: 15,
                    fontStyle: "italic",
                    fontWeight: "bold"
                }} >{item.amount}</Text></View>
            </TouchableOpacity>
        </View>
    }
    renderItem1 = ({ item, index }) =>
    {

        return <View style={{
            height: 60, flex: 1, alignItems: "center",

        }}>
            <TouchableOpacity activeOpacity={1} style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                paddingHorizontal: 20,
                height: 60,
                borderBottomWidth: index == (this.state.data.length - 1) ? 0 : 1,
                borderColor: "#000000",


            }} onPress={() =>
            {
                this.props.navigation.navigate(
                    stackNavigator.WALLET_COIN
                )
            }}>
                <View style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "blue"
                }}></View>
                <View style={{
                    width: "77%",
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

                    height: 30,
                    width: 30,
                    alignItems: "center",
                    justifyContent: "center"
                }}><Text style={{
                    fontWeight: '100',
                    fontSize: 15,
                    fontStyle: "italic",
                    fontWeight: "bold"
                }} >{item.amount}</Text></View>
            </TouchableOpacity>
        </View>
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

                    }}>

                        <View
                            style={{

                                paddingHorizontal: 20,
                                overflow: 'hidden',
                                flexDirection: "row",
                                paddingVertical: 10,
                                justifyContent: "space-between",
                                alignItems: "center",
                                backgroundColor: "#d9fff2"


                            }}>
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

                                borderRadius: 100,
                                backgroundColor: "#64ffcb"

                            }} onPress={() => this.props.navigation.goBack()}>
                                <Text style={{

                                }}>Back</Text>

                            </TouchableOpacity>
                            <View
                                style={{
                                    flex: 0.8,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    height: "100%"
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        borderWidth: 1,
                                        borderRadius: 30,
                                        backgroundColor: '#D6D6D6',
                                        overflow: 'hidden',
                                        flex: 1,
                                        height: 60,
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
                                </View>
                            </View>
                            <TouchableOpacity style={{
                                width: 20,
                                height: 20,
                                backgroundColor: "#000000"
                            }}
                                onPress={() =>
                                {
                                    this.props.navigation.navigate(
                                        stackNavigator.WALLET_SETTINGS
                                    )
                                }}
                            ></TouchableOpacity>
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
                                    backgroundColor: "#d9fff2",
                                    paddingBottom: 20,
                                    paddingVertical: 10,
                                    borderBottomLeftRadius: 30,
                                    borderBottomRightRadius: 30
                                }}>
                                <View style={{
                                    marginVertical: 10
                                }}>

                                    <TouchableOpacity style={{
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
                                        <Text>Bep20</Text>
                                        <Text>v</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{

                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    flexDirection: "row",
                                    marginVertical: 10
                                }}>
                                    <Text style={{
                                        fontSize: 30,
                                        fontWeight: "bold",
                                        fontStyle: "italic",
                                        marginRight: 10
                                    }}>0</Text>
                                    <Text style={{
                                        fontSize: 30,
                                        fontWeight: "bold",
                                        fontStyle: "italic"
                                    }}>SQL</Text>
                                </View>
                                <View style={{
                                    borderRadius: 30,
                                    borderColor: "#000000",
                                    borderWidth: 1,
                                    borderBottomWidth: 3,
                                    borderRightWidth: 3,
                                    paddingHorizontal: 20,
                                    paddingVertical: 3,
                                    backgroundColor: "#ffffff",
                                    marginVertical: 10
                                }}>
                                    <Text>kjjhajd...2554fww</Text>

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
                                            onPress={this.onShowPoupBottomR}
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
                                        <Animated.View style={{
                                            borderRadius: 100,
                                            borderWidth: 2,
                                            borderColor: "#000000",
                                            backgroundColor: "#ffffff",
                                            overflow: "hidden",
                                            width: this.state.animationValue,
                                            justifyContent: "space-between",
                                            flexDirection: "row",

                                        }}>
                                            <Animated.View style={{


                                            }}>
                                                <TouchableOpacity style={{
                                                    width: 60,
                                                    height: 60,

                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    // backgroundColor: "#a70707"
                                                }} onPress={() =>
                                                {
                                                    viewState ? this.toggleAnimation(true) : this.props.navigation.navigate(
                                                        stackNavigator.TRANSFER
                                                    )
                                                }}>
                                                    <View style={{
                                                        width: 30,
                                                        height: 30,
                                                        backgroundColor: "#d9fff2"
                                                    }}></View>
                                                </TouchableOpacity>
                                            </Animated.View>
                                            <Animated.View>
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
                                                    <View style={{
                                                        width: 30,
                                                        height: 30,
                                                        backgroundColor: "#d9fff2"
                                                    }}></View>
                                                </TouchableOpacity>
                                            </Animated.View>
                                        </Animated.View>


                                        <Animated.View style={{
                                            justifyContent: viewState ? "center" : "space-around",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            width: this.state.animationValue,
                                            // backgroundColor: "red"
                                            // backgroundColor: "#0a970a",
                                            height: 45
                                        }}>
                                            <Animated.View style={{
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
                                            </Animated.View>
                                            <Animated.View style={{
                                                justifyContent: "center",
                                                alignItems: "center",
                                                // width: this.state.animationValue,
                                                display: !viewState ? "none" : "flex",
                                                opacity: this.state.animationOpacity1,

                                            }}>
                                                <Text style={{
                                                    fontSize: 14,
                                                    fontStyle: "italic",

                                                    fontWeight: "bold"
                                                }}>Transfer</Text>
                                            </Animated.View>
                                            <Animated.View style={{
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
                                            </Animated.View>
                                        </Animated.View>
                                    </View>
                                    <View style={{
                                        justifyContent: "center",
                                        alignItems: "center",

                                    }}>
                                        <TouchableOpacity style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 100,
                                            borderWidth: 2,
                                            borderColor: "#000000",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            backgroundColor: "#ffffff"
                                        }}
                                            onPress={() =>
                                            {
                                                this.props.navigation.navigate(stackNavigator.SWAP)
                                            }}
                                        >
                                            <View style={{
                                                width: 30,
                                                height: 30,
                                                backgroundColor: "#d9fff2"
                                            }}></View>

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
                                            fontStyle: "italic",
                                            fontWeight: "bold",
                                            fontSize: 20
                                        }}>Spending Account</Text>
                                        <TouchableOpacity style={{
                                            borderRadius: 100,
                                            borderWidth: 1,
                                            borderColor: "#000000",
                                            height: 20, width: 20,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            backgroundColor: "#64ffcb",
                                            marginLeft: 10
                                        }} onPress={this.onShowPoup}>
                                            <Text style={{
                                                fontStyle: "italic",
                                                fontWeight: "bold",
                                                fontSize: 15,

                                            }}>?</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <TouchableOpacity style={{
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
                                            height: 40,
                                            paddingHorizontal: 15,
                                            backgroundColor: "#ffffff",

                                        }}>
                                            <View style={{
                                                backgroundColor: "#64ffcb",
                                                width: 20,
                                                height: 20
                                            }}>

                                            </View>
                                            <Text style={{
                                                fontStyle: "italic",
                                                fontWeight: "bold",
                                                fontSize: 20
                                            }}>Buy</Text>
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
                                        borderRadius: 30,
                                        borderWidth: 1,
                                        borderBottomWidth: 3,
                                        borderRightWidth: 3,

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

                                    justifyContent: "space-between",
                                    marginHorizontal: 20,
                                    marginVertical: 10
                                }}
                                >
                                    <FlatList style={{
                                        marginBottom: 20,
                                        borderRadius: 30,
                                        borderWidth: 1,
                                        borderBottomWidth: 3,
                                        borderRightWidth: 3,

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
                    title={"Bep20 WALLET"}
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
