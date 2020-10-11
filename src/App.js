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

const App = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          padding: 7,
          justifyContent: 'space-between',
          backgroundColor: '#ffd54f',
          alignItems: 'center',
        }}>
        <View>
          <Image
            resizeMode="cover"
            style={{
              width: Dimensions.get('window').width * 0.18,
              height: Dimensions.get('window').height * 0.07,
            }}
            source={require('../img/1579883124sportsballs1.png')}
          />
        </View>
        <Image
          resizeMode="cover"
          style={{
            width: Dimensions.get('window').width * 0.15,
            height: Dimensions.get('window').height * 0.06,
          }}
          source={require('../img/logo-tablet.png')}
        />
        <View>
          <Button
            title="All Categories"
            color="#21aaaa"
            style={{borderRadius: 20}}
          />
        </View>
      </View>
      <View style={{borderWidth: 2, borderRadius: 5, marginBottom: 10}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', color: '#c41c00'}}>
            FIA post-race press conference – Germany
          </Text>
        </View>
        <Image
          resizeMode="cover"
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height * 0.19,
            borderRadius: 15,
          }}
          source={require('../img/Ferrari-PA.jpg')}
        />
        <Text>
          Starting the race on soft tyres, Leclerc struggled to hold on to P4 as
          he lost out to Renault’s eventual podium-finisher Daniel Ricciardo on
          Lap 8 before pitting for mediums. That nine-lap soft-tyred stint
          warded the Monegasque off from opting for softs for the final ten lap
          dash after the Safety Car, and he ended up seventh behind Pierre Gasly
          of AlphaTauri.
        </Text>
      </View>
      <View style={{borderWidth: 2, borderRadius: 5, marginBottom: 10}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', color: '#c41c00'}}>
            Perth Queen Regains Her Crown Over Camelot
          </Text>
        </View>
        <Image
          resizeMode="cover"
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height * 0.19,
            borderRadius: 15,
          }}
          source={require('../img/horse-riding.jpg')}
        />
        <Text>
          Top Perth jockey Willie Pike has stolen the show early in the
          Caulfield meeting with a winning treble, highlighted by a shock
          victory aboard Arcadia Queen, who claimed the scalp of boom galloper
          Russian Camelot.
        </Text>
      </View>
      <View style={{borderWidth: 2, borderRadius: 5, marginBottom: 10}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', color: '#c41c00'}}>
            Turkey to allow limited fan attendance at matches from October
          </Text>
        </View>
        <Image
          resizeMode="cover"
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height * 0.19,
            borderRadius: 15,
          }}
          source={require('../img/turkishnews.jpg')}
        />
        <Text>
          Turkey halted its 2019-20 season in March due to the virus and resumed
          matches in June without spectators. Last month, the top-tier Super
          League concluded with Istanbul Basaksehir winning the title for the
          first time, breaking the dominance of the “Big Three” in Turkey -
          Fenerbahce, Galatasaray and Besiktas.
        </Text>
      </View>
      <View style={{borderWidth: 2, borderRadius: 5, marginBottom: 10}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', color: '#c41c00'}}>
            When Joan overtook me I said 'no way'
          </Text>
        </View>
        <Image
          resizeMode="cover"
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height * 0.19,
            blurRadius: 30,
          }}
          source={require('../img/Moto3_polee.jpg')}
        />
        <Text>
          Fabio Quartararo admits MotoGP title thoughts entered his mind when he
          was overtaken on the last lap of the French Grand Prix by Joan Mir; '
          I said 'no way', I will not finish without trying something...'
        </Text>
      </View>
    </ScrollView>
  );
};

export default App;
