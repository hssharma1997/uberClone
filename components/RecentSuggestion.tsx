import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'


const RecentSuugestion = () => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#F5F5F5', borderRadius: 22, padding: 12 }}>
        <MaterialIcon name='location-on' size={20} color={'#000'} />
      </View>
      <View style={{ flexDirection: 'row', borderColor: '#F5F5F5', borderBottomWidth: 1, paddingBottom: 16, alignItems: 'center' }}>
        <View style={{ marginHorizontal: 14, }}>
          <Text style={{ fontWeight: 'bold', color: '#000' }}>Digit Insurance</Text>
          <Text>1st to 6th Floor,Ananta One AR One...</Text>
        </View>
        <View>
          <MaterialIcon name='chevron-right' size={20} color={'#000'} />
        </View>
      </View>

    </View>
  )
}

export default RecentSuugestion

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 12,
    marginVertical: 5
  }
})