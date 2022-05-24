import React, { Component, createRef } from 'react';
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    ImageBackground,
    Image,
    Modal,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';
import { getSize, location, Colors } from '../../common';

import Clipboard from '@react-native-clipboard/clipboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _action from '../../redux/action/ActionHandle';
import { LoadingIndicator } from '../../components'

class Recvice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Address: 'adwijdaodadkwadkwijad454dwad84',
            loadingQR: true,
        };
    }
    CopyPrivateKey = async () => {
        const { userIdBnb } = this.props;
        const address = userIdBnb.data.address ? userIdBnb.data.address : "";
        const content = await Clipboard.setString(address);
        alert("Copy Success!")
    }
    render() {
        const { navigation, userIdBnb } = this.props;
        const { loadingQR } =
            this.state;
        const address = userIdBnb.data.address ? userIdBnb.data.address : "";
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
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
                                {'WITHDRAW'}
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

                <View style={{ flex: 9 }}>
                    {loadingQR && <LoadingIndicator />}
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 2
                        }}>
                        <Image
                            style={{
                                width: getSize.scale(200),
                                height: getSize.scale(200),
                                resizeMode: 'contain'
                            }}
                            onLoadEnd={() => this.setState({ loadingQR: false })}
                            source={{ uri: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${address}` }}
                        />
                        {/* <Text
                            style={{
                                color: 'rgba(44, 44, 44, 1)',
                                fontSize: getSize.scale(18),
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                marginTop: getSize.scale(24)
                            }}>
                            SCAN QR CODE
                        </Text>
                        <Text
                            style={{
                                color: 'rgba(118, 118, 118, 1)',
                                fontStyle: 'italic',
                                fontSize: getSize.scale(12),
                                marginTop: getSize.scale(4)
                            }}>
                            Scan address to receive payment
                        </Text> */}
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'rgba(118, 118, 118, 1)',
                                fontStyle: 'italic',
                                fontSize: getSize.scale(12)
                            }}>
                            Wallet address
                        </Text>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: getSize.scale(8)
                            }}>
                            <ImageBackground
                                style={{
                                    width: getSize.Width - getSize.scale(121),
                                    height: getSize.scale(38),
                                    resizeMode: 'contain'
                                }}
                                source={{ uri: 'ic_frame_address' }}>
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            fontSize: getSize.scale(14),
                                            color: 'rgba(255, 255, 255, 1)'
                                        }}>
                                        {address.slice(0, 10)}...{address.slice(-10)}
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={{ justifyContent: 'center', marginTop: getSize.scale(64) }}>
                            <TouchableOpacity onPress={() => this.CopyPrivateKey()}>
                                <Image
                                    style={{
                                        width: getSize.Width,
                                        height: getSize.scale(40),
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: 'ic_copy_address' }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: '#000000ac',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: '#F194FF'
    },
    buttonClose: {
        backgroundColor: '#2196F3'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalText: {
        textAlign: 'center',
        color: '#f0f0f0'
    }
});


const mapStateToProps = (state) => ({

    userIdBnb: state.initReducer.userIdBnb,
});
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(_action, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Recvice);

