import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Keyboard,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    ImageBackground,
    Image
} from 'react-native';
import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';
import { getSize, location, Colors } from '../../common';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _action from '../../redux/action/ActionHandle';

class ProfileEditName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isHiddenBottom: false,
            disabledTouch: true,

            inputName: ''
        };
    }
    onChangeText = (name, itemValue) => {
        this.setState((state) => {
            return {
                [name]: itemValue
            };
        });
    };
    SetIsHiddenBottom = (type) => {
        if (!type) {
            setTimeout(() => {
                this.setState((state) => {
                    return {
                        isHiddenBottom: type
                    };
                });
            }, 50);
        } else {
            this.setState((state) => {
                return {
                    isHiddenBottom: type
                };
            });
        }
    };
    render() {
        const { navigation, action } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground
                    style={{
                        width: getSize.Width,
                        height: getSize.scale(100),
                        position: 'absolute',
                        resizeMode: 'cover',
                        zIndex: -1,
                        top: Platform.OS === 'android' ? getSize.scale(-32) : 0
                    }}
                    source={{ uri: 'ic_top_bar' }}
                />
                <View
                    style={{
                        flex: 1,
                        marginVertical: Platform.OS === 'android' ? getSize.scale(8) : 0
                    }}>
                    {/* HeaderMini */}
                    <View
                        style={{
                            flex: 1 / 2.3,
                            minHeight: Platform.OS === 'ios' ? 0 : getSize.scale(30),
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginHorizontal: getSize.scale(16)
                        }}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{ flex: 2, justifyContent: 'center' }}>
                            <Image
                                style={{
                                    width: getSize.scale(28),
                                    height: getSize.scale(28),
                                    resizeMode: 'contain'
                                }}
                                source={{ uri: 'ic_back' }}
                            />
                        </TouchableOpacity>
                        <View
                            style={{
                                flex: 6,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}>
                            <Text
                                style={{
                                    fontSize: getSize.scale(18),
                                    color: '#000',
                                    fontWeight: 'bold'
                                }}>
                                {'NAME'}
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 2,
                                justifyContent: 'center',
                                alignItems: 'flex-end'
                            }}
                        />
                    </View>
                </View>

                <View
                    style={{
                        flex: 9,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <View style={{ flex: 3, justifyContent: 'space-between' }}>
                        <View
                            style={{
                                flex: 4,
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                width: getSize.Width,
                                paddingHorizontal: getSize.scale(16)
                            }}>
                            <View style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        fontSize: getSize.scale(14),
                                        color: 'rgba(118, 118, 118, 1)',
                                        fontStyle: 'italic',
                                        marginVertical: getSize.scale(8)
                                    }}>
                                    Name
                                </Text>
                                <ImageBackground
                                    style={{
                                        width: getSize.Width - getSize.scale(32),
                                        height: getSize.scale(70.5),
                                        resizeMode: 'contain',
                                        overflow: 'hidden',
                                        justifyContent: 'center'
                                    }}
                                    source={{ uri: 'ic_user_form_input' }}>
                                    <TextInput
                                        style={{
                                            flex: 1,
                                            paddingHorizontal: getSize.scale(16),
                                            fontSize: getSize.scale(16),
                                            fontWeight: 'bold'
                                        }}
                                        onChangeText={(text) =>
                                            this.setState({ ...this.state, inputName: text })
                                        }
                                        value={this.state.inputName || 'Michael Blue'}
                                    />
                                </ImageBackground>
                            </View>
                        </View>
                        <View style={{ flex: 3.5 }} />
                        <View
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                width: getSize.Width,
                                paddingHorizontal: getSize.scale(16)
                            }}>
                            <TouchableOpacity>
                                <Image
                                    style={{
                                        width: getSize.Width,
                                        height: getSize.scale(55),
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: 'ic_user_btn_save' }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default ProfileEditName;
