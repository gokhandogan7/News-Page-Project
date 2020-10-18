/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';

const Navi = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={styles.container}>
        <View>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={require('../img/1579883124sportsballs1.png')}
          />
        </View>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require('../img/logo-tablet.png')}
        />
        <View>
          <Button
            title="All Categories"
            color="#34515e"
            style={{borderRadius: 20}}
          />
        </View>
      </View>
    </View>
  );
};

export default Navi;

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width * 0.18,
    height: Dimensions.get('window').height * 0.07,
  },
  container: {
      flexDirection: 'row',
          padding: 7,
          justifyContent: 'space-between',
          backgroundColor: '#78002e',
          alignItems: 'center',
  }
});
