/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState, useRef } from 'react';
import { ImageBackground, Image, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { svgs, colors } from '@common';
import styles from './styles';
import Swiper from 'react-native-swiper';
import Apis from '../../Services/apis';
import { imageurl } from '../../Services/constants';
// const imageurl = "https://rasatva.apponedemo.top/gravid/"

const ExpertList = (props) => {
  const [expertData, setExpertData] = useState([])

  useEffect(() => {
    HomePagedata()
  }, [])

  const HomePagedata = () => {
    const params = {

    }
    Apis.ExpertList(params)
      .then(async (json) => {
        console.log('Blogs=====:', JSON.stringify(json));
        if (json.status == true) {
          setExpertData(json.data);
        }
      })
  }

  const renderItemNewsLetter = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.NewsLetterView}
        onPress={() => props.navigation.navigate("ExpertListDetail", { item })}
      >
        {/* <Text style={styles.blogTitleTime}>{item.name}</Text> */}
        <Image source={{ uri: imageurl + item.image }} style={styles.newsImg} />
        <Text style={styles.issuetitle}>{item.name}</Text>
        <View style={styles.newsleftView}>
          <Text style={styles.issueDes} numberOfLines={5}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>

      <View style={styles.haddingView}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => props.navigation.goBack()}>
          {svgs.backArrow("black", 24, 24)}
        </TouchableOpacity>
        <Text style={styles.haddingTxt}>Expert List</Text>
        <View style={{ flex: 1, }} />
      </View>
      <View style={styles.manflatlistview}>
        <ScrollView showsVerticalScrollIndicator={false}  nestedScrollEnabled={true}>
          <FlatList
            data={expertData}
            renderItem={renderItemNewsLetter}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
          {/* <View style={{ height: 90 }} /> */}
        </ScrollView>
      </View>

    </View>

  );
};

export default ExpertList;
