import React, { useState, useEffect } from 'react';
import
{
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text,
    Modal,
    Platform,
    FlatList
} from 'react-native';
import { getSize, Colors } from '../../../common';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { stackNavigator } from '../../../navigation/nameNavigator';
import * as _action from '../../../redux/action/ActionHandle';

export default function ItemGemsUpgrade({ item, index })
{
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const selector = useSelector((state) => ({
        screenState: state.initReducer.screenState,
        initReducer: state.initReducer
    }));
    const { isEfficiency, isLuck, isComfort, isResilience } = selector.screenState;
    const [modalBuy, setmodalBuy] = useState(false);
    const [modalTransfer, setmodalTransfer] = useState(false);

    const image =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogMFHOw0CKtwUvuJmhgcSi18GmfqlCxUI6g&usqp=CAU';
    const imageSneakers = 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg';

    const dataEfficiency = [
        {
            mint: 1,
            img: image,
            quantity: 29
        },
        {
            mint: 2,
            img: image,
            quantity: 29
        },
        {
            mint: 3,
            img: image,
            quantity: 29
        },
        {
            mint: 4,
            img: image,
            quantity: 29
        },
        {
            mint: 5,
            img: image,
            quantity: 29
        },
        {
            mint: 6,
            img: image,
            quantity: 29
        },
        {
            mint: 7,
            img: image,
            quantity: 29
        },
        {
            mint: 8,
            img: image,
            quantity: 29
        },
        {
            mint: 9,
            img: image,
            quantity: 29
        },
        {
            mint: 0,
            img: image,
            quantity: 0
        }
    ];

    const handleStyleColor = () =>
    {
        if (isEfficiency) {
            return Colors.YELLOW_DARK;
        }
        if (isLuck) {
            return Colors.BLUE_F3;
        }
        if (isComfort) {
            return Colors.RED_FF3B30;
        }
        if (isResilience) {
            return Colors.GREEN;
        }
    };

    const _handleTabbarUpgrade = (key) =>
    {
        if (key === 'isEfficiency') {
            dispatch(
                _action.changeScreenState({
                    ...selector.screenState,
                    isEfficiency: true,
                    isLuck: false,
                    isComfort: false,
                    isResilience: false
                })
            );
        }
        if (key === 'isLuck') {
            dispatch(
                _action.changeScreenState({
                    ...selector.screenState,
                    isEfficiency: false,
                    isLuck: true,
                    isComfort: false,
                    isResilience: false
                })
            );
        }
        if (key === 'isComfort') {
            dispatch(
                _action.changeScreenState({
                    ...selector.screenState,
                    isEfficiency: false,
                    isLuck: false,
                    isComfort: true,
                    isResilience: false
                })
            );
        }
        if (key === 'isResilience') {
            dispatch(
                _action.changeScreenState({
                    ...selector.screenState,
                    isEfficiency: false,
                    isLuck: false,
                    isComfort: false,
                    isResilience: true
                })
            );
        }
    };

    const _renderItem = ({ item, index }) => (
        <View
            key={index}
            style={{
                flex: 1,
                padding: getSize.scale(4),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <View
                style={{
                    flex: 1,
                    width: getSize.scale(57),
                    height: getSize.scale(57),
                    borderWidth: 1,
                    borderRadius: 7,
                    borderBottomWidth: 2.5,
                    borderRightWidth: 2.5,
                    justifyContent: 'center',
                    paddingHorizontal: getSize.scale(3)
                }}>
                {item.quantity > 0 ? (
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 3, justifyContent: 'center' }}>
                            <Text
                                style={{
                                    fontSize: 10,
                                    color: handleStyleColor()
                                }}>{`+${item.mint}`}</Text>
                        </View>
                        <TouchableOpacity style={{ flex: 4, alignItems: 'center' }}>
                            <Image
                                style={{ width: 25, height: 25, resizeMode: 'contain' }}
                                source={{ uri: item.img }}
                            />
                        </TouchableOpacity>
                        <View
                            style={{ flex: 3, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <Text style={{ fontSize: 10, color: handleStyleColor() }}>
                                {item.quantity}
                            </Text>
                        </View>
                    </View>
                ) : (
                    <View />
                )}
            </View>
        </View>
    );

    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: getSize.scale(8),
                paddingVertical: getSize.scale(16)
            }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ width: getSize.Width / 2, height: getSize.Width / 2 }}
                        source={{ uri: image }}
                    />
                </View>

                <View
                    style={{
                        flex: 1,
                        width: getSize.Width,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: getSize.scale(16),
                        marginTop: getSize.scale(32)
                    }}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            paddingHorizontal: getSize.scale(16)
                        }}>
                        {isEfficiency ? (
                            <TouchableOpacity
                                onPress={() => _handleTabbarUpgrade('isEfficiency')}
                                style={{
                                    flex: 1,
                                    backgroundColor: 'white',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    borderWidth: 2,
                                    borderBottomWidth: 0,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    bottom: getSize.scale(-2)
                                }}>
                                <Image
                                    style={{
                                        width: 15,
                                        height: 15,
                                        resizeMode: 'contain',
                                        marginRight: 4
                                    }}
                                    source={{ uri: image }}
                                />
                                <Text
                                    style={{
                                        fontSize: 11,
                                        fontStyle: 'italic',
                                        color: Colors.YELLOW,
                                        fontWeight: 'bold'
                                    }}>{`Efficiency`}</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                onPress={() => _handleTabbarUpgrade('isEfficiency')}
                                style={{
                                    flex: 1,
                                    backgroundColor: Colors.YELLOW,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderWidth: 2,
                                    borderBottomWidth: 0,
                                    borderColor: '#fff',
                                    marginVertical: 4,
                                    top: 4
                                }}>
                                <Image
                                    style={{
                                        width: 15,
                                        height: 15,
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: image }}
                                />
                            </TouchableOpacity>
                        )}

                        {isLuck ? (
                            <TouchableOpacity
                                onPress={() => _handleTabbarUpgrade('isLuck')}
                                style={{
                                    flex: 1,
                                    backgroundColor: 'white',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    borderWidth: 2,
                                    borderBottomWidth: 0,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    bottom: getSize.scale(-2)
                                }}>
                                <Image
                                    style={{
                                        width: 15,
                                        height: 15,
                                        resizeMode: 'contain',
                                        marginRight: 4
                                    }}
                                    source={{ uri: image }}
                                />
                                <Text
                                    style={{
                                        fontSize: 11,
                                        fontStyle: 'italic',
                                        color: Colors.BLUE_F3,
                                        fontWeight: 'bold'
                                    }}>{`Lucks`}</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                onPress={() => _handleTabbarUpgrade('isLuck')}
                                style={{
                                    flex: 1,
                                    backgroundColor: Colors.BLUE_F3,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderWidth: 2,
                                    borderBottomWidth: 0,
                                    borderColor: '#fff',
                                    marginVertical: 4,
                                    top: 4
                                }}>
                                <Image
                                    style={{
                                        width: 15,
                                        height: 15,
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: image }}
                                />
                            </TouchableOpacity>
                        )}

                        {isComfort ? (
                            <TouchableOpacity
                                onPress={() => _handleTabbarUpgrade('isComfort')}
                                style={{
                                    flex: 1,
                                    backgroundColor: 'white',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    borderWidth: 2,
                                    borderBottomWidth: 0,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    bottom: getSize.scale(-2)
                                }}>
                                <Image
                                    style={{
                                        width: 15,
                                        height: 15,
                                        resizeMode: 'contain',
                                        marginRight: 4
                                    }}
                                    source={{ uri: image }}
                                />
                                <Text
                                    style={{
                                        fontSize: 11,
                                        fontStyle: 'italic',
                                        color: Colors.RED_FF3B30,
                                        fontWeight: 'bold'
                                    }}>{`Comfort`}</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                onPress={() => _handleTabbarUpgrade('isComfort')}
                                style={{
                                    flex: 1,
                                    backgroundColor: Colors.RED_FF3B30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderWidth: 2,
                                    borderBottomWidth: 0,
                                    borderColor: '#fff',
                                    marginVertical: 4,
                                    top: 4
                                }}>
                                <Image
                                    style={{
                                        width: 15,
                                        height: 15,
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: image }}
                                />
                            </TouchableOpacity>
                        )}

                        {isResilience ? (
                            <TouchableOpacity
                                onPress={() => _handleTabbarUpgrade('isResilience')}
                                style={{
                                    flex: 1,
                                    backgroundColor: 'white',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    borderWidth: 2,
                                    borderBottomWidth: 0,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    bottom: getSize.scale(-2)
                                }}>
                                <Image
                                    style={{
                                        width: 15,
                                        height: 15,
                                        resizeMode: 'contain',
                                        marginRight: 4
                                    }}
                                    source={{ uri: image }}
                                />
                                <Text
                                    style={{
                                        fontSize: 11,
                                        fontStyle: 'italic',
                                        color: Colors.GREEN,
                                        fontWeight: 'bold'
                                    }}>{`Resilience`}</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                onPress={() => _handleTabbarUpgrade('isResilience')}
                                style={{
                                    flex: 1,
                                    backgroundColor: Colors.GREEN,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderWidth: 2,
                                    borderBottomWidth: 0,
                                    borderColor: '#fff',
                                    marginVertical: 4,
                                    top: 4
                                }}>
                                <Image
                                    style={{
                                        width: 15,
                                        height: 15,
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: image }}
                                />
                            </TouchableOpacity>
                        )}
                    </View>

                    <View
                        style={{
                            flex: 6,
                            zIndex: -1,
                            height: getSize.Width / 5,
                            padding: getSize.scale(16),
                            flexDirection: 'row',
                            borderWidth: 2,
                            borderRadius: 10
                        }}>
                        <View style={{ flex: 1 }}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-between',
                                    padding: getSize.scale(8)
                                }}
                                keyExtractor={(item, index) => index}
                                data={dataEfficiency}
                                renderItem={_renderItem}
                            // refreshControl={<RefreshControl onRefresh={handleReload} refreshing={false} />}
                            // ListEmptyComponent={renderEmptyList()}
                            // ListFooterComponent={renderFooter()}
                            // onEndReached={handleLoadMore}
                            // onEndReachedThreshold={0.2}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 4 }} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: getSize.scale(16),
        marginVertical: getSize.moderateScale(8),
        backgroundColor: Colors.WHITE,
        borderRadius: 7,
        resizeMode: 'cover',
        overflow: 'hidden',
        // android
        elevation: 3,
        // ios
        shadowColor: Colors.BLACK,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        flexDirection: 'row'
    }
});
