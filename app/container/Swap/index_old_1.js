import React, { Component, createRef } from 'react';
import { View, Text, SafeAreaView, ImageBackground, Image, Modal, Keyboard, TouchableWithoutFeedback, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import PoupBottom from "./poupBottom";
import PopupSetting from "./poupsetting";
import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';

class Swap extends Component
{
    constructor(props)
    {
        super(props);
        this.popupRef = new createRef();
        this.popupSettingRef = new createRef();
        this.state = {
            isSpending: true,
            isWallet: false,
            modalVisible: false,
            isHiddenBottom: false,
            data: [
                { id: 2, Name: "BFI", amount: 0 }, { id: 1, Name: "PAY", amount: 0 }, { id: 0, Name: "PAY", amount: 0 }
            ],
            data1: [
                { id: 1, Name: "Sneakers", amount: 0 }, { id: 2, Name: "Shoeboxes", amount: 0 }, { id: 2, Name: "Gems", amount: 0 }
            ],
            data2: [{ name: "PAY", icon: "#000000" }, { name: "BFI", icon: "#d2c402" }, { name: "PAY", icon: "blue" }],
            data3: [{ name: "PAY", icon: "#000000" }, { name: "BFI", icon: "#777777" }, { name: "PAY", icon: "blue" }],
            from: { icon: "blue", name: "PAY", value: "0.00" },
            to: { icon: "#777777", name: "BFI", value: "42.5" },
            istop: true,
            disabledTouch: true,
            isCreateToken: false,
            Percent: 0.5,

        };
    }

    onChangeText = (type, value) =>
    {
        let to = value * 100;
        if (type === "from") {
            this.setState(state =>
            {
                return {
                    from: {
                        ...state.from, value: value.toString()
                    },
                    to: {
                        ...state.to, value: to.toString()
                    }
                }
            })
        }

    }

    setIstop = (type) =>
    {
        this.setState(state =>
        {
            return {
                istop: type
            }
        })
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
                to: to
            }
        })
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
    onShowPopupsetting = () =>
    {
        this.popupSettingRef.Show();
        // setTimeout(() =>
        // {
        //     this.popupBotomRef.toggleBackgroundColor();
        // }, 300);

    }
    onColsePopupsetting = () =>
    {
        this.popupSettingRef.Close();

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

    setFromTo = (item) =>
    {

        let { istop } = this.state;
        if (istop) {
            this.setState(state =>
            {
                return {
                    from: {
                        ...state.from, name: item.name, icon: item.icon
                    },

                }
            })
        } else {
            this.setState(state =>
            {
                return {

                    to: {
                        ...state.to, name: item.name, icon: item.icon
                    }
                }
            })
        }
        this.onColsePopup()
    }


    CreateToken = () =>
    {
        this.setState(state =>
        {
            return {
                isCreateToken: true
            }
        }, () =>
        {
            setTimeout(() =>
            {
                this.setState(state =>
                {
                    return {
                        isCreateToken: false
                    }
                }, () =>
                {
                    this.Confirm()
                })
            }, 2000);
        })
    }
    setModalVisible = (visible) =>
    {
        this.setState({ modalVisible: visible });
    }
    Confirm = () =>
    {
        this.setModalVisible(true);
        setTimeout(() =>
        {
            this.setModalVisible(false);
        }, 1000);
        let { stringdata, stringCorect } = this.state;
        if (stringdata === stringCorect) {
            this.setModalVisible(true);
            setTimeout(() =>
            {
                this.setModalVisible(false);
            }, 1000);
        }
    }

    setPerCent = (Percent) =>
    {
        this.setState(state =>
        {
            return {
                Percent: Percent
            }
        })
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
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); this.SetIsHiddenBottom(false); }} style={{

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

                                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>SWAP</Text>

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
                                            }} source={{ uri: 'ic_refresh' }} />
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


                                marginVertical: 4,

                                justifyContent: "center",
                                alignItems: "center",
                                overflow: "hidden"
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                    width: "100%",
                                    paddingVertical: 10,

                                    justifyContent: "space-between"
                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                        alignItems: "center"
                                    }}>

                                        <Text style={{

                                            fontStyle: "italic",
                                            fontSize: 15,
                                            color: "#afafaf",
                                        }}>From</Text>
                                    </View>


                                    <View style={{

                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        <Text style={{
                                            color: "#afafaf",
                                            fontSize: 15
                                        }}>Balance: 00000</Text>
                                    </View>
                                </View>
                                <View style={{
                                    backgroundColor: "#ffffff",

                                    paddingBottom: 20,
                                    width: "100%",
                                    marginTop: 2,

                                }}>
                                    <ImageBackground source={{ uri: 'ic_frame' }} style={{
                                        width: "100%", height: 109,


                                    }}>
                                        <View style={{
                                            paddingHorizontal: 20,
                                            flexDirection: "row",
                                            height: "100%",
                                            justifyContent: "space-between",
                                            alignItems: "center",
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
                                                <Text style={{
                                                    fontSize: 12,
                                                    fontStyle: "italic",
                                                    color: "#ff8521"
                                                }}>Max</Text>
                                                <View style={{
                                                    width: 30,
                                                    borderRadius: 100,
                                                    height: 30,
                                                    backgroundColor: this.state.from.icon,

                                                }}></View>

                                                <TouchableOpacity style={{
                                                    flexDirection: "row",
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
                                                    <Text style={{
                                                        fontSize: 18,
                                                        fontWeight: "bold",
                                                        marginLeft: 5,
                                                        color: "#afafaf",
                                                    }}>v</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                    <View style={{

                                        justifyContent: "center",
                                        alignItems: "flex-start",
                                        marginTop: 5
                                    }}>
                                        <Text style={{
                                            color: "#afafaf",
                                            fontSize: 13,
                                            fontStyle: "italic"

                                        }}>Transfer fee <Text style={{
                                            fontWeight: "bold"
                                        }}>(5%)</Text></Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <TouchableOpacity style={{
                                    width: 40,
                                    height: 40,
                                }} onPress={this.ToggleTrasfer}>
                                    <Image source={{ uri: 'ic_swap' }} style={{
                                        width: 40, height: 40,


                                    }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{


                                justifyContent: "center",
                                alignItems: "center",
                                overflow: "hidden"
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                    width: "100%",
                                    paddingVertical: 10,
                                    paddingHorizontal: 20,
                                    justifyContent: "space-between"
                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                        alignItems: "center"
                                    }}>

                                        <Text style={{

                                            fontStyle: "italic",
                                            fontSize: 10,
                                            color: "#afafaf",
                                        }}>TO (Estimate)</Text>
                                    </View>


                                    <View style={{

                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>

                                    </View>
                                </View>
                                <View style={{

                                    width: "100%",

                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                }}>
                                    <ImageBackground source={{ uri: 'ic_frame' }} style={{
                                        width: "100%", height: 109,


                                    }}>
                                        <View style={{
                                            paddingHorizontal: 20,
                                            flexDirection: "row",
                                            height: "100%",
                                            justifyContent: "space-between",
                                            alignItems: "center",
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
                                                    onChangeText={(itemValue) => this.onChangeText("to", itemValue)}
                                                    value={this.state.to.value}
                                                >


                                                </TextInput>
                                            </View>
                                            <View style={{
                                                flexDirection: "row",
                                                width: "50%",
                                                alignItems: "center",
                                                justifyContent: "space-around"
                                            }}>
                                                <Text style={{
                                                    fontSize: 12,
                                                    fontStyle: "italic",
                                                    color: "#ff8521",
                                                    opacity: 0
                                                }}>Max</Text>
                                                <View style={{
                                                    width: 30,
                                                    borderRadius: 100,
                                                    height: 30,
                                                    backgroundColor: this.state.to.icon

                                                }}></View>

                                                <TouchableOpacity style={{
                                                    flexDirection: "row",
                                                    alignItems: "center"
                                                }} onPress={() =>
                                                {
                                                    this.setState(state =>
                                                    {
                                                        return {
                                                            istop: false
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
                                                    }}>{this.state.to.name}</Text>
                                                    <Text style={{
                                                        fontSize: 18,
                                                        fontWeight: "bold",
                                                        marginLeft: 5,
                                                        color: "#afafaf",
                                                    }}>v</Text>
                                                </TouchableOpacity>

                                            </View>

                                        </View>
                                    </ImageBackground>
                                    <View style={{

                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginTop: 5
                                    }}>
                                        <Text style={{
                                            color: "#afafaf",
                                            fontSize: 13,
                                            fontStyle: "italic"

                                        }}>1 PAY = 42.3 BFI</Text>
                                    </View>
                                </View>
                            </View>
                            {/* <TouchableOpacity activeOpacity={1} style={{
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}
                                onPress={this.onShowPopupsetting}
                            >
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}>
                                    <Text style={{
                                        color: "#afafaf",
                                        fontStyle: "italic"
                                    }}>
                                        Slippage Tolerance
                                    </Text>
                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}>
                                    <Text style={{

                                        fontStyle: "italic",
                                        fontWeight: "bold"
                                    }}>
                                        {this.state.Percent}%
                                    </Text>
                                    <Text style={{
                                        color: "#afafaf",
                                        fontStyle: "italic",
                                        fontWeight: "bold",
                                        marginLeft: 10,
                                        fontSize: 18
                                    }}>
                                        {">"}
                                    </Text>
                                </View>
                            </TouchableOpacity> */}

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
                    </View>
                </TouchableWithoutFeedback>
                <PoupBottom
                    ref={(target) => { this.popupRef = target }}
                    onTouchOutside={this.onColsePopup}
                    title={"MUTI-CHAIN SWITCH"}
                    data={istop ? this.state.data2 : this.state.data3}
                    setFromTo={this.setFromTo}

                />
                <PopupSetting
                    ref={(target) => { this.popupSettingRef = target }}
                    onTouchOutside={this.onColsePopupBottom}
                    title={"SETTING"}
                    navigation={navigation}
                    stackNavigator={stackNavigator}
                    setPerCent={this.setPerCent}
                />
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() =>
                    {
                        Alert.alert("Modal has been closed.");
                        this.setModalVisible(!modalVisible);
                    }}
                >

                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Incorrect secrect phrase</Text>
                            {/* <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => this.setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable> */}
                        </View>
                    </View>

                </Modal>
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
export default Swap;
