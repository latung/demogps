import React, { Component, createRef } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    FlatList,
    StyleSheet
} from 'react-native';
import PoupBottom from './poupBottom';

const popuList = [
    { id: 1, Name: 'solana' },
    { id: 2, Name: 'BNB Smart Chain (BEP20)' }
];
class ProfileShare extends Component {
    constructor(props) {
        super(props);
        this.popupRef = new createRef();
        this.state = {};
    }
    componentDidMount() {
        this.popupRef.Show();
    }
    onShowPoup = () => {
        this.popupRef.Show();
        // setTimeout(() =>
        // {
        //     this.popupRef.toggleBackgroundColor();
        // }, 300);
    };
    onColsePopup = () => {
        this.popupRef.Close();
    };

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView
                    style={{
                        flex: 1,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#ffffff'
                    }}>
                    <View
                        style={{
                            flex: 1,
                            width: '100%',
                            paddingHorizontal: 20,
                            // paddingTop: 20,
                            borderBottomLeftRadius: 30,
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'red',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 70,
                                height: 70,
                                borderRadius: 100
                            }}
                            onPress={this.onShowPoup}>
                            <Text>End</Text>
                        </TouchableOpacity>
                    </View>
                    <PoupBottom
                        ref={(target) => {
                            this.popupRef = target;
                        }}
                        onTouchOutside={this.onColsePopup}
                        title={''}
                        data={popuList}
                    />
                </SafeAreaView>
            </>
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
export default ProfileShare;
