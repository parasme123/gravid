/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { svgs, colors } from '@common';
import styles from './styles';
import Swiper from 'react-native-swiper';
import Apis from '../../Services/apis';
import { imageurl } from '../../Services/constants';
// const imageurl = "https://rasatva.apponedemo.top/gravid/"
import { useIsFocused } from '@react-navigation/native';

const Webinar = (props) => {
  const isFocused = useIsFocused();
  // const [modalVisible, setModalVisible] = useState(true);
  // const [textinputVal, setTextinputVal] = useState("Gravid Digital 1 Year")
  // const [price, setPrice] = useState("1800")
  const [webinarrecoded, setWebinarRecoded] = useState([])
  const [webinarLive, setWebinarListApi] = useState([])
  const [type, setType] = useState("live")
  const [btmSlider, setBtmSlider] = useState([])
  const [isLoader, setIsLoader] = useState(false)

  const handleWebinarType = (type) => {
    setType(type)
  }

  const handleWebinarDetail = (item) => {
    props.navigation.navigate("webinarDetail", { paid: item })
  }

  useEffect(() => {
    if (isFocused) {
      HomePagedata();
      recoder();
    }
  }, [isFocused])

  const HomePagedata = () => {
    const params = {
      type: type == 'live'
    }
    setIsLoader(true)
    Apis.webinarlistLive(params)
      .then(async (json) => {
        console.log('live=====:', JSON.stringify(json))
        if (json.status == true) {
          setWebinarListApi(json.data.webinarList)
          setBtmSlider(json.data.other_sliders.data);
        }
        setIsLoader(false)
      }).catch((error) => {
        console.log("error", error);
        setIsLoader(false)
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
          setWebinarRecoded(json.data.webinarList)
          setBtmSlider(json.data.other_sliders.data);
        }
      })
  }
  const LiverenderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleWebinarDetail(item)} style={styles.NewsLetterView} >
        <Image source={{ uri: imageurl + item.image }} style={styles.newsImg} />
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
          {/* <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 5 }}>
            <View style={styles.bkmrkBtn}>
              <View style={styles.bkmrkIcn}>
                {svgs.clock(colors.gray, 12, 12)}
              </View>
              <Text style={styles.bkmrkBtnTxt}>5 min.</Text>
            </View>
          </View> */}
          <Text style={styles.issuetitle}>{item.title}</Text>
          <Text style={styles.issueDes}>{item.short_description}</Text>
        </View>
      </TouchableOpacity>
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
          {/* <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 5 }}>

            <View style={styles.bkmrkBtn}>
              <View style={styles.bkmrkIcn}>
                {svgs.clock(colors.gray, 12, 12)}
              </View>
              <Text style={styles.bkmrkBtnTxt}>5 min.</Text>
            </View>
          </View> */}
          <Text style={styles.issuetitle} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.issueDes} >{item.short_description}</Text>
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
      <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
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
          isLoader ? (
            <View style={{ marginTop: 200 }}>
              <ActivityIndicator size="large" />
            </View>
          ) : (
            <View>
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

              {/* <View style={styles.pregnantBack2} >
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
        </View> */}

              {/* <FlatList
          data={DATA}
          style={{ paddingLeft: 16, bottom: 40 }}
          renderItem={renderItemIssue}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
        /> */}
              <View style={styles.endView} >
                <Swiper
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
            </View>
          )
        }
      </ScrollView>
    </View>

  );
};

export default Webinar;
