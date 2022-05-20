import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput, Keyboard, TouchableWithoutFeedback, ImageBackground, Image, TouchableOpacity } from 'react-native';
import PoupBottom from "./poupBottom";
import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';
class Transfer extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            data: [{ name: "SQL", icon: "ic_location", next: false }, { name: "BUST", icon: "ic_coin_t", next: false }, { name: "MOV", icon: "ic_location", next: false }, { name: "Sneaker", icon: "ic_coin", next: true }, { name: "Gems", icon: "ic_coin_t", next: true }, { name: "Shoeboxes", icon: "ic_coin_t", next: true }],
            from: { icon: "ic_btn_wallet", name: "MOV", value: "1" },
            to: { icon: "ic_btn_spending", name: "Wallet", value: "1" },
            isSpending: true,
            isWallet: false,
            isBadges: false,
            isHiddenBottom: false,
            toAddress: "",
            amount: "",
            toggle: false,
        };
    }

    ToggleTrasfer = () =>
    {
        let { from, to } = this.state;
        let tmp = from;
        from = to;
        to = tmp;

        this.setState(state =>
        {
            return {
                from: from,
                to: to,
                toggle: !state.toggle
            }
        })
    }
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
    onChangeText = (name, value) =>
    {

        this.setState(state =>
        {
            return {
                [name]: value
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
        const { isSpending,
            isWallet,
            isBadges, isHiddenBottom } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); this.SetIsHiddenBottom(false) }} style={{

                }} >
                    <View
                        style={{
                            flex: 8,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: "100%",
                            justifyContent: "space-between",

                        }}>
                        <View style={{
                            flex: isHiddenBottom ? 3 : 2,

                            width: "100%",
                            // backgroundColor: "red",
                            // paddingTop: 20,
                            // borderBottomLeftRadius: 30,
                            // borderBottomRightRadius: 30,
                            justifyContent: "center",
                            alignItems: "center"
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

                                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>WALLET</Text>

                                        </View>
                                        <View style={{ width: "30%", justifyContent: "center", alignItems: "flex-end", }}>
                                            <TouchableOpacity style={{
                                                width: 50,
                                                height: 40,
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
                                                    width: 50,
                                                    height: 40, resizeMode: 'contain'
                                                }} source={{ uri: 'ic_gps' }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>

                            <View style={{
                                flex: 1.8,
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingHorizontal: 20,
                            }}>
                                <View
                                    style={{
                                        flex: 0.4,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: "center",
                                        width: "90%",
                                        height: "100%",
                                    }}>
                                    <ImageBackground source={{ uri: 'ic_frame_tabs' }}
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            // borderWidth: 1,
                                            // borderRadius: 30,
                                            justifyContent: "center",
                                            // backgroundColor: '#D6D6D6',
                                            overflow: 'hidden',
                                            flex: 1,
                                            height: 42,
                                            width: "100%"
                                        }}>
                                        <TouchableOpacity
                                            activeOpacity={1}
                                            style={{
                                                flex: 0.5,
                                                height: "80%",
                                                alignItems: 'center',
                                                // borderWidth: isSpending ? 1 : 0,
                                                borderRadius: 20,
                                                overflow: 'hidden',
                                                backgroundColor: 'transparent',
                                                marginLeft: 3
                                            }}
                                            onPress={() =>
                                                this.setState({
                                                    isSpending: true,
                                                    isWallet: false,
                                                    isBadges: false
                                                })
                                            }>
                                            <View
                                                style={{
                                                    height: "100%",
                                                    backgroundColor: isSpending
                                                        ? '#F44369'
                                                        : 'transparent',

                                                    paddingVertical: 4,
                                                    width: '100%',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-around',
                                                    flexDirection: "row",
                                                    paddingHorizontal: 10
                                                }}>

                                                <Text style={{ color: isSpending ? "#ffffff" : "#2C2C2C", fontWeight: "bold" }}>To Spending</Text>
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            activeOpacity={1}
                                            style={{
                                                flex: 0.5,
                                                height: "80%",
                                                alignItems: 'center',
                                                // borderWidth: isSpending ? 1 : 0,
                                                borderRadius: 20,
                                                overflow: 'hidden',
                                                backgroundColor: 'transparent',
                                                marginRight: 3
                                            }}
                                            onPress={() =>
                                                this.setState({
                                                    isSpending: false,
                                                    isWallet: true,
                                                    isBadges: false
                                                })
                                            }>
                                            <View
                                                style={{
                                                    height: "100%",
                                                    backgroundColor: isWallet
                                                        ? '#F44369'
                                                        : 'transparent',

                                                    paddingVertical: 4,
                                                    width: '100%',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-around',
                                                    flexDirection: "row",
                                                    paddingHorizontal: 10
                                                }}>

                                                <Text style={{ color: isWallet ? "#ffffff" : "#2C2C2C", fontWeight: "bold" }}>To External</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </ImageBackground>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            width: "100%",
                            flex: 5,
                            justifyContent: "flex-start",
                            alignItems: "center",
                            paddingVertical: 20,
                        }}>
                            {isSpending && <View style={{
                                width: "100%",
                                // flex: 1,
                                flexDirection: "row",
                                justifyContent: "space-around",
                                alignItems: "center",
                                // paddingVertical: 20,
                            }}>
                                <View style={{
                                    width: this.state.toggle ? 110 : 90,
                                    height: 40,
                                    resizeMode: "contain"
                                }}>
                                    <Image style={{
                                        width: this.state.toggle ? 110 : 90,
                                        height: 40,
                                        resizeMode: "contain"
                                    }} source={{ uri: this.state.from.icon }} />
                                </View>
                                <TouchableOpacity style={{
                                    width: 40,
                                    height: 40,
                                }} onPress={this.ToggleTrasfer} >
                                    <Image style={{
                                        width: 40,
                                        height: 40,
                                        resizeMode: "contain"
                                    }} source={{ uri: "ic_swap_red" }} />
                                </TouchableOpacity>
                                <View style={{
                                    width: !this.state.toggle ? 110 : 90,
                                    height: 40,
                                    resizeMode: "contain"
                                }}>
                                    <Image style={{
                                        width: !this.state.toggle ? 110 : 90,
                                        height: 40,
                                        resizeMode: "contain"
                                    }} source={{ uri: this.state.to.icon }} />
                                </View>
                            </View>}
                            {isSpending && <View style={{
                                width: "100%",
                                flex: 1,
                                paddingHorizontal: 20
                            }}>



                                <View style={{

                                    // borderColor: "#000000",
                                    // borderWidth: 2,
                                    // borderRadius: 10,

                                    // marginVertical: 5,
                                    // borderRightWidth: 4,
                                    // borderBottomWidth: 4,
                                    height: 200,
                                    justifyContent: "center",
                                    alignItems: "center",

                                    width: "100%",
                                }}>
                                    <View style={{
                                        width: "100%",
                                        marginVertical: 8,
                                        justifyContent: "flex-start"
                                    }}><Text style={{
                                        color: "#767676",
                                        fontStyle: "italic",

                                    }}>Asset</Text></View>
                                    <ImageBackground source={{ uri: 'ic_frame' }} style={{
                                        width: "100%", height: 109,
                                        justifyContent: "center",
                                        alignItems: "center",

                                    }}>
                                        <View style={{

                                            width: "90%",
                                            // marginTop: 2,
                                            flexDirection: "row",
                                            justifyContent: "space-between"
                                        }}>
                                            <View style={{
                                                flexDirection: "row",
                                                width: "50%"
                                            }}>
                                                <TextInput
                                                    style={{
                                                        fontWeight: "bold",
                                                        fontStyle: "italic",
                                                        fontSize: 20
                                                    }}
                                                    onFocus={() => this.SetIsHiddenBottom(true)}
                                                    value={this.state.from.value}
                                                    onChangeText={(itemValue) => this.onChangeText("from", itemValue)}
                                                >


                                                </TextInput>
                                            </View>
                                            <View style={{
                                                flexDirection: "row",
                                                width: "50%",
                                                alignItems: "center",
                                                justifyContent: "space-around"
                                            }}>
                                                {/* <Text style={{
                                                    fontSize: 12,
                                                    fontStyle: "italic",
                                                    color: "#ff8521"
                                                }}>Max</Text> */}
                                                <Image style={{ width: 30, height: 30 }} source={{ uri: "ic_location" }} />

                                                <TouchableOpacity style={{
                                                    flexDirection: "row",
                                                    justifyContent: "center",
                                                    alignItems: "center"
                                                }} onPress={() =>
                                                {
                                                    this.setState(state =>
                                                    {
                                                        return {
                                                            istop: true
                                                        }
                                                    }, () =>
                                                    {
                                                        this.onShowPoup()
                                                    })
                                                }}>
                                                    <Text style={{
                                                        fontSize: 18,
                                                        fontWeight: "bold",
                                                        fontStyle: "italic"
                                                    }}>{this.state.from.name}</Text>
                                                    <Image style={{ marginLeft: 10, width: 20, height: 20 }} source={{ uri: "ic_arrow_grey" }} />
                                                    <Text style={{
                                                        fontSize: 15,
                                                        marginLeft: 10,
                                                        fontWeight: "bold",
                                                        color: "#F44369",
                                                        fontStyle: "italic"
                                                    }}>All</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                    <View style={{
                                        width: "100%",
                                        marginTop: 10,
                                        justifyContent: "flex-start"
                                    }}><Text style={{
                                        color: "#767676",
                                        fontStyle: "italic"
                                    }}>Available: 15</Text></View>
                                </View>



                                {!isHiddenBottom && <View style={{
                                    width: "100%",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    // marginTop: 20,
                                    flex: 1
                                }}>
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
                                            source={{ uri: "ic_btn_confirm_long" }} />
                                    </TouchableOpacity>

                                </View>
                                }
                            </View>}
                            {isWallet && <View style={{
                                width: "100%",
                                flex: 1,
                                paddingHorizontal: 30
                            }}>

                                {!isHiddenBottom && <View style={{
                                    width: "100%",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Image style={{ width: "100%", height: 100, resizeMode: "contain" }}
                                        source={{ uri: "ic_token" }} />

                                </View>
                                }
                                <View
                                    style={{
                                        width: "100%",

                                        // alignItems: 'center',
                                        flex: 1,

                                    }}>



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
                                                color: "#767676",
                                                fontStyle: "italic",
                                                marginBottom: 10
                                            }}>
                                                To Address
                                            </Text>
                                            <ImageBackground source={{ uri: 'ic_frame_coin' }} style={{
                                                width: "100%",
                                                height: 62,

                                            }}>
                                                <TextInput
                                                    onChangeText={(itemValue) => this.onChangeText("toAddress", itemValue)}

                                                    value={this.state.toAddress}
                                                    // autoFocus={true}
                                                    onFocus={() => this.SetIsHiddenBottom(true)}
                                                    style={{
                                                        height: 62,

                                                        width: "100%",
                                                        // marginTop: 10,
                                                        // borderWidth: 1,
                                                        // borderRadius: 10,
                                                        paddingHorizontal: 20,
                                                        fontSize: 20,
                                                        fontWeight: "bold",
                                                        fontStyle: "italic"
                                                        // borderColor: "#000000",
                                                        // borderWidth: 1,
                                                        // borderBottomWidth: 3,
                                                        // borderRightWidth: 3
                                                    }}


                                                ></TextInput>
                                            </ImageBackground>
                                            <TouchableOpacity style={{
                                                position: "absolute",
                                                right: 20,
                                                top: 40,
                                                height: 20,
                                                width: 20,

                                                lineHeight: 12,
                                            }}>
                                                <Image style={{
                                                    height: 20,
                                                    width: 20, resizeMode: "contain"
                                                }}
                                                    source={{ uri: "ic_scan" }} />

                                            </TouchableOpacity>

                                        </View>

                                        <View style={{
                                            width: "100%",
                                            marginBottom: 10,
                                            position: "relative",
                                        }}>
                                            <Text style={{
                                                color: "#767676",
                                                fontStyle: "italic",
                                                marginBottom: 10
                                            }}>
                                                Amount
                                            </Text>
                                            <ImageBackground source={{ uri: 'ic_frame_coin' }} style={{
                                                width: "100%",
                                                height: 62,

                                            }}>
                                                <TextInput
                                                    onChangeText={(itemValue) => this.onChangeText("amount", itemValue)}

                                                    value={this.state.amount}
                                                    // autoFocus={true}
                                                    onFocus={() => this.SetIsHiddenBottom(true)}
                                                    style={{
                                                        height: 62,

                                                        width: "100%",
                                                        // marginTop: 10,
                                                        // borderWidth: 1,
                                                        // borderRadius: 10,
                                                        paddingHorizontal: 20,
                                                        fontSize: 20,
                                                        fontWeight: "bold",
                                                        fontStyle: "italic"
                                                        // borderColor: "#000000",
                                                        // borderWidth: 1,
                                                        // borderBottomWidth: 3,
                                                        // borderRightWidth: 3
                                                    }}

                                                ></TextInput>
                                            </ImageBackground>
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
                                                }}>MOV</Text>

                                                <Text style={{
                                                    fontSize: 12,
                                                    fontWeight: "bold",
                                                    fontStyle: "italic",
                                                    color: "#F44369",
                                                }}>All</Text>

                                            </TouchableOpacity>
                                        </View>
                                        <View style={{
                                            width: "100%",

                                        }}>
                                            <Text style={{
                                                fontStyle: "italic",
                                                color: "#767676",
                                                fontSize: 12
                                            }}>Balance: 0.0098686 BNB</Text>
                                        </View>


                                    </View>

                                </View>

                                {!isHiddenBottom && <View style={{
                                    width: "100%",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    // marginTop: 20,
                                    flex: 1
                                }}>
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
                                            source={{ uri: "ic_btn_confirm_long" }} />
                                    </TouchableOpacity>

                                </View>
                                }
                            </View>}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <PoupBottom
                    ref={(target) => { this.popupRef = target }}
                    onTouchOutside={this.onColsePopup}
                    title={"MUTI-CHAIN SWITCH"}
                    data={this.state.data}
                />
            </SafeAreaView>
        );
    }
}

export default Transfer;
