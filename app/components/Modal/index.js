import React, { useState, useEffect } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

const Popup = ({ modalVisibles, title }) => {
    const [modalVisible, setModalVisible] = useState(modalVisibles || false);

    useEffect(() => {
        setModalVisible(modalVisibles);
    }, [modalVisibles]);

    return (
        <View
            style={{
                // flex: 1,
                marginVertical: 8,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <View
                        style={{
                            width: 200,
                            height: 200,
                            backgroundColor: 'white',
                            borderRadius: 7,
                            alignItems: 'center',
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 2
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5
                        }}>
                        <Text
                            style={{
                                marginBottom: 15,
                                textAlign: 'center'
                            }}>
                            Hello! Popup
                        </Text>
                        <Pressable
                            style={[
                                {
                                    borderRadius: 20,
                                    padding: 10,
                                    elevation: 2,
                                    marginTop: 100
                                },
                                {
                                    backgroundColor: 'violet'
                                }
                            ]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text
                                style={{
                                    color: 'black',
                                    // fontWeight: 'bold',
                                    textAlign: 'center'
                                }}>
                                Tắt Popup
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[
                    {
                        borderRadius: 7,
                        padding: 10,
                        elevation: 2
                    },
                    {
                        backgroundColor: '#F194FF'
                    }
                ]}
                onPress={() => setModalVisible(true)}>
                <Text
                    style={{
                        color: 'black',
                        // fontWeight: 'bold',
                        textAlign: 'center'
                    }}>
                    {title || 'Mở popup'}
                </Text>
            </Pressable>
        </View>
    );
};

export default Popup;
