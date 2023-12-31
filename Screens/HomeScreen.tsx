import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import RecentSuugestion from '../components/RecentSuggestion';
import {Heading} from '../components/ThemedComponents';
import SuggestionTab from '../components/SuggestionTab';
import MoreWays from '../components/MoreWays';
import WaysToSave from '../components/WaysToSave';
import {getAutoCompletePlaces} from '../apiServices';

const HomeScreen = ({navigation}) => {
  // useEffect(() => {
  //     getAutoCompletePlaces('delhi')
  // }, [])

  const SearchBar = () => {
    return (
      <Pressable style={styles.searchBarContainer}>
        <MaterialCommunityIcon name="magnify" size={38} color="#000" />
        <Text style={styles.searchBarText}>Where to?</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <SearchBar />
        <View style={styles.section}>
          {[1, 2].map(i => (
            <RecentSuugestion />
          ))}
        </View>
        <View style={styles.section}>
          <Heading title="Suggestions" />
          <SuggestionTab />
        </View>
        <View style={styles.section}>
          <Heading title="Ways to save with Uber" />
          <WaysToSave />
        </View>
        <View style={styles.section}>
          <Heading title="More ways to use Uber" />
          <MoreWays />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginHorizontal: 6,
    borderRadius: 26,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  searchBarText: {
    paddingHorizontal: 12,
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 16,
  },
});
