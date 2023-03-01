/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { ImageBackground, Image, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Modal from "react-native-modal";
import { svgs, colors } from '@common';
import styles from './styles';
import Swiper from 'react-native-swiper';
import Apis from '../../Services/apis';
import { imageurl } from '../../Services/constants';
// const imageurl = "https://rasatva.apponedemo.top/gravid/"
const WebinarDetail = ({ props, route }) => {
  const paid = route.params.paid
  const [modalVisible, setModalVisible] = useState(false);
  const [delail, setDetail] = useState("");

  useEffect(() => {
    if (paid == "Paid") {
      setModalVisible(true)
    };
    HomePagedata();
  }, [])

  const HomePagedata = () => {
    const params = {
      id: '1'
    }
    Apis.webinar_detail(params)
      .then(async (json) => {
        console.log('Detail=====:', JSON.stringify(json))
        if (json.status == true) {
          setDetail(json.data)
        }
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.haddingView}>
        <TouchableOpacity style={{ flex: 3 }} onPress={() => props.navigation.goBack()}>
          {svgs.backArrow("black", 24, 24)}
        </TouchableOpacity>
        <Text style={styles.haddingTxt}>Webinar Detail</Text>
        <View style={{ flex: 3 }} />
      </View>
      <View style={styles.radiusView} />
      <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
        <View style={{ marginHorizontal: 20 }}>
          <Image source={{ uri: imageurl + delail?.image }} style={{ width: "100%", height: 200 }} />
          <Text style={styles.webinarTitle}>{delail?.title}</Text>
          <Text style={styles.webinarDes}>{delail?.description}</Text>

          <TouchableOpacity style={styles.joinWebinarBtn} onPress={() => { setModalVisible(true) }}>
            <Text style={styles.joinWebinarBtnTxt}>Join Webinar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Swiper style={{ height: 330 }}
            activeDotStyle={{ backgroundColor: 'transparent', }}
            dotStyle={{ backgroundColor: 'transparent', }}
            autoplay={true}
          >
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
          </Swiper>
        </View>

      </ScrollView>
      <Modal
        isVisible={modalVisible}
      // onBackdropPress={() => setModalVisible(true)}  
      // onBackButtonPress={() => setModalVisible(false)}
      >
        <View style={{ backgroundColor: "white", borderRadius: 10, marginHorizontal: 25 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ alignItems: "center", marginHorizontal: 20, marginTop: 10 }}>
              <Image source={require('../../assets/images/GRAVID_O.png')} style={{ height: 104, width: 104 }} />
              <Text style={styles.offHadding}>To Access Paid Features{'\n'} you need to pay</Text>
              <Text style={styles.offDes}>$10</Text>
            </View>
            <TouchableOpacity style={styles.submitBtn} onPress={() => { setModalVisible(false) }}>
              <Text style={styles.submitBtnTxt}>Make Payment</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </View>

  );
};

export default WebinarDetail;
