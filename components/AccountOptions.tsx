import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontistoIcons from 'react-native-vector-icons/Fontisto'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome'

type ListItemPropsType = {
    item: {
        id: number,
        title: string,
        icon: any
    }

}

const Data=[
    {id:1,title:'Send a gift',icon:<MaterialCommunityIcons name='gift' size={16} color='#000'/>},
    {id:2,title:'Setting',icon:<FontistoIcons name='player-settings' size={16} color='#000'/>},
    {id:3,title:'Messages',icon:<MaterialCommunityIcons name='message' size={16} color='#000'/>},
    {id:4,title:'Earn by driving or delivering',icon:<FontAwesomeIcons name='user' size={16} color='#000'/>},
    {id:5,title:'Business hub',icon:<FontAwesomeIcons name='suitcase' size={16} color='#000'/>},
    {id:6,title:'Legal',icon:<FontAwesomeIcons name='info-circle' size={16} color='#000'/>},
]

const AccountOptions = () => {

    const ListItem=({item}:ListItemPropsType)=>{
        return (
            <View style={{marginVertical:16,flexDirection:'row',alignItems:'center'}}>
                <View style={{marginRight:24}}>
                    {item.icon}
                </View>
                <View>
                    <Text style={{fontSize:16,color:'#000',fontWeight:'bold'}}>{item.title}</Text>
                </View>
            </View>
        )
    }
  return (
    <View>
      {Data.map(i=><ListItem key={i.id} item={i}/>)}
    </View>
  )
}

export default AccountOptions

const styles = StyleSheet.create({})