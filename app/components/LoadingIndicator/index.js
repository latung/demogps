import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { Colors, getSize } from '../../common'

const LoadingIndicator = () => {
    return <View style={styles.container}>
        <ActivityIndicator color={Colors.GREY_DARK} size={getSize.scale(32)} />
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default LoadingIndicator