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
    Platform,
    ActivityIndicator
} from 'react-native';
import { getSize, Colors } from '../../../common';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { stackNavigator } from '../../../navigation/nameNavigator';
import * as _action from '../../../redux/action/ActionHandle';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function ItemSneakers({ item, index, buyShoe, isbuyShoe, constShoe })
{
    const navigation = useNavigation();
    const selector = useSelector((state) => ({

        market: state.initReducer.market,

    }));
    const dispatch = useDispatch();

    const [modalBuy, setmodalBuy] = useState(false);

    const [modalTransfer, setmodalTransfer] = useState(false);

    const image =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogMFHOw0CKtwUvuJmhgcSi18GmfqlCxUI6g&usqp=CAU';
    const imageSneakers = 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg';
    let price = item.price;
    price = price.toString().length < 5 ? price : (price.toString().substring(0, 4) + "...");
    let owner = item.owner;
    owner = owner.toString().length < 10 ? owner : (owner.toString().substring(0, 4) + "..." + owner.toString().substring(owner.toString().length - 4, owner.toString().length));
    useEffect(() =>
    {
        return () =>
        {
            if (selector.market.isSuccess) {
                setmodalTransfer(false);
                setmodalBuy(false)
                console.log(modalTransfer)
            }

        };



    }, [selector.market]);
    return (
        <View
            key={index}
            style={{
                width: getSize.Width / 2.09,
                height: getSize.Width / 1.5,
                paddingTop: index === 0 || index === 1 ? getSize.scale(8) : 0,
                marginVertical: getSize.scale(4),
                marginBottom: getSize.scale(32)
            }}>
            <ImageBackground
                source={{ uri: 'ic_frame_shoe1' }}
                style={{
                    width: '100%',
                    height: getSize.scale(280),
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <View
                        style={{
                            flex: 1,
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '70%',
                            position: 'relative'
                        }}>
                        <ImageBackground
                            source={{ uri: 'ic_head_frame_shoe' }}
                            style={{
                                width: '100%',
                                height: getSize.scale(30),
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: getSize.scale(-10)
                            }}>
                            <View style={{ width: '100%' }}>
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '100%'
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: getSize.scale(12),
                                            fontStyle: 'italic',
                                            fontWeight: 'bold',
                                            color: '#2C2C2C'
                                        }}>
                                        {item.readableId}
                                    </Text>
                                    <View
                                        style={{
                                            marginLeft: getSize.scale(5),
                                            flexDirection: 'row'
                                        }}>
                                        <Image
                                            source={{ uri: 'ic_ray' }}
                                            style={{
                                                width: getSize.scale(12),
                                                height: getSize.scale(12),
                                                resizeMode: 'contain'
                                            }}
                                        />
                                        <Image
                                            source={{ uri: 'ic_ray' }}
                                            style={{
                                                width: getSize.scale(12),
                                                height: getSize.scale(12),
                                                resizeMode: 'contain'
                                            }}
                                        />
                                        <Image
                                            source={{ uri: 'ic_ray' }}
                                            style={{
                                                width: getSize.scale(12),
                                                height: getSize.scale(12),
                                                resizeMode: 'contain'
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>

                        <View style={{ flex: 6 }}>
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Image
                                    source={{ uri: item.img }}
                                    style={{
                                        flex: 7,
                                        width: getSize.scale(136),
                                        height: getSize.scale(136),
                                        resizeMode: 'contain'
                                    }}
                                />
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                    <View
                                        style={{
                                            borderRadius: 50,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            backgroundColor: 'rgba(26, 91, 168, 1)',
                                            paddingHorizontal: getSize.scale(8),
                                            paddingVertical: getSize.scale(2)
                                        }}>
                                        <Text
                                            style={{
                                                color: '#fff',
                                                fontWeight: 'bold',
                                                marginLeft: getSize.scale(2),
                                                fontSize: getSize.scale(12)
                                            }}>
                                            {`# ${item.readableId}`}
                                        </Text>
                                    </View>
                                </View>

                                <View
                                    style={{
                                        flex: 1.5,
                                        width: '85%',
                                        paddingHorizontal: getSize.scale(16),
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start'
                                        }}>
                                        <Text
                                            style={{
                                                color: '#000',
                                                fontSize: getSize.scale(10)
                                            }}>
                                            Energy:
                                        </Text>
                                        <Text
                                            style={{
                                                color: '#000',
                                                fontSize: getSize.scale(10),
                                                fontWeight: 'bold'
                                            }}>
                                            {` +${item.energy}`}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-end'
                                        }}>
                                        <Text
                                            style={{
                                                color: '#000',
                                                fontSize: getSize.scale(10)
                                            }}>
                                            Lucky:
                                        </Text>
                                        <Text
                                            style={{
                                                color: '#000',
                                                fontSize: getSize.scale(10),
                                                fontWeight: 'bold'
                                            }}>
                                            {`${constShoe.LUCK[item.quality]}`}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1.5, width: '100%' }}>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                <View
                                    style={{
                                        marginRight: getSize.scale(8)
                                    }}>
                                    <Text
                                        style={{
                                            color: '#2C2C2C',
                                            fontWeight: 'bold',
                                            fontSize: getSize.scale(12)
                                        }}>
                                        {price} BUSD
                                    </Text>
                                </View>
                                <View style={{ flex: 4 }}>
                                    <Modal
                                        animationType="fade"
                                        transparent={true}
                                        visible={modalBuy}
                                        onRequestClose={() => setmodalBuy(!modalBuy)}>
                                        {isbuyShoe && <View style={{
                                            width: "100%",
                                            height: "100%",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            position: "absolute",
                                            top: 0,
                                            zIndex: 111,
                                            // backgroundColor: "#0000004e"

                                        }}>
                                            <ActivityIndicator size="large" color="#F44369" />
                                        </View>}
                                        <View
                                            style={{
                                                height: '100%',
                                                width: '100%',
                                                top: 0,
                                                position: 'absolute',
                                                backgroundColor: '#0000007f'
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
                                                        width: getSize.scale(20),
                                                        height: getSize.scale(20),
                                                        borderRadius: 50,
                                                        resizeMode: 'cover'
                                                    }}
                                                    source={{ uri: 'ic_congrats_sneakers' }}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => setmodalBuy(!modalBuy)}
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
                                                            justifyContent: 'center',
                                                            alignItems: 'center'
                                                        }}>
                                                        <Text
                                                            style={{
                                                                fontSize: 20,
                                                                fontStyle: 'italic',
                                                                fontWeight: 'bold',
                                                                textAlign: 'center'
                                                            }}>
                                                            BUY
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                            // flex: 6,
                                                            justifyContent: 'center',
                                                            alignItems: 'center'
                                                        }}>
                                                        <Image
                                                            style={{
                                                                height: getSize.scale(150),
                                                                width: getSize.scale(150),
                                                                resizeMode: 'contain'
                                                            }}
                                                            source={{ uri: item.img }}
                                                        />
                                                        <View
                                                            style={{
                                                                justifyContent: 'space-around',
                                                                flexDirection: 'row',
                                                                width: '100%',
                                                                height: getSize.scale(40)
                                                            }}>
                                                            <View
                                                                style={{
                                                                    justifyContent: 'flex-start',
                                                                    alignItems: 'flex-start',
                                                                    borderRadius: 20,
                                                                    width: '45%'
                                                                }}>
                                                                <Text
                                                                    style={{
                                                                        color: '#767676',
                                                                        fontStyle: 'italic'
                                                                    }}>
                                                                    ID
                                                                </Text>
                                                                <ImageBackground
                                                                    source={{ uri: 'ic_btn_id' }}
                                                                    style={{
                                                                        width: '100%',
                                                                        height: getSize.scale(35),
                                                                        flexDirection: 'row',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center'
                                                                    }}>
                                                                    <View
                                                                        style={{
                                                                            justifyContent:
                                                                                'center',
                                                                            alignItems: 'center'
                                                                        }}>
                                                                        <Text
                                                                            style={{
                                                                                color: '#fff',
                                                                                fontWeight: 'bold',
                                                                                fontSize:
                                                                                    getSize.scale(
                                                                                        15
                                                                                    )
                                                                            }}>
                                                                            #
                                                                        </Text>
                                                                    </View>
                                                                    <Text
                                                                        style={{
                                                                            color: '#fff',
                                                                            fontWeight: 'bold',
                                                                            fontSize:
                                                                                getSize.scale(15),
                                                                            marginHorizontal:
                                                                                getSize.scale(4)
                                                                        }}>
                                                                        {item.readableId}
                                                                    </Text>
                                                                </ImageBackground>
                                                            </View>
                                                            <View
                                                                style={{
                                                                    justifyContent: 'flex-start',
                                                                    alignItems: 'flex-start',
                                                                    width: '50%'
                                                                }}>
                                                                <Text
                                                                    style={{
                                                                        color: '#767676',
                                                                        fontStyle: 'italic'
                                                                    }}>
                                                                    Owner
                                                                </Text>
                                                                <View
                                                                    style={{
                                                                        justifyContent: 'center',
                                                                        alignItems: 'center',
                                                                        marginTop: getSize.scale(8)
                                                                    }}>
                                                                    <Text
                                                                        style={{
                                                                            color: '#2C2C2C',
                                                                            fontWeight: 'bold',
                                                                            fontSize:
                                                                                getSize.scale(15)
                                                                        }}>
                                                                        {owner}
                                                                    </Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </View>

                                                    <View
                                                        style={{
                                                            justifyContent: 'space-evenly',
                                                            alignItems: 'center',
                                                            width: '100%',
                                                            marginTop:
                                                                Platform.OS === 'android'
                                                                    ? getSize.scale(28)
                                                                    : getSize.scale(20),
                                                            borderRadius: 30,
                                                            borderWidth: 1,
                                                            borderBottomWidth: 2,
                                                            borderRightWidth: 2,
                                                            borderColor: '#F2F2F2',
                                                            height: getSize.scale(70)
                                                        }}>
                                                        <View
                                                            style={{
                                                                flexDirection: 'row',
                                                                justifyContent: 'center',
                                                                alignItems: 'center'
                                                            }}>
                                                            <Text
                                                                style={{
                                                                    fontStyle: 'italic',
                                                                    fontWeight: '500'
                                                                }}>
                                                                {item.classify}
                                                            </Text>
                                                            <Text
                                                                style={{
                                                                    fontStyle: 'italic',
                                                                    fontWeight: 'bold',
                                                                    marginHorizontal:
                                                                        getSize.scale(8)
                                                                }}>
                                                                {`${constShoe.SPEED_RANGE[item.quality].min} - ${constShoe.SPEED_RANGE[item.quality].max}`}
                                                            </Text>
                                                        </View>
                                                        <Text
                                                            style={{
                                                                fontStyle: 'italic',
                                                                fontWeight: '500'
                                                            }}>

                                                            <Text
                                                                style={{
                                                                    fontStyle: 'italic',
                                                                    fontWeight: '500',
                                                                    color: '#F44369'
                                                                }}>
                                                                {`${constShoe.KM_PER_ENERGY[item.class]}`}
                                                            </Text>

                                                        </Text>
                                                    </View>

                                                    <View
                                                        style={{
                                                            justifyContent: 'space-evenly',
                                                            width: '100%',
                                                            marginTop: getSize.scale(16)
                                                        }}>
                                                        <View
                                                            style={{
                                                                flexDirection: 'row',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center',
                                                                width: '100%'
                                                            }}>
                                                            <Text
                                                                style={{
                                                                    color: Colors.GREY_DARK,
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                Class
                                                            </Text>
                                                            <View
                                                                style={{
                                                                    flexDirection: 'row'
                                                                }}>
                                                                <Text
                                                                    style={{
                                                                        fontWeight: '600',
                                                                        fontStyle: 'italic',
                                                                        marginHorizontal:
                                                                            getSize.scale(4)
                                                                    }}>
                                                                    {item.class}
                                                                </Text>
                                                            </View>
                                                        </View>
                                                        <View
                                                            style={{
                                                                flexDirection: 'row',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center',
                                                                width: '100%'
                                                            }}>
                                                            <Text
                                                                style={{
                                                                    color: Colors.GREY_DARK,
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                Name
                                                            </Text>
                                                            <View
                                                                style={{
                                                                    flexDirection: 'row'
                                                                }}>
                                                                <Text
                                                                    style={{
                                                                        fontWeight: '600',
                                                                        fontStyle: 'italic'
                                                                    }}>
                                                                    {item.name}
                                                                </Text>
                                                            </View>
                                                        </View>

                                                        <View
                                                            style={{
                                                                flexDirection: 'row',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center',
                                                                width: '100%'
                                                            }}>
                                                            <Text
                                                                style={{
                                                                    color: Colors.GREY_DARK,
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                Speed
                                                            </Text>
                                                            <View
                                                                style={{
                                                                    flexDirection: 'row'
                                                                }}>
                                                                <Text
                                                                    style={{
                                                                        fontWeight: '600',
                                                                        fontStyle: 'italic'
                                                                    }}>
                                                                    {`${constShoe.SPEED_RANGE[item.quality].min} - ${constShoe.SPEED_RANGE[item.quality].max}`}
                                                                </Text>
                                                            </View>
                                                        </View>
                                                        <View
                                                            style={{
                                                                flexDirection: 'row',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center',
                                                                width: '100%'
                                                            }}>
                                                            <Text
                                                                style={{
                                                                    color: Colors.GREY_DARK,
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                LUCKY
                                                            </Text>
                                                            <View
                                                                style={{
                                                                    flexDirection: 'row'
                                                                }}>
                                                                <Text
                                                                    style={{
                                                                        fontWeight: '600',
                                                                        fontStyle: 'italic'
                                                                    }}>
                                                                    {`${constShoe.LUCK[item.quality]}`}
                                                                </Text>
                                                            </View>
                                                        </View>
                                                        <View
                                                            style={{
                                                                width: '100%',
                                                                height: 10
                                                            }}>
                                                            <Image
                                                                source={{ uri: 'ic_line' }}
                                                                style={{
                                                                    width: '100%',
                                                                    height: getSize.scale(5),
                                                                    resizeMode: 'contain'
                                                                }}
                                                            />
                                                        </View>
                                                    </View>
                                                </View>

                                                <View
                                                    style={{
                                                        width: '100%',
                                                        backgroundColor: '#ffffff',
                                                        paddingVertical: getSize.scale(16),
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
                                                        paddingHorizontal: getSize.scale(16),
                                                        marginTop: getSize.scale(20)
                                                    }}>
                                                    <View
                                                        style={{
                                                            justifyContent: 'space-between',
                                                            flexDirection: 'row',
                                                            alignItems: 'center',
                                                            width: '100%',
                                                            paddingVertical: getSize.scale(5)
                                                        }}>
                                                        <View
                                                            style={{
                                                                // flex: 1,
                                                                justifyContent: 'center'
                                                            }}>
                                                            <Text
                                                                style={{
                                                                    color: Colors.GREY_DARK,
                                                                    fontStyle: 'italic',
                                                                    fontWeight: '500'
                                                                }}>
                                                                Price
                                                            </Text>
                                                        </View>
                                                        <View
                                                            style={{
                                                                justifyContent: 'center',
                                                                alignItems: 'flex-end'
                                                            }}>
                                                            <Text
                                                                style={{
                                                                    fontWeight: 'bold',
                                                                    color: '#F44369',
                                                                    fontSize: getSize.scale(20)
                                                                }}>
                                                                {`${price} BUSD`}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                    <View
                                                        style={{
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            flexDirection: 'row'
                                                        }}>
                                                        <View style={{}}>
                                                            <TouchableOpacity
                                                                onPress={() =>
                                                                    setmodalBuy(!modalBuy)
                                                                }
                                                                style={{
                                                                    width: getSize.Width / 3,
                                                                    marginHorizontal:
                                                                        getSize.scale(16),
                                                                    paddingVertical:
                                                                        getSize.scale(6),
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center'
                                                                }}>
                                                                <Image
                                                                    style={{
                                                                        width: '100%',
                                                                        height: getSize.scale(37),
                                                                        resizeMode: 'contain'
                                                                    }}
                                                                    source={{
                                                                        uri: 'ic_btn_cancel_by'
                                                                    }}
                                                                />
                                                            </TouchableOpacity>
                                                        </View>
                                                        <View
                                                            style={{
                                                                alignItems: 'flex-end'
                                                            }}>
                                                            <TouchableOpacity
                                                                onPress={() =>
                                                                {
                                                                    setmodalTransfer(
                                                                        !modalTransfer
                                                                    );
                                                                    return setmodalBuy(!modalBuy);
                                                                }}
                                                                style={{
                                                                    width: getSize.Width / 3,
                                                                    marginHorizontal:
                                                                        getSize.scale(16),
                                                                    paddingVertical:
                                                                        getSize.scale(6),
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center'
                                                                }}>
                                                                <Image
                                                                    style={{
                                                                        width: '100%',
                                                                        height: getSize.scale(37)
                                                                    }}
                                                                    source={{
                                                                        uri: 'ic_btn_confirm_buy'
                                                                    }}
                                                                />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </Modal>
                                    <View
                                        style={{
                                            width: '100%',
                                            flex: 1,
                                            justifyContent: 'center'
                                        }}>
                                        <TouchableOpacity
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                            onPress={() => setmodalTransfer(!modalTransfer)}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: getSize.scale(24),
                                                    resizeMode: 'contain'
                                                }}
                                                source={{ uri: 'ic_btn_buy' }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            {/* Switch popup when not enough Sol */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalTransfer}
                onRequestClose={() => setmodalTransfer(!modalTransfer)}>
                <View
                    style={{
                        height: '100%',
                        width: '100%',
                        top: 0,
                        position: 'absolute',
                        backgroundColor: '#0000007f'
                    }}></View>
                <TouchableOpacity
                    // onPress={() => setmodalTransfer(!modalTransfer)}
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
                            {isbuyShoe && <View style={{
                                width: "100%",
                                height: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "absolute",
                                top: 0,
                                zIndex: 111,
                                // backgroundColor: "#0000004e"

                            }}>
                                <ActivityIndicator size="large" color="#F44369" />
                            </View>}
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Image
                                    style={{
                                        height: getSize.scale(158),
                                        width: getSize.scale(158),
                                        resizeMode: 'contain',
                                        marginVertical: getSize.scale(16)
                                    }}
                                    source={{
                                        uri: item.img
                                    }}
                                />
                                <View
                                    style={{
                                        justifyContent: 'space-around',
                                        flexDirection: 'row',
                                        width: '100%'
                                    }}>
                                    <View style={{ flex: 1 }}>
                                        <Text
                                            style={{
                                                color: '#767676',
                                                fontStyle: 'italic'
                                            }}>
                                            ID
                                        </Text>
                                        <View
                                            style={{
                                                justifyContent: 'center',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                borderWidth: 0.5,
                                                borderRadius: 20,
                                                marginVertical: getSize.scale(8),
                                                marginRight: getSize.scale(8),
                                                paddingVertical: getSize.scale(4),
                                                backgroundColor: 'rgba(9, 116, 241, 1)'
                                            }}>
                                            <Text
                                                style={{
                                                    color: '#fff',
                                                    fontWeight: 'bold',
                                                    fontSize: getSize.scale(15)
                                                }}>
                                                #
                                            </Text>
                                            <Text
                                                style={{
                                                    color: '#fff',
                                                    fontWeight: 'bold',
                                                    fontSize: getSize.scale(14)
                                                }}>
                                                {item.readableId}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{ flex: 1 }}>
                                        <Text
                                            style={{
                                                color: '#767676',
                                                fontStyle: 'italic'
                                            }}>
                                            Owner
                                        </Text>
                                        <View
                                            style={{
                                                justifyContent: 'center',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                marginVertical: getSize.scale(8),
                                                marginRight: getSize.scale(8),
                                                paddingVertical: getSize.scale(4)
                                            }}>
                                            <Text
                                                style={{
                                                    color: '#000',
                                                    fontWeight: 'bold',
                                                    fontSize: getSize.scale(14)
                                                }}>
                                                {owner}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View
                                style={{
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginTop: getSize.scale(8)
                                }}>
                                <View style={{ flex: 1 }}>
                                    <Text
                                        style={{
                                            color: '#767676',
                                            fontStyle: 'italic'
                                        }}>
                                        Class
                                    </Text>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            borderWidth: 0.5,
                                            borderRadius: 20,
                                            marginVertical: getSize.scale(8),
                                            marginRight: getSize.scale(8),
                                            paddingVertical: getSize.scale(4)
                                        }}>
                                        <Text
                                            style={{
                                                color: '#000',
                                                fontWeight: 'bold',
                                                fontSize: getSize.scale(14)
                                            }}>
                                            {item.class}
                                        </Text>
                                    </View>
                                </View>

                                <View style={{ flex: 1 }}>
                                    <Text
                                        style={{
                                            color: '#767676',
                                            fontStyle: 'italic'
                                        }}>
                                        Speed
                                    </Text>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            borderWidth: 0.5,
                                            borderRadius: 20,
                                            marginVertical: getSize.scale(8),
                                            marginRight: getSize.scale(8),
                                            paddingVertical: getSize.scale(4)
                                        }}>
                                        <Text
                                            style={{
                                                color: '#000',
                                                fontWeight: 'bold',
                                                fontSize: getSize.scale(14)
                                            }}>
                                            {`${constShoe.SPEED_RANGE[item.quality].min} - ${constShoe.SPEED_RANGE[item.quality].max}`}
                                        </Text>
                                    </View>
                                </View>

                                <View style={{ flex: 1 }}>
                                    <Text
                                        style={{
                                            color: '#767676',
                                            fontStyle: 'italic'
                                        }}>
                                        LUCKY
                                    </Text>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            borderWidth: 0.5,
                                            borderRadius: 20,
                                            marginVertical: getSize.scale(8),
                                            marginRight: getSize.scale(8),
                                            paddingVertical: getSize.scale(4)
                                        }}>
                                        <Text
                                            style={{
                                                color: '#000',
                                                fontWeight: 'bold',
                                                fontSize: getSize.scale(14)
                                            }}>
                                            {`${constShoe.LUCK[item.quality]}`}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: getSize.scale(16)
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}>
                                    <View style={{ flex: 1 }} />
                                    <View
                                        style={{
                                            flex: 2,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(18),
                                                fontStyle: 'italic',
                                                fontWeight: 'bold'
                                            }}>
                                            Attributes
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'flex-end'
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: getSize.scale(12),
                                                fontStyle: 'italic',
                                                fontWeight: 'bold',
                                                color: 'rgba(118, 118, 118, 1)'
                                            }}>
                                            Base
                                        </Text>
                                    </View>
                                </View>

                                <View
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        height: getSize.scale(96),
                                        padding: getSize.scale(16),
                                        borderRadius: getSize.scale(16),
                                        marginVertical: getSize.scale(8),
                                        borderWidth: 1,
                                        borderColor: 'rgba(217, 215, 222, 1)',
                                        shadowColor: '#000',
                                        shadowOffset: {
                                            width: 0,
                                            height: 0
                                        },
                                        shadowOpacity: 0.5,
                                        shadowRadius: 9,
                                        elevation: 2,
                                        overflow: 'hidden'
                                    }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            width: '100%'
                                        }}>
                                        <View
                                            style={{
                                                flex: 1,
                                                alignItems: 'flex-start',
                                                justifyContent: 'center'
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: getSize.scale(12),
                                                    fontStyle: 'italic',
                                                    color: 'rgba(44, 44, 44, 1)'
                                                }}>
                                                Speed
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                flex: 1,
                                                alignItems: 'flex-end',
                                                justifyContent: 'center'
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: getSize.scale(12),
                                                    fontWeight: 'bold',
                                                    color: 'rgba(44, 44, 44, 1)'
                                                }}>
                                                {`${constShoe.SPEED_RANGE[item.quality].min} - ${constShoe.SPEED_RANGE[item.quality].max}`}
                                            </Text>
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            width: '100%'
                                        }}>
                                        <View
                                            style={{
                                                flex: 1,
                                                alignItems: 'flex-start',
                                                justifyContent: 'center'
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: getSize.scale(12),
                                                    fontStyle: 'italic',
                                                    color: 'rgba(44, 44, 44, 1)'
                                                }}>
                                                Energy
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                flex: 1,
                                                alignItems: 'flex-end',
                                                justifyContent: 'center'
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: getSize.scale(12),
                                                    fontWeight: 'bold',
                                                    color: 'rgba(44, 44, 44, 1)'
                                                }}>
                                                {`${item.energy}`}
                                            </Text>
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            width: '100%'
                                        }}>
                                        <View
                                            style={{
                                                flex: 1,
                                                alignItems: 'flex-start',
                                                justifyContent: 'center'
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: getSize.scale(12),
                                                    fontStyle: 'italic',
                                                    color: 'rgba(44, 44, 44, 1)'
                                                }}>
                                                Lucky
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                flex: 1,
                                                alignItems: 'flex-end',
                                                justifyContent: 'center'
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: getSize.scale(12),
                                                    fontWeight: 'bold',
                                                    color: 'rgba(44, 44, 44, 1)'
                                                }}>
                                                {`${constShoe.LUCK[item.quality]}`}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View
                            style={{
                                width: '100%',
                                backgroundColor: '#ffffff',
                                paddingVertical: getSize.scale(16),
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
                                paddingHorizontal: getSize.scale(16),
                                marginTop: getSize.scale(20)
                            }}>
                            <View
                                style={{
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                    width: '100%',
                                    paddingVertical: getSize.scale(5)
                                }}>
                                <View style={{ justifyContent: 'center' }}>
                                    <Text
                                        style={{
                                            color: Colors.GREY_DARK,
                                            fontStyle: 'italic',
                                            fontWeight: '500'
                                        }}>
                                        Price
                                    </Text>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#F44369',
                                            fontSize: getSize.scale(20)
                                        }}>
                                        {`${price} BUSD`}
                                    </Text>
                                </View>

                                <View style={{ justifyContent: 'center' }}>
                                    <TouchableOpacity
                                        onPress={() => buyShoe(item._id)}>
                                        <Image
                                            style={{
                                                width: getSize.scale(119),
                                                height: getSize.scale(40),
                                                resizeMode: 'contain'
                                            }}
                                            source={{
                                                uri: 'ic_btn_buynow'
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: getSize.scale(16)
                            }}>
                            <TouchableOpacity onPress={() => setmodalTransfer(!modalTransfer)}>
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
