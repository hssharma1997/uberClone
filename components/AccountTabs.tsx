import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'

type TabPropsType = {
    item: {
        id: number,
        title: string,
        image: string
    }

}

const Data = [{
    id: 1,
    title: 'Help',
    image: 'clock'
},
{
    id: 2,
    title: 'Wallet',
    image: 'wallet'
},
{
    id: 3,
    title: 'Trips',
    image: 'clock'
}]

const AccountTabs = () => {

    const Tab = ({ item }: TabPropsType) => {
        return (
            <View style={{ backgroundColor: '#d7d9d7',width:90,borderRadius:12,alignItems:'center',padding:14 }}>
                <FontAwesome5Icons name={item.image} size={32} color='#000' />
                <Text style={{fontWeight:'bold',marginTop:6,color:'#000'}}>{item.title}</Text>
            </View>
        )
    }

    const SafetyCheckup=()=>{
        return(
            <View style={{backgroundColor:'#d7d9d7',borderRadius:12,padding:18,marginVertical:24}}>
                <View>
                    <Text style={{fontSize:18,color:'#000',fontWeight:'bold'}}>Safety Checkup</Text>
                    <Text style={{fontSize:13}}>
                        Boost your safety profile by turning on additional features
                    </Text>
                </View>

            </View>
        )
    }
    return (
        <View >
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            {Data.map(i => <Tab key={i.id} item={i} />)}
            </View>
          
            <SafetyCheckup/>
        </View>
    )
}

export default AccountTabs

const styles = StyleSheet.create({})