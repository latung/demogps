import React, { Component } from 'react';
import
{
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    ImageBackground,
    Image
} from 'react-native';
import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';
import { getSize, location, Colors } from '../../common';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _action from '../../redux/action/ActionHandle';

class ProfileDetails extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isModal: false,
            isModalGen: false,
            isModalDelete: false,
            user: {
                emai: 'datdoan@gmal.com',
                name: 'dat',
                gender: 'secrect'
            }
        };
    }

    SetInfoUser = (name, value) =>
    {
        this.setState((state) =>
        {
            return {
                user: {
                    ...state.user,
                    [name]: value
                }
            };
        });
    };
    setShowModalGen = () =>
    {
        this.setState((state) =>
        {
            return {
                isModalGen: !state.isModalGen
            };
        });
    };
    setShowModalDelete = () =>
    {
        this.setState((state) =>
        {
            return {
                isModalDelete: !state.isModalDelete
            };
        });
    };
    setShowModal = () =>
    {
        this.setState((state) =>
        {
            return {
                isModal: !state.isModal
            };
        });
    };
    render()
    {
        const { isModal, isModalGen, isModalDelete } = this.state;
        const { navigation, action, user, userId } = this.props;
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
                                {'PROFILE'}
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
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                width: getSize.Width,
                                paddingHorizontal: getSize.scale(16)
                            }}>
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <Image
                                    style={{
                                        width: getSize.scale(98),
                                        height: getSize.scale(98),
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: 'ic_congrats_avata' }}
                                />
                                <TouchableOpacity>
                                    <Image
                                        style={{
                                            width: getSize.scale(61),
                                            height: getSize.scale(24),
                                            resizeMode: 'contain',
                                            top: getSize.scale(-10)
                                        }}
                                        source={{ uri: 'ic_user_btn_edit' }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 3, justifyContent: 'space-between' }}>
                        <View style={{ flex: 0.2 }} />
                        <View
                            style={{
                                flex: 3,
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                width: getSize.Width,
                                paddingHorizontal: getSize.scale(16)
                            }}>
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <View
                                    style={{
                                        backgroundColor: 'rgba(236, 236, 236, 1)',
                                        width: '100%',
                                        height: 1,
                                        position: 'absolute',
                                        top: 0
                                    }}
                                />
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            flex: 1,
                                            fontSize: getSize.scale(14),
                                            color: 'rgba(118, 118, 118, 1)',
                                            fontWeight: 'bold'
                                        }}>
                                        Email
                                    </Text>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() =>
                                            navigation.navigate(stackNavigator.PROFILE_EDIT_EMAIL)
                                        }
                                        style={{
                                            flex: 1,
                                            alignItems: 'flex-end',
                                            justifyContent: 'center'
                                        }}>
                                        <View
                                            style={{
                                                flex: 1,
                                                alignItems: 'center',
                                                justifyContent: 'flex-end',
                                                flexDirection: 'row'
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: getSize.scale(14),
                                                    marginHorizontal: getSize.scale(8),
                                                    color: 'rgba(44, 44, 44, 1)'
                                                }}>
                                                {`${user.email}`}
                                            </Text>
                                            <Image
                                                style={{
                                                    width: getSize.scale(14),
                                                    height: getSize.scale(14),
                                                    resizeMode: 'contain'
                                                }}
                                                source={{
                                                    uri: 'ic_user_edit'
                                                }}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <View
                                    style={{
                                        backgroundColor: 'rgba(236, 236, 236, 1)',
                                        width: '100%',
                                        height: 1,
                                        position: 'absolute',
                                        top: 0
                                    }}
                                />
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            flex: 1,
                                            fontSize: getSize.scale(14),
                                            color: 'rgba(118, 118, 118, 1)',
                                            fontWeight: 'bold'
                                        }}>
                                        Name
                                    </Text>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() =>
                                            navigation.navigate(stackNavigator.PROFILE_EDIT_NAME)
                                        }
                                        style={{
                                            flex: 1,
                                            alignItems: 'flex-end',
                                            justifyContent: 'center'
                                        }}>
                                        <View
                                            style={{
                                                flex: 1,
                                                alignItems: 'center',
                                                justifyContent: 'flex-end',
                                                flexDirection: 'row'
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: getSize.scale(14),
                                                    marginHorizontal: getSize.scale(8),
                                                    color: 'rgba(44, 44, 44, 1)'
                                                }}>
                                                {`${user.username}`}
                                            </Text>
                                            <Image
                                                style={{
                                                    width: getSize.scale(14),
                                                    height: getSize.scale(14),
                                                    resizeMode: 'contain'
                                                }}
                                                source={{
                                                    uri: 'ic_user_edit'
                                                }}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <View
                                    style={{
                                        backgroundColor: 'rgba(236, 236, 236, 1)',
                                        width: '100%',
                                        height: 1,
                                        position: 'absolute',
                                        top: 0
                                    }}
                                />
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            flex: 1,
                                            fontSize: getSize.scale(14),
                                            color: 'rgba(118, 118, 118, 1)',
                                            fontWeight: 'bold'
                                        }}>
                                        Gender
                                    </Text>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() =>
                                            navigation.navigate(stackNavigator.PROFILE_EDIT_GEND)
                                        }
                                        style={{
                                            flex: 1,
                                            alignItems: 'flex-end',
                                            justifyContent: 'center'
                                        }}>
                                        <View
                                            style={{
                                                flex: 1,
                                                alignItems: 'center',
                                                justifyContent: 'flex-end',
                                                flexDirection: 'row'
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: getSize.scale(14),
                                                    color: 'rgba(44, 44, 44, 1)'
                                                }}>
                                                {user.gender == 1 && 'Male'}
                                                {user.gender == 2 && 'FeMale'}
                                                {user.gender == 3 && 'Male'}
                                            </Text>
                                            {user.gender == 1 && <Image
                                                style={{
                                                    width: getSize.scale(15),
                                                    height: getSize.scale(15),
                                                    marginHorizontal: getSize.scale(4),
                                                    resizeMode: 'contain'
                                                }}
                                                source={{
                                                    uri: 'ic_user_gender_female'
                                                }}
                                            />}
                                            {user.gender == 2 && <Image
                                                style={{
                                                    width: getSize.scale(15),
                                                    height: getSize.scale(15),
                                                    marginHorizontal: getSize.scale(4),
                                                    resizeMode: 'contain'
                                                }}
                                                source={{
                                                    uri: 'ic_user_gender_male'
                                                }}
                                            />}
                                            {user.gender == 3 && <Image
                                                style={{
                                                    width: getSize.scale(15),
                                                    height: getSize.scale(15),
                                                    marginHorizontal: getSize.scale(4),
                                                    resizeMode: 'contain'
                                                }}
                                                source={{
                                                    uri: 'ic_user_gender_other'
                                                }}
                                            />}
                                            {user.gender == 4 && <Image
                                                style={{
                                                    width: getSize.scale(15),
                                                    height: getSize.scale(15),
                                                    marginHorizontal: getSize.scale(4),
                                                    resizeMode: 'contain'
                                                }}
                                                source={{
                                                    uri: 'ic_user_gender_shield_lock'
                                                }}
                                            />}

                                            <Image
                                                style={{
                                                    width: getSize.scale(14),
                                                    height: getSize.scale(14),
                                                    resizeMode: 'contain'
                                                }}
                                                source={{
                                                    uri: 'ic_user_edit'
                                                }}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <View
                                    style={{
                                        backgroundColor: 'rgba(236, 236, 236, 1)',
                                        width: '100%',
                                        height: 1,
                                        position: 'absolute',
                                        top: 0
                                    }}
                                />
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            flex: 1,
                                            fontSize: getSize.scale(14),
                                            color: 'rgba(118, 118, 118, 1)',
                                            fontWeight: 'bold'
                                        }}>
                                        Password
                                    </Text>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() =>
                                            navigation.navigate(
                                                stackNavigator.PROFILE_EDIT_PASSWORD
                                            )
                                        }
                                        style={{
                                            flex: 1,
                                            alignItems: 'flex-end',
                                            justifyContent: 'center'
                                        }}>
                                        <View
                                            style={{
                                                flex: 1,
                                                alignItems: 'center',
                                                justifyContent: 'flex-end',
                                                flexDirection: 'row'
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: getSize.scale(14),
                                                    marginHorizontal: getSize.scale(8),
                                                    color: 'rgba(44, 44, 44, 1)'
                                                }}>
                                                ******
                                            </Text>
                                            <Image
                                                style={{
                                                    width: getSize.scale(14),
                                                    height: getSize.scale(14),
                                                    resizeMode: 'contain'
                                                }}
                                                source={{
                                                    uri: 'ic_user_edit'
                                                }}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 2 }} />
                        <View
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                width: getSize.Width,
                                paddingHorizontal: getSize.scale(16)
                            }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate(stackNavigator.PROFILE_DELETE)}>
                                <Image
                                    style={{
                                        width: getSize.scale(183),
                                        height: getSize.scale(40),
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: 'ic_user_btn_delete_acc' }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => ({
    // isSignIn: state.initReducer.isSignIn
    user: state.initReducer.user,
    userId: state.initReducer.userId,
});
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(_action, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);
