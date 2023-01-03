import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    // justifyContent: 'space-around',
    flexDirection: 'row',
    // flexDirection: 'column' ---> por defecto
    //  alignItems: 'flex-end',
    // justifyContent: 'center',
    // alignItems: 'center',

  },
  caja1: {
    //! flex: 1, --> 1 + 2 + 3 = 6 --> 1/6 de la capacidad
    //? flex: 2,    -->  2 + 4 + 4 = 10 --> 20% del espacio
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  caja2: {
    //! flex: 2, --> 1 + 2 + 3 = 6 --> 2/6 de la capacidad
    //? flex: 4, -->  2 + 4 + 4 = 10 --> 40% del espacio
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  caja3: {
    //! flex: 3, -->  1 + 2 + 3 = 6 --> 3/6 de la capacidad
    //? flex: 4,   -->  2 + 4 + 4 = 10 --> 40% del espacio
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
});
