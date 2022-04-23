import React, {useEffect, useState} from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import CardView from '../components/CardView';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import {ActivityIndicator, 
  FlatList, 
  Text, 
  Image,
  View
} from 'react-native';
import COLORS from '../constant/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function NewsListScreen({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getTopHeadlines = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=ef13a4372dd54838a062509402f93469',
      );
      const json = await response.json();
      setData(json.articles);
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTopHeadlines();
  }, []);

  const Card = ({news}) => {
    console.log('Card #news');
    console.log(news);

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Dashboard', news)}>
        <CardView>
        <View style={{width: '100%', borderRadius: 10}}>
          <Image
            source={{uri: news.urlToImage}}
            style={{width: '100%', height: 180, borderRadius: 10}}
          />

        <Text
            style={{
              color: COLORS.dark,
              fontWeight: 'bold',
              fontSize: 17,
              marginTop: 4,
              marginLeft: 6,
              marginRight: 6,
            }}
            numberOfLines={1}
            ellipsizeMode="tail">
            {news.title}
          </Text>
          <Paragraph
            style={{
              color: COLORS.gray_light_c,
              fontWeight: '100',
              fontSize: 12,
              marginTop: 4,
              marginLeft: 6,
              marginRight: 6,
            }}
            numberOfLines={5}
            ellipsizeMode="tail">
            {news.description}
          </Paragraph>

        </View>
          
        </CardView>
      </TouchableOpacity>
    );
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo/>
      <Header>Top Headlines</Header>
      
      <View style={{flex: 1, padding: 0}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => {
              return <Card news={item} />;
            }}
          />
        )}
      </View>
    </Background>
  );
}
