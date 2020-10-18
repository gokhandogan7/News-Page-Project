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
} from 'react-native';

const Navi = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          padding: 7,
          justifyContent: 'space-between',
          backgroundColor: '#78002e',
          alignItems: 'center',
        }}>
        <View>
          <Image
            resizeMode="cover"
            style={{
              width: Dimensions.get('window').width * 0.18,
              height: Dimensions.get('window').height * 0.07,
            }}
            source={require('./img/1579883124sportsballs1.png')}
          />
        </View>
        <Image
          resizeMode="cover"
          style={{
            width: Dimensions.get('window').width * 0.15,
            height: Dimensions.get('window').height * 0.06,
          }}
          source={require('./img/logo-tablet.png')}
        />
        <View>
          <Button
            title="All Categories"
            color="#34515e"
            style={{borderRadius: 20}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Navi;
