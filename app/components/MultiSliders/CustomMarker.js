import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

class CustomMarker extends React.Component {
    render() {
        return (
            <View style={{ borderRadius: 50, overflow: 'hidden' }}>
                <Image
                    style={styles.image}
                    // source={
                    //     this.props.pressed
                    //         ? { uri: 'https://github.com/ptomasroos/react-native-multi-slider/blob/master/examples/Basic/ruby.png?raw=true' }
                    //         : { uri: 'https://github.com/ptomasroos/react-native-multi-slider/blob/master/examples/Basic/diamond.png?raw=true' }
                    // }
                    resizeMode="contain"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        backgroundColor: '#f5a540',
        borderRadius: 50
    }
});

export default CustomMarker;
