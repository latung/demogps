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

class ProfileDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVerificationCode: '',
            isFocusDelete: false,
            ischeck14: false,
            ischeck24: false,
            ischeck34: false,
            ischeck44: true
        };
    }

    render() {
        const { navigation, action } = this.props;
        return !this.state.isFocusDelete ? (
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
                                {'DELETE ACCOUNT'}
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
                    <View
                        style={{
                            flex: 4,
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            width: getSize.Width,
                            paddingHorizontal: getSize.scale(16)
                        }}>
                        <View style={{ flex: 1 }}>
                            <View style={{ justifyContent: 'center' }}>
                                <Text
                                    style={{
                                        fontSize: getSize.scale(14),
                                        color: 'rgba(118, 118, 118, 1)',
                                        fontStyle: 'italic',
                                        marginVertical: getSize.scale(8)
                                    }}>
                                    Verification code
                                </Text>
                                <ImageBackground
                                    style={{
                                        width: getSize.Width - getSize.scale(32),
                                        height: getSize.scale(70.5),
                                        resizeMode: 'contain',
                                        overflow: 'hidden',
                                        justifyContent: 'space-between',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}
                                    source={{ uri: 'ic_user_form_input' }}>
                                    <TextInput
                                        style={{
                                            flex: 1,
                                            paddingHorizontal: getSize.scale(16),
                                            fontSize: getSize.scale(16)
                                        }}
                                        onChangeText={(text) =>
                                            this.setState({
                                                ...this.state,
                                                inputVerificationCode: text
                                            })
                                        }
                                        value={this.state.inputVerificationCode}
                                        placeholder={'Enter verification code'}
                                    />
                                    <TouchableOpacity>
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(14),
                                                color: 'rgba(244, 67, 105, 1)',
                                                fontStyle: 'italic',
                                                marginHorizontal: getSize.scale(16),
                                                fontWeight: 'bold'
                                            }}>
                                            Get Code
                                        </Text>
                                    </TouchableOpacity>
                                </ImageBackground>

                                <Text
                                    style={{
                                        fontSize: getSize.scale(14),
                                        color: 'rgba(44, 44, 44, 1)',
                                        fontStyle: 'italic',
                                        marginHorizontal: getSize.scale(16),
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        marginTop: getSize.scale(16)
                                    }}>
                                    {`Are you sure to permanently delete account \n michaelblue@gmail.com? \n Your BINANSTEP account and data will be lost and cannot be retrieved.`}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 3.5 }} />
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: getSize.scale(32)
                        }}>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image
                                    style={{
                                        width: getSize.scale(163),
                                        height: getSize.scale(55),
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: 'ic_user_btn_cancel' }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <TouchableOpacity
                                onPress={() =>
                                    this.setState({
                                        ...this.state,
                                        isFocusDelete: !this.state.isFocusDelete
                                    })
                                }>
                                <Image
                                    style={{
                                        width: getSize.scale(163),
                                        height: getSize.scale(55),
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: 'ic_user_btn_next' }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        ) : (
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
                        flex: Platform.OS === 'android' ? 0 : 1,
                        minHeight: Platform.OS === 'android' ? getSize.scale(48) : 0,
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
                                {'DELETE ACCOUNT'}
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
                    <View
                        style={{
                            flex: 4,
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            width: getSize.Width
                        }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text
                                style={{
                                    fontSize: getSize.scale(14),
                                    color: 'rgba(44, 44, 44, 1)',
                                    paddingHorizontal: getSize.scale(64),
                                    textAlign: 'center',
                                    marginVertical: getSize.scale(16)
                                }}>
                                Before you delete, please inform us any problems you have in
                                BINANSTEP.
                            </Text>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: getSize.scale(16)
                                }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() =>
                                        this.setState({
                                            ...this.state,
                                            ischeck14: true,
                                            ischeck24: false,
                                            ischeck34: false,
                                            ischeck44: false
                                        })
                                    }
                                    style={{ flex: 1 }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                        <Image
                                            style={{
                                                width: getSize.scale(20),
                                                height: getSize.scale(20),
                                                resizeMode: 'contain'
                                            }}
                                            source={{
                                                uri: !this.state.ischeck14
                                                    ? 'ic_user_uncheck'
                                                    : 'ic_user_check_cicrle'
                                            }}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        flex: 8,
                                        justifyContent: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: getSize.scale(14),
                                            color: 'rgba(44, 44, 44, 1)',
                                            fontWeight: 'bold'
                                        }}>
                                        I don't have enough time for BINANSTEP.
                                    </Text>
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: getSize.scale(16)
                                }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() =>
                                        this.setState({
                                            ...this.state,
                                            ischeck14: false,
                                            ischeck24: true,
                                            ischeck34: false,
                                            ischeck44: false
                                        })
                                    }
                                    style={{ flex: 1 }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                        <Image
                                            style={{
                                                width: getSize.scale(20),
                                                height: getSize.scale(20),
                                                resizeMode: 'contain'
                                            }}
                                            source={{
                                                uri: !this.state.ischeck24
                                                    ? 'ic_user_uncheck'
                                                    : 'ic_user_check_cicrle'
                                            }}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        flex: 8,
                                        justifyContent: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: getSize.scale(14),
                                            color: 'rgba(44, 44, 44, 1)',
                                            fontWeight: 'bold'
                                        }}>
                                        I have a privacy concern.
                                    </Text>
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: getSize.scale(16)
                                }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() =>
                                        this.setState({
                                            ...this.state,
                                            ischeck14: false,
                                            ischeck24: false,
                                            ischeck34: true,
                                            ischeck44: false
                                        })
                                    }
                                    style={{ flex: 1 }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                        <Image
                                            style={{
                                                width: getSize.scale(20),
                                                height: getSize.scale(20),
                                                resizeMode: 'contain'
                                            }}
                                            source={{
                                                uri: !this.state.ischeck34
                                                    ? 'ic_user_uncheck'
                                                    : 'ic_user_check_cicrle'
                                            }}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        flex: 8,
                                        justifyContent: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: getSize.scale(14),
                                            color: 'rgba(44, 44, 44, 1)',
                                            fontWeight: 'bold'
                                        }}>
                                        I no longer find BINANSTEP useful.
                                    </Text>
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: getSize.scale(16)
                                }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() =>
                                        this.setState({
                                            ...this.state,
                                            ischeck14: false,
                                            ischeck24: false,
                                            ischeck34: false,
                                            ischeck44: true
                                        })
                                    }
                                    style={{ flex: 1 }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                        <Image
                                            style={{
                                                width: getSize.scale(20),
                                                height: getSize.scale(20),
                                                resizeMode: 'contain'
                                            }}
                                            source={{
                                                uri: !this.state.ischeck44
                                                    ? 'ic_user_uncheck'
                                                    : 'ic_user_check_cicrle'
                                            }}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        flex: 8,
                                        justifyContent: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: getSize.scale(14),
                                            color: 'rgba(44, 44, 44, 1)',
                                            fontWeight: 'bold'
                                        }}>
                                        Others
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 3.5 }} />
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: getSize.scale(32)
                        }}>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image
                                    style={{
                                        width: getSize.scale(163),
                                        height: getSize.scale(55),
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: 'ic_user_btn_cancel' }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <TouchableOpacity
                                onPress={() =>
                                    this.setState({
                                        ...this.state,
                                        isFocusDelete: !this.state.isFocusDelete
                                    })
                                }>
                                <Image
                                    style={{
                                        width: getSize.scale(163),
                                        height: getSize.scale(55),
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: 'ic_user_btn_confirm' }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default ProfileDelete;
