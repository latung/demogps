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

class ProfileEditGend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMale: true,
            isFamale: false,
            isOther: false,
            isSecret: false
        };
    }

    render() {
        const { navigation, action } = this.props;
        const { isMale, isFamale, isOther, isSecret } = this.state;

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
                                {'GENDER'}
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
                                paddingHorizontal: getSize.scale(8)
                            }}>
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'flex-start',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row'
                                }}>
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    onPress={() =>
                                        this.setState({
                                            ...this.state,
                                            isMale: true,
                                            isFamale: false,
                                            isOther: false,
                                            isSecret: false
                                        })
                                    }
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderWidth: 1,
                                        borderRadius: 20,
                                        borderColor: isMale
                                            ? 'rgba(244, 67, 105, 1)'
                                            : 'rgba(236, 236, 236, 1)',
                                        backgroundColor: isMale
                                            ? 'rgba(244, 67, 105, 0.06)'
                                            : 'rgba(255, 255, 255, 1)',
                                        marginHorizontal: getSize.scale(4),
                                        height: getSize.scale(140)
                                    }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                        <Image
                                            style={{
                                                width: getSize.scale(32),
                                                height: getSize.scale(32),
                                                resizeMode: 'contain'
                                            }}
                                            source={{ uri: 'ic_user_gender_male' }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(14),
                                                color: 'rgba(41, 41, 41, 1)',
                                                marginTop: getSize.scale(8),
                                                marginBottom: getSize.scale(16)
                                            }}>
                                            Male
                                        </Text>

                                        <Image
                                            style={{
                                                width: getSize.scale(20),
                                                height: getSize.scale(20),
                                                resizeMode: 'contain'
                                            }}
                                            source={{
                                                uri: isMale ? 'ic_user_check' : 'ic_user_uncheck'
                                            }}
                                        />
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    onPress={() =>
                                        this.setState({
                                            ...this.state,
                                            isMale: false,
                                            isFamale: true,
                                            isOther: false,
                                            isSecret: false
                                        })
                                    }
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderWidth: 1,
                                        borderRadius: 20,
                                        borderColor: isFamale
                                            ? 'rgba(244, 67, 105, 1)'
                                            : 'rgba(236, 236, 236, 1)',
                                        backgroundColor: isFamale
                                            ? 'rgba(244, 67, 105, 0.06)'
                                            : 'rgba(255, 255, 255, 1)',
                                        marginHorizontal: getSize.scale(4),
                                        height: getSize.scale(140)
                                    }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                        <Image
                                            style={{
                                                width: getSize.scale(32),
                                                height: getSize.scale(32),
                                                resizeMode: 'contain'
                                            }}
                                            source={{ uri: 'ic_user_gender_female' }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(14),
                                                color: 'rgba(41, 41, 41, 1)',
                                                marginTop: getSize.scale(8),
                                                marginBottom: getSize.scale(16)
                                            }}>
                                            Female
                                        </Text>

                                        <Image
                                            style={{
                                                width: getSize.scale(20),
                                                height: getSize.scale(20),
                                                resizeMode: 'contain'
                                            }}
                                            source={{
                                                uri: isFamale ? 'ic_user_check' : 'ic_user_uncheck'
                                            }}
                                        />
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    onPress={() =>
                                        this.setState({
                                            ...this.state,
                                            isMale: false,
                                            isFamale: false,
                                            isOther: true,
                                            isSecret: false
                                        })
                                    }
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderWidth: 1,
                                        borderRadius: 20,
                                        borderColor: isOther
                                            ? 'rgba(244, 67, 105, 1)'
                                            : 'rgba(236, 236, 236, 1)',
                                        backgroundColor: isOther
                                            ? 'rgba(244, 67, 105, 0.06)'
                                            : 'rgba(255, 255, 255, 1)',
                                        marginHorizontal: getSize.scale(4),
                                        height: getSize.scale(140)
                                    }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                        <Image
                                            style={{
                                                width: getSize.scale(32),
                                                height: getSize.scale(32),
                                                resizeMode: 'contain'
                                            }}
                                            source={{ uri: 'ic_user_gender_other' }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(14),
                                                color: 'rgba(41, 41, 41, 1)',
                                                marginTop: getSize.scale(8),
                                                marginBottom: getSize.scale(16)
                                            }}>
                                            Other
                                        </Text>

                                        <Image
                                            style={{
                                                width: getSize.scale(20),
                                                height: getSize.scale(20),
                                                resizeMode: 'contain'
                                            }}
                                            source={{
                                                uri: isOther ? 'ic_user_check' : 'ic_user_uncheck'
                                            }}
                                        />
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    onPress={() =>
                                        this.setState({
                                            ...this.state,
                                            isMale: false,
                                            isFamale: false,
                                            isOther: false,
                                            isSecret: true
                                        })
                                    }
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderWidth: 1,
                                        borderRadius: 20,
                                        borderColor: isSecret
                                            ? 'rgba(244, 67, 105, 1)'
                                            : 'rgba(236, 236, 236, 1)',
                                        backgroundColor: isSecret
                                            ? 'rgba(244, 67, 105, 0.06)'
                                            : 'rgba(255, 255, 255, 1)',
                                        marginHorizontal: getSize.scale(4),
                                        height: getSize.scale(140)
                                    }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                        <Image
                                            style={{
                                                width: getSize.scale(32),
                                                height: getSize.scale(32),
                                                resizeMode: 'contain'
                                            }}
                                            source={{ uri: 'ic_user_gender_shield_lock' }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(14),
                                                color: 'rgba(41, 41, 41, 1)',
                                                marginTop: getSize.scale(8),
                                                marginBottom: getSize.scale(16)
                                            }}>
                                            Secret
                                        </Text>

                                        <Image
                                            style={{
                                                width: getSize.scale(20),
                                                height: getSize.scale(20),
                                                resizeMode: 'contain'
                                            }}
                                            source={{
                                                uri: isSecret ? 'ic_user_check' : 'ic_user_uncheck'
                                            }}
                                        />
                                    </View>
                                </TouchableOpacity>
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

export default ProfileEditGend;
