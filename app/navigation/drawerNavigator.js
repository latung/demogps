import React, { PureComponent, Component } from 'react';
import
{
    View,
    Image,
    Text,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import
{
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as _action from '../redux/action/ActionHandle';
import { tabNavigator, stackNavigator } from './nameNavigator';
import BottomTabNavigator from './bottomTabNavigator';
import { getSize, Colors } from '../common';
import { MultiSliders } from '../components';

class MyDrawer extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isEfficiency: false,
            isLuck: false,
            isConfort: false,
            isResilience: false
        };
    }

    render()
    {
        const image =
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogMFHOw0CKtwUvuJmhgcSi18GmfqlCxUI6g&usqp=CAU';

        const { isEfficiency, isLuck, isConfort, isResilience } = this.state;
        const { action, screenState } = this.props;
        const { isSneakers, isGems, isBadges } = screenState;

        return (
            <SafeAreaView
                style={{ flex: 1, marginHorizontal: getSize.scale(16) }}>
                <View
                    style={{
                        flex: 1 / 2,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        marginTop: getSize.scale(12)
                    }}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center'
                        }}>
                        <Text
                            style={{
                                color: '#000',
                                fontSize: 14,
                                fontStyle: 'italic'
                            }}>
                            Filter(0)
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.dispatch(
                                DrawerActions.closeDrawer()
                            )
                        }
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'flex-end'
                        }}>
                        <Text
                            style={{
                                color: Colors.ORANGE,
                                fontSize: 14,
                                fontStyle: 'italic'
                            }}>
                            Clear filter
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 8 }}>
                    <View style={{ flex: 1 }}>
                        <Text
                            style={{
                                color: '#707070',
                                fontStyle: 'italic',
                                fontSize: 14
                            }}>
                            Type
                        </Text>
                        <View
                            style={{
                                flex: 1,
                                marginVertical: getSize.scale(8)
                            }}>
                            <View
                                style={{
                                    flex: 1 / 2,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                <TouchableOpacity
                                    onPress={() =>
                                        this.setState({
                                            ...this.state,
                                            isEfficiency:
                                                !this.state.isEfficiency
                                        })
                                    }
                                    style={[
                                        !isEfficiency
                                            ? {
                                                borderStyle: 'dashed',
                                                borderColor: '#000',
                                                backgroundColor: 'white',
                                                borderColor: Colors.ORANGE
                                            }
                                            : {
                                                borderBottomWidth: 3,
                                                borderRightWidth: 3,
                                                backgroundColor: 'green',
                                                borderColor: Colors.BLACK
                                            },
                                        {
                                            flex: 1,
                                            marginHorizontal: getSize.scale(16),
                                            padding: getSize.scale(4),
                                            alignItems: 'center',
                                            borderRadius: 20,
                                            borderWidth: 1
                                        }
                                    ]}>
                                    <Text
                                        style={{
                                            fontSize: 10,
                                            fontStyle: 'italic',
                                            fontWeight: 'bold',
                                            color: isEfficiency
                                                ? Colors.BLACK
                                                : Colors.ORANGE
                                        }}>
                                        Efficiency
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() =>
                                        this.setState({
                                            ...this.state,
                                            isLuck: !this.state.isLuck
                                        })
                                    }
                                    style={[
                                        !isLuck
                                            ? {
                                                borderStyle: 'dashed',
                                                borderColor: '#000',
                                                backgroundColor: 'white',
                                                borderColor: Colors.GREEN
                                            }
                                            : {
                                                borderBottomWidth: 3,
                                                borderRightWidth: 3,
                                                backgroundColor: 'green',
                                                borderColor: Colors.BLACK
                                            },
                                        {
                                            flex: 1,
                                            marginHorizontal: getSize.scale(16),
                                            padding: getSize.scale(4),
                                            alignItems: 'center',
                                            borderRadius: 20,
                                            borderWidth: 1
                                        }
                                    ]}>
                                    <Text
                                        style={{
                                            fontSize: 10,
                                            fontStyle: 'italic',
                                            fontWeight: 'bold',
                                            color: isLuck
                                                ? Colors.BLACK
                                                : Colors.GREEN
                                        }}>
                                        Lucky
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View
                                style={{
                                    flex: 1 / 2,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                <TouchableOpacity
                                    onPress={() =>
                                        this.setState({
                                            ...this.state,
                                            isConfort: !this.state.isConfort
                                        })
                                    }
                                    style={[
                                        !isConfort
                                            ? {
                                                borderStyle: 'dashed',
                                                borderColor: '#000',
                                                backgroundColor: 'white',
                                                borderColor: Colors.BLUE_F3
                                            }
                                            : {
                                                borderBottomWidth: 3,
                                                borderRightWidth: 3,
                                                backgroundColor: 'green',
                                                borderColor: Colors.BLACK
                                            },
                                        {
                                            flex: 1,
                                            marginHorizontal: getSize.scale(16),
                                            padding: getSize.scale(4),
                                            alignItems: 'center',
                                            borderRadius: 20,
                                            borderWidth: 1
                                        }
                                    ]}>
                                    <Text
                                        style={{
                                            fontSize: 10,
                                            fontStyle: 'italic',
                                            fontWeight: 'bold',
                                            color: isConfort
                                                ? Colors.BLACK
                                                : Colors.BLUE_F3
                                        }}>
                                        Confort
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() =>
                                        this.setState({
                                            ...this.state,
                                            isResilience:
                                                !this.state.isResilience
                                        })
                                    }
                                    style={[
                                        !isResilience
                                            ? {
                                                borderStyle: 'dashed',
                                                borderColor: '#000',
                                                backgroundColor: 'white',
                                                borderColor: 'violet'
                                            }
                                            : {
                                                borderBottomWidth: 3,
                                                borderRightWidth: 3,
                                                backgroundColor: 'green',
                                                borderColor: Colors.BLACK
                                            },
                                        {
                                            flex: 1,
                                            marginHorizontal: getSize.scale(16),
                                            padding: getSize.scale(4),
                                            alignItems: 'center',
                                            borderRadius: 20,
                                            borderWidth: 1
                                        }
                                    ]}>
                                    <Text
                                        style={{
                                            fontSize: 10,
                                            fontStyle: 'italic',
                                            fontWeight: 'bold',
                                            color: isResilience
                                                ? Colors.BLACK
                                                : 'violet'
                                        }}>
                                        Resilience
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {isGems ? (
                            <View style={{ flex: 8 }}>
                                <Text
                                    style={{
                                        color: '#707070',
                                        fontStyle: 'italic',
                                        fontSize: 14
                                    }}>
                                    Quality
                                </Text>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flex: 1 }}>
                                        <MultiSliders />
                                    </View>
                                    <View style={{ flex: 8 }} />
                                </View>
                            </View>
                        ) : (
                            <View style={{ flex: 8 }} />
                        )}
                    </View>
                </View>

                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.dispatch(
                                DrawerActions.closeDrawer()
                            )
                        }
                        style={{
                            flex: 1 / 4,
                            width: getSize.Width / 3,
                            marginHorizontal: getSize.scale(16),
                            padding: getSize.scale(4),
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 20,
                            borderWidth: 1,
                            borderBottomWidth: 3,
                            borderRightWidth: 3,
                            backgroundColor: Colors.GREEN
                        }}>
                        <Text
                            style={{
                                fontSize: 10,
                                fontStyle: 'italic',
                                fontWeight: 'bold',
                                color: '#000'
                            }}>
                            CONFIRM
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const Drawer = createDrawerNavigator();

class DrawerNavigator extends PureComponent
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        const { action, screenState } = this.props;
        return (
            <Drawer.Navigator
                drawerContent={(props) => (
                    <MyDrawer
                        {...props}
                        action={action}
                        screenState={screenState}
                    />
                )}
                screenOptions={{
                    drawerPosition: 'right',
                    swipeEnabled: false,
                    headerShown: false
                }}>
                <Drawer.Screen
                    name={stackNavigator.BOTTOM_TAB}
                    component={BottomTabNavigator}
                // options={{ headerShown: false }}
                />
            </Drawer.Navigator>
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

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigator);
