import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Keyboard, Modal, StyleSheet, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, Pressable, TouchableNativeFeedback } from 'react-native';

import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';
class WalletExport extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            email: "",
            password: "",
            verificationcode: "",
            isHiddenBottom: false,
            disabledTouch: true,
            data: ["position", "improve", "near", "want", "crouch", "venue", "ivory", "middle", "hole", "lonely", "woman", "inject"],
            dataCorect: [],
            stringCorect: "",
            stringdata: "position improve near want crouch venue ivory middle hole lonely woman inject",
            modalVisible: false
        };
    }
    componentDidMount()
    {

        // this.setModalVisible(true)
    }
    setModalVisible = (visible) =>
    {
        this.setState({ modalVisible: visible });
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
    choseCode = (item) =>
    {

        let tmp = [];
        let { dataCorect, stringCorect } = this.state;
        if (dataCorect.includes(item)) {
            tmp = dataCorect.filter((el, index) =>
            {

                return el != item;
            });

        }
        else {
            dataCorect.push(item);
            tmp = dataCorect;
        }
        stringCorect = tmp.join(" ");
        this.setState(sate =>
        {
            return {
                dataCorect: tmp,
                stringCorect: stringCorect
            }
        })
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
    render()
    {
        let { isHiddenBottom, data, dataCorect, stringCorect, modalVisible } = this.state

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
                                        onPress={() => this.props.navigation.navigate(
                                            stackNavigator.WALLET_IMPORT
                                        )}
                                    >
                                        <Text style={{

                                        }}>Back</Text>

                                    </TouchableOpacity>
                                    <View style={{
                                        width: "100%",
                                        justifyContent: "center",
                                        // backgroundColor: "red",
                                        alignItems: "center",

                                    }}>
                                        <Text style={{ fontSize: 20, fontWeight: "bold", fontStyle: "italic" }}>EXPORT WALLET</Text>
                                    </View>
                                </View>
                                <View style={{
                                    width: "100%",
                                    alignItems: "center",
                                    flex: 4,

                                }}>

                                    <View>
                                        <Text style={{
                                            color: "#ff4b4b",
                                            fontStyle: "italic",
                                            fontWeight: "bold",
                                            textAlign: "left",
                                            fontSize: 12,
                                            lineHeight: 20
                                        }}>
                                            Is the only way to recover your wallet if you get locked out of the app or get a new device
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: "100%",

                                        position: "relative",
                                        marginTop: 20,
                                    }}>

                                        <View style={{
                                            borderWidth: 2,
                                            borderBottomWidth: 4,
                                            borderRightWidth: 4,
                                            borderRadius: 30,
                                            height: 180,
                                            paddingHorizontal: 20,
                                            paddingVertical: 10,

                                        }}>
                                            <Text style={{
                                                color: "#999999",
                                                fontStyle: "italic",
                                                fontWeight: "bold",
                                                fontSize: 12
                                            }}>
                                                {/* Middle lonely venue ivory inject hole crouch want improve woman near */}
                                                {stringCorect}
                                            </Text>

                                        </View>
                                    </View>


                                </View>
                                <View style={{
                                    width: "100%",
                                    paddingHorizontal: 20,
                                    marginTop: 20,
                                    flex: 4,
                                    position: "relative",
                                    flexDirection: "row",
                                    flexWrap: "wrap",

                                }}>
                                    {data && data.map((item, index) =>
                                    {
                                        let opacity = dataCorect.includes(item) ? 0.2 : 1;
                                        // let d = data.includes(item) ? 0.2 : 1;

                                        return <TouchableOpacity key={index} style={{
                                            borderWidth: 2,
                                            borderBottomWidth: 4,
                                            borderRightWidth: 4,
                                            borderRadius: 10,
                                            paddingHorizontal: 10,
                                            paddingVertical: 8,
                                            marginRight: 15,
                                            marginBottom: 15,
                                            opacity: opacity
                                        }}
                                            onPress={() =>
                                            {
                                                this.choseCode(item)
                                            }}
                                        >
                                            <Text style={{
                                                fontSize: 12
                                            }}>{item}</Text>
                                        </TouchableOpacity>
                                    })}

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
                            onPress={() => this.Confirm()}
                            // disabled={this.state.disabledTouch}
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
                                // opacity: this.state.disabledTouch ? 0.5 : 1,
                                width: "60%"

                            }}>
                            <Text style={{
                                fontSize: 20,
                                fontStyle: "italic",
                                fontWeight: "bold"
                            }}>  CONFRIM </Text>
                        </TouchableOpacity>

                    </View>}
                </KeyboardAvoidingView >
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

export default WalletExport;
