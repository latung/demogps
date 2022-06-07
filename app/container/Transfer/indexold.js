import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import PoupBottom from "./poupBottom";

class Transfer extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            data: [{ name: "SQL", icon: false }, { name: "BFI", icon: false }, { name: "BFI", icon: false }, { name: "Sneaker", icon: true }, { name: "Gems", icon: true }, { name: "Shoeboxes", icon: true }, { name: "Shoeboxes", icon: true }],
            from: { icon: "", name: "Spending" },
            to: { icon: "", name: "Wallet" }
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
                to: to
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
                        flex: 4,
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
                            flex: 0.8,
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
                                <Text style={{ fontSize: 20, fontWeight: "bold", fontStyle: "italic" }}>TRANSFER</Text>
                            </View>
                        </View>
                        <View style={{
                            flex: 1.8,
                            width: "100%",
                            justifyContent: "flex-start",
                            alignItems: "center"
                        }}>
                            <View style={{
                                width: "100%",
                                height: 180,
                                paddingHorizontal: 20,
                                backgroundColor: "#ffffff",
                                borderColor: "#000000",
                                borderWidth: 2,
                                borderRightWidth: 4,
                                borderBottomWidth: 4,
                                borderRadius: 30,
                                justifyContent: "center",
                                alignItems: "flex-start"

                            }}>
                                <View style={{
                                    flexDirection: "row",
                                    width: "70%",
                                    justifyContent: "flex-start",
                                    alignItems: "center"
                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                        width: "40%"
                                    }}>
                                        <View style={{
                                            height: 20,
                                            width: 20,
                                            backgroundColor: "#64ffcb",

                                        }}></View>
                                        <Text
                                            style={{
                                                color: "#9b9b9b",
                                                fontStyle: "italic",
                                                marginLeft: 10
                                            }}
                                        >From</Text>
                                    </View>
                                    <View style={{
                                        width: "80%",
                                        justifyContent: "center",
                                        alignItems: "flex-start",
                                        paddingLeft: 10
                                    }}>
                                        <Text
                                            style={{
                                                color: "#000000",
                                                fontStyle: "italic",
                                                fontSize: 20,
                                                fontWeight: "bold"

                                            }}
                                        >{this.state.from.name}</Text>
                                    </View>
                                </View>
                                <View style={{
                                    height: 2,
                                    width: "100%",
                                    backgroundColor: "#f3f1f4",
                                    marginVertical: 20,
                                    justifyContent: "center",
                                    alignItems: "flex-end"
                                }}>
                                    <TouchableOpacity activeOpacity={1} style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 100,
                                        backgroundColor: "#9807e0"
                                    }}
                                        onPress={() => { this.ToggleTrasfer() }}
                                    >

                                    </TouchableOpacity>

                                </View>

                                <View style={{
                                    flexDirection: "row",
                                    width: "70%",
                                    justifyContent: "flex-start",
                                    alignItems: "center"
                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                        width: "40%"
                                    }}>
                                        <View style={{
                                            height: 20,
                                            width: 20,
                                            backgroundColor: "#64ffcb"
                                        }}></View>
                                        <Text
                                            style={{
                                                color: "#9b9b9b",
                                                fontStyle: "italic"
                                            }}
                                        >To</Text>
                                    </View>
                                    <View style={{
                                        width: "80%",
                                        justifyContent: "center",
                                        alignItems: "flex-start",
                                        paddingLeft: 10
                                    }}>

                                        <Text
                                            style={{
                                                color: "#000000",
                                                fontStyle: "italic",
                                                fontSize: 20,
                                                fontWeight: "bold"
                                            }}
                                        >{this.state.to.name}</Text>
                                    </View>
                                </View>
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
                            width: "100%",
                            flex: 1,
                            paddingHorizontal: 30
                        }}>
                            <View style={{
                                marginBottom: 30,
                            }}>
                                <Text style={{
                                    color: "#999999",
                                    fontStyle: "italic",
                                    marginBottom: 10
                                }}>Asset</Text>
                                <TouchableOpacity style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    width: "100%",
                                    height: 60,


                                    borderWidth: 1,
                                    borderRadius: 10,
                                    paddingHorizontal: 15,
                                    borderColor: "#000000",
                                    borderWidth: 1,
                                    borderBottomWidth: 3,
                                    borderRightWidth: 3,

                                }} onPress={this.onShowPoup}>
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
                                                fontSize: 20,
                                                fontWeight: "bold",
                                                fontStyle: "italic",
                                                marginLeft: 10
                                            }}>SQL</Text>
                                    </View>
                                    <View style={{


                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}><Text style={{
                                        fontSize: 30
                                    }}>{">"}</Text></View>
                                </TouchableOpacity>
                            </View>

                            <View >
                                <Text style={{
                                    color: "#999999",
                                    fontStyle: "italic",
                                    marginBottom: 10
                                }}>Amount</Text>
                                <View style={{
                                    width: "100%",
                                    marginBottom: 5,
                                    position: "relative",
                                }}>

                                    <TextInput
                                        onChangeText={(itemValue) => this.onChangeText("verificationcode", itemValue)}

                                        value={this.state.verificationcode}
                                        // autoFocus={true}
                                        onFocus={() => this.SetIsHiddenBottom(true)}
                                        style={{
                                            height: 45,
                                            width: "100%",
                                            height: 55,
                                            borderWidth: 1,
                                            borderRadius: 10,
                                            paddingHorizontal: 10,
                                            borderColor: "#000000",
                                            borderWidth: 1,
                                            borderBottomWidth: 3,
                                            borderRightWidth: 3
                                        }}


                                    ></TextInput>
                                    <TouchableOpacity style={{
                                        position: "absolute",
                                        right: -60,
                                        top: 15,

                                        width: 100,
                                        lineHeight: 12,
                                    }}><Text style={{
                                        fontSize: 15,
                                        fontWeight: "bold",
                                        color: "#f9b846",
                                    }}>All</Text></TouchableOpacity>
                                </View>
                                <Text style={{
                                    color: "#999999",
                                    fontStyle: "italic",
                                    marginBottom: 10
                                }}>Avalable: 0 SQL</Text>
                            </View>


                            <View style={{
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 20
                            }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.goBack()}
                                    disabled={this.state.disabledTouch}
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingVertical: 10,
                                        paddingHorizontal: 5,
                                        borderRadius: 20,
                                        borderColor: "#000000",
                                        color: '#000000',
                                        borderWidth: 2,
                                        borderBottomWidth: 4,
                                        borderRightWidth: 4,
                                        backgroundColor: "#64ffcb",

                                        width: "80%"

                                    }}>
                                    <Text style={{
                                        fontSize: 20,
                                        fontStyle: "italic",
                                        fontWeight: "bold"
                                    }}>  CONFIRM TRANSFER</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </View>
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
