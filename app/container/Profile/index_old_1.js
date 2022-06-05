import React, { Component, createRef } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Switch,
    StatusBar
} from 'react-native';
import { stackNavigator } from '../../navigation/nameNavigator';
import PoupBottom from './poupBottom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _action from '../../redux/action/ActionHandle';
import StepIndicator from 'react-native-step-indicator';

const popuList = [
    { id: 1, Name: 'solana', icon: 'blue' },
    { id: 2, Name: 'BNB Smart Chain (BEP20)', icon: '#ffee00' }
];
const labels = ['0', '5', '10', '25', '50', '75', '100'];
const thirdIndicatorStyles = {
    stepIndicatorSize: 10,
    currentStepIndicatorSize: 10,
    separatorStrokeWidth: 4,
    currentStepStrokeWidth: 1,
    stepStrokeCurrentColor: '#64ffcb',
    stepStrokeWidth: 1,
    stepStrokeFinishedColor: '#64ffcb',
    stepStrokeUnFinishedColor: '#dedede',
    separatorFinishedColor: '#64ffcb',
    separatorUnFinishedColor: '#dedede',
    stepIndicatorFinishedColor: '#64ffcb',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#64ffcb',
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: 'transparent',
    stepIndicatorLabelFinishedColor: 'transparent',
    stepIndicatorLabelUnFinishedColor: 'transparent',
    labelColor: '#999999',
    labelSize: 10,
    currentStepLabelColor: '#7eaec4'
};

class Profile extends Component {
    constructor(props) {
        super(props);
        this.popupRef = new createRef();
        this.state = {
            isEnabled: true,
            currentPosition: 0,
            currentPage: 0,
            mutichain: 'Solana'
        };
    }

    setMutiChain = (value) => {
        this.setState(
            (state) => {
                return {
                    mutichain: value
                };
            },
            () => {
                this.onColsePopup();
            }
        );
    };
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
    toggleSwitch = () => {
        this.setState((state) => {
            return {
                isEnabled: !state.isEnabled
            };
        });
    };

    renderLabel = ({ position, label, currentPosition }) => {
        return (
            <Text
                style={{
                    color: '#999999',
                    fontSize: 10
                    // paddingTop: 10
                }}>
                {label + '%'}
            </Text>
        );
    };

    onStepPress = (position) => {
        this.setState((state) => {
            return {
                currentPage: position
            };
        });
    };
    render() {
        const { isEnabled, currentPage, currentPosition } = this.state;
        const { navigation, action } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View
                    style={{
                        flex: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%'
                    }}>
                    <View
                        style={{
                            flex: 0.1,
                            backgroundColor: '#d9fff2',
                            width: '100%',
                            paddingHorizontal: 20,
                            paddingTop: 10
                            // paddingTop: 20,
                        }}>
                        <View
                            style={{
                                width: '90%',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                flex: 0.8,
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

                                    borderRadius: 100,
                                    backgroundColor: '#64ffcb'
                                }}
                                onPress={() => this.props.navigation.goBack()}>
                                <Text style={{}}>Back</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <ScrollView
                        style={{
                            width: '100%',
                            flex: 5
                            // height: "80%",
                        }}>
                        <View
                            style={{
                                width: '100%',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                paddingHorizontal: 20,
                                flexDirection: 'row',
                                borderBottomLeftRadius: 30,
                                backgroundColor: '#d9fff2',
                                flex: 1,
                                paddingVertical: 20,
                                paddingBottom: 30
                            }}>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                                onPress={() => navigation.navigate(stackNavigator.PROFILE_DETAILS)}>
                                <View style={{}}>
                                    <View
                                        style={{
                                            borderRadius: 100,
                                            borderWidth: 1,
                                            borderColor: '#000000',
                                            borderRightWidth: 3,
                                            height: 55,
                                            width: 60,
                                            backgroundColor: '#dce7f4',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                        <Text>User</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        width: '65%'
                                    }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text
                                            style={{
                                                fontWeight: 'bold',
                                                fontSize: 25,
                                                fontStyle: 'italic'
                                            }}>
                                            runner
                                        </Text>
                                        <View
                                            style={{
                                                width: 20,
                                                height: 20,
                                                backgroundColor: '#efd409',
                                                marginLeft: 10
                                            }}></View>
                                    </View>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#9b9b9b',
                                            fontWeight: '100',
                                            fontStyle: 'italic'
                                        }}>
                                        datdoan19952010@gmail.com
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        height: 55,
                                        width: 50,
                                        justifyContent: 'center',
                                        alignItems: 'flex-end'
                                    }}>
                                    <Text style={{ fontSize: 30, color: '#676767' }}> &#707;</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                width: '100%',
                                paddingHorizontal: 20,
                                flex: 5
                            }}>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                                onPress={() =>
                                    navigation.navigate(stackNavigator.PROFILE_ACTIVATIONCODE)
                                }>
                                <View>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#9b9b9b',
                                            fontStyle: 'italic'
                                        }}>
                                        Activation code
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        height: 55,
                                        width: 60,
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#000000',
                                            fontStyle: 'italic'
                                        }}>
                                        {' '}
                                        0
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 30,
                                            color: '#9b9b9b',
                                            marginTop: 5
                                        }}>
                                        {' '}
                                        &#707;
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                                onPress={() =>
                                    navigation.navigate(stackNavigator.PROFILE_RUNNING_RECORD)
                                }>
                                <View>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#9b9b9b',
                                            fontStyle: 'italic'
                                        }}>
                                        Total Distance
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        height: 55,
                                        width: 60,
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#000000',
                                            fontStyle: 'italic'
                                        }}>
                                        {' '}
                                        0Km
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 30,
                                            color: '#9b9b9b',
                                            marginTop: 5
                                        }}>
                                        {' '}
                                        &#707;
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                <View>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#9b9b9b',
                                            fontStyle: 'italic'
                                        }}>
                                        Credit
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        height: 55,
                                        width: 60,
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#64ffcb',
                                            fontSize: 25
                                        }}>
                                        {' '}
                                        &#9733;
                                    </Text>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#64ffcb',
                                            fontSize: 25
                                        }}>
                                        {' '}
                                        &#9733;
                                    </Text>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#64ffcb',
                                            fontSize: 25
                                        }}>
                                        {' '}
                                        &#9733;
                                    </Text>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#64ffcb',
                                            fontSize: 25
                                        }}>
                                        {' '}
                                        &#9734;
                                    </Text>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#64ffcb',
                                            fontSize: 25
                                        }}>
                                        {' '}
                                        &#9734;
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                <View>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#9b9b9b',
                                            fontStyle: 'italic'
                                        }}>
                                        Energy
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        height: 55,
                                        width: 60,
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#000000',
                                            borderRadius: 10,
                                            width: 250,
                                            borderWidth: 1,
                                            paddingHorizontal: 10,
                                            fontStyle: 'italic'
                                        }}>
                                        {' '}
                                        0.0/0.0
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                                onPress={this.onShowPoup}>
                                <View>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#9b9b9b',
                                            fontStyle: 'italic'
                                        }}>
                                        Multi-chain-Switch
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        height: 55,
                                        width: 60,
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#000000',
                                            fontStyle: 'italic'
                                        }}>
                                        {' '}
                                        {this.state.mutichain}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 30,
                                            color: '#9b9b9b',
                                            marginTop: 5
                                        }}>
                                        {' '}
                                        &#707;
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                <View>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#9b9b9b',
                                            fontStyle: 'italic'
                                        }}>
                                        Daily donation
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        height: 55,
                                        width: '60%',
                                        // flexDirection: "row",
                                        flex: 1,
                                        justifyContent: 'flex-end',
                                        // alignItems: "center",
                                        marginRight: -15
                                        // backgroundColor: "red"
                                    }}>
                                    <StepIndicator
                                        stepCount={7}
                                        customStyles={thirdIndicatorStyles}
                                        currentPosition={currentPage}
                                        onPress={this.onStepPress}
                                        labels={labels}
                                        renderLabel={this.renderLabel}
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                <View>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#9b9b9b',
                                            fontStyle: 'italic'
                                        }}>
                                        Sound
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        height: 55,
                                        width: 60,
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center'
                                    }}>
                                    <Switch
                                        style={{ height: 20 }}
                                        trackColor={{ false: '#767577', true: '#64feca' }}
                                        thumbColor={'#f4f3f4'}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={this.toggleSwitch}
                                        value={isEnabled}
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                <View>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            fontStyle: 'italic',
                                            color: '#9b9b9b'
                                        }}>
                                        Version
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        height: 55,
                                        width: 60,
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            color: '#000000',
                                            fontStyle: 'italic',
                                            fontWeight: 'bold'
                                        }}>
                                        0.6.0
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                flex: 1
                            }}>
                            <TouchableOpacity
                                onPress={() => action.login(false)}
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingVertical: 12,
                                    paddingHorizontal: 3,
                                    borderRadius: 50,
                                    width: 150,

                                    backgroundColor: '#cdffee'
                                }}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        color: '#333333',
                                        fontStyle: 'italic',
                                        fontSize: 20
                                    }}>
                                    Logout
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                flex: 1
                            }}></View>
                    </ScrollView>
                </View>
                <PoupBottom
                    ref={(target) => {
                        this.popupRef = target;
                    }}
                    onTouchOutside={this.onColsePopup}
                    title={'MUTI-CHAIN SWITCH'}
                    data={popuList}
                    setMutiChain={this.setMutiChain}
                />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => ({
    // isSignIn: state.initReducer.isSignIn
});
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(_action, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
// export default Profile;
