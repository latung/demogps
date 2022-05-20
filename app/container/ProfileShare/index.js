import React, { Component, createRef } from 'react';
import { View, SafeAreaView, ImageBackground } from 'react-native';
import ItemShare from './Item';
import { getSize, location } from '../../common';

class ProfileShare extends Component {
    constructor(props) {
        super(props);
        this.popupRef = new createRef();
        this.state = {};
    }

    render() {
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
                        height: getSize.Height,
                        position: 'absolute',
                        resizeMode: 'contain',
                        zIndex: -2,
                        top: Platform.OS === 'android' ? getSize.scale(-24) : 0
                    }}
                    source={{ uri: 'ic_background_shoping' }}
                />
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <ItemShare />
                </View>
            </SafeAreaView>
        );
    }
}

export default ProfileShare;
