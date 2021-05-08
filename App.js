import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Population } from './src/components/Population';

export default function App() {
  const [population, setPopulation] = useState({
    cases: 0,
    recovered: 0,
    death: 0,
    todayCases: 0,
    todayDeaths: 0,
    todayRecovered: 0,
  });

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  useEffect(() => {
    pressHandler();
  }, []);

  const pressHandler = () => {
    fetch(
      'https://corona.lmao.ninja/v2/countries/Russia?yesterday=false&strict&query',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setPopulation(result))
      .catch((error) => console.log('error', error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.title}>{'Количество зараженных в России'}</Text>
      </View>
      <View style={styles.container}>
        <Population population={population} />
        <View style={styles.update}>
          <Button
            style={styles.updatebtn}
            color="#ac42d4"
            title="Обновить"
            onPress={pressHandler}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: 20,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 20,
  },
  block: {
    backgroundColor: '#912ab7',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 45,
    padding: 10,
  },
  update: {
    alignItems: 'center',
    marginTop: 15,
  },
  updatebtn: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  },
});
