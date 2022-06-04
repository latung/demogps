import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    ImageBackground,
    Image,
    FlatList
} from 'react-native';
import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';
import { Popup, Header } from '../../components';
import { getSize, location, Colors } from '../../common';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _action from '../../redux/action/ActionHandle';

class ProfileRunningRecord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSound: false
        };
    }

    render() {
        const { navigation } = this.props;

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
                <ImageBackground
                    style={{
                        width: getSize.Width,
                        height: getSize.scale(297),
                        position: 'absolute',
                        resizeMode: 'cover',
                        zIndex: -2,
                        top: Platform.OS === 'android' ? getSize.scale(-32) : 0
                    }}
                    source={{ uri: 'ic_user_bg_record' }}
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
                                {'RUNNING RECORD'}
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
                        alignItems: 'center',
                        marginTop: Platform.OS === 'android' ? getSize.scale(16) : 0
                    }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View
                            style={{ flex: 1, flexDirection: 'row' }}
                            onPress={() => navigation.navigate(stackNavigator.PROFILE_DETAILS)}>
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                    width: getSize.Width,
                                    paddingHorizontal: getSize.scale(16)
                                }}>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flex: 1 }}>
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(14),
                                                color: 'rgba(118, 118, 118, 1)',
                                                fontStyle: 'italic'
                                            }}>
                                            Total distance
                                        </Text>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-end'
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: getSize.scale(42),
                                                    color: 'rgba(244, 67, 105, 1)',
                                                    fontStyle: 'italic',
                                                    fontWeight: 'bold'
                                                }}>
                                                80
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: getSize.scale(14),
                                                    fontStyle: 'italic',
                                                    color: 'rgba(44, 44, 44, 1)',
                                                    top: getSize.scale(-6)
                                                }}>
                                                Km
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text
                                                style={{
                                                    fontSize: getSize.scale(14),
                                                    color: 'rgba(118, 118, 118, 1)',
                                                    fontStyle: 'italic'
                                                }}>
                                                Total runs
                                            </Text>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-end'
                                                }}>
                                                <Text
                                                    style={{
                                                        fontSize: getSize.scale(18),
                                                        color: 'rgba(44, 44, 44, 1)',
                                                        fontStyle: 'italic',
                                                        fontWeight: 'bold'
                                                    }}>
                                                    1644
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontSize: getSize.scale(14),
                                                        fontStyle: 'italic',
                                                        color: 'rgba(44, 44, 44, 1)'
                                                    }}>
                                                    times
                                                </Text>
                                            </View>
                                        </View>

                                        <View
                                            style={{
                                                height: '40%',
                                                width: 2,
                                                backgroundColor: 'rgba(233, 228, 236, 1)',
                                                marginHorizontal: getSize.scale(16)
                                            }}
                                        />

                                        <View style={{ flex: 1 }}>
                                            <Text
                                                style={{
                                                    fontSize: getSize.scale(14),
                                                    color: 'rgba(118, 118, 118, 1)',
                                                    fontStyle: 'italic'
                                                }}>
                                                Total time
                                            </Text>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-end'
                                                }}>
                                                <Text
                                                    style={{
                                                        fontSize: getSize.scale(18),
                                                        color: 'rgba(44, 44, 44, 1)',
                                                        fontStyle: 'italic',
                                                        fontWeight: 'bold'
                                                    }}>
                                                    1644
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontSize: getSize.scale(14),
                                                        fontStyle: 'italic',
                                                        color: 'rgba(44, 44, 44, 1)'
                                                    }}>
                                                    hours
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'flex-end',
                                    justifyContent: 'flex-start'
                                }}>
                                <Image
                                    style={{
                                        width: getSize.scale(150),
                                        height: getSize.scale(130),
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: 'ic_user_rating' }}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 3, justifyContent: 'space-between' }}>
                        <View style={{ flex: 5.5 }}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={(item, index) => index}
                                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                                renderItem={({ item, index }) => (
                                    <View style={{ flex: 1 }}>
                                        <TouchableOpacity
                                            onPress={() =>
                                                navigation.navigate(stackNavigator.PROFILE_CONGRATS)
                                            }
                                            style={{
                                                width: getSize.Width - getSize.scale(32),
                                                flexDirection: 'row',
                                                alignItems: 'center'
                                            }}
                                            activeOpacity={0.6}>
                                            <View
                                                style={{
                                                    flex: 8,
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                                    <Image
                                                        style={{
                                                            width: getSize.scale(12),
                                                            height: getSize.scale(112),
                                                            resizeMode: 'contain'
                                                        }}
                                                        source={{ uri: 'ic_user_line' }}
                                                    />
                                                    <View
                                                        style={{
                                                            flex: 1,
                                                            marginHorizontal: getSize.scale(8)
                                                        }}>
                                                        <Text
                                                            style={{
                                                                fontSize: getSize.scale(12),
                                                                color: 'rgba(118, 118, 118, 1)',
                                                                fontStyle: 'italic'
                                                            }}>
                                                            15/04/2022 15:30
                                                        </Text>
                                                        <View
                                                            style={{
                                                                flex: 1,
                                                                flexDirection: 'row',
                                                                alignItems: 'center'
                                                            }}>
                                                            <Image
                                                                style={{
                                                                    width: getSize.scale(80),
                                                                    height: getSize.scale(80),
                                                                    resizeMode: 'contain'
                                                                }}
                                                                source={{
                                                                    uri: 'ic_user_mini_maps'
                                                                }}
                                                            />
                                                            <View
                                                                style={{
                                                                    flex: 1,
                                                                    marginHorizontal:
                                                                        getSize.scale(8)
                                                                }}>
                                                                <Text
                                                                    style={{
                                                                        fontSize: getSize.scale(18),
                                                                        color: 'rgba(44, 44, 44, 1)',
                                                                        fontStyle: 'italic',
                                                                        fontWeight: 'bold',
                                                                        marginVertical:
                                                                            getSize.scale(8),
                                                                        top: getSize.scale(-8)
                                                                    }}>
                                                                    115 km
                                                                </Text>
                                                                <Text
                                                                    style={{
                                                                        fontSize: getSize.scale(14),
                                                                        color: 'rgba(118, 118, 118, 1)',
                                                                        fontStyle: 'italic'
                                                                    }}>
                                                                    15:52:00
                                                                </Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                                <Image
                                                    style={{
                                                        width: getSize.scale(12),
                                                        height: getSize.scale(12),
                                                        resizeMode: 'contain'
                                                    }}
                                                    source={{ uri: 'ic_user_arrow_right' }}
                                                />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProfileRunningRecord);
