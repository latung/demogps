import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { tabNavigator } from '../../navigation/nameNavigator';
import * as _action from '../../redux/action/ActionHandle';

class Account extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            activication: ""
        };
    }

    onChangeText = (name, itemValue) =>
    {
        this.setState(state =>
        {
            return {
                [name]: itemValue
            }
        })
    }
    render()
    {
        let { User } = this.props;
        return (

            <View style={{
                width: "100%",
                alignItems: 'center',
                justifyContent: 'center',

            }} >

                <View style={{
                    width: "80%",
                    backgroundColor: "#ffffff",

                    minHeight: 250,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 30,
                    borderColor: "#000000",
                    borderWidth: 2,
                    borderRightWidth: 4,
                }} >
                    <View style={{
                        width: "50%",
                        height: 40,
                        justifyContent: 'center',
                        alignItems: "center",
                    }}>
                        {/* <Image style={{ width: "100%", height: "100%" }} source={logonho} /> */}
                        <Text>BINANSTEP</Text>
                    </View>

                    <View style={{
                        width: "100%",
                        height: "70%",
                        justifyContent: 'center',
                        alignItems: "center",
                    }}>
                        <View style={{
                            width: "100%",
                            justifyContent: 'center',
                            alignItems: "center",
                        }}>
                            <TextInput
                                onChangeText={(itemValue) => this.onChangeText("activication", itemValue)}
                                onFocus={() => { this.props.SetIsHiddenBottom(true) }}
                                value={this.state.activication}
                                // autoFocus={true}
                                style={{ ...styles.input }}

                                placeholder="Activication code"
                            ></TextInput>
                        </View>


                        <View style={{
                            width: "100%",
                            justifyContent: 'center',
                            alignItems: "center",
                            marginTop: 40,
                        }}>
                            <TouchableOpacity
                                style={{ ...styles.btnWarning, width: "50%" }}
                                onPress={() =>
                                {
                                    this.props.action.login(true);
                                    return this.props.navigation.navigate(
                                        tabNavigator.TAB_HOME
                                    );
                                }}
                            >
                                <Text style={{
                                    color: "#000000",
                                    fontSize: 15,
                                    fontWeight: "bold",

                                }}>START</Text>
                            </TouchableOpacity>
                            <Text style={{
                                color: "#000000",
                                fontSize: 15,
                                fontWeight: "bold",
                                textDecorationLine: 'underline',
                                marginTop: 40,
                            }} onPress={() =>
                            {
                                this.props.SetIsAccount();
                            }}>Activation code</Text>
                        </View>
                    </View>
                </View>

            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff",
        width: "100%",
        height: "100%"
    },
    container1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        position: "absolute",
        top: "20%",
        left: 0,
        height: 400,
    },
    input: {
        height: 50,
        width: "90%",
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: "#000000",
        borderWidth: 2,
        borderBottomWidth: 4,
        borderRightWidth: 4
    },
    sendcodeText: {
        position: "absolute",
        right: 10,
        top: 25,
        fontSize: 12,
        fontWeight: "bold",
        color: "#f9b846",
        width: 50,
        lineHeight: 12,
    },
    btnWarning: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 3,
        borderRadius: 50,
        borderColor: "#000000",
        color: '#000000',
        borderWidth: 2,
        borderBottomWidth: 4,
        borderRightWidth: 4,
        backgroundColor: "#64ffcb",
        // fontSize: 20

    },
    containerForm: {
        width: "80%",
        backgroundColor: "#ffffff",
        height: 400,
        minHeight: 250,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        borderColor: "#000000",
        borderWidth: 2,
        borderRightWidth: 4,

    },
    borderStyle: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: "green"
    },
    btn: {
        minWidth: "30%", minHeight: 30,
        maxWidth: "45%",
        width: 200,
        // marginHorizontal: 50,
        marginVertical: 8,
        padding: 12,
        justifyContent: "center",
        alignContent: 'center',

        borderRadius: 5
    }
});
const mapStateToProps = (state) => ({
    // isSignIn: state.initReducer.isSignIn
});
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(_action, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Account);
