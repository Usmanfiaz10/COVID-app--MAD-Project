import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';



export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style = {styles.searchbarContainer}>
        <TextInput style = {styles.searchbar} placeholder = "Search"></TextInput>
      </View>
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
         1
        </Text>
        <Text style={styles.text}>
         2
        </Text>
      </ScrollView>
    </SafeAreaView>
    </View>
  );
}


HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 0
  },
  searchbarContainer : {
    flexDirection: 'row',
    width: '90%'
  },
  searchbar : {
    borderWidth: 1,
    width: '100%',
    height: '100%',
    paddingLeft : 10
  }
});
