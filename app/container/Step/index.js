import React, { Component } from 'react';
import { View, SafeAreaView, ImageBackground, Platform } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _action from '../../redux/action/ActionHandle';
import Item from './Item';
import ItemCongrats from './ItemCongrats';
import ItemShare from './ItemShare';
import { location, getSize, Colors } from '../../common/';

class Step extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { screenState } = this.props;

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
                {screenState.isScreenCongrats ? (
                    <ImageBackground
                        style={{
                            width: getSize.Width,
                            height: getSize.Height,
                            position: 'absolute',
                            resizeMode: 'contain',
                            zIndex: -2,
                            top: Platform.OS === 'android' ? getSize.scale(-24) : 0
                        }}
                        source={{ uri: 'ic_background_congrats' }}
                    />
                ) : screenState.isScreenShare ? (
                    <ImageBackground
                        style={{
                            width: getSize.Width,
                            height: getSize.Height,
                            position: 'absolute',
                            resizeMode: 'contain',
                            zIndex: -2,
                            top: Platform.OS === 'android' ? getSize.scale(-24) : 0
                        }}
                        source={{ uri: 'ic_background_shoping' }}
                    />
                ) : (
                    <ImageBackground
                        style={{
                            width: getSize.Width,
                            height: getSize.Height,
                            position: 'absolute',
                            resizeMode: 'contain',
                            zIndex: -2,
                            top: Platform.OS === 'android' ? getSize.scale(-24) : 0
                        }}
                        source={{ uri: 'ic_background_running' }}
                    />
                )}
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    {screenState.isScreenCongrats ? (
                        <ItemCongrats />
                    ) : screenState.isScreenShare ? (
                        <ItemShare />
                    ) : (
                        <Item />
                    )}
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
export default connect(mapStateToProps, mapDispatchToProps)(Step);
// export default Step;
