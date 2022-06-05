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
            viewState: true,

        };
    }
    componentDidMount()
    {
        // this.Show();
    }
    toggleAnimation = () =>
    {

        if (this.state.viewState == true) {
            Animated.timing(this.state.animationValue, {
                toValue: 600,
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
                fontSize: 20,
                fontWeight: "bold",
                margin: 15,
                fontStyle: "italic"

            }}>{title}</Text>
        </View>
    }
    renderItem = ({ item }) =>
    {

        return <View style={{
            height: 70, flex: 1, alignItems: "center",
            marginTop: 20,
        }}>
            <TouchableOpacity style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "90%",
                height: 70,


                borderWidth: 1,
                borderRadius: 10,
                paddingHorizontal: 15,
                borderColor: "#000000",
                borderWidth: 1,
                borderBottomWidth: 3,
                borderRightWidth: 3,

            }} onPress={() =>
            {
                this.props.navigation.navigate(this.props.stackNavigator.SEND_TO)
            }}>
                <View style={{
                    width: 30,
                    height: 30,
                    backgroundColor: item.icon,
                    borderRadius: 100
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
                        }}>{item.name}</Text>
                </View>
                <View style={{


                    alignItems: "center",
                    justifyContent: "center"
                }}><Text style={{
                    fontSize: 30
                }}></Text></View>
            </TouchableOpacity>
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

        return <View>
            <FlatList style={{
                marginBottom: 20
            }}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={this.renderItem}
                extraData={data}
                keyExtractor={(item, index) => index.toString()}
                // ItemSeparatorComponent={this.renderSeparator}
                contentContainerStyle={{
                    paddingBottom: 0
                }}
            >

            </FlatList>
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
                        backgroundColor: "#ffffff",
                        width: "100%",
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        paddingHorizontal: 0,
                        paddingVertical: 0,


                        maxHeight: deviceHeigth * 0.55,
                        ...animatedStyle

                    }}>
                        {/* {this.renderTitle()} */}
                        {this.renderContent()}
                    </Animated.View>

                </View>
            </Modal>
        );
    }
}

export default PoppupBottom;
