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

const Home = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [textinputVal, setTextinputVal] = useState("Gravid Digital 1 Year")
  const [price, setPrice] = useState("1800")
  const [type, setType] = useState("Select")

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
  ];

  const renderItemIssue = ({ item }) => {
    return (
      <TouchableOpacity style={styles.currenIssueView} onPress={!item?.isFree ? () => setModalVisible(true) : null}>
        <View style={styles.leftView}>
          <View style={styles.isFreeView}>
            <Text style={styles.isFree}>{item?.isFree ? "Free" : "Paid"}</Text>
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
      <TouchableOpacity style={styles.NewsLetterView}>
        <Image source={item.img} style={styles.newsImg} />
        <View style={styles.newsleftView}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <TouchableOpacity style={styles.bkmrkBtn}>
              <View style={styles.bkmrkIcn}>
                {svgs.bookmark("", 8, 8)}
              </View>
              <Text style={styles.bkmrkBtnTxt}>Bookmark</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bkmrkBtn}>
              <View style={styles.bkmrkIcn}>
                {svgs.download("", 12, 12)}
              </View>
              <Text style={styles.bkmrkBtnTxt}>Download</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.issuetitle} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.issueDes} numberOfLines={2}>{item.des}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItemvideo = ({ item }) => {
    return (
      <TouchableOpacity style={styles.NewsLetterView}>
        <Image source={item.img} style={styles.newsImg} />
        <View style={styles.newsleftView}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <TouchableOpacity style={styles.bkmrkBtn}>
              <View style={styles.bkmrkIcn}>
                {svgs.bookmark("", 8, 8)}
              </View>
              <Text style={styles.bkmrkBtnTxt}>Bookmark</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bkmrkBtn}>
              <View style={styles.bkmrkIcn}>
                {svgs.download("", 12, 12)}
              </View>
              <Text style={styles.bkmrkBtnTxt}>Download</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.issuetitle} numberOfLines={2}>{item.title}</Text>
          {/* <Text style={styles.issueDes} numberOfLines={2}>{item.des}</Text> */}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar translucent={true} backgroundColor={"light-dark"} /> */}
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.child}>
          <Image style={styles.signupImg} source={require('../../assets/images/homeProfile.png')} />
          <View style={styles.headingText}>
            <Text style={styles.hello}>Hello,</Text>
            <Text style={styles.userName}>Elena Patricia</Text>
          </View>
        </View>
        <View style={styles.searchBoxView}>
          {svgs.search(colors.grayRegular, 17, 17)}
          <TextInput
            placeholder='Search'
            style={styles.searchBox}
          />
        </View>
        <View>
          <Image style={styles.subscribeOfferImg} source={require('../../assets/images/subscribe-offer.png')} />
        </View>
        <View style={styles.sliderHadding}>
          <Text style={styles.haddingTxt}>Current Issue</Text>
          <TouchableOpacity style={styles.viewAllBtn} onPress={() => props.navigation.navigate("currentIssue")}>
            <Text style={styles.viewAllTxt}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={DATA}
          style={{ paddingLeft: 24 }}
          renderItem={renderItemIssue}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
        // extraData={selectedId}
        />
        <View style={styles.sliderHadding}>
          <Text style={styles.haddingTxt}>Newsletter Blog</Text>
          <TouchableOpacity style={styles.viewAllBtn} onPress={() => props.navigation.navigate("blogs")}>
            <Text style={styles.viewAllTxt}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={DATA}
          style={{ paddingLeft: 24 }}
          renderItem={renderItemNewsLetter}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
        // extraData={selectedId}
        />
        <View style={styles.sliderHadding}>
          <Text style={styles.haddingTxt}>Explore Video</Text>
          <TouchableOpacity style={styles.viewAllBtn}>
            <Text style={styles.viewAllTxt}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={DATA}
          style={{ paddingLeft: 24 }}
          renderItem={renderItemvideo}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
        // extraData={selectedId}
        />
        <View style={styles.endView}>
          <Image style={styles.endImg} source={require('../../assets/images/home-end.png')} />
        </View>

        <Modal
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          onBackButtonPress={() => setModalVisible(false)}
        >
          <View style={{ backgroundColor: "white", borderRadius: 10 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ position: "absolute", top: -34, left: -34 }}>
                <Image source={require('../../assets/images/Polygon-off.png')} style={{ height: 100, width: 100, borderRadius: 20 }} />
              </View>
              <View style={{ position: "absolute", top: 0, left: 0 }}>
                <Image source={require('../../assets/images/off-text.png')} style={{ height: 40, width: 40 }} />
              </View>
              <View style={{ alignItems: "center", marginHorizontal: 20, marginTop: 10 }}>
                <Image source={require('../../assets/images/GRAVID_O.png')} style={{ height: 104, width: 104 }} />
                <Text style={styles.offHadding}>Now Enjoy Reading the latest Gravid Readings on the app</Text>
                <Text style={styles.offDes}>Subscribe to Gravid Digital & Get Unlimited Access anywhere , anytime.</Text>
                <Text style={styles.offType}>Gravid Digital</Text>
                <Image source={require('../../assets/images/digital-reading.png')} style={styles.digitalReading} />
              </View>
              <TextInput
                style={styles.gravidTime}
                editable={false}
                value={textinputVal}
              />
              <View style={styles.priceView}>
                <TextInput
                  style={styles.gravidPrice}
                  editable={false}
                  value={price}
                />
                <TextInput
                  style={styles.gravidSelect}
                  editable={false}
                  value={type}
                />
              </View>
              <TouchableOpacity style={styles.submitBtn}>
                <Text style={styles.submitBtnTxt}>SUBMIT</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Modal>

      </ScrollView>
    </View>

  );
};

export default Home;
