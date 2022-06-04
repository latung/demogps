import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const avatars = ["male", "female", "other", "secrect"]
class Poup extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isEnabled: true,
            active: 'secrect',
        };
    }
    setActive = (active) =>
    {
        this.setState(state =>
        {
            return {
                active: active
            }
        })


    }
    render()
    {
        const { active } = this.state;
        console.log("dăd", active);
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
                        height: "30%",
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

                        }}>GENDER</Text>
                    </View>
                    <View style={{
                        width: "100%",
                        flexWrap: "wrap",
                        paddingHorizontal: 20,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 20,
                        marginBottom: 20
                    }}>

                        {avatars.map((item, index) =>
                        {

                            let Bg = "#ffffff";
                            let color = "#9a9a9a";
                            if (active === "male" && item == active) {
                                Bg = "#55aaff";
                                color = "#ffffff"
                            }
                            if (active === "female" && item == active) {
                                Bg = "#ffb4b4";
                                color = "#ffffff"
                            }
                            if (active === "other" && item == active) {
                                Bg = "#f9b845";
                                color = "#ffffff"
                            }
                            if (active === "secrect" && item == active) {
                                Bg = "#333333";
                                color = "#ffffff"
                            }

                            return <View key={index}
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            ><TouchableOpacity style={{
                                width: 50,
                                height: 50,
                                backgroundColor: Bg,
                                borderRadius: 100,
                                borderStyle: "dashed",
                                borderColor: "#999999",
                                borderWidth: 1,
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                                onPress={() =>
                                {
                                    this.setActive(item)
                                }}
                            >
                                    <Text style={
                                        { color: color }
                                    }>{item}</Text>
                                </TouchableOpacity>
                                <Text style={
                                    { color: "#383838", fontStyle: "italic", fontWeight: "100" }
                                }>{item}</Text>
                            </View>


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
