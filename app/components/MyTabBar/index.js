import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { location, getSize, Colors } from '../../common/';

export default function MyTabBar({ state, descriptors, navigation })
{
    return (
        <View
            style={{
                flexDirection: 'row',
                marginBottom: getSize.scale(16),
                borderRadius: 30,
                backgroundColor: 'rgba(255, 255, 255,1)',
                borderWidth: Platform.OS === 'android' ? 0.2 : 0,
                borderColor:
                    Platform.OS === 'android'
                        ? 'rgba(244, 67, 105, 0.6)'
                        : 'rgba(244, 67, 105, 0.2)',
                elevation: 4,
                shadowColor: 'rgba(244, 67, 105, 0.2)', // "rgba(52, 52, 52, alpha)", //trong suốt
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 1,
                shadowRadius: 3
            }}>
            {state.routes.map((route, index) =>
            {
                const { options } = descriptors[route.key];
                // const label =
                //     options.tabBarLabel !== undefined
                //         ? options.tabBarLabel
                //         : options.title !== undefined
                //         ? options.title
                //         : route.name;
                const image =
                    route.name === 'TabHome'
                        ? 'ic_run'
                        : route.name === 'TabBag'
                            ? 'ic_shoe'
                            : route.name === 'TabRatings'
                                ? 'ic_rank'
                                : route.name === 'TabStore'
                                    ? 'ic_cart'
                                    : '';
                const imageFocused =
                    route.name === 'TabHome'
                        ? 'ic_run_red'
                        : route.name === 'TabBag'
                            ? 'ic_shoe_red'
                            : route.name === 'TabRatings'
                                ? 'ic_rank_red'
                                : route.name === 'TabStore'
                                    ? 'ic_cart_red'
                                    : '';
                const isFocused = state.index === index;

                const onPress = () =>
                {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () =>
                {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, minHeight: 40 }}>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: getSize.scale(8)
                            }}>
                            {/* <Text
                                style={{
                                    color: isFocused ? '#673ab7' : '#222'
                                }}>
                                {label}
                            </Text> */}
                            <Image
                                style={{
                                    width: getSize.scale(31),
                                    height: getSize.scale(31),
                                    resizeMode: 'contain'
                                }}
                                source={{ uri: isFocused ? imageFocused : image }}
                            />
                            {isFocused && (
                                <View
                                    style={{
                                        backgroundColor: '#2EDBDC',
                                        position: 'absolute',
                                        bottom: 0,
                                        width: '30%',
                                        height: 3,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20
                                    }}
                                />
                            )}
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
