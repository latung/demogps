import React, { useState, useEffect } from 'react';
import
{
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Text,
    Modal,
    Platform
} from 'react-native';
import { getSize, Colors } from '../../../common';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { stackNavigator } from '../../../navigation/nameNavigator';
import * as _action from '../../../redux/action/ActionHandle';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function ItemFilter({ ...props })
{
    const { modalFilter, setmodalFilter, filters, SetFilters, ClearFilters, Filter } = props;
    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <View style={{ flex: 4 }}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalFilter}
                onRequestClose={() => setmodalFilter(!modalFilter)}>
                <View
                    style={{
                        // flex: 1,
                        height: '100%',
                        width: '100%',
                        top: 0,
                        position: 'absolute',
                        backgroundColor: '#0000007f'
                    }}>
                    <TouchableOpacity
                        onPress={() => setmodalFilter(!modalFilter)}
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden'
                        }}>
                        <Image
                            style={{
                                width: 20,
                                height: 20,
                                borderRadius: 50,
                                resizeMode: 'cover'
                            }}
                            source={{}}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => setmodalFilter(!modalFilter)}
                    activeOpacity={1}
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <View
                        style={{
                            height: getSize.Height / 1.5,
                            width: getSize.Width - getSize.scale(64)

                            // backgroundColor: Colors.WHITE,
                        }}>
                        <View
                            style={{
                                // flex: 20,
                                width: '100%',
                                paddingHorizontal: getSize.scale(16),
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                backgroundColor: '#ffffff',
                                paddingVertical: 10,
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
                            <View
                                style={{
                                    // flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'relative',
                                    width: '100%'
                                    // backgroundColor: "red"
                                }}>
                                <View
                                    style={{
                                        // flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',

                                        width: '100%'
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            fontStyle: 'italic',
                                            fontWeight: 'bold',
                                            textAlign: 'center'
                                        }}>
                                        FILTER
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    style={{
                                        position: 'absolute',
                                        right: 0
                                        // top: 0
                                    }}
                                    onPress={() =>
                                    {
                                        ClearFilters();
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            fontStyle: 'italic',
                                            fontWeight: 'bold',
                                            color: '#F44369'
                                        }}>
                                        Clear filter
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View
                                style={{
                                    justifyContent: 'space-evenly',
                                    width: '100%',
                                    marginTop: getSize.scale(16)
                                }}>
                                <View
                                    style={{
                                        marginVertical: 20
                                    }}>
                                    <Text
                                        style={{
                                            marginBottom: 10
                                        }}>
                                        Class
                                    </Text>

                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'
                                        }}>
                                        <TouchableOpacity
                                            style={{
                                                borderColor: '767676',
                                                borderRadius: 20,
                                                width: '33%',
                                                height: 30,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderWidth: !filters.class.Jogging ? 1 : 0
                                            }}
                                            onPress={() =>
                                            {
                                                SetFilters('class', 'Jogging');
                                            }}>

                                            {filters.class.Jogging && (
                                                <ImageBackground
                                                    source={{ uri: 'ic_btn_jogging_no_text' }}
                                                    style={{
                                                        width: '100%',
                                                        height: 30,
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                    <Text
                                                        style={{
                                                            marginLeft: 10,
                                                            color: '#F44369',
                                                            fontWeight: 'bold'
                                                        }}>
                                                        Jogging
                                                    </Text>
                                                </ImageBackground>
                                            )}
                                            {!filters.class.Jogging === true && <Text style={{}}>Jogging</Text>}
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={{
                                                borderColor: '767676',
                                                borderRadius: 20,
                                                width: '30%',
                                                height: 30,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderWidth: !filters.class.runner ? 1 : 0
                                            }}
                                            onPress={() =>
                                            {
                                                SetFilters('class', 'runner');
                                            }}>
                                            {filters.class.runner && (
                                                <ImageBackground
                                                    source={{ uri: 'ic_btn_jogging_no_text' }}
                                                    style={{
                                                        width: '100%',
                                                        height: 30,
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                    <Text
                                                        style={{
                                                            marginLeft: 10,
                                                            color: '#F44369',
                                                            fontWeight: 'bold'
                                                        }}>
                                                        runner
                                                    </Text>
                                                </ImageBackground>
                                            )}
                                            {!filters.class.runner && <Text style={{}}>Running</Text>}
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{
                                                borderColor: '767676',
                                                borderRadius: 20,
                                                width: '30%',
                                                height: 30,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderWidth: !filters.class.Training ? 1 : 0
                                            }}
                                            onPress={() =>
                                            {
                                                SetFilters('class', 'Training');
                                            }}>
                                            {filters.class.Training && (
                                                <ImageBackground
                                                    source={{ uri: 'ic_btn_jogging_no_text' }}
                                                    style={{
                                                        width: '100%',
                                                        height: 30,
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                    <Text
                                                        style={{
                                                            marginLeft: 10,
                                                            color: '#F44369',
                                                            fontWeight: 'bold'
                                                        }}>
                                                        Training
                                                    </Text>
                                                </ImageBackground>
                                            )}
                                            {!filters.class.Training && <Text style={{}}>Training</Text>}
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        width: '100%',
                                        height: 10
                                        // backgroundColor: "red",
                                    }}>
                                    <Image
                                        source={{ uri: 'ic_line' }}
                                        style={{ width: '100%', height: 5, resizeMode: 'contain' }}
                                    />
                                </View>
                                <View
                                    style={{
                                        marginTop: 20
                                    }}>
                                    <Text
                                        style={{
                                            marginBottom: 10
                                        }}>
                                        Grade
                                    </Text>

                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'
                                        }}>
                                        <TouchableOpacity
                                            style={{
                                                borderColor: '767676',
                                                borderRadius: 20,
                                                width: '30%',
                                                height: 30,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderWidth: !filters.grade.Common ? 1 : 0
                                            }}
                                            onPress={() =>
                                            {
                                                SetFilters('grade', 'Common');
                                            }}>
                                            {filters.grade.Common && (
                                                <ImageBackground
                                                    source={{ uri: 'ic_btn_jogging_no_text' }}
                                                    style={{
                                                        width: '100%',
                                                        height: 30,
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                    <Text
                                                        style={{
                                                            marginLeft: 20,
                                                            color: '#F44369',
                                                            fontWeight: 'bold',

                                                        }}>
                                                        Common
                                                    </Text>
                                                </ImageBackground>
                                            )}
                                            {!filters.grade.Common && <Text style={{}}>Common</Text>}
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={{
                                                borderColor: '767676',
                                                borderRadius: 20,
                                                width: '30%',
                                                height: 30,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderWidth: !filters.grade.rare ? 1 : 0
                                            }}
                                            onPress={() =>
                                            {
                                                SetFilters('grade', 'rare');
                                            }}>
                                            {filters.grade.rare && (
                                                <ImageBackground
                                                    source={{ uri: 'ic_btn_jogging_no_text' }}
                                                    style={{
                                                        width: '100%',
                                                        height: 30,
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                    <Text
                                                        style={{
                                                            marginLeft: 10,
                                                            color: '#F44369',
                                                            fontWeight: 'bold'
                                                        }}>
                                                        Rare
                                                    </Text>
                                                </ImageBackground>
                                            )}
                                            {!filters.grade.rare && <Text style={{}}>Rare</Text>}
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{
                                                borderColor: '767676',
                                                borderRadius: 20,
                                                width: '30%',
                                                height: 30,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderWidth: !filters.grade.Legendary ? 1 : 0
                                            }}
                                            onPress={() =>
                                            {
                                                SetFilters('grade', 'Legendary');
                                            }}>
                                            {filters.grade.Legendary && (
                                                <ImageBackground
                                                    source={{ uri: 'ic_btn_jogging_no_text' }}
                                                    style={{
                                                        width: '100%',
                                                        height: 30,
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                    <Text
                                                        style={{
                                                            marginLeft: 20,
                                                            color: '#F44369',
                                                            fontWeight: 'bold'
                                                        }}>
                                                        Legendary
                                                    </Text>
                                                </ImageBackground>
                                            )}
                                            {!filters.grade.Legendary && <Text style={{}}>Legendary</Text>}
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={{
                                    // flex: 2,
                                    width: '100%'

                                    // paddingHorizontal: getSize.scale(16),
                                }}>
                                <View
                                    style={{
                                        // flex: 1,
                                        // paddingTop: getSize.scale(8),
                                        justifyContent: 'space-between',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        width: '100%',
                                        paddingVertical: 5
                                    }}>
                                    <View
                                        style={{
                                            // flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'flex-end'
                                        }}>
                                        <Text
                                            style={{
                                                // fontStyle: 'italic',
                                                fontWeight: 'bold',
                                                color: '#F44369',
                                                fontSize: 20
                                            }}></Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        // flex: 1.5,
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        flexDirection: 'row'
                                    }}>
                                    <View
                                        style={
                                            {
                                                // flex: 1
                                            }
                                        }>
                                        <TouchableOpacity
                                            onPress={() => setmodalFilter(!modalFilter)}
                                            style={{
                                                width: getSize.Width / 3,
                                                // marginHorizontal: getSize.scale(16),
                                                // paddingVertical: getSize.scale(6),
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                                // borderRadius: 20,
                                                // borderWidth: 1,
                                                // borderBottomWidth: 3,
                                                // borderRightWidth: 3,
                                                // backgroundColor: Colors.WHITE
                                            }}>
                                            <Image
                                                style={{ width: '100%', height: 37 }}
                                                source={{ uri: 'ic_btn_cancel_by' }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View
                                        style={{
                                            // flex: 1,
                                            alignItems: 'flex-end'
                                        }}>
                                        <TouchableOpacity
                                            onPress={() =>
                                            {
                                                Filter()
                                                return setmodalFilter(!modalFilter);
                                            }}
                                            style={{
                                                width: getSize.Width / 3,
                                                // marginHorizontal: getSize.scale(16),
                                                // paddingVertical: getSize.scale(6),
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                                // borderRadius: 20,
                                                // borderWidth: 1,
                                                // borderBottomWidth: 3,
                                                // borderRightWidth: 3,
                                                // backgroundColor: Colors.GREEN
                                            }}>
                                            {/* <Text
                                                                    style={{
                                                                        fontSize: 14,
                                                                        fontStyle: 'italic',
                                                                        fontWeight: 'bold',
                                                                        color: '#000'
                                                                    }}>
                                                                    CONFIRM
                                                                </Text> */}
                                            <Image
                                                style={{ width: '100%', height: 37 }}
                                                source={{ uri: 'ic_btn_confirm_buy' }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
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
