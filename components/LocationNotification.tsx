/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function LocationNotification() {
  return (
    <View style={styles.container}>
      <View style={{width: '10%'}}>
        <SimpleLineIcons name="location-pin" size={20} color="#000" />
      </View>
      <View style={{width: '70%'}}>
        <Text style={{color: '#000'}}>
          Location sharing disabled.Tap here to enable
        </Text>
      </View>
      <View style={{width: '20%'}}>
        <Text style={{color: '#000', textAlign: 'right'}}>Enable</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8c605',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
  },
});
