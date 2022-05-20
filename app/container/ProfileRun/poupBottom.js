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
            viewState: true
        };
    }
    componentDidMount()
    {
        this.Show();
    }
    toggleAnimation = () =>
    {

        if (this.state.viewState == true) {
            Animated.timing(this.state.animationValue, {
                toValue: 300,
                duration: 200,
                useNativeDriver: false
            }).start(() =>
            {
                this.setState({ viewState: false })
            });
        }
        else {
            Animated.timing(this.state.animationValue, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false
            }).start(this.setState({ viewState: true })
            );
        }
    }
    Show = () =>
    {
        this.setState(state => { return { show: true } }, () =>
        {
            this.toggleAnimation();
        })

    }
    Close = () =>
    {
        this.toggleAnimation();
        setTimeout(() =>
        {
            this.setState(state => { return { show: false } })
        }, 300);

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
        // const { title } = this.props;
        // return <View style={{
        //     alignItems: "center"
        // }}>
        //     <Text style={{
        //         color: "#182E44",
        //         fontSize: 20,
        //         fontWeight: "bold",
        //         margin: 15,
        //         fontStyle: "italic"

        //     }}>{title}</Text>
        // </View>
    }
    renderItem = ({ item }) =>
    {

        // return <View style={{
        //     height: 70, flex: 1, alignItems: "center",
        //     marginTop: 20,
        // }}>
        //     <TouchableOpacity style={{
        //         flexDirection: "row",
        //         justifyContent: "space-between",
        //         alignItems: "center",
        //         width: "95%",
        //         height: 70,


        //         borderWidth: 1,
        //         borderRadius: 10,
        //         paddingHorizontal: 15,
        //         borderColor: "#000000",
        //         borderWidth: 1,
        //         borderBottomWidth: 3,
        //         borderRightWidth: 3,

        //     }}>
        //         <View style={{
        //             width: 30,
        //             height: 30,
        //             backgroundColor: "blue"
        //         }}></View>
        //         <View style={{
        //             width: "77%",
        //             justifyContent: "flex-start"
        //         }}>
        //             <Text
        //                 style={{
        //                     fontWeight: '100',
        //                     fontSize: 15,
        //                     fontStyle: "italic"
        //                 }}>{item.Name}</Text>
        //         </View>
        //         <View style={{
        //             borderRadius: 100,
        //             backgroundColor: "#64ffcb",
        //             height: 30,
        //             width: 30,
        //             alignItems: "center",
        //             justifyContent: "center"
        //         }}><Text style={{

        //         }}>&#10004;</Text></View>
        //     </TouchableOpacity>
        // </View>
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
        const { data } = this.props;
        return <View style={{
            padding: 20,

        }}>
            <View style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                height: 60,
            }}>
                <View style={{

                    alignItems: "center",
                    justifyContent: "center",
                    height: 60,

                }}>
                    <TouchableOpacity style={{
                        width: 60,
                        height: 60,

                        borderRadius: 100,
                        borderStyle: "dashed",
                        borderColor: "#999999",
                        borderWidth: 1,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Text>Amber</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: "60%"
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        fontStyle: "italic"
                    }}>
                        Amber
                    </Text>
                    <Text style={{
                        color: "#c8c8c8",
                        fontStyle: "italic"
                    }}>
                        12/04/2022 12:00:00
                    </Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "flex-end"
                }}>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: "bold",
                        fontStyle: "italic"
                    }}>
                        0.0
                    </Text>
                    <Text style={{
                        color: "#c8c8c8",
                        fontStyle: "italic"
                    }}>
                        km
                    </Text>
                </View>
            </View>
            <View style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                height: 50,
            }}>
                <Text
                    style={{
                        color: "#fe1b00"
                    }}
                >text</Text>
                <View style={{

                    width: "80%",
                    backgroundColor: "red",
                    height: 8,

                }}>

                </View>
                <Text style={{
                    color: "#52d50a"
                }}>text</Text>
            </View>
            <View style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
                alignItems: "center",
                height: 100,
            }}>
                <View style={{
                    alignItems: "center"
                }}>
                    <Text
                        style={{
                            fontSize: 30,
                            fontWeight: "bold",
                            fontStyle: "italic"
                        }}
                    >00.03.18</Text>
                    <Text style={{

                        fontWeight: "bold",
                        fontStyle: "italic",
                        color: "#c8c8c8",
                        marginTop: 5
                    }}>text</Text>
                </View>
                <View style={{
                    alignItems: "center"
                }}>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: "bold",
                        fontStyle: "italic"
                    }}>0</Text>
                    <Text style={{
                        color: "#c8c8c8",
                        fontWeight: "bold",
                        fontStyle: "italic",
                        marginTop: 5
                    }}>text</Text>
                </View>
            </View>
            <View style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
                alignItems: "center",
                height: 80,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: "#64ffcb"
            }}>
                <TouchableOpacity style={{
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
                    backgroundColor: "#ffffff",

                    width: "35%"

                }}>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            fontStyle: "italic"
                        }}
                    >MORE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
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

                    width: "50%"

                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        fontStyle: "italic"
                    }}>SHARE YOUR RUN</Text>
                </TouchableOpacity>
            </View>
        </View >
    }

    render()
    {

        const { show } = this.state;
        const { onTouchOutside, title } = this.props;
        const animatedStyle = {

            height: this.state.animationValue
        }
        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.Close}
            >

                {/* <Animated.View
                    style={{
                        position: 'absolute',
                        left: 0, right: 0, bottom: 0, top: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#000000',
                        opacity: this.opacity
                    }}
                /> */}

                <View style={{
                    flex: 1, justifyContent: "flex-end", backgroundColor: '#0000004d',

                }}>
                    <View style={{
                        width: "90%",
                        justifyContent: 'flex-start',
                        alignItems: "center",
                        height: 100,
                        flexDirection: "row",
                        position: "absolute",
                        top: 0,
                        left: 20,
                        // zIndex: 10000,
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

                            borderRadius: 100,
                            backgroundColor: "#64ffcb"

                        }} onPress={() => this.props.navigation.goBack()}>
                            <Text style={{

                            }}>Back</Text>

                        </TouchableOpacity>

                    </View>
                    {/* {this.renderOutsideTouchable(onTouchOutside)} */}

                    <Animated.View style={{
                        backgroundColor: "#ffffff",
                        width: "100%",
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        paddingHorizontal: 0,
                        paddingVertical: 0,
                        maxHeight: deviceHeigth * 0.7,
                        ...animatedStyle,

                        height: 350
                    }}>
                        {this.renderTitle()}
                        {this.renderContent()}
                    </Animated.View>

                </View>
            </Modal>
        );
    }
}

export default PoppupBottom;
