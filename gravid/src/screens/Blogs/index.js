/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity, FlatList, ActivityIndicator, Linking } from 'react-native';
import { svgs } from '@common';
import styles from './styles';
import Swiper from 'react-native-swiper';
import Apis from '../../Services/apis';
import { imageurl } from '../../Services/constants';
// const imageurl = "https://rasatva.apponedemo.top/gravid/"

const Blogs = (props) => {
  const adsense = props?.route?.params?.adsense;
  const [blogslist, setBlogsList] = useState([])
  const [btmSlider, setBtmSlider] = useState([])
  const [isLoader, setIsLoader] = useState(false)

  useEffect(() => {
    HomePagedata()
  }, [])

  useEffect(() => {
    setBtmSlider(adsense)
  }, [adsense])

  const HomePagedata = () => {
    setIsLoader(true)
    Apis.HomePagedata({})
      .then(async (json) => {
        console.log('Blogs=====:', JSON.stringify(json));
        if (json.status == true) {
          setBlogsList(json.data.blog.data);
        }
        setIsLoader(false)
      }).catch((error) => {
        console.log("HomePagedata", error);
        setIsLoader(false)
      })
  }

  const renderItemNewsLetter = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.NewsLetterView}
        onPress={() => props.navigation.navigate("RecentBlogsDetail", { item })}
      >
        {/* <Text style={styles.blogTitleTime}>Gravid Digest India | May-June 2022</Text> */}
        <Text style={styles.issuetitle}>{item.title}</Text>
        <View style={styles.newsleftView}>
          <Text style={styles.issueDes}>{item.short_description}</Text>
          <Image source={{ uri: imageurl + item.image }} style={styles.newsImg} />
        </View>
      </TouchableOpacity>
    );
  };

  const handleOtherSlider = (url) => {
    Linking.openURL(url);
  }

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
        {
          isLoader ? (
            <View style={{ marginTop: 300 }}>
              <ActivityIndicator size="large" />
            </View>
          ) : (
            <FlatList
              data={blogslist}
              renderItem={renderItemNewsLetter}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={() => {
                return (
                  <View style={styles.endView}>
                    <Swiper
                      activeDotStyle={{ backgroundColor: 'transparent', }}
                      dotStyle={{ backgroundColor: 'transparent', }}
                      autoplay={true}
                    >
                      {
                        btmSlider?.map((item) => {
                          return (
                            <TouchableOpacity key={item.id} onPress={item.slider_url ? () => handleOtherSlider(item.slider_url) : null}>
                              <Image key={item.id} style={styles.endImg} source={{ uri: imageurl + item.image }} />
                            </TouchableOpacity>
                          )
                        })
                      }

                      {/* <Image style={styles.endImg} source={require('../../assets/images/home-end.png')} />
                  <Image style={styles.endImg} source={require('../../assets/images/home-end.png')} />
                  <Image style={styles.endImg} source={require('../../assets/images/home-end.png')} />
                  <Image style={styles.endImg} source={require('../../assets/images/home-end.png')} /> */}
                    </Swiper>
                  </View>
                )
              }}
            />
          )
        }
      </View>

    </View>

  );
};

export default Blogs;
