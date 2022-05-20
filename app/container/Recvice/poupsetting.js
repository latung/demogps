import React, { Component } from 'react';
import { Modal, Dimensions, Animated, TouchableNativeFeedback, TouchableOpacity, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';



const deviceHeigth = Dimensions.get("window").height;
class PoppupBottom extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            show: false,
            animationValue: new Animated.Value(0),
            viewState: true,
            btnActive: 2,
            percent: "",
        };
    }
    componentDidMount()
    {
        // this.Show();
        this.setState(state =>
        {
            return {
                btnActive: 2
            }
        })
    }

    SetPercent = (value) =>
    {
        this.setState(state =>
        {
            return {
                percent: value.toString()
            }
        })
    }
    Show = () =>
    {
        this.setState(state => { return { show: true } })

    }
    Close = () =>
    {

        this.setState(state => { return { show: false } })


    }
    renderOutsideTouchable = (onTouch) =>
    {
        const view = <View style={{
            flex: 1, width: "100%"
        }}></View>

        if (!onTouch) {
            return view;
        }
        return <TouchableNativeFeedback onPress={onTouch} style={{ flex: 1, width: "100%" }}>
            {view}
        </TouchableNativeFeedback>
    }
    renderTitle = () =>
    {
        const { title } = this.props;
        return <View style={{
            alignItems: "center",

        }}>
            <Text style={{
                color: "#182E44",
                fontSize: 13,
                fontWeight: "bold",
                margin: 15,
                fontStyle: "italic"

            }}>{title}</Text>
        </View>
    }
    renderSeparator = () =>
    {
        return <View
            style={{
                opacity: 0.1,
                backgroundColor: "#182E44",
                height: 1
            }}
        >

        </View>
    }
    renderContent = () =>
    {
        const { stackNavigator, navigation } = this.props;


        return <View style={{
            justifyContent: "flex-start",
            alignItems: "center",

            width: "100%",
            paddingBottom: 0,
            // backgroundColor: "red"
        }}>
            <View
                style={{

                    width: "95%",
                    borderRadius: 20,
                    position: "relative",
                    marginBottom: 20,

                }}>
                <TouchableOpacity style={{
                    position: "absolute",
                    right: 10,
                    top: 10,
                    borderRadius: 100,
                    borderColor: "#000000",
                    borderWidth: 1,
                    borderRightWidth: 3,
                    borderBottomWidth: 2,
                    height: 30,
                    width: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#64ffcb"
                }}
                    onPress={this.Close}
                >
                    <Text>✖</Text>
                </TouchableOpacity>
                <View style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 50
                }}>
                    <Text style={{
                        fontStyle: "italic",
                        fontSize: 15,
                        fontWeight: "bold",

                    }}>SELECTE AVATAR</Text>
                </View>
            </View>
            <View style={{
                // flex: 0.1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%",
                paddingHorizontal: 26,
                marginBottom: 20,
            }}>
                <Text style={{
                    fontSize: 14,
                    fontStyle: "italic",
                    color: "#afafaf"
                }}>Slippage Tolerance</Text>
            </View>
            <View style={{
                justifyContent: "space-around",
                alignItems: "center",
                // flex: 0,
                width: "100%",
                flexDirection: "row",
                paddingHorizontal: 16,
                marginBottom: 20,
            }}>
                <TouchableOpacity style={{
                    width: "30%",
                    paddingVertical: 10,

                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: this.state.btnActive == 1 ? "#ffee00" : "#f1f1f1"
                }} onPress={() =>
                {
                    this.setState(state =>
                    {
                        return {
                            btnActive: 1
                        }
                    }, () =>
                    {

                        this.SetPercent(0.1)
                    })
                }}>
                    <Text style={{
                        fontStyle: "italic",
                        fontWeight: "bold",
                        fontSize: 14
                    }}>0.1%</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: "30%",
                    paddingVertical: 10,

                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: this.state.btnActive == 2 ? "#ffee00" : "#f1f1f1"
                }} onPress={() =>
                {
                    this.setState(state =>
                    {
                        return {
                            btnActive: 2
                        }
                    }, () =>
                    {
                        this.SetPercent(0.5)
                    })
                }}>
                    <Text style={{
                        fontStyle: "italic",
                        fontWeight: "bold",
                        fontSize: 14
                    }}>0.5%</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: "30%",
                    paddingVertical: 10,

                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: this.state.btnActive == 3 ? "#ffee00" : "#f1f1f1"
                }} onPress={() =>
                {
                    this.setState(state =>
                    {
                        return {
                            btnActive: 3
                        }
                    }, () =>
                    {

                        this.SetPercent(1)
                    })
                }}>
                    <Text style={{
                        fontStyle: "italic",
                        fontWeight: "bold",
                        fontSize: 14
                    }}>1%</Text>

                </TouchableOpacity>
            </View>
            <View style={{


                width: "100%",
                flexDirection: "row",
                paddingHorizontal: 20
            }}>
                <View style={{
                    borderRadius: 5,
                    borderWidth: 1,
                    width: "100%",
                    position: "relative"
                }}>
                    <TextInput keyboardType='numeric'
                        value={this.state.percent}
                        onChangeText={(itemvalue) => { this.SetPercent(itemvalue) }}
                        style={{
                            height: 40,
                            fontSize: 14,
                            fontWeight: "bold",
                            fontStyle: "italic"
                        }}
                    >

                    </TextInput>
                    <Text style={{
                        position: "absolute",
                        right: 10,
                        top: 7,
                        fontSize: 15
                    }}>%</Text>
                </View>
            </View>

            <View style={{
                width: "100%",
                justifyContent: "flex-start",
                paddingHorizontal: 20,
                marginVertical: 20
            }}>
                <Text style={{
                    color: "red",
                    fontSize: 12,
                    fontStyle: "italic"
                }}>Your transaction may fail</Text>
            </View>
            <View style={{
                width: "100%",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                // marginVertical: 20,
                flexDirection: "row",
                marginBottom: 10
            }}>
                <TouchableOpacity style={{
                    width: "45%",
                    paddingVertical: 10,
                    borderRadius: 20,
                    borderColor: "#000000",
                    borderWidth: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#ffffff",
                    borderWidth: 1,
                    borderRightWidth: 3,
                    borderBottomWidth: 3,
                }}>
                    <Text style={{ fontStyle: "italic", fontWeight: "bold" }}>CANCEL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: "45%",
                    paddingVertical: 10,
                    borderRadius: 20,
                    borderColor: "#000000",
                    borderWidth: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#ffee00",
                    borderWidth: 1,
                    borderRightWidth: 3,
                    borderBottomWidth: 3,
                }}
                    onPress={() => { this.Close(); this.props.setPerCent(this.state.percent) }}
                >
                    <Text style={{ fontStyle: "italic", fontWeight: "bold" }}>CONFIRM</Text>
                </TouchableOpacity>
            </View>
        </View >
    }

    render()
    {

        const { show } = this.state;
        const { onTouchOutside, title, stackNavigator, navigation } = this.props;

        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.Close}
            >
                <TouchableNativeFeedback onPress={onTouchOutside} style={{ flex: 1, width: "100%" }}>

                    <View style={{
                        flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#0000004d',
                    }}>



                        <View style={{
                            backgroundColor: "#ffffff",
                            width: "90%",

                            backgroundColor: "#ffffff",
                            borderRadius: 30,
                            paddingHorizontal: 0,
                            paddingVertical: 10,


                        }}>
                            {/* {this.renderTitle()} */}
                            {this.renderContent()}
                        </View>

                    </View>
                </TouchableNativeFeedback>
            </Modal >
        );
    }
}

export default PoppupBottom;
