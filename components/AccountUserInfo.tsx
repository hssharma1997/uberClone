import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'


const AccountUserInfo = () => {
  return (
    <View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
    <View >
        <Text style={{fontSize:30,fontWeight:'bold',color:'#000'}}>Himanshu Sharma</Text>  
     </View>
     <View >
     <FontAwesome5Icons name='user-circle' size={40} color='#000' />
     </View>
    </View>
     <View style={{flexDirection:'row',alignItems:'center',backgroundColor: '#F5F5F5',width:60,padding:6,borderRadius:12,marginTop:8}}>
        <FontAwesome5Icons name='star' size={10} color='#000' />
        <Text style={{marginLeft:6,color:'#000',fontWeight:'500'}}>4.82</Text>
        </View>
    </View>
  )
}

export default AccountUserInfo

const styles = StyleSheet.create({})