import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { stackNavigator } from '../../navigation/nameNavigator';

class TabBag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSneakers: true,
            isGems: false,
            isBadges: false,
            isSneakersMini: true,
            isShoeboxesMini: false,
            isGalleryMini: true,
            isUpgradeMini: false
        };
    }

    render() {
        const { navigation } = this.props;
        const {
            isSneakers,
            isGems,
            isBadges,
            isSneakersMini,
            isShoeboxesMini,
            isGalleryMini,
            isUpgradeMini
        } = this.state;

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <View
                    style={{
                        flex: 1,
                        marginHorizontal: 16,
                        backgroundColor: '#ccffe6',
                        borderBottomEndRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15,
                        overflow: 'hidden'
                    }}>
                    <View
                        style={{
                            flex: isSneakers || isGems ? 0.5 : 0.45,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderWidth: 1,
                                borderRadius: 20,
                                backgroundColor: '#D6D6D6',
                                overflow: 'hidden'
                            }}>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    borderWidth: isSneakers ? 1 : 0,
                                    borderRadius: isSneakers ? 20 : 0,
                                    overflow: 'hidden'
                                }}
                                onPress={() =>
                                    this.setState({
                                        isSneakers: true,
                                        isGems: false,
                                        isBadges: false
                                    })
                                }>
                                <View
                                    style={{
                                        flex: 1,
                                        backgroundColor: isSneakers
                                            ? 'white'
                                            : '#D6D6D6',
                                        paddingVertical: 4,
                                        width: '100%',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <Text>Sneakers</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    borderWidth: isGems ? 1 : 0,
                                    borderRadius: isGems ? 20 : 0,
                                    overflow: 'hidden'
                                }}
                                onPress={() =>
                                    this.setState({
                                        isSneakers: false,
                                        isGems: true,
                                        isBadges: false
                                    })
                                }>
                                <View
                                    style={{
                                        flex: 1,
                                        backgroundColor: isGems
                                            ? 'white'
                                            : '#D6D6D6',
                                        paddingVertical: 4,
                                        width: '100%',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <Text>Gems</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    borderWidth: isBadges ? 1 : 0,
                                    borderRadius: isBadges ? 20 : 0,
                                    overflow: 'hidden'
                                }}
                                onPress={() =>
                                    this.setState({
                                        isSneakers: false,
                                        isGems: false,
                                        isBadges: true
                                    })
                                }>
                                <View
                                    style={{
                                        flex: 1,
                                        backgroundColor: isBadges
                                            ? 'white'
                                            : '#D6D6D6',
                                        paddingVertical: 4,
                                        width: '100%',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <Text>Badges</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {isSneakers ? (
                        <View
                            style={{
                                flex: 0.4,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginTop: 8
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    width: 200,
                                    backgroundColor: '#33ff99',
                                    overflow: 'hidden'
                                }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() =>
                                        this.setState({
                                            isSneakersMini: true,
                                            isShoeboxesMini: false
                                        })
                                    }
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        borderWidth: isSneakersMini ? 1 : 0,
                                        borderRadius: isSneakersMini ? 20 : 0,
                                        overflow: 'hidden'
                                    }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            backgroundColor: isSneakersMini
                                                ? 'white'
                                                : '#33ff99',
                                            paddingVertical: 4,
                                            width: '100%',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                        <Text>Sneakers</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() =>
                                        this.setState({
                                            isSneakersMini: false,
                                            isShoeboxesMini: true
                                        })
                                    }
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        borderWidth: isShoeboxesMini ? 1 : 0,
                                        borderRadius: isShoeboxesMini ? 20 : 0,
                                        overflow: 'hidden'
                                    }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            backgroundColor: isShoeboxesMini
                                                ? 'white'
                                                : '#33ff99',
                                            paddingVertical: 4,
                                            width: '100%',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                        <Text>Shoeboxes</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : isGems ? (
                        <View
                            style={{
                                flex: 0.4,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginTop: 8
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    width: 200,
                                    backgroundColor: '#33ff99',
                                    overflow: 'hidden'
                                }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() =>
                                        this.setState({
                                            isGalleryMini: true,
                                            isUpgradeMini: false
                                        })
                                    }
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        borderWidth: isGalleryMini ? 1 : 0,
                                        borderRadius: isGalleryMini ? 20 : 0,
                                        overflow: 'hidden'
                                    }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            backgroundColor: isGalleryMini
                                                ? 'white'
                                                : '#33ff99',
                                            paddingVertical: 4,
                                            width: '100%',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                        <Text>Gallery</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() =>
                                        this.setState({
                                            isGalleryMini: false,
                                            isUpgradeMini: true
                                        })
                                    }
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        borderWidth: isUpgradeMini ? 1 : 0,
                                        borderRadius: isUpgradeMini ? 20 : 0,
                                        overflow: 'hidden'
                                    }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            backgroundColor: isUpgradeMini
                                                ? 'white'
                                                : '#33ff99',
                                            paddingVertical: 4,
                                            width: '100%',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                        <Text>Upgrade</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : null}
                </View>

                <View
                    style={{
                        flex: 8,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text>Hello! TabBag</Text>
                    {/* <TouchableOpacity
                        onPress={() => navigation.navigate(stackNavigator.STEP)}
                        style={{
                            height: 40,
                            width: 200,
                            backgroundColor: 'violet',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text>Đi đến màn hình Đi dạo</Text>
                    </TouchableOpacity> */}
                </View>
            </SafeAreaView>
        );
    }
}

export default TabBag;
