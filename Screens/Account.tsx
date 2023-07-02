import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import AccountTabs from '../components/AccountTabs'
import { Divider } from '../components/ThemedComponents'
import AccountOptions from '../components/AccountOptions'
import AccountUserInfo from '../components/AccountUserInfo'

const Account = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
      <AccountUserInfo/>
      </View>
      <ScrollView style={{flex:1}}>
        <View style={styles.section}>
          <AccountTabs/>
        </View>
        <Divider/>
        <View style={styles.section}>
          <AccountOptions/>
        </View>
        <View style={styles.section}>
          <Text>v4.479.10001</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
   
  },
  section:{
    padding:16
  }

 
})