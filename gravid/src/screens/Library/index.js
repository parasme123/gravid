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
import Apis from '../../Services/apis';
import { useIsFocused } from '@react-navigation/native';

const Library = (props) => {
  const isFocused = useIsFocused();
  const [modalVisible, setModalVisible] = useState(true);
  const [textinputVal, setTextinputVal] = useState("Gravid Digital 1 Year")
  const [price, setPrice] = useState("1800")
  const [type, setType] = useState("bookmark")
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false)
  const [bookmarkDataList, setBookmarkDataList] = useState([])

  useEffect(() => {
    if (isFocused) {
      bookmarkList()
    }
  }, [isFocused])

  const bookmarkList = () => {
    Apis.AllBookMark({})
      .then(async (json) => {
        console.log('datalistHomePage=====:', JSON.stringify(json));
        if (json.status == true) {
          setBookmarkDataList(json.data);
        }
      })
  }

  const handleWebinarType = (type) => {
    setType(type)
  }

  const handleDelete = () => {
    setConfirmDeleteModal(true)
  }

  const renderItemNewsLetter = ({ item }) => {
    return (
      <TouchableOpacity style={styles.NewsLetterView} onPress={item.type == "blog" ? () => props.navigation.navigate("RecentBlogsDetail", { item: item.blogs }) : () => props.navigation.navigate("RecentIssuesDetail", { item: item.magzine })}>
        <Image source={item.img} style={styles.newsImg} />
        <TouchableOpacity style={styles.wifiCon} onPress={handleDelete}>
          {svgs.deleteIcon(colors.white, 10, 10)}
        </TouchableOpacity>
        <View style={styles.newsleftView}>
          <Text style={styles.issuetitle} numberOfLines={2}>{item.type == "blog" ? item.blogs.title : item.magzine.title}</Text>
          <Text style={styles.issueDes} numberOfLines={3}>{item.type == "blog" ? item.blogs.short_description : item.magzine.short_description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.haddingView}>
        <TouchableOpacity style={{ flex: 3 }} onPress={() => props.navigation.goBack()}>
          {svgs.backArrow("black", 24, 24)}
        </TouchableOpacity>
        <Text style={styles.haddingTxt}>Library</Text>
        <View style={{ flex: 3 }} />
      </View>
      <View style={styles.radiusView} />
      <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
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
        {
          type == "bookmark" ? (
            <FlatList
              data={bookmarkDataList}
              numColumns={2}
              style={{ paddingLeft: 16, marginTop: 40, flexDirection: "row" }}
              renderItem={renderItemNewsLetter}
              keyExtractor={(item) => item.id}
            />
          ) : null
        }

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
