import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Platform,
    ImageBackground,
    Image,
    Modal
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';
import { getSize, location, Colors } from '../../common';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _action from '../../redux/action/ActionHandle';
import { BackupCode } from '../../service';
class NewWallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isHiddenBottom: false,
            disabledTouch: true,
            privateKey: '',
            isSeedPhrase: false,
            modalMER: false,
            data: [
                {
                    id: 1,
                    name: 'home'
                },
                {
                    id: 2,
                    name: 'sweet'
                },
                {
                    id: 3,
                    name: 'ghost'
                },
                {
                    id: 4,
                    name: 'cat'
                },
                {
                    id: 5,
                    name: 'dog'
                },
                {
                    id: 6,
                    name: 'fish'
                },
                {
                    id: 7,
                    name: 'bird'
                },
                {
                    id: 8,
                    name: 'switch'
                },
                {
                    id: 9,
                    name: 'key'
                },
                {
                    id: 10,
                    name: 'lock'
                },
                {
                    id: 11,
                    name: 'tree'
                },
                {
                    id: 12,
                    name: 'bakery'
                }
            ]
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
    CopyPrivateKey = async () => {

        const content = await Clipboard.setString(this.state.privateKey);
        alert("Copy Success!")
    }
    componentDidMount = async () => {
        let { SetPassBackup } = this.props

        // let dataSet = await BackupCode(user._id, SetPassBackup);
        let dataSet = await BackupCode("627b6068698ae1a4a6a142eb", 1);
        // console.log(' dataSet í s', dataSet);

        if (Number(dataSet.data.code) == 200) {


            this.setState(state => {
                return {
                    privateKey: dataSet.data.data.privateKey
                }
            })
        } else {
            this.setState(state => {
                return {
                    codeBackup: "erro"
                }
            })
        }
    }
    render() {
        const { navigation, action } = this.props;
        const { data, isSeedPhrase, modalMER } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View
                    style={{
                        width: getSize.Width,
                        height: getSize.scale(320),
                        backgroundColor: 'rgba(247, 245, 248, 1)',

                        borderBottomLeftRadius: getSize.scale(32),
                        borderBottomRightRadius: getSize.scale(32),
                        zIndex: -2,
                        position: 'absolute',
                        top: Platform.OS === 'android' ? getSize.scale(-32) : 0
                    }}
                />
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
                            onPress={() => navigation.navigate(stackNavigator.WALLET_SETTINGS)}
                            style={{ flex: 1, justifyContent: 'center' }}>
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
                                flex: 8,
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
                                {!isSeedPhrase ? 'Show private key' : 'SEED PHRASE CONFIRMATION'}
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
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
                    {!isSeedPhrase ? (
                        <View style={{ flex: 1, justifyContent: 'space-between', }}>
                            <View
                                style={{
                                    marginBottom: 30,
                                    paddingTop: getSize.scale(40),
                                    position: "relative",
                                    height: getSize.scale(200),
                                    paddingHorizontal: 20
                                }}>
                                <View style={{ flex: 1 }}>
                                    <View style={{
                                        width: "100%",
                                        marginBottom: 30,
                                        paddingTop: getSize.scale(40),
                                        position: "relative",
                                        height: getSize.scale(200),
                                        paddingHorizontal: 20
                                    }}>
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(12),
                                                color: 'rgba(44, 44, 44, 1)',
                                                marginVertical: getSize.scale(8),
                                                textAlign: 'center',
                                                marginBottom: getSize.scale(16),
                                                color: "#999999",
                                                fontStyle: "italic",

                                                fontWeight: "bold"
                                            }}>
                                            Protect your wallet by storing your Seed Phrase carefully.
                                            It's the only way to recover your funds in case you lose
                                            your wallet’s password or the device where your wallet is
                                            installed
                                        </Text>
                                    </View>
                                    <Text style={{
                                        color: "#999999",
                                        fontStyle: "italic",
                                        fontWeight: "bold",
                                        marginBottom: 10
                                    }}>
                                        Your private key
                                    </Text>
                                    <View style={{
                                        // maxWidth: '90%',
                                        borderColor: '#d0d0d0',
                                        borderWidth: 1,
                                        justifyContent: "space-between",
                                        borderRadius: 10,
                                        height: 150,
                                        padding: 10
                                    }}>
                                        <Text style={{
                                            fontSize: getSize.scale(20),
                                            textAlign: 'center',
                                            color: "#999999",
                                            fontStyle: "italic",
                                        }}>
                                            {this.state.privateKey}
                                        </Text>

                                        <TouchableOpacity
                                            style={styles.containerBtn}
                                            disabled={this.state.privateKey ? false : true}
                                            onPress={() => {
                                                this.CopyPrivateKey();
                                            }}>
                                            <Text style={styles.txtCopy}>
                                                Copy
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    {/* {data.map((i) => (
                                        <View
                                            style={{
                                                flex: 1,
                                                flexDirection: 'row',
                                                marginVertical: getSize.scale(4)
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: getSize.scale(18),
                                                    color: 'rgba(118, 118, 118, 1)',
                                                    textAlign: 'center'
                                                }}>
                                                {`${i.id}.`}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: getSize.scale(18),
                                                    color: 'rgba(44, 44, 44, 1)',
                                                    textAlign: 'center',
                                                    fontWeight: 'bold',
                                                    marginHorizontal: getSize.scale(16)
                                                }}>
                                                {i.name}
                                            </Text>
                                        </View>
                                    ))} */}
                                </View>
                            </View>
                            <View
                                style={{
                                    flex: 3,
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    width: getSize.Width,
                                    paddingHorizontal: getSize.scale(16)
                                }}>
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.goBack()
                                    }>
                                    <Image
                                        style={{
                                            width: getSize.Width,
                                            height: getSize.scale(55),
                                            resizeMode: 'contain'
                                        }}
                                        source={{ uri: 'ic_wallet_btn_next_1' }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : (
                        <View style={{ flex: 1, justifyContent: 'space-between' }}>
                            <View
                                style={{
                                    flex: 8,
                                    alignItems: 'flex-start',
                                    justifyContent: 'space-between',
                                    width: getSize.Width,
                                    paddingHorizontal: getSize.scale(16)
                                }}>
                                <View style={{ flex: 1 }}>
                                    <Text
                                        style={{
                                            fontSize: getSize.scale(12),
                                            color: 'rgba(44, 44, 44, 1)',
                                            marginVertical: getSize.scale(8),
                                            textAlign: 'center',
                                            marginBottom: getSize.scale(16)
                                        }}>
                                        Please arrange these below words in the correct order to
                                        confirm your Seed Phrase
                                    </Text>
                                    <View
                                        style={{
                                            flexWrap: 'wrap',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            width: getSize.Width - getSize.scale(32),
                                            marginTop: getSize.scale(32)
                                        }}>
                                        {data.map((i) => (
                                            <TouchableOpacity>
                                                <View
                                                    style={{
                                                        marginVertical: getSize.scale(8),
                                                        borderWidth: 1,
                                                        borderRadius: getSize.scale(100),
                                                        borderColor: 'rgba(236, 236, 236, 1)',
                                                        width: getSize.Width / 5,
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        paddingVertical: getSize.scale(4)
                                                    }}>
                                                    <Text
                                                        style={{
                                                            fontSize: getSize.scale(18),
                                                            color: 'rgba(44, 44, 44, 1)',
                                                            textAlign: 'center',
                                                            fontWeight: 'bold'
                                                        }}>
                                                        {i.name}
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                            </View>
                            <View
                                style={{
                                    flex: 3,
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    width: getSize.Width,
                                    paddingHorizontal: getSize.scale(16)
                                }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        if (isSeedPhrase) {
                                            return this.setState({
                                                ...this.state,
                                                isSeedPhrase: false,
                                                modalMER: !modalMER
                                            });
                                        }
                                        return this.setState({
                                            ...this.state,
                                            isSeedPhrase: !isSeedPhrase
                                        });
                                    }}>
                                    <Image
                                        style={{
                                            width: getSize.Width,
                                            height: getSize.scale(55),
                                            resizeMode: 'contain'
                                        }}
                                        source={{
                                            uri: !this.state.isSeedPhrase
                                                ? 'ic_wallet_btn_next_1'
                                                : 'ic_wallet_btn_confirm'
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </View>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalMER}
                    onRequestClose={() => setmodalMER(!modalMER)}>
                    <View
                        style={{
                            height: '100%',
                            width: '100%',
                            top: 0,
                            position: 'absolute',
                            backgroundColor: '#0000007f'
                        }}></View>
                    <TouchableOpacity
                        // onPress={() => setmodalMER(!modalMER)}
                        activeOpacity={1}
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <View
                            style={{
                                justifyContent: 'center',
                                width: getSize.Width - getSize.scale(64)
                            }}>
                            <View
                                style={{
                                    width: '100%',
                                    paddingHorizontal: getSize.scale(16),
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    backgroundColor: '#ffffff',
                                    paddingVertical: getSize.scale(10),
                                    borderRadius: 20,
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 4,
                                    elevation: 5
                                }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text
                                        style={{
                                            fontSize: getSize.scale(18),
                                            color: 'rgba(44, 44, 44, 1)',
                                            fontWeight: 'bold',
                                            marginTop: getSize.scale(16)
                                        }}>
                                        Incorrect Seed Phrase
                                    </Text>

                                    <Text
                                        style={{
                                            fontSize: getSize.scale(14),
                                            color: 'rgba(44, 44, 44, 1)',
                                            marginVertical: getSize.scale(16)
                                        }}>
                                        Please try again
                                    </Text>
                                </View>
                            </View>

                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: getSize.scale(16)
                                }}>
                                <TouchableOpacity
                                    onPress={() =>
                                        this.setState({
                                            ...this.state,
                                            modalMER: !this.state.modalMER
                                        })
                                    }>
                                    <Image
                                        style={{
                                            width: getSize.scale(32),
                                            height: getSize.scale(32),
                                            resizeMode: 'contain'
                                        }}
                                        source={{
                                            uri: 'ic_close_red'
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </SafeAreaView>
        );
    }
}
const mapStateToProps = (state) => ({
    isSignIn: state.initReducer.isSignIn,
    screenState: state.initReducer.screenState,
    userId: state.initReducer.userId,
    user: state.initReducer.user,
    getRate: state.initReducer.getRate,
    userIdBnb: state.initReducer.userIdBnb,
    passCodeWallet: state.initReducer.passCodeWallet,
    SetPassBackup: state.initReducer.SetPassBackup,
});
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(_action, dispatch)
});

const styles = StyleSheet.create({
    containerBtn: {
        alignItems: 'center',
        backgroundColor: Colors.BLUE,
        borderRadius: getSize.scale(12),
        paddingVertical: getSize.scale(4)
    },
    txtCopy: {
        color: Colors.WHITE
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewWallet);


