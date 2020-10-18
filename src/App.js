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
import MyComponent from './components/MyComponent';
import DataNews from './news1_data.json';
import Navi from './components/header';

const App = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View>
        <Navi />
      </View>

      <View>
        {DataNews.map((news) => {
          return (
            <MyComponent
              title={news.title}
              image={news.imageUrl}
              desc={news.desc}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default App;
