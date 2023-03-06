/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { svgs } from '@common';
import styles from './styles';
import Apis from '../../Services/apis';
import { imageurl } from '../../Services/constants';
// const imageurl = "https://rasatva.apponedemo.top/gravid/"

const ExpertList = (props) => {
  const [expertData, setExpertData] = useState([])
  const [isLoader, setIsLoader] = useState(false)

  useEffect(() => {
    HomePagedata()
  }, [])

  const HomePagedata = () => {
    setIsLoader(true)
    Apis.ExpertList({})
      .then(async (json) => {
        console.log('Blogs=====:', JSON.stringify(json));
        if (json.status == true) {
          setExpertData(json.data);
        }
        setIsLoader(false)
      }).catch((error) => {
        setIsLoader(false)
        console.log("ExpertList", error);
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
        <Image source={{ uri: imageurl + item.file }} style={styles.newsImg} />
        <Text style={styles.issuetitle}>{item.name}</Text>
        <View style={styles.newsleftView}>
          <Text style={styles.issueDes} numberOfLines={5}>{item.short_description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>

      <View style={styles.haddingView}>
        {/* <TouchableOpacity style={{ flex: 1 }} onPress={() => props.navigation.goBack()}>
          {svgs.backArrow("black", 24, 24)}
        </TouchableOpacity> */}
        <Text style={styles.haddingTxt}>Expert List</Text>
        {/* <View style={{ flex: 1, }} /> */}
      </View>
      <View style={styles.manflatlistview}>
        {/* <ScrollView nestedScrollEnabled={true}> */}
        {
          isLoader ? (
            <View style={{ marginTop: 300 }}>
              <ActivityIndicator size="large" />
            </View>
          ) : (
            <FlatList
              data={expertData}
              renderItem={renderItemNewsLetter}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          )
        }
        {/* <View style={{ height: 90 }} /> */}
        {/* </ScrollView> */}
      </View>

    </View>

  );
};

export default ExpertList;
