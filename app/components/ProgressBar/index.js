import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

function ProgressBar() {
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    }, []);

    return (
        <View style={{ flex: 1, width: '100%' }}>
            <View
                style={{
                    height: 20,
                    width: '100%',
                    backgroundColor: '#E0E0DE',
                    borderRadius: 50,
                    margin: 50
                }}>
                <View
                    style={{
                        height: '100%',
                        width: `${completed}%`,
                        backgroundColor: '#6A1B9A',
                        borderRadius: 20,
                        textAlign: 'right'
                    }}>
                    <Text
                        style={{
                            padding: 5,
                            color: 'white',
                            fontWeight: 'bold'
                        }}>{`${completed}%`}</Text>
                </View>
            </View>
        </View>
    );
}

export default ProgressBar;
