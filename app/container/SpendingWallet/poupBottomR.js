import React, { Component } from 'react';
import { Modal, Dimensions, Animated, TouchableNativeFeedback, TouchableOpacity, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


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
        // this.Show()
    }
    toggleAnimation = () =>
    {

        if (this.state.viewState == true) {
            Animated.timing(this.state.animationValue, {
                toValue: 500,
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
        const { title } = this.props;
        return <View style={{
            alignItems: "center"
        }}>
            <Text style={{
                color: "#182E44",
                fontSize: 18,
                fontWeight: "bold",
                margin: 15,
                marginBottom: 10,
                fontStyle: "italic"

            }}>{title}</Text>
            <View style={{

            }}>

                <TouchableOpacity style={{
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: "#000000",
                    flexDirection: "row",

                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#ffffff",
                    borderRadius: 30,
                    borderColor: "#000000",
                    borderWidth: 1,
                    borderBottomWidth: 3,
                    borderRightWidth: 3,
                    width: 75,
                    height: 26,
                    paddingHorizontal: 6,
                    backgroundColor: "#64ffcb",
                }} onPress={this.onShowPoup}>
                    <Text style={{
                        fontSize: 12
                    }}>Solana</Text>

                </TouchableOpacity>
            </View>
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
        const { data } = this.props;
        return <View style={{
            justifyContent: "flex-start",
            alignItems: "center",
            paddingVertical: 16,
            flex: 1
        }}>
            <View style={{
                width: 200,
                height: 200,
                backgroundColor: "#000000"
            }}>

            </View>
            <View style={{
                marginVertical: 15
            }}>
                <Text>Scan address to recevie payment</Text>
            </View>

            <View style={{
                borderRadius: 20,
                borderColor: "#000000",
                borderWidth: 1,
                paddingHorizontal: 10,
                paddingVertical: 3
            }} >
                <Text style={{
                    fontSize: 14,
                    fontStyle: "italic"
                }}>ghdghenujkdifofod4448ef4e7f45sfe7f45sffofod44</Text>
            </View>
            <View style={{
                marginVertical: 20,
                width: "80%"
            }}>
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
                        backgroundColor: "#64ffcb",
                        // opacity: this.state.disabledTouch ? 0.5 : 1,
                        width: "100%"
                    }}>
                    <Text style={{
                        fontSize: 20,
                        fontStyle: "italic",
                        fontWeight: "bold"
                    }}>  COPPY ADDRESS </Text>
                </TouchableOpacity>
            </View>
        </View>
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

                    {this.renderOutsideTouchable(onTouchOutside)}

                    <Animated.View style={{
                        height: 500,
                        backgroundColor: "#ffffff",
                        width: "100%",
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        paddingHorizontal: 0,
                        paddingVertical: 0,
                        // maxHeight: deviceHeigth * 0.4,
                        ...animatedStyle

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
