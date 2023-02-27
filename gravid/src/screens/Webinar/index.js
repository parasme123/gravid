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
import Swiper from 'react-native-swiper';
import Apis from '../../Services/apis';
import { imageurl } from '../../Services/constants';
// const imageurl = "https://rasatva.apponedemo.top/gravid/"

const Webinar = (props) => {
  // const [modalVisible, setModalVisible] = useState(true);
  // const [textinputVal, setTextinputVal] = useState("Gravid Digital 1 Year")
  // const [price, setPrice] = useState("1800")
  const [type, setType] = useState("live")
  const handleWebinarType = (type) => {
    setType(type)
  }

  const handleWebinarDetail = (item) => {
    props.navigation.navigate("webinarDetail", { paid: item.payment_type })
  }

  const DATA = [
    {
      id: "1",
      title: "Scary Thing That You Don't Get Enough Sleep",
      des: "Far far away, behind the word mountains, far from the countries...",
      freetxt: 'Free',
      img: require('../../assets/images/current-issue.png')
    },
    {
      id: "2",
      title: "Scary Thing That You Don't Get Enough Sleep",
      des: "Far far away, behind the word mountains, far from the countries...",
      freetxt: "Paid",
      img: require('../../assets/images/current-issue.png')
    },

  ];

  useEffect(() => {
    HomePagedata();
    recoder();
  }, [])
  const [webinarrecoded, setWebinarRecoded] = useState([])
  const [webinarLive, setWebinarListApi] = useState([])

  const HomePagedata = () => {
    const params = {
      type: type == 'live'
    }
    Apis.webinarlistLive(params)
      .then(async (json) => {
        console.log('live=====:', JSON.stringify(json))
        if (json.status == true) {
          setWebinarListApi(json.data)
        }
      })
  }

  const recoder = () => {
    const params = {
      type: type == 'recorded'
    }
    Apis.webinarrecoded(params)
      .then(async (json) => {
        console.log('recorded=====:', JSON.stringify(json))
        if (json.status == true) {
          setWebinarRecoded(json.data)
        }
      })
  }
  const LiverenderItem = ({ item }) => {
    return (
      <View style={styles.NewsLetterView} >
        <TouchableOpacity onPress={() => handleWebinarDetail(item)}>
          <Image source={{ uri: imageurl + item.image }} style={styles.newsImg} />
        </TouchableOpacity>
        {/* {
          type == "live" ? (
            <> */}
              <View style={styles.paidType}>
                <Text style={styles.paidTypeTxt}>{item.payment_type}</Text>
              </View>
              <View style={styles.wifiCon}>
                {svgs.webinar(colors.black, 12, 12)}
              </View>
            {/* </>
          ) : null
        } */}
        <View style={styles.newsleftView}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 5 }}>
            <View style={styles.bkmrkBtn}>
              <View style={styles.bkmrkIcn}>
                {svgs.clock(colors.gray, 12, 12)}
              </View>
              <Text style={styles.bkmrkBtnTxt}>5 min.</Text>
            </View>
          </View>
          <Text style={styles.issuetitle} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.issueDes} >{item.description}</Text>
        </View>
      </View>
    );
  };

  const recordrenderItem = ({ item }) => {
    return (
      <View style={styles.NewsLetterView} >
        <TouchableOpacity onPress={() => handleWebinarDetail(item)}>
          <Image source={{ uri: imageurl + item.image }} style={styles.newsImg} />
        </TouchableOpacity>
        <View style={styles.paidType}>
          <Text style={styles.paidTypeTxt}>{item.payment_type}</Text>
        </View>
        <View style={styles.wifiCon}>
          {svgs.webinar(colors.black, 12, 12)}
        </View>
        <View style={styles.newsleftView}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 5 }}>

            <View style={styles.bkmrkBtn}>
              <View style={styles.bkmrkIcn}>
                {svgs.clock(colors.gray, 12, 12)}
              </View>
              <Text style={styles.bkmrkBtnTxt}>5 min.</Text>
            </View>
          </View>
          <Text style={styles.issuetitle} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.issueDes} >{item.description}</Text>
        </View>
      </View>
    );
  };
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
  return (
    <View style={styles.container}>
      <View style={styles.haddingView}>
        <TouchableOpacity style={{ flex: 3 }} onPress={() => props.navigation.goBack()}>
          {svgs.backArrow("black", 24, 24)}
        </TouchableOpacity>
        <Text style={styles.haddingTxt}>Webinar</Text>
        <View style={{ flex: 3 }} />
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
        {
          type == "live" ?
            <>
              <FlatList
                data={webinarLive}
                numColumns={2}
                style={{ paddingLeft: 16, marginTop: 26, flexDirection: "row" }}
                renderItem={LiverenderItem}
                keyExtractor={(item) => item.id}
              />
            </>
            :
            <>
              <FlatList
                data={webinarrecoded}
                numColumns={2}
                style={{ paddingLeft: 16, marginTop: 26, flexDirection: "row" }}
                renderItem={recordrenderItem}
                keyExtractor={(item) => item.id}
              />
            </>
        }



        <View style={styles.pregnantBack2} >
          <Swiper style={{ height: 300 }}
            activeDotStyle={{ backgroundColor: 'transparent', }}
            dotStyle={{ backgroundColor: 'transparent', }}
            autoplay={true}
          >
            <ImageBackground source={require('../../assets/images/pregnant-black-woman.png')}
              resizeMethod='resize' style={styles.pregnantBack}>
              <View style={{ flex: 5 }}>
                <Text style={styles.subscribeTxt}>Save Big and get access to the complete “Gravid Library” with Gravid Annual Membership</Text>
                <TouchableOpacity style={styles.subscribeBtn}>
                  <Text style={styles.subscribeBtnTxt}>SUBSCRIBE</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 3 }}>
              </View>
            </ImageBackground>
            <ImageBackground source={require('../../assets/images/pregnant-black-woman.png')}
              resizeMethod='resize' style={styles.pregnantBack}>
              <View style={{ flex: 5 }}>
                <Text style={styles.subscribeTxt}>Save Big and get access to the complete “Gravid Library” with Gravid Annual Membership</Text>
                <TouchableOpacity style={styles.subscribeBtn}>
                  <Text style={styles.subscribeBtnTxt}>SUBSCRIBE</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 3 }}>
              </View>
            </ImageBackground>
          </Swiper>
        </View>

        <FlatList
          data={DATA}
          style={{ paddingLeft: 16, bottom: 40 }}
          renderItem={renderItemIssue}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
        <View style={styles.endView} >
          <Swiper style={{}}
            activeDotStyle={{ backgroundColor: 'transparent', }}
            dotStyle={{ backgroundColor: 'transparent', }}
            autoplay={true}
          >
            <Image style={styles.endImg} source={require('../../assets/images/home-end.png')} />
            <Image style={styles.endImg} source={require('../../assets/images/home-end.png')} />
            <Image style={styles.endImg} source={require('../../assets/images/home-end.png')} />
            <Image style={styles.endImg} source={require('../../assets/images/home-end.png')} />
          </Swiper>
        </View>
      </ScrollView>
    </View>

  );
};

export default Webinar;
