import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

export default function App(props) {
  console.log(props)

  return (
    <ScrollView style={styles.container}>
      <Text>DATA = {JSON.stringify(props)}}</Text>
      <Text>URL = {JSON.stringify(url)}}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
