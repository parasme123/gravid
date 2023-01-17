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

const Webinar = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [textinputVal, setTextinputVal] = useState("Gravid Digital 1 Year")
  const [price, setPrice] = useState("1800")
  const [type, setType] = useState("live")

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
    // {
    //   id: "3",
    //   title: "Scary Thing That You Don't Get Enough Sleep",
    //   des: "Far far away, behind the word mountains, far from the countries...",
    //   isFree: true,
    //   img: require('../../assets/images/current-issue.png')
    // },
  ];

  const handleWebinarType = (type) => {
    setType(type)
  }

  const handleWebinarDetail = () => {
    props.navigation.navigate("webinarDetail")
  }

  const renderItemIssue = ({ item }) => {
    return (
      <TouchableOpacity style={styles.currenIssueView}>
        <View style={styles.leftView}>
          <View style={styles.bkmrkBtn}>
            <View style={styles.bkmrkIcn}>
              {svgs.clock(colors.gray, 12, 12)}
            </View>
            <Text style={styles.bkmrkBtnTxt}>5 min.</Text>
          </View>
          <Text style={styles.issuetitle} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.issueDes} numberOfLines={2}>{item.des}</Text>
        </View>
        <Image source={item.img} style={styles.issueImg} />
      </TouchableOpacity>
    );
  };

  const renderItemNewsLetter = ({ item }) => {
    return (
      <TouchableOpacity style={styles.NewsLetterView} onPress={item.isFree ? () => handleWebinarDetail() : () => setModalVisible(true)}>
        <Image source={item.img} style={styles.newsImg} />
        {
          type == "live" ? (
            <>
              <View style={styles.paidType}>
                <Text style={styles.paidTypeTxt}>{item.isFree ? "Free" : "Paid"}</Text>
              </View>
              <View style={styles.wifiCon}>
                {svgs.webinar(colors.black, 12, 12)}
              </View>
            </>
          ) : null
        }
        <View style={styles.newsleftView}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            {/* <TouchableOpacity style={styles.bkmrkBtn}>
              <View style={styles.bkmrkIcn}>
                {svgs.bookmark("", 8, 8)}
              </View>
              <Text style={styles.bkmrkBtnTxt}>Bookmark</Text>
            </TouchableOpacity> */}
            <View style={styles.bkmrkBtn}>
              <View style={styles.bkmrkIcn}>
                {svgs.clock(colors.gray, 12, 12)}
              </View>
              <Text style={styles.bkmrkBtnTxt}>5 min.</Text>
            </View>
          </View>
          <Text style={styles.issuetitle} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.issueDes} numberOfLines={2}>{item.des}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.haddingView}>
        <Text style={styles.haddingTxt}>Webinar</Text>
      </View>
      <View style={styles.radiusView} />
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.tabView}>
          <TouchableOpacity style={type == "live" ? styles.WebinarActiveBtn : styles.WebinarInactiveBtn} onPress={() => handleWebinarType("live")}>
            {
              type == "live" ? (
                <>
                  <View style={styles.talkBubbleTriangleLeft} />
                  <View style={styles.talkBubbleTriangleRight} />
                </>
              ) : null
            }
            <Text style={type == "live" ? styles.WebinarActiveBtnTxt : styles.WebinarInactiveBtnTxt}>Live Webinar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={type == "record" ? styles.WebinarActiveBtn : styles.WebinarInactiveBtn} onPress={() => handleWebinarType("record")}>
            {
              type == "record" ? (
                <>
                  <View style={styles.talkBubbleTriangleLeft} />
                  <View style={styles.talkBubbleTriangleRight} />
                </>
              ) : null
            }
            <Text style={type == "record" ? styles.WebinarActiveBtnTxt : styles.WebinarInactiveBtnTxt}>Recorded Webinar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={DATA}
          numColumns={2}
          style={{ paddingLeft: 16, marginTop: 26, flexDirection: "row" }}
          renderItem={renderItemNewsLetter}
          keyExtractor={(item) => item.id}
        // showsHorizontalScrollIndicator={false}
        // horizontal
        />
        <ImageBackground source={require('../../assets/images/pregnant-black-woman.png')} style={styles.pregnantBack}>
          <View style={{ flex: 5 }}>
            <Text style={styles.subscribeTxt}>Save Big and get access to the complete “Gravid Library” with Gravid Annual Membership</Text>
            <TouchableOpacity style={styles.subscribeBtn}>
              <Text style={styles.subscribeBtnTxt}>SUBSCRIBE</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 3 }}>
          </View>
        </ImageBackground>
        <FlatList
          data={DATA}
          style={{ paddingLeft: 16, marginTop: 24 }}
          renderItem={renderItemIssue}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
        <View style={styles.endView}>
          <Image style={styles.endImg} source={require('../../assets/images/home-end.png')} />
        </View>
      </ScrollView>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
      >
        <View style={{ backgroundColor: "white", borderRadius: 10, marginHorizontal: 20 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ alignItems: "center", marginHorizontal: 20, marginTop: 10 }}>
              <Image source={require('../../assets/images/GRAVID_O.png')} style={{ height: 104, width: 104 }} />
              <Text style={styles.offHadding}>To Access Paid Features you need to pay</Text>
              <Text style={styles.offDes}>$10</Text>
            </View>
            <TouchableOpacity style={styles.submitBtn}>
              <Text style={styles.submitBtnTxt}>Make Payment</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </View>

  );
};

export default Webinar;
