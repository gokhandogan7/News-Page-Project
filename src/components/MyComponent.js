/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const MyComponent = (props) => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={props.image
        }
      />
      <Text>{props.desc}</Text>
    </View>
  );
};
// eslint-disable-next-line eol-last
export default MyComponent;
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 10,
  },
  titleText: {
    fontWeight: 'bold',
    color: '#c41c00',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.19,
  },
});
