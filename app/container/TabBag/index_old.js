import React, { Component, createRef } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    Image,
    Modal,
    FlatList,
    RefreshControl,
    ActivityIndicator,
    ScrollView,
    ImageBackground,
    Alert
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as _action from '../../redux/action/ActionHandle';
import { stackNavigator, tabNavigator } from '../../navigation/nameNavigator';
import { Popup, NoData, Header } from '../../components';
import { getSize, Colors } from '../../common';
import TabBar from './TabBar';
import ItemSneakers from './ItemSneakers';
import ItemGems from './ItemGems';
// import ItemShoeBoxes from './ItemShoeBoxes';
import ItemPromos from './ItemPromos';
import ItemUpgrade from './ItemUpgrade';
import Head from "./../../components/head/index";

import * as ApiServices from "./../../service/index";
const dataSneakers = [
    {
        shoesId: 316942392,
        classify: 'Runner',
        mint: 1,
        level: 1,
        sol: 10000,
        img: 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg',
        color: '#33ff99'
    },
    {
        shoesId: 316942392,
        classify: 'Jogger',
        mint: 2,
        level: 2,
        sol: 10000,
        img: 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg',
        color: 'grey'
    },
    {
        shoesId: 316942392,
        classify: 'Walker',
        mint: 0,
        level: 3,
        sol: 10000,
        img: 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg',
        color: 'blue'
    },
    {
        shoesId: 316942392,
        classify: 'Runner',
        mint: 1,
        level: 4,
        sol: 10000,
        img: 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg',
        color: 'orange'
    },
    {
        shoesId: 316942392,
        classify: 'Jogger',
        mint: 2,
        level: 5,
        sol: 10000,
        img: 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg',
        color: '#33ff99'
    },
    {
        shoesId: 316942392,
        classify: 'Runner',
        mint: 1,
        level: 4,
        sol: 10000,
        img: 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg',
        color: 'orange'
    },
    {
        shoesId: 316942392,
        classify: 'Jogger',
        mint: 2,
        level: 5,
        sol: 10000,
        img: 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg',
        color: '#33ff99'
    },
    {
        shoesId: 316942392,
        classify: 'Runner',
        mint: 1,
        level: 4,
        sol: 10000,
        img: 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg',
        color: 'orange'
    },
    {
        shoesId: 316942392,
        classify: 'Jogger',
        mint: 2,
        level: 5,
        sol: 10000,
        img: 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg',
        color: '#33ff99'
    }
];

const dataPromos = [
    {
        gemsId: 316942392,
        mint: 1,
        level: 1,
        sol: 10000,
        img: 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg',
        color: '#33ff99'
    },
    {
        gemsId: 316942392,
        mint: 2,
        level: 2,
        sol: 10000,
        img: 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg',
        color: 'grey'
    },
    {
        gemsId: 316942392,
        mint: 2,
        level: 3,
        sol: 10000,
        img: 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg',
        color: 'blue'
    },
    {
        gemsId: 316942392,
        mint: 1,
        level: 4,
        sol: 10000,
        img: 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg',
        color: 'orange'
    },
    {
        gemsId: 316942392,
        mint: 2,
        level: 5,
        sol: 10000,
        img: 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg',
        color: '#33ff99'
    },
    {
        gemsId: 316942392,
        mint: 2,
        level: 2,
        sol: 10000,
        img: 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg',
        color: 'grey'
    },
    {
        gemsId: 316942392,
        mint: 2,
        level: 3,
        sol: 10000,
        img: 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg',
        color: 'blue'
    },
    {
        gemsId: 316942392,
        mint: 1,
        level: 4,
        sol: 10000,
        img: 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg',
        color: 'orange'
    },
    {
        gemsId: 316942392,
        mint: 2,
        level: 5,
        sol: 10000,
        img: 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg',
        color: '#33ff99'
    }
];
class TabBag extends Component {
    constructor(props) {
        super(props);
        this.LowestPrice = new createRef();
        this.ModalInfoRef = new createRef();
        this.ModalBuyRef = new createRef();
        this.state = {
            modalVisibles: false,
            price: "0",
            dataSneakers: "",
            isPutShoe: false,
            isshoesIdWear: false,
            refreshing: false,
            // modalTransfer: false,
            // modalBuy: false
        };
    }

    measureLowestPrice = () => {
        this.LowestPrice.measure(this.logLowestPriceLayout);
    };
    logLowestPriceLayout = (ox, oy, width, height, px, py) => {
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
    // setmodalTransfer = (modalTransfer)=>{
    //     this.setState(state=>{
    //         return{
    //             modalTransfer: !modalTransfer
    //         }
    //     })
    // }
    //   setmodalTransfer = (modalTransfer)=>{
    //     this.setState(state=>{
    //         return{
    //             modalTransfer: !modalTransfer
    //         }
    //     })
    // }
    // FlatList
    _renderItem = ({ item, index }) => {
        const { screenState, getConstShoe } = this.props;
        const { isSneakers, isGems, isShoeBoxes, isPromos, isGalleryMini, isUpgradeMini } =
            screenState;
        const constShoe = getConstShoe.data ? getConstShoe.data : [];
        if (isSneakers && isGalleryMini) {
            return <ItemSneakers item={item}
                index={index}
                price={this.state.price}
                putShoe={this.putShoe}
                onChangeText={this.onChangeText}
                isPutShoe={this.state.isPutShoe}
                shoesIdWear={this.shoesIdWear}
                isshoesIdWear={this.state.isshoesIdWear}
                constShoe={constShoe}
                ref={this.ModalInfoRef}
            />;
        }
        if (isSneakers && isUpgradeMini) {
            return <ItemUpgrade item={item} index={index} />;
        }
        if (isGems) {
            return <ItemGems item={item} index={index} />;
        }
        // if (isShoeBoxes) {
        //     return <ItemShoeBoxes item={item} index={index} />;
        // }
        if (isPromos) {
            return <ItemPromos item={item} index={index} />;
        }
        return null;
    };

    renderFooter = () => {
        const { isFetching } = this.props;
        if (isFetching) {
            return (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator
                        color={Colors.BLUE}
                        size="large"
                        style={{ paddingVertical: 20 }}
                    />
                </View>
            );
        }
    };

    renderEmptyList = () => {
        const { isFetching, isFull } = this.props;
        if (!isFetching && !isFull) {
            return <NoData />;
        }
    };
    onChangeText = (name, itemValue) => {
        this.setState(state => {
            return {
                [name]: itemValue
            }
        })
    }
    colsePopupmodalTransfer = () => {

        this.ModalInfoRef.current.ClosemodalTransfer();
    }
    colsePopupmodalBuy = () => {
        this.ModalInfoRef.current.ClosemodalmodalBuy();
    }
    componentDidMount() {

        // this.LoadData();



    }

    LoadData = () => {
        const { action } = this.props;

        ApiServices.shoes().then(res => {
            console.log(res);
            if (res.code === 200) {
                action.shoes(res.data);
                this.setShoeCurrentWear(res.data, action)
            }
        }).catch(err => {

        })


    }
    shoesIdWear = (id) => {


        const { action } = this.props;
        this.setState(state => {
            return {
                isshoesIdWear: true,
            }
        }, () => {
            ApiServices.shoesIdWear({ _id: id }).then(res => {
                if (res.code === 200) {
                    alert(res.message);
                    action.shoesIdWear(res.data);
                    this.LoadData();
                    this.setState(state => {
                        return {
                            isshoesIdWear: false
                        }
                    }, () => {
                        // this.setmodalBuy(false);
                        // this.setmodalTransfer(false);
                    });
                }
                if (res.code === 404) {
                    alert(res.message)
                }
            }).catch(err => {
                alert("Fail!");
                this.setState(state => {
                    return {
                        isshoesIdWear: false
                    }
                });
            })

        })
    }
    putShoe = (isSelling, id) => {


        const { action } = this.props;
        const { price } = this.state;
        let pr = isSelling ? price : 0;
        this.setState(state => {
            return {
                isPutShoe: true,
            }
        }, () => {
            ApiServices.putShoesId({ price: pr, isSelling: isSelling, _id: id }).then(res => {
                console.log(res);
                if (res.code === 200) {
                    alert("Successfully!");
                    action.putShoesId(res.data);
                    this.LoadData();
                    this.setState(state => {
                        return {
                            isPutShoe: false
                        }
                    }, () => {
                        // this.setmodalBuy(false);
                        // this.setmodalTransfer(false);
                    });
                }
                if (res.code === 404) {
                    alert(res.message)
                }
            }).catch(err => {
                alert("Fail!");
                this.setState(state => {
                    return {
                        isPutShoe: false
                    }
                });
            })


        })

    }

    setShoeCurrentWear = (shoes, action) => {
        let data = shoes.data;
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if (element.isWearing) {

                // shoeResutl = element;

                action.shoeCurrentWear(element);

            }

        }
    }


    onRefresh = () => {
        const { screenState } = this.props;
        const {
            isSneakers,
            isGems,
            isBadges,
            isShoeBoxes,
            isPromos,
            isShowroom,
            isUpgradeMini,
            isGalleryMini
        } = screenState;
        this.setState(state => {
            return {
                refreshing: true
            }
        }, () => {
            this.LoadData();
            this.setState(state => {
                return {
                    refreshing: false
                }
            });

        })

    }
    render() {
        const { navigation, screenState, action, shoes, getShoesId, userId } = this.props;
        const {
            isSneakers,
            isGems,
            isBadges,
            isShoeBoxes,
            isPromos,
            isShowroom,
            isUpgradeMini,
            isGalleryMini
        } = screenState;

        const image =
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogMFHOw0CKtwUvuJmhgcSi18GmfqlCxUI6g&usqp=CAU';
        const imageSneakers = 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg';
        const dataSneakers = shoes.data ? shoes.data : [];

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground
                    style={{
                        width: getSize.Width,
                        height: getSize.Height,
                        position: 'absolute',
                        resizeMode: 'contain',
                        zIndex: -2
                    }}
                    source={{ uri: 'ic_background_shoping' }}
                />

                <View
                    style={{
                        flex: Platform.OS === 'android' ? 0 : 1,
                        minHeight: Platform.OS === 'android' ? getSize.scale(48) : 0,
                        marginVertical: Platform.OS === 'android' ? getSize.scale(8) : 0
                    }}>
                    <Head navigation={navigation} />
                </View>
                <View
                    style={{
                        flex:
                            Platform.OS === 'android'
                                ? 0
                                : !screenState.isSneakers
                                    ? 1 / 1.78
                                    : 2 / 1.78,
                        minHeight:
                            Platform.OS === 'android' && screenState.isSneakers
                                ? getSize.scale(90)
                                : Platform.OS === 'android' && !screenState.isSneakers
                                    ? getSize.scale(61)
                                    : 0,
                        marginHorizontal: getSize.scale(16),
                        justifyContent: 'center'
                    }}>
                    <TabBar navigation={navigation} />
                </View>

                <View style={{ flex: 8, paddingHorizontal: getSize.scale(8) }}>
                    {isSneakers && isUpgradeMini ? (
                        <ItemUpgrade />
                    ) : (
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
                            keyExtractor={(item, index) => index}
                            data={
                                isSneakers && isGalleryMini
                                    ? dataSneakers
                                    : isGems
                                        ? dataSneakers
                                        : isShoeBoxes
                                            ? dataSneakers
                                            : isPromos
                                                ? dataPromos
                                                : []
                            }
                            renderItem={this._renderItem}
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh}
                            ListEmptyComponent={() => (
                                <View
                                    style={{
                                        width: getSize.Width,
                                        height: getSize.Width,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <Image
                                        source={{ uri: 'ic_shoe_das' }}
                                        style={{
                                            width: getSize.scale(142),
                                            height: getSize.scale(142)
                                        }}
                                    />
                                    <Text
                                        style={{
                                            color: 'rgba(167, 155, 191, 1)',
                                            fontStyle: 'italic',
                                            marginTop: getSize.scale(32)
                                        }}>
                                        There is no item
                                    </Text>
                                </View>
                            )}

                        // refreshControl={<RefreshControl onRefresh={this.handleReload} refreshing={false} />}
                        // ListEmptyComponent={this.renderEmptyList()}
                        // ListFooterComponent={this.renderFooter()}
                        // onEndReached={this.handleLoadMore}
                        // onEndReachedThreshold={0.2}
                        />
                    )}
                </View>

                {/* <View
                    style={{
                        flex: 8,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <View
                        style={{
                            flex: 6,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text>Hello! TabBag</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            style={{
                                height: 40,
                                width: 200,
                                backgroundColor: 'violet',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 16
                            }}>
                            <Text>Back Home</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                            style={{
                                height: 40,
                                width: 200,
                                backgroundColor: 'violet',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 16
                            }}>
                            <Text>Filter</Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            flex: 4,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Popup modalVisibles={this.state.modalVisibles} title="Popup Mua giày" />
                        <Popup modalVisibles={this.state.modalVisibles} title="Popup Xác nhận mua giày" />
                    </View>
                </View> */}
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => ({
    initReducer: state.initReducer,
    screenState: state.initReducer.screenState,
    shoes: state.initReducer.shoes,
    putShoesId: state.initReducer.putShoesId,
    shoesIdWear: state.initReducer.shoesIdWear,
    getConstShoe: state.initReducer.getConstShoe,
    userId: state.initReducer.userId,
});
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(_action, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TabBag);
