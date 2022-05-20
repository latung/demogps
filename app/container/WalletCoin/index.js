import React, { Component, createRef } from 'react';
import { View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';

class WalletCoin extends Component
{
    constructor(props)
    {
        super(props);
        this.popupRef = new createRef();
        this.state = {
            isSpending: true,
            isWallet: false,
            modalVisibles: false,
            data: [
                { id: 2, Name: "BUSD", amount: 0 }, { id: 1, Name: "MOV", amount: 0 }, { id: 2, Name: "MOV", amount: 0 }, { id: 2, Name: "USDT", amount: 0 }
            ],
            data1: [
                { id: 1, Name: "Sneakers", amount: 0 }, { id: 2, Name: "Shoeboxes", amount: 0 }, { id: 2, Name: "Gems", amount: 0 }
            ],

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
                            width: "100%",
                            paddingHorizontal: 20,
                            overflow: 'hidden',
                            flexDirection: "row",
                            paddingTop: 10,
                            justifyContent: "space-between",
                            alignItems: "center",
                            backgroundColor: "#d9fff2",


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
                            }}>SOL</Text>
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

                            }}>

                                <View style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 100,
                                    backgroundColor: "#000000"
                                }}></View>
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
                                        borderRadius: 100,
                                        borderWidth: 2,
                                        borderColor: "#000000",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: "#ffffff"
                                    }}>
                                        <View style={{
                                            width: 30,
                                            height: 30,
                                            backgroundColor: "#d9fff2"
                                        }}></View>
                                    </TouchableOpacity>
                                    <Text>Receive</Text>
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
                                    }}>
                                        <View style={{
                                            width: 30,
                                            height: 30,
                                            backgroundColor: "#d9fff2"
                                        }}></View>
                                    </TouchableOpacity>
                                    <Text style={{
                                        fontSize: 14,
                                        fontStyle: "italic",
                                        fontWeight: "500"
                                    }}>Transfer</Text>
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
                                    }}>
                                        <View style={{
                                            width: 30,
                                            height: 30,
                                            backgroundColor: "#d9fff2"
                                        }}></View>

                                    </TouchableOpacity>
                                    <Text>Trade</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{
                            flex: 1,

                            minHeight: 380
                        }}>
                            <View style={{
                                height: "100%",
                                justifyContent: "center",
                                alignItems: "center",

                            }}>
                                <View style={{
                                    height: 80,
                                    width: 80,
                                    backgroundColor: "#cfcfcf",
                                    marginBottom: 10,
                                    borderRadius: 100
                                }}>

                                </View>
                                <Text style={{
                                    fontSize: 22,
                                    fontStyle: "italic",
                                    color: "#cfcfcf",
                                    fontWeight: "bold"
                                }}>No transaction record
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

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
export default WalletCoin;
