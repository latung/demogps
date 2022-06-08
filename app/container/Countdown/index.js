import React, { Component, createRef } from 'react';
import
    {
        View,
        Text,
        SafeAreaView,
        TouchableOpacity,
        Platform,
        Image,
        ImageBackground
    } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _action from '../../redux/action/ActionHandle';
import { stackNavigator } from '../../navigation/nameNavigator';
import { Popup, Header } from '../../components';
import { getSize, location } from '../../common';

class Countdown extends Component
{
    constructor(props)
    {
        super(props);
        this.countdown = createRef();
        this.state = {
            timer: 3
        };
    }

    componentDidMount = () =>
    {
        const { screenState } = this.props;
        if (screenState.isStateCountDown) {
            this.countDown();
            return false;
        }
    };

    componentDidUpdate = () =>
    {
        if (this.state.timer <= -1) {
            this.handleSkip();
            return false;
        }

        if (this.state.timer < 0) {
            clearTimeout(this.countdown);
            return false;
        }
    };

    countDown = () =>
    {
        this.countdown = setInterval(() =>
        {
            this.setState({ ...this.state, timer: --this.state.timer });
        }, 1000);
    };

    handleSkip = () =>
    {
        const { navigation, action, screenState } = this.props;
        clearTimeout(this.countdown);
        // Start running
        action.changeScreenState({
            ...screenState,
            isStepStart: true,
            isStepPause: false,
            isStateCountDown: false
        });
        return navigation.replace(stackNavigator.STEP);
    };

    render()
    {
        const { navigation } = this.props;

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
                    source={{ uri: 'ic_background_countdown' }}
                />
                <View
                    style={{
                        flex: 2,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                />
                <View
                    style={{
                        flex: 6,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    {this.state.timer <= 0 ? (
                        <Text
                            style={{
                                fontSize: getSize.scale(68),
                                color: 'rgba(255, 255, 255, 1)',
                                fontWeight: 'bold',
                                fontStyle: 'italic'
                            }}>
                            START
                        </Text>
                    ) : (
                        <AnimatedCircularProgress
                            size={getSize.scale(294)}
                            width={8}
                            fill={(this.state.timer * 100) / 3} //fill: 0-100 {(selector.screenState.speed * 100) / 20}
                            tintColor="rgba(255, 255, 255, 1)" // "#00e0ff"
                            rotation={0}
                            lineCap="round"
                            backgroundColor="rgba(118, 118, 118, 0.3)"
                            onAnimationComplete={() => console.log('onAnimationComplete')}>
                            {(fill) => (
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: getSize.scale(180),
                                            color: 'rgba(255, 255, 255, 1)',
                                            fontWeight: 'bold',
                                            fontStyle: 'italic'
                                        }}>
                                        {this.state.timer}
                                    </Text>
                                </View>
                            )}
                        </AnimatedCircularProgress>
                    )}
                </View>
                <View
                    style={{
                        flex: 2,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: getSize.scale(72)
                        }}>
                        <Text
                            style={{
                                fontSize: getSize.scale(14),
                                color: 'rgba(255, 255, 255, 1)',
                                textAlign: 'center'
                            }}>
                            Binanstep - The world’s leading move for community platform.
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: getSize.scale(72)
                        }}>
                        <TouchableOpacity onPress={() => this.handleSkip()}>
                            <Text
                                style={{
                                    fontSize: getSize.scale(14),
                                    color: 'rgba(255, 255, 255, 1)',
                                    textAlign: 'center',
                                    fontStyle: 'italic',
                                    fontWeight: 'bold'
                                }}>
                                SKIP
                            </Text>
                        </TouchableOpacity>
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
export default connect(mapStateToProps, mapDispatchToProps)(Countdown);
// export default Countdown;
