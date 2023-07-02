import { Image, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'


type SingleTabPropTypes={
    item:{
        id:number,
        title:string,
        icon:string
    }
}

const Data = [{
    id: 1,
    title: 'Ride',
    icon: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png',

},
{
    id: 2,
    title: 'Package',
    icon: 'https://cdn.pixabay.com/photo/2020/03/31/02/32/package-4986026_1280.png',

},
{
    id: 3,
    title: 'Rentals',
    icon: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_221,h_221/v1630531077/assets/38/494083-cc23-4cf7-801c-0deed7d9ca55/original/uber-hourly.png',

},
{
    id: 4,
    title: 'Reserve',
    icon: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_896,h_504/v1631133118/assets/9f/55bb20-9288-42a6-931d-c42996c6f593/original/uber-reserve.png',

},]


const SuggestionTab = () => {

    const Tab = ({ item }:SingleTabPropTypes) => {
        return (
            <View>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: item.icon }} style={styles.imageStyle} />
                </View>
                <Text style={styles.titleText}>{item.title}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container} >
            {Data.map(i => <Tab key={i.id} item={i} />)}
        </View>
    )
}

export default memo(SuggestionTab)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12
    },
    imageContainer: {
        alignItems: 'center',
        padding: 12,
        borderWidth: 1,
        borderColor: '#d7d9d7',
        borderRadius: 12
    },
    titleText: {
        textAlign: 'center',
        marginTop: 6,
        color: '#000'
    },
    imageStyle:{
        height: 40, 
        width: 50
    }
})