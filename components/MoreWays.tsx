import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

type cardItemPropTypes={
    item:{
        id: number,
        title: string,
        subText: string,
        url: string
    }

}

const Data = [{
    id: 1,
    title: 'Send a package',
    subText: 'On-demand delivery across town',
    url: 'https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2020/06/Screen-Shot-2020-06-10-at-12.48.20-PM-2.png'
},
{
    id: 2,
    title: 'Safety Toolkit',
    subText: 'On-trip help with safety issues',
    url: 'https://helios-i.mashable.com/imagery/articles/01M0SqqPrktRoMZIKIivURS/hero-image.fill.size_1200x1200.v1638881509.jpg'
},
{
    id: 3,
    title: 'Premier rides',
    subText: 'Top-rated drivers, newer cars',
    url: 'https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2017/12/Premier-Blog-Header-1024x480.gif'
},
]

const MoreWays = () => {
    const screenDimensions = Dimensions.get('screen')

    const Card = ({ item }:cardItemPropTypes) => {
        return (
            <View style={styles.cardContainer}>
                <View>
                    <Image source={{ uri: item.url }} style={[styles.imageStyle, { width: screenDimensions.width / 1.6 ||200 }]} />
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.titleText}>{item.title}</Text>
                        <AntDesignIcon name='arrowright' size={18} color={'#000'} />
                    </View>
                    <Text>{item.subText}</Text>
                </View>
            </View>
        )
    }
    return (
        <View >
            <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
                {Data.map(i => <Card key={i.id} item={i} />)}
            </ScrollView>
        </View>
    )
}

export default memo(MoreWays)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardContainer: {
        marginRight: 10, marginTop: 12
    },
    textContainer: {
        marginTop: 10
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleText: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 16,
        marginRight: 8
    },
    imageStyle: {
        height: 130,
        resizeMode: 'cover',
        borderRadius: 10
    }
})