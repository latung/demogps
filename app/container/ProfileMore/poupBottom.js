import React, { Component, createRef } from 'react';
import { Modal, Dimensions, Animated, TouchableNativeFeedback, TouchableOpacity, View, Text } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

const deviceHeigth = Dimensions.get("window").height;
class PoppupBottom extends Component
{
    constructor(props)
    {
        super(props);
        this._carousel = new createRef();
        this.state = {
            show: false,
            animationValue: new Animated.Value(0),
            viewState: true,
            activeSlide: 0,
            entries: [1, 2, 3, 4, 5, 6, 7]
        };
    }
    get pagination()
    {
        const { entries, activeSlide } = this.state;

        return (
            <Pagination
                dotsLength={entries.length}
                activeDotIndex={activeSlide}
                // containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }
    _renderItem = ({ item, index }) =>
    {
        return (
            <View style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                // backgroundColor: "#542c2c94",
            }}>
                <View style={{
                    width: "85%",
                    height: "100%",
                    backgroundColor: "#ffffff95",
                    borderWidth: 2,
                    borderColor: "#cdcccc",
                    borderRadius: 30,
                    alignItems: "center",
                    paddingVertical: 10,
                    justifyContent: "space-between"
                }}>
                    <View style={{
                        flexDirection: "row",
                        width: "90%",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: 50,
                    }}>
                        <View style={{

                            alignItems: "center",
                            justifyContent: "center",
                            height: 50,

                        }}>
                            <TouchableOpacity style={{
                                width: 50,
                                height: 50,

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
                                // fontSize: 20,
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
                                fontSize: 20,
                                fontWeight: "bold",
                                fontStyle: "italic"
                            }}>
                                MOVEARN
                            </Text>

                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        width: "90%",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: 70,
                    }}>
                        <View style={{

                            alignItems: "center",
                            justifyContent: "center",
                            height: 50,

                        }}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                alignItems: "flex-end",
                                width: "30%",
                            }}>
                                <Text style={{
                                    fontSize: 20,
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
                            width: "30%",
                            alignItems: "flex-start",
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                fontStyle: "italic"
                            }}>
                                12:00:00
                            </Text>
                            <Text style={{
                                color: "#c8c8c8",
                                fontStyle: "italic"
                            }}>
                                Times
                            </Text>
                        </View>
                        <View style={{
                            width: "20%",
                            alignItems: "flex-start",
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                fontStyle: "italic"
                            }}>
                                0
                            </Text>
                            <Text style={{
                                color: "#c8c8c8",
                                fontStyle: "italic"
                            }}>
                                km
                            </Text>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                            width: 55,
                            height: 55,
                            backgroundColor: "#000000"
                        }}>


                        </View>
                    </View>
                </View>
            </View>
        );
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
            paddingVertical: 35,
            justifyContent: "space-between",

        }}>
            <View style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomWidth: 1,
                borderColor: "#f1f1f1",
                paddingHorizontal: 20,
                paddingBottom: 10
            }}>

                <View style={{
                    width: 80,
                    height: 80,
                }}>
                    <View style={{
                        width: 60,
                        height: 60,
                        backgroundColor: "#64ffcb"
                    }}>

                    </View>
                    <Text style={{
                        color: "#c8c8c8",
                        fontStyle: "italic"
                    }}>
                        Download
                    </Text>
                </View>
                <View style={{
                    width: 80,
                    height: 80,
                }}>
                    <View style={{
                        width: 60,
                        height: 60,
                        backgroundColor: "#64ffcb"
                    }}>

                    </View>
                    <Text style={{
                        color: "#c8c8c8",
                        fontStyle: "italic"
                    }}>
                        Download
                    </Text>
                </View>
                <View style={{
                    width: 80,
                    height: 80,
                }}>
                    <View style={{
                        width: 60,
                        height: 60,
                        backgroundColor: "#64ffcb"
                    }}>

                    </View>
                    <Text style={{
                        color: "#c8c8c8",
                        fontStyle: "italic"
                    }}>
                        Download
                    </Text>
                </View>
                <View style={{
                    width: 80,
                    height: 80,
                }}>
                    <View style={{
                        width: 60,
                        height: 60,
                        backgroundColor: "#64ffcb"
                    }}>

                    </View>
                    <Text style={{
                        color: "#c8c8c8",
                        fontStyle: "italic"
                    }}>
                        Download
                    </Text>
                </View>
            </View>
            <View style={{

                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                height: 80,
                // backgroundColor: "#64ffcb",
            }}>

                <TouchableOpacity style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 8,
                    paddingHorizontal: 3,
                    // borderRadius: 50,
                    // borderColor: "#000000",
                    // color: '#000000',
                    // borderWidth: 2,
                    // borderBottomWidth: 4,
                    // borderRightWidth: 4,
                    // backgroundColor: "#64ffcb",
                    // width: "50%"

                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        fontStyle: "italic"
                    }}>Cancel</Text>
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
        const sliderWidth = Dimensions.get("window").width;
        const itemWidth = Dimensions.get("window").width;
        const sliderHeight = Dimensions.get("window").height;
        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.Close}
            >



                <View style={{
                    flex: 1, justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <View style={{
                        width: "100%",
                        justifyContent: 'flex-start',
                        alignItems: "center",
                        height: 70,
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
                            left: 20,
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
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>MORE</Text>
                        </View>
                    </View>
                    {/* {this.renderOutsideTouchable(onTouchOutside)} */}
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.entries}
                        renderItem={this._renderItem}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                        onSnapToItem={(index) => this.setState({ activeSlide: index })}
                    />
                    {this.pagination}
                    <Animated.View style={{
                        backgroundColor: "#f5f5f5",
                        width: "100%",
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        paddingHorizontal: 0,
                        paddingVertical: 0,
                        maxHeight: deviceHeigth * 0.7,
                        ...animatedStyle,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        borderTopWidth: 2,
                        borderRightWidth: 2,
                        borderLeftWidth: 2,
                        borderColor: "#64ffcb",
                        height: 220
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
