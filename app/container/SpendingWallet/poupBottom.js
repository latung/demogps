import React, { Component } from 'react';
import { Modal, Dimensions, Animated, TouchableNativeFeedback, TouchableOpacity, View, Text } from 'react-native';



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
            btnActive: 0,
        };
    }
    componentDidMount()
    {
        // this.Show();
        this.setState(state =>
        {
            return {
                btnActive: 0
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
            alignItems: "center"
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
            justifyContent: "space-around",
            alignItems: "center",

            width: "100%",
            height: 200,
            paddingBottom: 10
        }}>
            <View
                style={{

                    width: "95%",

                    borderRadius: 20,
                    position: "relative",
                    flex: 0.3,
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
                justifyContent: "space-around",
                alignItems: "center",
                flex: 0.6,
                width: "100%",
            }}>
                <TouchableOpacity style={{
                    width: "80%",
                    paddingVertical: 14,
                    borderRadius: 30,
                    borderColor: "#000000",
                    borderWidth: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: this.state.btnActive == 1 ? "#64ffcb" : "#ffffff"
                }} onPress={() =>
                {
                    this.setState(state =>
                    {
                        return {
                            btnActive: 1
                        }
                    }, () =>
                    {
                        this.Close();
                        navigation.navigate(
                            stackNavigator.WALLET_NEW
                        )
                    })
                }}>
                    <Text style={{
                        fontStyle: "italic",
                        fontWeight: "bold",
                        fontSize: 12
                    }}>Create a new wallet</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: "80%",
                    paddingVertical: 14,
                    borderRadius: 30,
                    borderColor: "#000000",
                    borderWidth: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: this.state.btnActive == 2 ? "#64ffcb" : "#ffffff"
                }} onPress={() =>
                {
                    this.setState(state =>
                    {
                        return {
                            btnActive: 2
                        }
                    }, () =>
                    {
                        this.Close();
                        navigation.navigate(
                            stackNavigator.WALLET_IMPORT
                        )

                    })
                }}>
                    <Text style={{
                        fontStyle: "italic",
                        fontWeight: "bold",
                        fontSize: 12
                    }}>Import a wallet using Seed Phasre</Text>



                </TouchableOpacity>
            </View>
        </View>
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
                            width: "80%",

                            backgroundColor: "#ffffff",
                            borderRadius: 30,
                            paddingHorizontal: 0,
                            paddingVertical: 0,


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
