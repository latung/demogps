import React, { Component, createRef } from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';



import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';

class WalletPasscode extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isSpending: true,
            isWallet: false,
            modalVisibles: false,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            lengthCode: 6,
            passCode: "",
            codepassLen: [],
            CorCode: 123456,
        };
    }
    componentDidMount()
    {
        let result = this.RenderCodeLen();
        this.setState(state =>
        {
            return {
                codepassLen: [...result]
            }
        })


    }
    RenderCodeLen = () =>
    {
        const { lengthCode, passCode } = this.state;

        console.log(passCode)
        let result = [];
        for (let i = 0; i < lengthCode; i++) {
            let backgroundColor = passCode.includes(i + 1) ? { backgroundColor: "#808080" } : ""
            result.push(<View
                style={{
                    width: 17,
                    height: 17,
                    borderWidth: 1,
                    borderColor: "#808080",
                    borderRadius: 100,
                    marginRight: 17,
                    ...backgroundColor
                }
                }
            ></View >)
        }
        return result;

    }
    ChangPassCode = (value) =>
    {
        const { lengthCode, passCode } = this.state;
        if (passCode.length === lengthCode) {
            return;
        }
        this.setState(state =>
        {
            return {
                passCode: state.passCode + value
            }
        }, () =>
        {
            let result = this.RenderCodeLen();
            const { navigation } = this.props;
            const { CorCode, passCode } = this.state;
            if (passCode == CorCode) {
                navigation.navigate(
                    stackNavigator.TRANSFER
                )
            }
            this.setState(state =>
            {
                return {
                    codepassLen: [...result]
                }
            })

        })
    }
    DeletePassCode = () =>
    {
        let { passCode } = this.state;
        let tmp = passCode.slice(0, -1);

        this.setState(state =>
        {
            return {
                passCode: tmp
            }
        }, () =>
        {

            let result = this.RenderCodeLen();
            this.setState(state =>
            {
                return {
                    codepassLen: [...result]
                }
            })

        })
    }
    render()
    {
        const { navigation } = this.props;
        const { isSpending, isWallet, data, codepassLen } = this.state;


        return (

            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "#000000",

            }}>

                <View style={{
                    flex: 8,
                    justifyContent: "flex-start",
                    // alignItems: "center",
                    with: "100%",

                }}>

                    <View style={{
                        width: "100%",
                        justifyContent: 'flex-start',
                        alignItems: "center",

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
                            onPress={() => this.props.navigation.goBack()}
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
                            <Text style={{
                                color: "#ffffff",
                                fontSize: 20,
                                fontStyle: "italic",
                                fontWeight: "bold"
                            }}>Secured Wallet</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 7,
                            with: "100%",
                            justifyContent: "flex-start"
                        }}>
                        <View style={{
                            flex: 7,
                            with: "100%",
                            alignItems: "center",

                        }}>


                            <View style={{
                                flex: 2,
                                marginTop: 10,
                                justifyContent: "flex-end",
                                alignItems: "center",
                                width: "90%",
                                borderTopWidth: 2,
                                borderColor: "#6b6b6b"

                            }}><View style={{
                                flex: 2,
                                justifyContent: "flex-end",

                            }}>
                                    <Text style={{
                                        color: "#ffffff",
                                        fontSize: 15,
                                        fontStyle: "italic"
                                    }}>Create your passcode</Text>




                                </View>
                                <View style={{
                                    flex: 1,
                                    marginBottom: 25,
                                    width: "100%",
                                    justifyContent: "center",
                                    alignItems: "flex-end",
                                    flexDirection: "row"
                                }}>

                                    {codepassLen.length > 0 && codepassLen.map((item, index) =>
                                    {

                                        return <View key={index}>{item}</View>
                                    })}

                                </View>
                            </View>
                            <View style={{
                                flex: 4.7,
                                width: "100%",
                                justifyContent: "flex-start",
                                alignItems: "center",

                            }}>
                                <View style={{
                                    flex: 1,
                                    width: "70%",
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    justifyContent: "space-between",
                                    alignContent: "space-between",
                                    alignItems: "flex-start"
                                }}>
                                    {data && data.map((item, index) =>
                                    {


                                        if (index === (data.length - 1)) {

                                            return <View key={index} style={{
                                                width: "100%",
                                                justifyContent: "space-between",
                                                alignItems: "flex-end",
                                                alignContent: "space-between",
                                                flexDirection: "row"
                                            }}>
                                                <View
                                                    style={{
                                                        width: 60,
                                                        height: 60,
                                                        borderRadius: 100,
                                                        marginHorizontal: 10,
                                                        justifyContent: "center",
                                                        alignItems: "center"
                                                    }}
                                                >

                                                </View>
                                                <TouchableOpacity
                                                    style={{
                                                        width: 60,
                                                        height: 60,
                                                        marginHorizontal: 10,
                                                        borderRadius: 100,
                                                        backgroundColor: "#808080",
                                                        justifyContent: "center",
                                                        alignItems: "center"
                                                    }}

                                                    onPress={() => { this.ChangPassCode(item) }}
                                                >
                                                    <Text style={{
                                                        fontSize: 15,
                                                        fontStyle: "italic",
                                                        color: "#ffffff",
                                                        fontWeight: "bold"
                                                    }}>{item}</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={{
                                                        width: 60,
                                                        height: 60,
                                                        marginHorizontal: 10,
                                                        borderRadius: 100,
                                                        // backgroundColor: "#ffffff",
                                                        justifyContent: "center",
                                                        alignItems: "center"
                                                    }}
                                                    onPress={this.DeletePassCode}
                                                >
                                                    <Text style={{
                                                        fontSize: 15,
                                                        fontStyle: "italic",
                                                        color: "#ffffff",
                                                        fontWeight: "bold"
                                                    }}>X</Text>
                                                </TouchableOpacity>
                                            </View>
                                        }
                                        else {
                                            return <TouchableOpacity key={index}
                                                style={{
                                                    width: 60,
                                                    height: 60,
                                                    marginHorizontal: 10,
                                                    borderRadius: 100,
                                                    backgroundColor: "#808080",
                                                    justifyContent: "center",
                                                    alignItems: "center"
                                                }}
                                                onPress={() => { this.ChangPassCode(item) }}
                                            >
                                                <Text style={{
                                                    fontSize: 15,
                                                    fontStyle: "italic",
                                                    color: "#ffffff",
                                                    fontWeight: "bold"
                                                }}>{item}</Text>
                                            </TouchableOpacity>
                                        }

                                    })}
                                </View>
                            </View>
                            <View style={{
                                width: "100%",
                                flex: 2,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                {/* <TouchableOpacity>
                                    <Text style={{
                                        fontSize: 13,
                                        fontStyle: "italic",
                                        color: "#ffffff",
                                        textDecorationLine: "underline"
                                    }}>Forgot passcode</Text>
                                </TouchableOpacity> */}
                            </View>
                        </View>
                    </View>
                </View>

            </SafeAreaView>

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
export default WalletPasscode;
