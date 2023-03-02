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

const Blogs = (props) => {
  const adsense = props?.route?.params?.adsense;
  const [blogslist, setBlogsList] = useState([])
  const [btmSlider, setBtmSlider] = useState([])

  useEffect(() => {
    HomePagedata()
  }, [])

  useEffect(() => {
    setBtmSlider(adsense)
  }, [adsense])

  const HomePagedata = () => {
    const params = {

    }
    Apis.HomePagedata(params)
      .then(async (json) => {
        console.log('Blogs=====:', JSON.stringify(json));
        if (json.status == true) {
          setBlogsList(json.data.blog.data);
        }
      })
  }

  const renderItemNewsLetter = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.NewsLetterView}
        onPress={() => props.navigation.navigate("RecentBlogsDetail", { item })}
      >
        <Text style={styles.blogTitleTime}>Gravid Digest India | May-June 2022</Text>
        <Text style={styles.issuetitle}>{item.title}</Text>
        <View style={styles.newsleftView}>
          <Text style={styles.issueDes} numberOfLines={10}>{item.description}</Text>
          <Image source={{ uri: imageurl + item.image }} style={styles.newsImg} />
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
        <Text style={styles.haddingTxt}>Recent Blogs</Text>
        <View style={{ flex: 1, }} />
      </View>
      <View style={styles.manflatlistview}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={blogslist}
            renderItem={renderItemNewsLetter}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
          <View style={styles.endView} >
            <Swiper style={{}}
              activeDotStyle={{ backgroundColor: 'transparent', }}
              dotStyle={{ backgroundColor: 'transparent', }}
            // autoplay={true}
            >
              {
                btmSlider?.map((item) => {
                  return (
                    <Image key={item.id} style={styles.endImg} source={{ uri: imageurl + item.image }} />
                  )
                })
              }

              {/* <Image style={styles.endImg} source={require('../../assets/images/home-end.png')} />
              <Image style={styles.endImg} source={require('../../assets/images/home-end.png')} />
              <Image style={styles.endImg} source={require('../../assets/images/home-end.png')} />
              <Image style={styles.endImg} source={require('../../assets/images/home-end.png')} /> */}
            </Swiper>
          </View>
          {/* <FlatList
            data={blogslist}
            renderItem={renderItemNewsLetter}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          /> */}
          <View style={{ height: 90 }} />
        </ScrollView>
      </View>

    </View>

  );
};

export default Blogs;
