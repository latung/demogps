import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const avatars = ["av1", "av2", "av3", "av4", "av5", "av6", "av7", "av8", "av9", "av10", "av11", "av12", "av13", "av14", "av15", "av16"]
class Poup extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isEnabled: true,
            currentPosition: 0,
            currentPage: 0,

        };
    }
    render()
    {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: "#0000006f",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    zIndex: 1
                }}>

                <View
                    style={{
                        height: "65%",
                        width: "85%",
                        backgroundColor: "#ffffff",
                        borderRadius: 20,
                        position: "relative"
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
                        onPress={this.props.setShowModal}
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
                            fontSize: 20,
                            fontWeight: "bold",

                        }}>SELECTE AVATAR</Text>
                    </View>
                    <View style={{
                        width: "100%",
                        flexWrap: "wrap",
                        paddingHorizontal: 20,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 20,
                    }}>

                        {avatars.map((item, index) =>
                        {
                            return <TouchableOpacity key={index} style={{
                                width: 60,
                                height: 60,
                                marginBottom: 25,
                                borderRadius: 100,
                                borderStyle: "dashed",
                                borderColor: "#999999",
                                borderWidth: 1,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        })}


                    </View>
                    <View style={{
                        width: "100%",

                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <TouchableOpacity style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingVertical: 7,
                            paddingHorizontal: 3,
                            borderRadius: 50,
                            borderColor: "#000000",
                            color: '#000000',

                            borderWidth: 2,
                            borderBottomWidth: 4,
                            borderRightWidth: 4,
                            backgroundColor: "#64ffcb",
                            width: 200
                        }}
                        >
                            <Text style={{
                                fontWeight: "bold",
                                fontStyle: "italic",
                                fontSize: 20
                            }}>
                                CONFIRM
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }

};

export default Poup;
