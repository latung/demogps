import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

class ProfileDelete extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text>Hello! ProfileDelete</Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={{
                            height: 40,
                            width: 200,
                            backgroundColor: 'violet',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

export default ProfileDelete;
