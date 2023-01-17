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

const CurrentIssue = (props) => {
  const [term, setTerm] = useState(false)
  const handleTerm = () => {
    setTerm(!term)
  }

  const DATA = [
    {
      id: "1",
      title: "Gravid Digest India",
      des: "November-December 2022",
      isFree: true,
      img: require('../../assets/images/currentIssue.png')
    },
    {
      id: "2",
      title: "Gravid Digest India",
      des: "November-December 2022",
      isFree: false,
      img: require('../../assets/images/currentIssue.png')
    },
    {
      id: "3",
      title: "Gravid Digest India",
      des: "November-December 2022",
      isFree: true,
      img: require('../../assets/images/currentIssue.png')
    },
    {
      id: "4",
      title: "Gravid Digest India",
      des: "November-December 2022",
      isFree: true,
      img: require('../../assets/images/currentIssue.png')
    },
    {
      id: "5",
      title: "Gravid Digest India",
      des: "November-December 2022",
      isFree: true,
      img: require('../../assets/images/currentIssue.png')
    },
    {
      id: "6",
      title: "Gravid Digest India",
      des: "November-December 2022",
      isFree: true,
      img: require('../../assets/images/currentIssue.png')
    },
    {
      id: "7",
      title: "Gravid Digest India",
      des: "November-December 2022",
      isFree: true,
      img: require('../../assets/images/currentIssue.png')
    },
  ];

  const renderItemNewsLetter = ({ item }) => {
    return (
      <TouchableOpacity key={item.id} style={styles.NewsLetterView}>
        <Image source={item.img} style={styles.newsImg} />
        <View style={styles.newsleftView}>
          <Text style={styles.issuetitle} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.issueDes} numberOfLines={2}>{item.des}</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 14 }}>
            <TouchableOpacity style={styles.bkmrkBtn}>
              <View style={styles.bkmrkIcn}>
                {svgs.bookmark("", 8, 8)}
              </View>
              <Text style={styles.bkmrkBtnTxt}>Read</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bkmrkBtn}>
              <View style={styles.bkmrkIcn}>
                {svgs.download("", 12, 12)}
              </View>
              <Text style={styles.bkmrkBtnTxt}>Download</Text>
            </TouchableOpacity>
          </View>
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
        <Text style={styles.haddingTxt}>Recent Issues</Text>
        <View style={{ flex: 1, }} />
      </View>
      <View style={{ backgroundColor: "white", paddingHorizontal: 6, paddingTop: 30, paddingBottom: 100, borderRadius: 30, marginTop: -30 }}>
        <FlatList
          // ListHeaderComponent={
          //   <View>
          //   </View>
          // }
          data={DATA}
          numColumns={2}
          // style={{ paddingLeft: 24 }}
          renderItem={renderItemNewsLetter}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        // showsHorizontalScrollIndicator={false}
        // horizontal
        // extraData={selectedId}
        />
      </View>

    </View>

  );
};

export default CurrentIssue;
