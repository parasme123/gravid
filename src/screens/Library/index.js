/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { ImageBackground, Image, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { svgs, colors } from '@common';
import Modal from "react-native-modal";
import styles from './styles';

const Library = (props) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [textinputVal, setTextinputVal] = useState("Gravid Digital 1 Year")
  const [price, setPrice] = useState("1800")
  const [type, setType] = useState("bookmark")
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false)

  const DATA = [
    {
      id: "1",
      title: "Scary Thing That You Don't Get Enough Sleep",
      des: "Far far away, behind the word mountains, far from the countries...",
      isFree: true,
      img: require('../../assets/images/current-issue.png')
    },
    {
      id: "2",
      title: "Scary Thing That You Don't Get Enough Sleep",
      des: "Far far away, behind the word mountains, far from the countries...",
      isFree: false,
      img: require('../../assets/images/current-issue.png')
    },
    {
      id: "3",
      title: "Scary Thing That You Don't Get Enough Sleep",
      des: "Far far away, behind the word mountains, far from the countries...",
      isFree: true,
      img: require('../../assets/images/current-issue.png')
    },
    {
      id: "1",
      title: "Scary Thing That You Don't Get Enough Sleep",
      des: "Far far away, behind the word mountains, far from the countries...",
      isFree: true,
      img: require('../../assets/images/current-issue.png')
    },
    {
      id: "2",
      title: "Scary Thing That You Don't Get Enough Sleep",
      des: "Far far away, behind the word mountains, far from the countries...",
      isFree: false,
      img: require('../../assets/images/current-issue.png')
    },
    {
      id: "3",
      title: "Scary Thing That You Don't Get Enough Sleep",
      des: "Far far away, behind the word mountains, far from the countries...",
      isFree: true,
      img: require('../../assets/images/current-issue.png')
    },
  ];

  const handleWebinarType = (type) => {
    setType(type)
  }

  const handleDelete = () => {
    setConfirmDeleteModal(true)
  }

  const renderItemNewsLetter = ({ item }) => {
    return (
      <TouchableOpacity style={styles.NewsLetterView}>
        <Image source={item.img} style={styles.newsImg} />
        <TouchableOpacity style={styles.wifiCon} onPress={handleDelete}>
          {svgs.deleteIcon(colors.white, 10, 10)}
        </TouchableOpacity>
        <View style={styles.newsleftView}>
          <Text style={styles.issuetitle} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.issueDes} numberOfLines={2}>{item.des}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.haddingView}>
        <Text style={styles.haddingTxt}>Library</Text>
      </View>
      <View style={styles.radiusView} />
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.tabView}>
          <TouchableOpacity style={type == "bookmark" ? styles.WebinarActiveBtn : styles.WebinarInactiveBtn} onPress={() => handleWebinarType("bookmark")}>
            {
              type == "bookmark" ? (
                <>
                  <View style={styles.talkBubbleTriangleLeft} />
                  <View style={styles.talkBubbleTriangleRight} />
                </>
              ) : null
            }
            <Text style={type == "bookmark" ? styles.WebinarActiveBtnTxt : styles.WebinarInactiveBtnTxt}>Bookmarks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={type == "download" ? styles.WebinarActiveBtn : styles.WebinarInactiveBtn} onPress={() => handleWebinarType("download")}>
            {
              type == "download" ? (
                <>
                  <View style={styles.talkBubbleTriangleLeft} />
                  <View style={styles.talkBubbleTriangleRight} />
                </>
              ) : null
            }
            <Text style={type == "download" ? styles.WebinarActiveBtnTxt : styles.WebinarInactiveBtnTxt}>Download</Text>
          </TouchableOpacity>
          <TouchableOpacity style={type == "video" ? styles.WebinarActiveBtn : styles.WebinarInactiveBtn} onPress={() => handleWebinarType("video")}>
            {
              type == "video" ? (
                <>
                  <View style={styles.talkBubbleTriangleLeft} />
                  <View style={styles.talkBubbleTriangleRight} />
                </>
              ) : null
            }
            <Text style={type == "video" ? styles.WebinarActiveBtnTxt : styles.WebinarInactiveBtnTxt}>Recorded video</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={DATA}
          numColumns={2}
          style={{ paddingLeft: 16, marginTop: 40, flexDirection: "row" }}
          renderItem={renderItemNewsLetter}
          keyExtractor={(item) => item.id}
        // showsHorizontalScrollIndicator={false}
        // horizontal
        />
      </ScrollView>
      <Modal
        isVisible={confirmDeleteModal}
        onBackdropPress={() => setConfirmDeleteModal(false)}
        onBackButtonPress={() => setConfirmDeleteModal(false)}
      >
        <View style={{ backgroundColor: "white", borderRadius: 10, marginHorizontal: 40 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ alignItems: "center", marginHorizontal: 20, marginTop: 10 }}>
              <Text style={styles.offHadding}>Are You sure to delete!</Text>
            </View>
            <View style={{ flexDirection: "row", marginHorizontal: 20, marginVertical: 30, justifyContent: "space-between" }}>
              <TouchableOpacity style={styles.cancelBtn} onPress={() => setConfirmDeleteModal(false)}>
                <Text style={styles.cancelBtnTxt}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.submitBtn} onPress={() => setConfirmDeleteModal(false)}>
                <Text style={styles.submitBtnTxt}>Yes</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>

    </View>

  );
};

export default Library;
