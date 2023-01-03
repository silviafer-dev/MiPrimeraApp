import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const DimensionsScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={styles.title}>
        W: {width.toFixed(2)}, H: {height.toFixed(2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: 'blue',
    width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: 'orange',
  },
  title: {
    fontSize: 15,
    textAlign: 'center',
  },
});
