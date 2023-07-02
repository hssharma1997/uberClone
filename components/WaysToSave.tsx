import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const WaysToSave = () => {
    return (
        <View>
            <Image source={{ uri: 'https://etimg.etb2bimg.com/photo/96771488.cms' }} style={styles.imageStyle} />
            <Text style={styles.headingText}>Auto rides</Text>
            <Text>Upfront fares,doorstep pickups</Text>
        </View>
    )
}

export default WaysToSave

const styles = StyleSheet.create({
    imageStyle: {
        width: 200,
        height: 200
    },
    headingText: {
        color: '#000',
        marginBottom: 2,
        fontSize: 18
    }
})