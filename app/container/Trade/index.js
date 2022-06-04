import React, { Component, createRef } from 'react';
import { View, Text, SafeAreaView, ScrollView, Modal, Keyboard, TouchableWithoutFeedback, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import PoupBottom from "./poupBottom";
import PopupSetting from "./poupsetting";
import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';

class Trade extends Component
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
                { id: 2, Name: "BUSD", amount: 0 }, { id: 1, Name: "MOV", amount: 0 }, { id: 2, Name: "USDT", amount: 0 }
            ],
            data1: [
                { id: 1, Name: "Sneakers", amount: 0 }, { id: 2, Name: "Shoeboxes", amount: 0 }, { id: 2, Name: "Gems", amount: 0 }
            ],
            data2: [{ name: "BUSD", icon: "#000000" }, { name: "MOV", icon: "#d2c402" }, { name: "USDT", icon: "blue" }],
            data3: [{ name: "BUSD", icon: "#000000" }, { name: "MOV", icon: "#777777" }, { name: "USDT", icon: "blue" }],
            from: { icon: "blue", name: "USDT", value: "0.00" },
            to: { icon: "#777777", name: "MOV", value: "" },
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
                                width: "100%",
                                paddingHorizontal: 20,
                                overflow: 'hidden',
                                flexDirection: "row",
                                paddingTop: 10,
                                justifyContent: "space-between",
                                alignItems: "center",

                            }}>
                            <View style={{
                                width: "30%",
                                justifyContent: "flex-start"
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
                            </View>
                            <View
                                style={{

                                    justifyContent: "center",
                                    alignItems: 'center',

                                    width: "30%"

                                }}>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    fontStyle: "italic"
                                }}>TRADE</Text>
                            </View>
                            <View style={{
                                width: "30%",
                                justifyContent: "center",
                                alignItems: "flex-end"
                            }}>
                                <View style={{
                                    width: 20,
                                    height: 20,
                                    backgroundColor: "#000000"
                                }}></View>
                            </View>
                        </View>

                        <View style={{
                            flex: 2.8,
                            paddingHorizontal: 20,
                            marginTop: 30
                        }}>
                            <View style={{

                                borderColor: "#000000",
                                borderWidth: 2,
                                borderRadius: 10,

                                marginVertical: 5,
                                borderRightWidth: 4,
                                borderBottomWidth: 4,
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
                                        }}>From</Text>
                                    </View>


                                    <View style={{

                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        <Text style={{
                                            color: "#afafaf",
                                            fontSize: 10
                                        }}>Balance: 0</Text>
                                    </View>
                                </View>
                                <View style={{
                                    backgroundColor: "#ffffff",
                                    paddingHorizontal: 20,
                                    paddingVertical: 10,
                                    paddingBottom: 20,
                                    width: "90%",
                                    marginTop: 2,
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
                                                fontSize: 15
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
                            </View>

                            <View style={{
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <TouchableOpacity style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 100,
                                    backgroundColor: "#afafaf",
                                    marginVertical: 10,
                                }} onPress={this.ToggleTrasfer}>

                                </TouchableOpacity>
                            </View>
                            <View style={{

                                borderColor: "#000000",
                                borderWidth: 2,
                                borderRadius: 10,

                                marginVertical: 5,
                                borderRightWidth: 4,
                                borderBottomWidth: 4,
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
                                        <Text style={{
                                            color: "#afafaf",
                                            fontSize: 10
                                        }}></Text>
                                    </View>
                                </View>
                                <View style={{
                                    backgroundColor: "#ffffff",
                                    paddingHorizontal: 20,
                                    paddingVertical: 10,
                                    paddingBottom: 20,
                                    width: "90%",
                                    marginTop: 2,
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
                                                fontSize: 15
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
                            </View>
                            <TouchableOpacity activeOpacity={1} style={{
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
                            </TouchableOpacity>

                        </View>
                        {!isHiddenBottom && <View style={{
                            marginVertical: 20,
                            flex: 2.4,
                            alignItems: 'center',
                            justifyContent: 'center',
                            // backgroundColor: "red"
                        }}>
                            <TouchableOpacity
                                onPress={this.CreateToken}
                                disabled={this.state.isCreateToken}
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
                                    backgroundColor: !this.state.isCreateToken ? "#64ffcb" : "#a5a5a5",
                                    // opacity: this.state.disabledTouch ? 0.5 : 1,
                                    width: "80%",
                                    marginBottom: 20
                                }}>
                                <Text style={{
                                    fontSize: 20,
                                    fontStyle: "italic",
                                    fontWeight: "bold"
                                }}>  {!this.state.isCreateToken && "Create token account"}
                                    {this.state.isCreateToken && "Creating 2 minute"}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate(
                                    stackNavigator.WALLET_PASSCODE
                                )}
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
                                    backgroundColor: "#a5a5a5",
                                    // opacity: this.state.disabledTouch ? 0.5 : 1,
                                    width: "80%"
                                }}>
                                <Text style={{
                                    fontSize: 20,
                                    fontStyle: "italic",
                                    fontWeight: "bold"
                                }}>  TRADE </Text>
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
export default Trade;
