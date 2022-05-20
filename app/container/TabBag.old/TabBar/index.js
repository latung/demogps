import React, { Component } from 'react';
import
{
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    Image,
    Modal,
    FlatList,
    ImageBackground
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as _action from '../../../redux/action/ActionHandle';
import { stackNavigator, tabNavigator } from '../../../navigation/nameNavigator';
import { Popup } from '../../../components';
import { DrawerActions } from '@react-navigation/native';
import { getSize } from '../../../common';

class TabBar extends Component
{
    constructor(props)
    {
        super(props);
        this.LowestPrice = React.createRef;
        this.state = {
            // isSneakersMini: true,
            // isShoeboxesMini: false,
            // isGalleryMini: true,
            // isUpgradeMini: false,
            // modalVisibles: false,
            visibles: false,
            // isLowestPrice: true,
            // isHighestPrice: false,
            // isLatestPrice: false,
            titlePrice: 'Lowest Price'
        };
    }

    measurePrice = () =>
    {
        this.LowestPrice.measure(this.logPriceLayout);
    };
    logPriceLayout = (ox, oy, width, height, px, py) =>
    {
        // console.log('ox: ' + ox);
        // console.log('oy: ' + oy);
        // console.log('width: ' + width);
        // console.log('height: ' + height);
        // console.log('px: ' + px);
        // console.log('py: ' + py);
        this.setState({
            ...this.state,
            ox: ox,
            oy: oy,
            width: width,
            height: height,
            px: px,
            py: py,
            visible: !this.state.visible // true
        });
    };

    _handleTabbar = (key) =>
    {
        const { action, screenState } = this.props;
        if (key === 'Sneakers') {
            action.changeScreenState({
                ...screenState,
                isSneakers: true,
                isGems: false,
                isBadges: false
            });
        }
        if (key === 'Gems') {
            action.changeScreenState({
                ...screenState,
                isSneakers: false,
                isGems: true,
                isBadges: false
            });
        }
        if (key === 'Badges') {
            Toast.showWithGravity('Coming soon', Toast.LONG, Toast.CENTER);
        }
    };
    _handleTabbarMini = (key) =>
    {
        const { action, screenState } = this.props;
        if (key === 'isSneakersMini') {
            action.changeScreenState({
                ...screenState,
                isSneakersMini: true,
                isShoeboxesMini: false
            });
        }
        if (key === 'isShoeboxesMini') {
            action.changeScreenState({
                ...screenState,
                isSneakersMini: false,
                isShoeboxesMini: true
            });
        }
        if (key === 'isGalleryMini') {
            action.changeScreenState({
                ...screenState,
                isGalleryMini: true,
                isUpgradeMini: false
            });
        }
        if (key === 'isUpgradeMini') {
            action.changeScreenState({
                ...screenState,
                isGalleryMini: false,
                isUpgradeMini: true
            });
        }
        if (key === 'isShowroom') {
            action.changeScreenState({
                ...screenState,
                isUpgrade: false,
                isShowroom: true
            });
        }
        if (key === 'isUpgrade') {
            action.changeScreenState({
                ...screenState,
                isShowroom: false,
                isUpgrade: true
            });
        }
    };

    render()
    {
        const image =
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogMFHOw0CKtwUvuJmhgcSi18GmfqlCxUI6g&usqp=CAU';
        const imageSneakers = 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg';
        const {
            // isSneakersMini,
            // isShoeboxesMini,
            // isGalleryMini,
            // isUpgradeMini,
            // isLowestPrice,
            // isHighestPrice,
            // isLatestPrice
        } = this.state;
        const { action, screenState } = this.props;
        const {
            isSneakers,
            isGems,
            isBadges,
            isSneakersMini,
            isShoeboxesMini,
            isGalleryMini,
            isUpgradeMini,
            isShowroom,
            isUpgrade
        } = screenState;

        return (
            <View style={{ flex: 1, marginTop: 10 }}>
                <View
                    style={{
                        flex: Platform.OS === 'android' ? 0 : 5,
                        minHeight: Platform.OS === 'android' ? getSize.scale(45) : 0,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            // borderWidth: 1,
                            // borderRadius: 20,
                            // backgroundColor: '#D6D6D6',
                            overflow: 'hidden',


                        }}>
                        <ImageBackground source={{ uri: 'ic_frame_tabs' }} style={{
                            width: "100%",
                            height: 46,


                            // 
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                                height: "100%",
                                paddingHorizontal: 4
                                // backgroundColor: "red"
                            }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{
                                        flex: 0.9,
                                        alignItems: 'center',
                                        overflow: 'hidden',

                                    }}
                                    onPress={() => this._handleTabbar('Sneakers')}>
                                    <View
                                        style={{
                                            flex: 0.8,
                                            backgroundColor: isSneakers ? '#F44369' : 'transparent',
                                            width: '100%',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            // borderWidth: isSneakers ? 1 : 0,
                                            borderRadius: isSneakers ? 20 : 0,
                                            // borderBottomWidth: isSneakers ? 3 : 0,
                                            // borderRightWidth: isSneakers ? 4 : 0
                                            // paddingVertical: 2,

                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 13,
                                                fontStyle: 'italic',
                                                fontWeight: 'bold',
                                                color: isSneakers ? '#FFFFFF' : '#2C2C2C',
                                            }}>
                                            Sneakers
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{
                                        flex: 0.9,
                                        alignItems: 'center',
                                        overflow: 'hidden',

                                    }}
                                    onPress={() => this._handleTabbar('Gems')}>
                                    <View
                                        style={{
                                            flex: 0.8,
                                            backgroundColor: isGems ? '#F44369' : 'transparent',
                                            paddingVertical: 2,
                                            width: '100%',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            // borderWidth: isGems ? 1 : 0,
                                            borderRadius: isGems ? 20 : 0,
                                            // borderBottomWidth: isGems ? 3 : 0,
                                            // borderRightWidth: isGems ? 4 : 0,
                                            // borderLeftWidth: isGems ? 4 : 0

                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 13,
                                                fontStyle: 'italic',
                                                fontWeight: 'bold',
                                                color: isGems ? '#FFFFFF' : '#2C2C2C',
                                            }}>
                                            Gems
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{
                                        flex: 0.9,
                                        alignItems: 'center',
                                        overflow: 'hidden',

                                    }}
                                    onPress={() => this._handleTabbar('Badges')}>
                                    <View
                                        style={{
                                            flex: 0.8,
                                            backgroundColor: isBadges ? '#F44369' : 'transparent',
                                            paddingVertical: 2,
                                            width: '100%',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            // borderWidth: isBadges ? 1 : 0,
                                            borderRadius: isBadges ? 20 : 0,
                                            // borderBottomWidth: isBadges ? 3 : 0,
                                            // borderLeftWidth: isBadges ? 4 : 0
                                            borderRadius: 20,
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 13,
                                                fontStyle: 'italic',
                                                fontWeight: 'bold',
                                                color: isBadges ? '#FFFFFF' : '#2C2C2C',
                                            }}>
                                            Badges
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{
                                        flex: 0.9,
                                        alignItems: 'center',
                                        overflow: 'hidden',

                                    }}
                                    onPress={() => this._handleTabbar('Badges')}>
                                    <View
                                        style={{
                                            flex: 0.8,
                                            backgroundColor: isBadges ? '#F44369' : 'transparent',
                                            paddingVertical: 2,
                                            width: '100%',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            // borderWidth: isBadges ? 1 : 0,
                                            borderRadius: isBadges ? 20 : 0,
                                            // borderBottomWidth: isBadges ? 3 : 0,
                                            // borderLeftWidth: isBadges ? 4 : 0
                                            borderRadius: 20,
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 13,
                                                fontStyle: 'italic',
                                                fontWeight: 'bold',
                                                color: isBadges ? '#FFFFFF' : '#2C2C2C',
                                            }}>
                                            Badges
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>

                </View>
                <View
                    style={{
                        flex: Platform.OS === 'android' ? 0 : 5,
                        minHeight: Platform.OS === 'android' ? getSize.scale(45) : 0,
                        // justifyContent: "center",
                        alignItems: "center",
                        // flex: 1,
                        marginVertical: 10
                    }}>

                    {isSneakers ? (
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingVertical: getSize.scale(10),
                                width: "60%",
                            }}>
                            <ImageBackground source={{ uri: 'ic_frame_tabs' }} style={{
                                width: "100%",
                                height: 28,
                                // flexDirection: 'row',
                                alignItems: "center",
                                justifyContent: "center"

                            }}>
                                <View
                                    style={{
                                        // flex: 1,
                                        width: getSize.Width / 2.5,
                                        marginHorizontal: getSize.scale(16),
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        // borderWidth: 0.7,
                                        // borderRadius: 20,
                                        // backgroundColor: '#33ff99',
                                        height: "90%",
                                        width: "98%",
                                        overflow: 'hidden'
                                    }}>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() => this._handleTabbarMini('isShowroom')}
                                        style={{
                                            flex: 1,
                                            alignItems: 'center',
                                            // borderWidth: isSneakersMini ? 0.7 : 0,
                                            borderRadius: isShowroom ? 20 : 0,
                                            overflow: 'hidden'
                                        }}>
                                        <View
                                            style={{
                                                flex: 1,
                                                backgroundColor: isShowroom ? '#F44369' : 'transparent',
                                                paddingVertical: 4,
                                                width: '100%',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: 10,
                                                    fontStyle: 'italic',
                                                    fontWeight: 'bold',
                                                    color: isShowroom ? '#FFFFFF' : '#2C2C2C',
                                                }}>
                                                Showroom
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() => this._handleTabbarMini('isUpgrade')}
                                        style={{
                                            flex: 1,
                                            alignItems: 'center',
                                            // borderWidth: isShoeboxesMini ? 0.7 : 0,
                                            borderRadius: isUpgrade ? 20 : 0,
                                            overflow: 'hidden'
                                        }}>
                                        <View
                                            style={{
                                                flex: 1,
                                                backgroundColor: isUpgrade ? '#F44369' : 'transparent',
                                                paddingVertical: 4,
                                                width: '100%',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: 10,
                                                    fontStyle: 'italic',
                                                    fontWeight: 'bold',
                                                    color: isUpgrade ? '#FFFFFF' : '#2C2C2C',
                                                }}>
                                                Upgrade
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </ImageBackground>
                        </View>
                    ) : isGems ? (
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingVertical: getSize.scale(10)
                            }}>
                            <View
                                style={{
                                    // flex: 1,
                                    width: getSize.Width / 2.5,
                                    marginHorizontal: getSize.scale(16),
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderWidth: 0.7,
                                    borderRadius: 20,
                                    backgroundColor: '#33ff99',
                                    overflow: 'hidden'
                                }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => this._handleTabbarMini('isGalleryMini')}
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        borderWidth: isGalleryMini ? 0.7 : 0,
                                        borderRadius: isGalleryMini ? 20 : 0,
                                        overflow: 'hidden'
                                    }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            backgroundColor: isGalleryMini ? 'white' : '#33ff99',
                                            paddingVertical: 4,
                                            width: '100%',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 10,
                                                fontStyle: 'italic',
                                                fontWeight: 'bold'
                                            }}>
                                            Gallery
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => this._handleTabbarMini('isUpgradeMini')}
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        borderWidth: isUpgradeMini ? 0.7 : 0,
                                        borderRadius: isUpgradeMini ? 20 : 0,
                                        overflow: 'hidden'
                                    }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            backgroundColor: isUpgradeMini ? 'white' : '#33ff99',
                                            paddingVertical: 4,
                                            width: '100%',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 10,
                                                fontStyle: 'italic',
                                                fontWeight: 'bold'
                                            }}>
                                            Upgrade
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : null}

                </View>
            </View >
        );
    }
}

const mapStateToProps = (state) => ({
    initReducer: state.initReducer,
    screenState: state.initReducer.screenState
});
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(_action, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);
