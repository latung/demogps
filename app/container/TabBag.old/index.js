import React, { Component } from 'react';
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
    ScrollView
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
import ItemShoeboxes from './ItemShoeboxes';
import ItemGems from './ItemGems';
import ItemGemsUpgrade from './ItemGemsUpgrade';
import NoItem from './NoItem';
import ItemUpgrade from './ItemUpgrade';
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

const dataGems = [
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
        this.LowestPrice = React.createRef;
        this.state = {
            modalVisibles: false
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

    // FlatList
    _renderItem = ({ item, index }) => {
        const { screenState } = this.props;
        const {
            isSneakers,
            isGems,
            isSneakersMini,
            isShoeboxesMini,
            isGalleryMini,
            isUpgradeMini,
            isShowroom,
            isUpgrade
        } = screenState;
        // if (isSneakers && isSneakersMini) {
        //     return <ItemSneakers item={item} index={index} />;
        // }
        if (isSneakers && isShowroom) {
            return <ItemSneakers item={item} index={index} />;
        }
        if (isSneakers && isUpgrade) {
            return <ItemUpgrade item={item} index={index} />;
        }
        // if (isSneakers && isShoeboxesMini) {
        //     return <ItemShoeboxes item={item} index={index} />;
        // }
        if (isGems && isGalleryMini) {
            return <ItemGems item={item} index={index} />;
        }
        if (isGems && isUpgradeMini) {
            return <ItemGemsUpgrade item={item} index={index} />;
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

    render() {
        const { navigation, screenState, action } = this.props;
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

        const image =
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogMFHOw0CKtwUvuJmhgcSi18GmfqlCxUI6g&usqp=CAU';
        const imageSneakers = 'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg';

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View
                    style={{
                        flex: Platform.OS === 'android' ? 0 : 1,
                        minHeight: Platform.OS === 'android' ? getSize.scale(48) : 0,
                        marginVertical: Platform.OS === 'android' ? getSize.scale(8) : 0
                    }}>
                    <Header />
                </View>

                <View
                    style={{
                        flex: Platform.OS === 'android' ? 0 : 2 / 1.78,
                        minHeight: Platform.OS === 'android' ? getSize.scale(90) : 0,
                        marginHorizontal: 16,
                        marginBottom: 35

                        // backgroundColor: '#ccffe6',
                        // borderBottomEndRadius: 10,
                        // borderBottomLeftRadius: 10,
                        // borderTopRightRadius: 15,
                        // borderTopLeftRadius: 15,
                        // overflow: 'hidden',
                        // marginTop: 30
                    }}>
                    <TabBar navigation={navigation} />
                </View>

                <View style={{ flex: 8, paddingHorizontal: getSize.scale(8) }}>
                    {/* <NoItem /> */}
                    {isGems && isUpgradeMini ? (
                        <ItemGemsUpgrade />
                    ) : (
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
                            keyExtractor={(item, index) => index}
                            data={
                                isSneakers && isShowroom
                                    ? dataSneakers
                                    : isSneakers && isUpgrade
                                    ? dataSneakers
                                    : isGems && isGalleryMini
                                    ? dataGems
                                    : null
                            }
                            renderItem={this._renderItem}
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
    screenState: state.initReducer.screenState
});
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(_action, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TabBag);
