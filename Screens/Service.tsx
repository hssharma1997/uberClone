import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Heading } from '../components/ThemedComponents'

type TabPropsType={
  item:{
    id:number,
    title:string,
    icon:string
  }
}

const BigTabData = [
  {
    id: 1,
    title: 'Ride',
    icon: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png'
  },
  {
    id: 2,
    title: 'Package',
    icon: 'https://cdn.pixabay.com/photo/2020/03/31/02/32/package-4986026_1280.png',
  }]

const SmallTabData = [
  {
    id: 1,
    title: 'Rentals',
    icon: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_221,h_221/v1630531077/assets/38/494083-cc23-4cf7-801c-0deed7d9ca55/original/uber-hourly.png',

  },
  {
    id: 2,
    title: 'Reserve',
    icon: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_896,h_504/v1631133118/assets/9f/55bb20-9288-42a6-931d-c42996c6f593/original/uber-reserve.png',

  },
  {
    id: 3,
    title: 'Intercity',
    icon: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png',

  },
  {
    id: 4,
    title: 'Travel',
    icon: 'https://cdn.pixabay.com/photo/2020/03/31/02/32/package-4986026_1280.png',

  },

]

const Service = () => {

  const BigTabs = ({ item }:TabPropsType) => {
    return (
      <View style={{ width: '48%', borderColor: '#d7d9d7',flexDirection:'row',justifyContent:'space-between',borderWidth:1,borderRadius:12,padding:12 }}>
        <View style={{alignSelf:'flex-end'}}>
          <Text style={{color:'#000'}}>{item.title}</Text>
        </View>
        <View>
          <Image source={{ uri: item.icon }} style={{ width: 60, height: 60,resizeMode:'contain' }} />
        </View>

      </View>)
  }

  const SmallTabs = ({ item }:TabPropsType) => {
    
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
    <View style={styles.container}>
      <Heading title='Services' size={34} />
      <View style={styles.section}>
      <Heading title='Go anywhere, get anything' size={20} />
      </View>
      <View style={styles.section}>
        {BigTabData.map(i => <BigTabs key={i.id} item={i} />)}
      </View>
      <View style={styles.section}>
        {SmallTabData.map(i => <SmallTabs key={i.id} item={i} />)}
      </View>
    </View>
  )
}

export default Service

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  section:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:16
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