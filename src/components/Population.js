import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const Population = ({ population }) => {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>Случаев заражения: {population.cases}</Text>
      <Text style={styles.text}>Смертей: {population.deaths}</Text>
      <Text style={styles.text}>Выздоровевших: {population.recovered}</Text>
      <View
        style={{
          margin: 5,
          borderBottomColor: '#dab1e0',
          borderBottomWidth: 1,
          alignSelf: 'stretch',
        }}
      />
      <Text style={styles.text}>
        Заражений за день: {population.todayCases}
      </Text>
      <Text style={styles.text}>Смертей за день: {population.todayDeaths}</Text>
      <Text style={styles.text}>
        Выздоровевших за день: {population.todayRecovered}
      </Text>
      {/* {/* <Text style={styles.text}>{population} человек</Text>
      <Text style={styles.text}>{population} человек</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 50,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#d391de',
    borderColor: '#d391de',
    padding: 10,
    margin: 10,
  },
  text: { textAlign: 'left', color: 'white', fontSize: 20 },
});
