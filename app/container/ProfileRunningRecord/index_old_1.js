import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    StatusBar
} from 'react-native';
const DATA = [
    {
        id: 1,
        title: 'Fist',
        date: '19/04 00:12',
        km: 0,
        time: '00:00:40'
    },
    {
        id: 2,
        title: 'second',
        date: '20/04 00:12',
        km: 0,
        time: '00:00:40'
    },
    {
        id: 3,
        title: 'Third',
        date: '21/04 00:12',
        km: 0,
        time: '00:00:40'
    },
    {
        id: 4,
        title: 'fourth',
        date: '22/04 00:12',
        km: 0,
        time: '00:00:40'
    }
];
const Item = ({ item }) => {
    return (
        <TouchableOpacity
            style={{
                width: '100%',
                borderColor: '#f5f6f6',
                borderBottomWidth: 1,
                paddingBottom: 15,
                paddingTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
            <View
                style={{
                    width: 100,
                    // justifyContent: "center",
                    alignItems: 'center'
                }}>
                <Text
                    style={{
                        color: '#d2d2d2'
                    }}>
                    {item.date}
                </Text>
                <View
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: '#f5f6f6',
                        borderBottomWidth: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text>{item.title}</Text>
                </View>
            </View>
            <View
                style={{
                    width: '50%',
                    justifyContent: 'flex-end',
                    // backgroundColor: "red",
                    height: 90
                }}>
                <Text
                    style={{
                        color: '#000000',
                        fontWeight: 'bold'
                    }}>
                    <Text
                        style={{
                            fontSize: 25
                        }}>
                        {item.km}
                    </Text>{' '}
                    km
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 20
                    }}>
                    <View
                        style={{
                            width: 20,
                            height: 20,
                            backgroundColor: '#dfdfdf',
                            marginRight: 10,
                            borderRadius: 100
                        }}></View>
                    <Text
                        style={{
                            color: '#d2d2d2'
                        }}>
                        {item.time}
                    </Text>
                </View>
            </View>
            <View
                style={{
                    width: '15%',
                    alignItems: 'flex-end'
                    // backgroundColor: "red"
                }}>
                <Text
                    style={{
                        color: '#d2d2d2',
                        fontSize: 30
                    }}>
                    {'>'}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
class ProfileRunningRecord extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    renderItem = ({ item }) => {
        return <Item item={item} />;
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        justifyContent: 'space-between',
                        backgroundColor: '#ffffff'
                    }}>
                    <View
                        style={{
                            height: 320,
                            backgroundColor: '#d9fff2',
                            width: '100%',
                            paddingHorizontal: 20,
                            flex: 8,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <View
                            style={{
                                width: '100%',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                height: 110,
                                flexDirection: 'row'
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
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                    RUNNING RECORD
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                width: '100%',
                                height: 150,
                                paddingHorizontal: 20
                            }}>
                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    position: 'relative'
                                }}>
                                <View>
                                    <Text
                                        style={{
                                            color: '#000000',
                                            fontStyle: 'italic',
                                            fontSize: 27,
                                            fontWeight: 'bold'
                                        }}>
                                        0
                                        <Text
                                            style={{
                                                color: '#000000',
                                                fontStyle: 'italic',
                                                fontSize: 10,
                                                fontWeight: 'normal'
                                            }}>
                                            km
                                        </Text>
                                    </Text>
                                    <Text
                                        style={{
                                            color: '#9b9b9b',
                                            fontStyle: 'italic',
                                            fontSize: 10
                                        }}>
                                        Total km
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        backgroundColor: 'blue',
                                        width: 100,
                                        height: 100,
                                        position: 'absolute',
                                        right: 10
                                    }}></View>
                            </View>
                            <View
                                style={{
                                    width: '50%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                <View
                                    style={{
                                        marginTop: 20
                                    }}>
                                    <Text
                                        style={{
                                            color: '#000000',
                                            fontStyle: 'italic',
                                            fontSize: 27,
                                            fontWeight: 'bold'
                                        }}>
                                        0
                                        <Text
                                            style={{
                                                color: '#000000',
                                                fontStyle: 'italic',
                                                fontSize: 10,
                                                fontWeight: 'normal'
                                            }}>
                                            km
                                        </Text>
                                    </Text>
                                    <Text
                                        style={{
                                            color: '#9b9b9b',
                                            fontStyle: 'italic',
                                            fontSize: 10
                                        }}>
                                        Total km
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        marginTop: 20
                                    }}>
                                    <Text
                                        style={{
                                            color: '#000000',
                                            fontStyle: 'italic',
                                            fontSize: 27,
                                            fontWeight: 'bold'
                                        }}>
                                        0
                                        <Text
                                            style={{
                                                color: '#000000',
                                                fontStyle: 'italic',
                                                fontSize: 10,
                                                fontWeight: 'normal'
                                            }}>
                                            hours
                                        </Text>
                                    </Text>
                                    <Text
                                        style={{
                                            color: '#9b9b9b',
                                            fontStyle: 'italic',
                                            fontSize: 10
                                        }}>
                                        Total Time
                                    </Text>
                                </View>
                            </View>
                            <View></View>
                        </View>
                    </View>
                    <View
                        style={{
                            width: '100%',
                            height: '60%',
                            paddingHorizontal: 20,
                            backgroundColor: '#ffffff',

                            alignItems: 'center',
                            marginBottom: 30
                        }}>
                        <FlatList
                            style={{
                                width: '100%'
                            }}
                            data={DATA}
                            renderItem={this.renderItem}
                            keyExtractor={(item) => item.id}></FlatList>
                        {/* <Text
                            style={{
                                color: "#9b9b9b",
                                fontStyle: "italic"
                            }}
                        >Avalable/Total</Text>
                        <Text style={{
                            color: "#000000",
                            fontStyle: "italic",
                            fontSize: 30,
                            fontWeight: "bold"
                        }}>0/0</Text> */}
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    title: {
        fontSize: 32
    }
});
export default ProfileRunningRecord;
