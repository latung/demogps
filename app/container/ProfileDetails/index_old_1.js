import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { stackNavigator } from '../../navigation/nameNavigator';
import Poup from './modal';
import PoupGen from '../ProfileEditGend/modal';
import PoupDelete from '../ProfileDelete/modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _action from '../../redux/action/ActionHandle';

class ProfileDetails extends Component {
    constructor(props) {
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

    SetInfoUser = (name, value) => {
        this.setState((state) => {
            return {
                user: {
                    ...state.user,
                    [name]: value
                }
            };
        });
    };
    setShowModalGen = () => {
        this.setState((state) => {
            return {
                isModalGen: !state.isModalGen
            };
        });
    };
    setShowModalDelete = () => {
        this.setState((state) => {
            return {
                isModalDelete: !state.isModalDelete
            };
        });
    };
    setShowModal = () => {
        this.setState((state) => {
            return {
                isModal: !state.isModal
            };
        });
    };
    render() {
        const { isModal, isModalGen, isModalDelete } = this.state;
        const { navigation, action } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {isModal && <Poup setShowModal={this.setShowModal} />}
                {isModalGen && <PoupGen setShowModal={this.setShowModalGen} />}
                {isModalDelete && <PoupDelete setShowModal={this.setShowModalDelete} />}
                <View
                    style={{
                        flex: 8,
                        justifyContent: 'flex-start',
                        alignItems: 'center',

                        height: '100%'
                    }}>
                    <View
                        style={{
                            width: '100%',
                            paddingHorizontal: 20,
                            borderBottomLeftRadius: 30,
                            flex: 0.1,
                            paddingTop: 10,
                            justifyContent: 'flex-start'
                        }}>
                        <View
                            style={{
                                width: '100%',
                                justifyContent: 'flex-start',
                                alignItems: 'center',

                                flexDirection: 'row',
                                flex: 0.8
                            }}>
                            <TouchableOpacity
                                style={{
                                    fontStyle: 'italic',
                                    fontWeight: 'bold',
                                    borderRightWidth: 3,
                                    // borderBottomWidth: 3,
                                    borderWidth: 1,
                                    borderColor: '#000000',
                                    width: 40,
                                    height: 40,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                    position: 'absolute',
                                    zIndex: 1,
                                    borderRadius: 100,
                                    backgroundColor: '#64ffcb'
                                }}
                                onPress={() => this.props.navigation.goBack()}>
                                <Text style={{}}>Back</Text>
                            </TouchableOpacity>
                            <View
                                style={{
                                    width: '100%',

                                    justifyContent: 'flex-start',
                                    alignItems: 'center'
                                }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>PROFILE</Text>
                            </View>
                        </View>
                    </View>
                    <ScrollView
                        style={{
                            width: '100%',
                            flex: 6,
                            height: '80%',
                            paddingHorizontal: 20
                        }}>
                        <View
                            style={{
                                width: '100%',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                paddingHorizontal: 20,
                                flexDirection: 'row',
                                borderBottomLeftRadius: 30,
                                flex: 1,
                                paddingVertical: 20,
                                paddingBottom: 30
                            }}>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 80,
                                    flex: 1,
                                    width: '100%'
                                }}
                                onPress={() => this.setShowModal()}>
                                <View style={{}}>
                                    <View
                                        style={{
                                            borderRadius: 100,
                                            borderWidth: 1,
                                            borderColor: '#000000',
                                            borderRightWidth: 3,
                                            height: 80,
                                            width: 80,
                                            backgroundColor: '#dce7f4',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                        <Text>User</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                width: '100%'
                            }}>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                                onPress={() =>
                                    navigation.navigate(stackNavigator.PROFILE_EDIT_EMAIL)
                                }>
                                <View>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#9b9b9b',
                                            fontStyle: 'italic'
                                        }}>
                                        Email
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        height: 60,
                                        width: '60%',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            fontStyle: 'italic',
                                            color: '#000000'
                                        }}>
                                        {this.state.user.emai}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 30,
                                            color: '#9b9b9b',
                                            marginTop: 5
                                        }}>
                                        {' '}
                                        &#707;
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                                onPress={() =>
                                    navigation.navigate(stackNavigator.PROFILE_EDIT_NAME)
                                }>
                                <View>
                                    <Text
                                        style={{
                                            fontStyle: 'italic',
                                            color: '#9b9b9b'
                                        }}>
                                        Name
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        height: 60,
                                        width: '60%',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            fontStyle: 'italic',
                                            color: '#000000'
                                        }}>
                                        {' '}
                                        {this.state.user.Name}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 30,
                                            color: '#9b9b9b',
                                            marginTop: 5
                                        }}>
                                        {' '}
                                        &#707;
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                                onPress={() => this.setShowModalGen()}>
                                <View>
                                    <Text
                                        style={{
                                            fontStyle: 'italic',

                                            color: '#9b9b9b'
                                        }}>
                                        Gender
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        height: 60,
                                        width: '60%',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            fontStyle: 'italic',
                                            color: '#000000'
                                        }}>
                                        {' '}
                                        {this.state.user.gender}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 30,
                                            color: '#9b9b9b',
                                            marginTop: 5
                                        }}>
                                        {' '}
                                        &#707;
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                                onPress={() =>
                                    navigation.navigate(stackNavigator.PROFILE_EDIT_PASSWORD)
                                }>
                                <View>
                                    <Text
                                        style={{
                                            fontStyle: 'italic',
                                            color: '#9b9b9b'
                                        }}>
                                        Password
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        height: 60,
                                        width: '60%',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            fontStyle: 'italic',
                                            color: '#000000'
                                        }}>
                                        {' '}
                                        Set
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 30,
                                            color: '#9b9b9b',
                                            marginTop: 5
                                        }}>
                                        {' '}
                                        &#707;
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                                onPress={() => this.setShowModalDelete()}>
                                <View>
                                    <Text
                                        style={{
                                            fontStyle: 'italic',
                                            color: '#ff0000'
                                        }}>
                                        Delete Acount
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        height: 60,
                                        width: '60%',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            fontStyle: 'italic',
                                            color: '#000000'
                                        }}>
                                        {' '}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 30,
                                            color: '#9b9b9b',
                                            marginTop: 5
                                        }}>
                                        {' '}
                                        &#707;
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => ({
    // isSignIn: state.initReducer.isSignIn
});
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(_action, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);
