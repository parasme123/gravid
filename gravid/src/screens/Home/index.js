/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { ImageBackground, Image, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View, TouchableOpacity, TextInput, FlatList, LogBox } from 'react-native';
import { svgs, colors } from '@common';
import Modal from "react-native-modal";
import styles from './styles';
import Swiper from 'react-native-swiper'
import Apis from '../../Services/apis';
import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { imageurl } from '../../Services/constants';
// const imageurl = "https://rasatva.apponedemo.top/gravid/"
import RenderHtml from 'react-native-render-html';

const Home = (props, { route }) => {
  const [userData, setUserData] = useState({})
  const [userProfile, setUserProfile] = useState({})
  const [modalVisible, setModalVisible] = useState(false);
  const [textinputVal, setTextinputVal] = useState("Gravid Digital 1 Year")
  const [price, setPrice] = useState("1800")
  const [type, setType] = useState("Select")

  const [sliderlist, setSliderList] = useState([])
  const [issuelist, setIssueList] = useState([])
  const [blogslist, setBlogsList] = useState([])
  const [videolist, setVideoList] = useState([])
  const [btmSlider, setBtmSlider] = useState([])
  const [showslider, setShowSlider] = useState(true)

  React.useEffect(async () => {
    HomePagedata();
    try {
      const jsondata = await AsyncStorage.getItem('valuedata');
      if (jsondata !== null) {
        var newVal = JSON.parse(jsondata);
        setUserData(newVal)
      }
    } catch (error) {
      // Error retrieving data
    }
    try {
      const userProfile = await AsyncStorage.getItem('userProfile');
      console.log('userProfile+++++++++++++++', userProfile);
      if (userProfile !== null) {
        var newVal = JSON.parse(userProfile);
        setUserProfile(newVal)
      }
    } catch (error) {
      // Error retrieving data
    }
  }, [])

  const HomePagedata = () => {
    const params = {

    }
    Apis.HomePagedata(params)
      .then(async (json) => {
        // console.log('datalistHomePage=====:', JSON.stringify(json));
        if (json.status == true) {
          setBlogsList(json.data.blog.data);
          setSliderList(json.data.sliders.data)
          setVideoList(json.data.expVedios.data);
          setIssueList(json.data.issuelist.data);
          setBtmSlider(json.data.other_sliders.data);
        }
      })
  }

  const renderslider = ({ item, index }) => (
    <TouchableOpacity onPress={index == 1 ? () => setModalVisible(true) : null}>
      <Image style={styles.subscribeOfferImg}
        source={{ uri: imageurl + item.image }}
      />
      {/* <ImageBackground source={require('../../assets/images/pregnant-black-woman.png')}
        style={styles.subscribeOfferImg}>
        <Image source={{ uri: imageurl + item.image }} style={styles.gravidimg} />
        <Text style={styles.yearlydis}>{item.title}</Text>
        <Text numberOfLines={2} style={styles.destxt}>{item.description}</Text>
        <TouchableOpacity style={styles.subscribeBtn}>
          <Text style={styles.subscribeBtnTxt}>SUBSCRIBE</Text>
        </TouchableOpacity>
      </ImageBackground> */}
    </TouchableOpacity>
  )
  const renderItemIssue = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={[styles.currenIssueView, index == 0 ? { marginLeft: 15 } : null]}
        onPress={() => props.navigation.navigate("RecentIssuesDetail")}
      >
        <View style={styles.leftView}>
          <View style={styles.isFreeView}>
            <Text style={styles.isFree}>{item.payment_type}</Text>
          </View>
          <Text style={styles.issuetitle} numberOfLines={2}>{item.title}</Text>
          <RenderHtml
            contentWidth={100}
            source={{ html: item.description }}
          />

          {/* <Text style={styles.issueDes} numberOfLines={2} > {item.description} </Text> */}
          <TouchableOpacity style={[styles.bkmrkBtn, { marginTop: 10 }]}>
            <View style={styles.bkmrkIcn}>
              {svgs.bookmark("", 8, 8)}
            </View>
            <Text style={styles.bkmrkBtnTxt}>Bookmark</Text>
          </TouchableOpacity>
        </View>
        <Image source={{ uri: imageurl + item.image }} style={styles.issueImg} />
      </TouchableOpacity>
    );
  };

  const renderItemNewsLetter = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate("RecentBlogsDetail")}
        style={[styles.NewsLetterView, index == 0 ? { marginLeft: 15 } : null]}
      >
        <Image source={{ uri: imageurl + item.image }} style={styles.newsImg} />
        <View style={styles.newsleftView}>
          <View style={styles.bookanddo}>
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
          <Text style={styles.issueDes} numberOfLines={2}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItemvideo = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate("VideosDetails")}
        style={[styles.NewsLetterView2, index == 0 ? { marginLeft: 15 } : null]}>
        <Image source={{ uri: imageurl + item.image }} style={styles.newsImg} />
        <View style={styles.newsleftView}>
          <View style={styles.bookanddo}>
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
          <Text style={styles.issueDes} numberOfLines={2}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
        <View style={styles.child}>
          <TouchableOpacity
            onPress={() => { props.navigation.navigate('Profile') }}>
            <Image style={styles.signupImg} source={userData?.profile ? { uri: imageurl + userData?.profile } : require('../../assets/images/profileicon.png')} />
          </TouchableOpacity>
          <View style={styles.headingText}>
            {/* <Text style={styles.hello}>{userData?.fname}</Text> */}
            <Text style={styles.hello}>{userData?.name} {userData?.lname}</Text>
            {/* <Text style={styles.userName}>{userData?.lname}</Text> */}
          </View>
        </View>
        <View style={styles.searchBoxView}>
          {svgs.search(colors.grayRegular, 17, 17)}
          <TextInput
            placeholder='Search'
            style={styles.searchBox}
          />
        </View>
        <View style={[styles.subscribeOfferImg, { marginTop: 20 }]}>
          {showslider ?
            <AppIntroSlider
              data={sliderlist}
              doneLabel=''
              nextLabel=''
              autoplay={true}
              renderItem={renderslider}
              dotStyle={{ backgroundColor: 'transparent', }}
              activeDotStyle={{ backgroundColor: 'transparent', }}
            />
            : null
          }
        </View>

        <View style={styles.sliderHadding}>
          <Text style={styles.haddingTxt}>Current Issue</Text>
          <TouchableOpacity style={styles.viewAllBtn} onPress={() => props.navigation.navigate("currentIssue")}>
            <Text style={styles.viewAllTxt}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={issuelist}
          renderItem={renderItemIssue}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
        <View style={styles.sliderHadding}>
          <Text style={styles.haddingTxt}>Blogs & Articles</Text>
          <TouchableOpacity style={styles.viewAllBtn} onPress={() => props.navigation.navigate("blogs", { adsense: btmSlider })}>
            <Text style={styles.viewAllTxt}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={blogslist}
          // style={{ paddingLeft: 24 }}
          renderItem={renderItemNewsLetter}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
        // extraData={selectedId}
        />
        <View style={styles.sliderHadding}>
          <Text style={styles.haddingTxt}>Video Library</Text>
          <TouchableOpacity style={styles.viewAllBtn} onPress={() => props.navigation.navigate("Video_Library")}>
            <Text style={styles.viewAllTxt}>View All</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={{ paddingHorizontal: 10 }}> */}
        <FlatList
          data={videolist}
          // style={{ paddingLeft: 14 }}
          renderItem={renderItemvideo}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
        {/* </View> */}
        <View style={styles.endView} >
          <Swiper style={{}}
            activeDotStyle={{ backgroundColor: 'transparent', }}
            dotStyle={{ backgroundColor: 'transparent', }}
            autoplay={true}
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

        <Modal
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          onBackButtonPress={() => setModalVisible(false)}
        >
          <View style={{ backgroundColor: "white", borderRadius: 10 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ position: "absolute", top: -34, left: -34 }}>
                <Image source={require('../../assets/images/Polygon-off.png')} style={styles.discount} />
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
              <TouchableOpacity style={styles.submitBtn} onPress={() => { setModalVisible(false) }}>
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