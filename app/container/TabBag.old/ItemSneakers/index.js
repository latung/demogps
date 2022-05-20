import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, ImageBackground, Text, Modal, Platform } from 'react-native';
import { getSize, Colors } from '../../../common';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { stackNavigator } from '../../../navigation/nameNavigator';
import * as _action from '../../../redux/action/ActionHandle';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function ItemSneakers({ item, index })
{
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [modalBuy, setmodalBuy] = useState(false);
    const image =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogMFHOw0CKtwUvuJmhgcSi18GmfqlCxUI6g&usqp=CAU';
    const imageSneakers = 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg';

    return (
        <View
            key={index}
            style={{
                width: getSize.Width / 2.09,
                height: getSize.Width / 1.5,
                // paddingHorizontal: getSize.scale(8),
                paddingTop: index === 0 || index === 1 ? getSize.scale(8) : 0,
                marginVertical: getSize.scale(4),
                marginBottom: 70
            }}>
            <ImageBackground source={{ uri: 'ic_item_list_bag' }} style={{
                width: "100%",
                height: 300,
                flexDirection: 'row',
                alignItems: "center",
                // paddingHorizontal: 4

            }}>
                <View
                    style={{
                        flex: 1,
                        // borderWidth: 2,
                        borderRadius: 20,
                        // overflow: 'hidden',
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <View
                        style={{
                            flex: 1,
                            // borderRadius: 18,
                            // borderBottomWidth: 2,
                            // borderRightWidth: 3,
                            // overflow: 'hidden',
                            width: "70%",
                            position: "relative"
                        }}>
                        <ImageBackground source={{ uri: 'ic_head_frame_shoe' }} style={{
                            width: "100%",
                            height: 29,
                            flexDirection: 'row',
                            alignItems: "center",
                            marginTop: -10
                            // position: "absolute"
                        }}>
                            <View
                                style={{
                                    // flex: 1,
                                    // marginHorizontal: getSize.scale(32),
                                    // backgroundColor: item.color,
                                    // borderBottomEndRadius: 10,
                                    // borderBottomLeftRadius: 10,
                                    width: "100%",
                                    // backgroundColor: "red"
                                }}>
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: "100%",
                                    }}>

                                    <Text
                                        style={{
                                            fontSize: 12,
                                            fontStyle: 'italic',
                                            fontWeight: 'bold',
                                            // marginLeft: getSize.scale(8),
                                            color: '#2C2C2C'
                                        }}>
                                        {item.classify}
                                    </Text>
                                    <View style={{
                                        marginLeft: 5,
                                        flexDirection: "row",

                                    }}>
                                        <Image source={{ uri: 'ic_ray' }} style={{
                                            width: 12,
                                            height: 12
                                        }} />
                                        <Image source={{ uri: 'ic_ray' }} style={{
                                            width: 12,
                                            height: 12
                                        }} />
                                        <Image source={{ uri: 'ic_ray' }} style={{
                                            width: 12,
                                            height: 12
                                        }} />
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                        <View style={{}}>
                            <TouchableOpacity
                                style={{
                                    // flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }} onPress={() => setmodalBuy(!modalBuy)} >
                                <Image
                                    source={{ uri: item.img }}
                                    style={{
                                        width: getSize.scale(150),
                                        height: getSize.scale(150),
                                        resizeMode: 'contain'
                                    }}
                                />
                                <View
                                    style={{
                                        // flex: 1,
                                        flexDirection: 'row',
                                        // borderWidth: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        // borderRadius: 20,
                                        // padding: getSize.scale(4),
                                        // borderColor: item.color
                                        width: "80%",
                                    }}>
                                    <ImageBackground source={{ uri: 'ic_btn_id' }} style={{
                                        width: "100%",
                                        height: 27,
                                        flexDirection: 'row',
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginTop: -10
                                        // position: "absolute"
                                    }}>
                                        <View
                                            style={{
                                                // width: getSize.scale(15),
                                                // height: getSize.scale(15),
                                                borderRadius: 50,
                                                // backgroundColor: item.color,
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                            <Text
                                                style={{
                                                    color: '#fff',
                                                    fontWeight: 'bold',
                                                    fontSize: 13
                                                }}>
                                                #
                                            </Text>
                                        </View>
                                        <Text
                                            style={{
                                                color: '#fff',
                                                fontWeight: 'bold',
                                                // top: getSize.scale(-2),
                                                marginLeft: getSize.scale(8)
                                            }}>
                                            {item.shoesId}
                                        </Text>
                                    </ImageBackground>
                                </View>



                            </TouchableOpacity>
                        </View>

                        <View style={{
                            flex: 1.5, flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <View
                                style={{
                                    flex: 1,
                                    width: "100%",


                                    alignItems: 'center',
                                    paddingVertical: getSize.scale(8),
                                    paddingHorizontal: getSize.scale(5)
                                }}>
                                <View style={{
                                    flexDirection: 'row',
                                    width: "100%",
                                    justifyContent: 'space-between',
                                }}>
                                    <Text
                                        style={{
                                            color: '#000',
                                            fontSize: 11,
                                        }}>Mint:
                                    </Text>
                                    <Text
                                        style={{
                                            color: '#000',
                                            fontSize: 11,
                                            fontWeight: "bold",
                                            marginLeft: 5
                                        }}>{item.mint}
                                    </Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    width: "100%",
                                    justifyContent: 'space-between',
                                }}>
                                    <Text
                                        style={{
                                            color: '#000',
                                            fontSize: 11,
                                        }}>Energy:
                                    </Text>
                                    <Text
                                        style={{
                                            color: '#000',
                                            fontSize: 11,
                                            fontWeight: "bold",
                                            marginLeft: 5
                                        }}>20
                                    </Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    width: "100%",
                                    justifyContent: 'space-between',
                                }}>
                                    <Text
                                        style={{
                                            color: '#000',
                                            fontSize: 11,
                                        }}>Energy:
                                    </Text>
                                    <Text
                                        style={{
                                            color: '#000',
                                            fontSize: 11,
                                            fontWeight: "bold",
                                            marginLeft: 5
                                        }}>20 km/h
                                    </Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    width: "100%",
                                    justifyContent: 'space-between',
                                }}>
                                    <Text
                                        style={{
                                            color: '#000',
                                            fontSize: 11,
                                        }}>Lucky:
                                    </Text>
                                    <Text
                                        style={{
                                            color: '#000',
                                            fontSize: 11,
                                            fontWeight: "bold",
                                            marginLeft: 5
                                        }}>50
                                    </Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    width: "100%",
                                    justifyContent: 'space-between',
                                }}>
                                    <Text
                                        style={{
                                            color: '#000',
                                            fontSize: 11,
                                        }}>Durability:
                                    </Text>
                                    <Text
                                        style={{
                                            color: '#000',
                                            fontSize: 11,
                                            fontWeight: "bold",
                                            marginLeft: 5
                                        }}>40
                                    </Text>
                                </View>
                            </View>

                            {/* <View style={{
                                marginRight: 4
                            }}>
                                <Text style={{ color: "#2C2C2C", fontWeight: "bold", fontSize: 13 }}>
                                    11.67 BNB
                                </Text>

                            </View>

                            <TouchableOpacity style={{
                                width: "50%",
                                height: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                // paddingHorizontal: 
                            }}>
                                <Image style={{
                                    width: "100%",
                                    height: 18.5
                                }} source={{ uri: "ic_btn_buynow" }} />
                            </TouchableOpacity> */}
                            {/* <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginHorizontal: getSize.scale(4)
                                }}>
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        flexDirection: 'row'
                                    }}>
                                    <Image
                                        source={{ uri: image }}
                                        style={{
                                            width: getSize.scale(20),
                                            height: getSize.scale(20),
                                            resizeMode: 'contain',
                                            marginHorizontal: 2
                                        }}
                                    />
                                    <Text
                                        style={{
                                            fontSize: 13,
                                            fontStyle: 'italic'
                                        }}>{`${item.level}2`}</Text>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        flexDirection: 'row'
                                    }}>
                                    <Image
                                        source={{ uri: image }}
                                        style={{
                                            width: getSize.scale(15),
                                            height: getSize.scale(15),
                                            resizeMode: 'contain',
                                            marginHorizontal: 2
                                        }}
                                    />
                                    <Text
                                        style={{
                                            fontSize: 13,
                                            fontStyle: 'italic'
                                        }}>{`${item.level}2`}</Text>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        flexDirection: 'row'
                                    }}>
                                    <Image
                                        source={{ uri: image }}
                                        style={{
                                            width: getSize.scale(15),
                                            height: getSize.scale(15),
                                            resizeMode: 'contain',
                                            marginHorizontal: 2
                                        }}
                                    />
                                    <Text
                                        style={{
                                            fontSize: 13,
                                            fontStyle: 'italic'
                                        }}>{`${item.level}2`}</Text>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        flexDirection: 'row'
                                    }}>
                                    <Image
                                        source={{ uri: image }}
                                        style={{
                                            width: getSize.scale(15),
                                            height: getSize.scale(15),
                                            resizeMode: 'contain',
                                            marginHorizontal: 2
                                        }}
                                    />
                                    <Text
                                        style={{
                                            fontSize: 13,
                                            fontStyle: 'italic'
                                        }}>{`${item.level}2`}</Text>
                                </View>
                            </View> */}
                        </View>
                    </View>
                </View >

                {/* <View
                    style={[
                        {
                            flex: 1,
                            position: 'absolute',
                            justifyContent: 'center',
                            top: getSize.Width / 3.3,
                            backgroundColor: item.color,
                            padding: 3
                        },
                        {
                            transform: [{ rotate: '-45deg' }]
                        }
                    ]}>
                    <Text
                        style={{
                            fontSize: 9,
                            fontStyle: 'italic',
                            fontWeight: 'bold',
                            color: '#fff'
                        }}>{`NEW`}</Text>
                </View> */}

            </ImageBackground >
            <View style={{ flex: 4, }}>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalBuy}
                    onRequestClose={() => setmodalBuy(!modalBuy)}>
                    <View
                        style={{
                            // flex: 1,
                            height: "100%",
                            width: '100%',
                            top: 0,
                            position: "absolute",
                            backgroundColor: "#0000007f"
                        }}>


                        <TouchableOpacity
                            onPress={() => setmodalBuy(!modalBuy)}
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
                                source={{ uri: image }}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => setmodalBuy(!modalBuy)}
                        activeOpacity={1}
                        style={{
                            flex: 0.8,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <View
                            style={{

                                height: getSize.Height / 1.5,
                                width: getSize.Width - getSize.scale(45),

                                // backgroundColor: Colors.WHITE,

                            }}>


                            <View
                                style={{
                                    // flex: 20,
                                    width: '100%',
                                    paddingHorizontal: getSize.scale(16),
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    backgroundColor: "#ffffff",
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
                                    elevation: 5,
                                }}>

                                <View
                                    style={{
                                        // flex: 6,
                                        width: "100%",
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <View style={{
                                        width: "100%",
                                        height: 200,
                                        position: "relative",
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>

                                        <View style={{
                                            width: "100%",
                                            height: 200,
                                            position: "absolute",
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            zIndex: 10,
                                            top: 0

                                        }}>
                                            <View style={{
                                                width: "100%",
                                                flexDirection: "row",
                                                justifyContent: "space-between"
                                            }}>
                                                <View style={{
                                                    width: 50, height: 50,
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: 20,
                                                    borderColor: "#ECECEC",
                                                    borderWidth: 1,
                                                }}>
                                                    <Image
                                                        style={{ width: 20, height: 20 }}
                                                        source={{ uri: "ic_ray" }} />
                                                </View>

                                                <View style={{
                                                    width: 50, height: 50,
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: 20,
                                                    borderColor: "#ECECEC",
                                                    borderWidth: 1,
                                                }}>
                                                    <Image
                                                        style={{ width: 20, height: 20 }}
                                                        source={{ uri: "ic_ray" }} />
                                                </View>
                                            </View>
                                            <View style={{
                                                width: "100%",
                                                flexDirection: "row",
                                                justifyContent: "space-between"
                                            }}>
                                                <View style={{
                                                    width: 50, height: 50,
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: 20,
                                                    borderColor: "#ECECEC",
                                                    borderWidth: 1,
                                                }}>
                                                    <Image
                                                        style={{ width: 20, height: 20 }}
                                                        source={{ uri: "ic_ray" }} />
                                                </View>

                                                <View style={{
                                                    width: 50, height: 50,
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: 20,
                                                    borderColor: "#ECECEC",
                                                    borderWidth: 1,
                                                }}>
                                                    <Image
                                                        style={{ width: 20, height: 20 }}
                                                        source={{ uri: "ic_ray" }} />
                                                </View>
                                            </View>
                                        </View>

                                        <Image
                                            style={{
                                                height: 200,
                                                width: 200,
                                                resizeMode: 'contain'
                                            }}
                                            source={{
                                                uri: item.img
                                            }}
                                        />
                                    </View>
                                    <View style={{
                                        // flex: 3,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "100%",
                                        height: 40
                                    }}>
                                        <View
                                            style={{
                                                // flexDirection: '',
                                                // borderWidth: 1,
                                                justifyContent: 'flex-start',
                                                alignItems: 'flex-start',
                                                borderRadius: 20,

                                                // padding: getSize.scale(2),
                                                // borderColor: item.color,
                                                width: "60%",
                                            }}>

                                            <View style={{
                                                width: "100%",
                                                height: 30,
                                                flexDirection: 'row',
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "#0974F1",
                                                borderColor: "#1A5BA8",
                                                borderWidth: 1,
                                                borderRadius: 20,
                                                // position: "absolute"
                                            }}>
                                                <View
                                                    style={{
                                                        // width: getSize.scale(15),
                                                        // height: getSize.scale(15),
                                                        // borderRadius: 50,
                                                        // backgroundColor: item.color,
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                    <Text
                                                        style={{
                                                            color: '#fff',
                                                            fontWeight: 'bold',
                                                            fontSize: 15
                                                        }}>
                                                        #
                                                    </Text>
                                                </View>
                                                <Text
                                                    style={{
                                                        color: '#fff',
                                                        fontWeight: 'bold',
                                                        fontSize: 15,
                                                        marginHorizontal: getSize.scale(4)
                                                    }}>
                                                    {item.shoesId}
                                                </Text>
                                            </View>
                                        </View>

                                    </View>
                                </View>
                                <View
                                    style={{
                                        justifyContent: 'space-between',
                                        width: '100%',
                                        marginTop: getSize.scale(16),
                                        flexDirection: "row"

                                    }}>
                                    <View
                                        style={{
                                            width: "30%",
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                        }}>

                                        <Text
                                            style={{
                                                color: Colors.GREY_DARK,
                                                marginBottom: 6,
                                                fontStyle: 'italic'
                                            }}>
                                            Class
                                        </Text>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                borderColor: "#A79BBF",
                                                borderWidth: 1,
                                                borderRadius: 20,
                                                width: "100%",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                paddingVertical: 5
                                            }}>

                                            <Text
                                                style={{
                                                    fontWeight: '600',
                                                    fontStyle: 'italic',
                                                    marginHorizontal:
                                                        getSize.scale(4),
                                                    fontWeight: "bold"
                                                }}>
                                                {item.classify}
                                            </Text>
                                        </View>

                                    </View>
                                    <View
                                        style={{
                                            width: "30%",
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',

                                        }}>

                                        <Text
                                            style={{
                                                color: Colors.GREY_DARK,
                                                fontStyle: 'italic'
                                            }}>
                                            Rarity
                                        </Text>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                borderColor: "#A79BBF",
                                                borderWidth: 1,
                                                borderRadius: 20,
                                                width: "100%",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                paddingVertical: 5
                                            }}>
                                            <Text
                                                style={{
                                                    fontWeight: '600',
                                                    fontStyle: 'italic',
                                                    marginHorizontal:
                                                        getSize.scale(4),
                                                    fontWeight: "bold"
                                                }}>
                                                Common
                                            </Text>
                                        </View>

                                    </View>

                                    <View
                                        style={{
                                            width: "30%",
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',

                                        }}>

                                        <Text
                                            style={{
                                                color: Colors.GREY_DARK,
                                                fontStyle: 'italic'
                                            }}>
                                            Energy
                                        </Text>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                borderColor: "#A79BBF",
                                                borderWidth: 1,
                                                borderRadius: 20,
                                                width: "100%",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                paddingVertical: 5
                                            }}>
                                            <Text
                                                style={{
                                                    fontWeight: '600',
                                                    fontStyle: 'italic',
                                                    marginHorizontal:
                                                        getSize.scale(4),
                                                    fontWeight: "bold"
                                                }}>
                                                15/15
                                            </Text>
                                        </View>

                                    </View>

                                </View>
                                <View
                                    style={{
                                        justifyContent: 'space-between',
                                        width: '100%',
                                        marginTop: getSize.scale(8),
                                        flexDirection: "row"

                                    }}>
                                    <View
                                        style={{
                                            width: "100%",
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                        }}>

                                        <Text
                                            style={{
                                                color: Colors.GREY_DARK,

                                                fontStyle: 'italic'
                                            }}>
                                            Items
                                        </Text>
                                        <View
                                            style={{
                                                justifyContent: 'space-between',
                                                width: '100%',
                                                marginTop: getSize.scale(8),
                                                flexDirection: "row"

                                            }}>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    borderColor: "#A79BBF",
                                                    borderWidth: 1,
                                                    borderRadius: 20,
                                                    paddingHorizontal: 8,
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    paddingVertical: 5
                                                }}>

                                                <Text
                                                    style={{
                                                        fontWeight: '600',
                                                        fontStyle: 'italic',
                                                        marginHorizontal:
                                                            getSize.scale(4),
                                                        fontWeight: "bold"
                                                    }}>
                                                    Shoelace
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    borderColor: "#A79BBF",
                                                    borderWidth: 1,
                                                    borderRadius: 20,
                                                    paddingHorizontal: 8,
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    paddingVertical: 5
                                                }}>

                                                <Text
                                                    style={{
                                                        fontWeight: '600',
                                                        fontStyle: 'italic',
                                                        marginHorizontal:
                                                            getSize.scale(4),
                                                        fontWeight: "bold"
                                                    }}>
                                                    Led Light
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    borderColor: "#A79BBF",
                                                    borderWidth: 1,
                                                    borderRadius: 20,
                                                    paddingHorizontal: 8,
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    paddingVertical: 5
                                                }}>

                                                <Text
                                                    style={{
                                                        fontWeight: '600',
                                                        fontStyle: 'italic',
                                                        marginHorizontal:
                                                            getSize.scale(4),
                                                        fontWeight: "bold"
                                                    }}>
                                                    Martens
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    borderColor: "#A79BBF",
                                                    borderWidth: 1,
                                                    borderRadius: 20,
                                                    paddingHorizontal: 8,
                                                    // paddingVertical:
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    paddingVertical: 5
                                                }}>

                                                <Text
                                                    style={{
                                                        fontWeight: '600',
                                                        fontStyle: 'italic',
                                                        marginHorizontal:
                                                            getSize.scale(4),
                                                        fontWeight: "bold"
                                                    }}>
                                                    Back wire
                                                </Text>
                                            </View>
                                        </View>
                                    </View>


                                </View>
                                <View style={{
                                    width: "100%",


                                }} >
                                    <View style={{
                                        flexDirection: "row",
                                        width: "100%",
                                        justifyContent: "flex-end",
                                        alignItems: "center",
                                        marginVertical: 10,
                                    }}>
                                        <Text style={{
                                            fontSize: 20,
                                            fontWeight: "bold",
                                            marginRight: 70,
                                            color: "#2C2C2C"
                                        }}>Attributes</Text>
                                        <Text style={{
                                            fontSize: 12,
                                            fontWeight: "bold",
                                            marginRight: 10,
                                            color: "#767676"
                                        }}>Base</Text>
                                    </View>
                                    <View style={{
                                        width: "100%",

                                    }} >
                                        <ImageBackground source={{ uri: 'ic_frame' }} style={{
                                            width: "100%",
                                            height: 98,
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}>

                                            <View style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                width: "100%",
                                                marginBottom: 5,
                                                paddingHorizontal: 16
                                            }}>
                                                <Text style={{
                                                    color: "#2C2C2C",
                                                    fontStyle: "italic"
                                                }}>
                                                    Speed
                                                </Text>
                                                <Text style={{
                                                    color: "#2C2C2C",

                                                    fontWeight: "bold"
                                                }}>
                                                    0.0
                                                </Text>
                                            </View>
                                            <View style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                width: "100%",
                                                marginBottom: 5,
                                                paddingHorizontal: 16
                                            }}>
                                                <Text style={{
                                                    color: "#2C2C2C",
                                                    fontStyle: "italic"
                                                }}>
                                                    Durability
                                                </Text>
                                                <Text style={{
                                                    color: "#2C2C2C",

                                                    fontWeight: "bold"
                                                }}>
                                                    12:15:15 | 6 months
                                                </Text>
                                            </View>
                                            <View style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                width: "100%",
                                                marginBottom: 5,
                                                paddingHorizontal: 16
                                            }}>
                                                <Text style={{
                                                    color: "#2C2C2C",
                                                    fontStyle: "italic"
                                                }}>
                                                    Lucky
                                                </Text>
                                                <Text style={{
                                                    color: "#2C2C2C",

                                                    fontWeight: "bold"
                                                }}>
                                                    1.0
                                                </Text>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                </View>
                                <View style={{
                                    // flex: 1,
                                    alignItems: 'flex-end'
                                }}>
                                    <TouchableOpacity
                                        onPress={() =>
                                        {
                                            setmodalTransfer(!modalTransfer);
                                            return setmodalBuy(!modalBuy);
                                        }}
                                        style={{
                                            width: getSize.Width / 1.3,
                                            marginHorizontal: getSize.scale(16),
                                            paddingVertical: getSize.scale(6),
                                            alignItems: 'center',
                                            justifyContent: 'center',
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
                                        <Image style={{ width: "100%", height: 44 }} source={{ uri: "ic_btn_confirm_long" }} />
                                    </TouchableOpacity>
                                </View>

                            </View>

                            <View style={{
                                // flex: 2,
                                width: "100%",
                                // height: 120,
                                // backgroundColor: "#ffffff",
                                paddingVertical: 16,
                                borderRadius: 20,
                                alignItems: 'center',
                                justifyContent: 'space-between',

                                paddingHorizontal: getSize.scale(16),
                                // marginTop: 20
                            }}>

                                <View
                                    style={{
                                        // flex: 1.5,
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        flexDirection: 'row'
                                    }}>

                                    <View style={{

                                        // flex: 1
                                    }}>
                                        <TouchableOpacity
                                            onPress={() => setmodalBuy(!modalBuy)}
                                            style={{
                                                width: getSize.Width / 3,
                                                marginHorizontal: getSize.scale(16),
                                                paddingVertical: getSize.scale(6),
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                // borderRadius: 20,
                                                // borderWidth: 1,
                                                // borderBottomWidth: 3,
                                                // borderRightWidth: 3,
                                                // backgroundColor: Colors.WHITE
                                            }}>
                                            <Image style={{

                                                width: 30,
                                                height: 30,
                                                resizeMode: "contain"
                                            }} source={{ uri: "ic_close_red" }} />
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>
                </Modal>

            </View>
        </View >
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
