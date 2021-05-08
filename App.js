import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Population } from './src/components/Population';

export default function App() {
  const [population, setPopulation] = useState();
  useEffect(() => {
    setPopulation(0);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.text}>{'Количество зараженных в России:'}</Text>
      </View>
      <View style={styles.container}>
        <Population population={population} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: 20,
  },
  block: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 50,
  },
});
