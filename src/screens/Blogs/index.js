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

const Blogs = (props) => {
  const [term, setTerm] = useState(false)
  const handleTerm = () => {
    setTerm(!term)
  }

  const DATA = [
    {
      id: "1",
      title: "Gravid Digest India",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.",
      isFree: true,
      img: require('../../assets/images/blogs.png')
    },
    {
      id: "2",
      title: "Gravid Digest India",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.",
      isFree: false,
      img: require('../../assets/images/blogs.png')
    },
    {
      id: "3",
      title: "Gravid Digest India",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.",
      isFree: true,
      img: require('../../assets/images/blogs.png')
    },
    {
      id: "4",
      title: "Gravid Digest India",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.",
      isFree: true,
      img: require('../../assets/images/blogs.png')
    },
    {
      id: "5",
      title: "Gravid Digest India",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.",
      isFree: true,
      img: require('../../assets/images/blogs.png')
    },
    {
      id: "6",
      title: "Gravid Digest India",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.",
      isFree: true,
      img: require('../../assets/images/blogs.png')
    },
    {
      id: "7",
      title: "Gravid Digest India",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.",
      isFree: true,
      img: require('../../assets/images/blogs.png')
    },
  ];

  const renderItemNewsLetter = ({ item }) => {
    return (
      <TouchableOpacity key={item.id} style={styles.NewsLetterView}>
        <Text style={styles.blogTitleTime}>Gravid Digest India | May-June 2022</Text>
        <Text style={styles.issuetitle}>CONTRIBUTORS</Text>
        <View style={styles.newsleftView}>
          <Text style={styles.issueDes}>{item.des}</Text>
          <Image source={item.img} style={styles.newsImg} />
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
      <View style={{ backgroundColor: "#FAFAFA", paddingHorizontal: 6, paddingTop: 30, paddingBottom: 100, borderRadius: 30, marginTop: -30 }}>
        <FlatList
          data={DATA}
          renderItem={renderItemNewsLetter}
          keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        />
      </View>

    </View>

  );
};

export default Blogs;
