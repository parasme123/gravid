/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { ImageBackground, Image, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View, TouchableOpacity, TextInput, FlatList, Dimensions, Linking } from 'react-native';
import Modal from "react-native-modal";
import { svgs, colors } from '@common';
import styles from './styles';
import Swiper from 'react-native-swiper';
import Apis from '../../Services/apis';
import { imageurl } from '../../Services/constants';
import RenderHtml from 'react-native-render-html';
const { width, height } = Dimensions.get('window')
import RazorpayCheckout from 'react-native-razorpay';

// const imageurl = "https://rasatva.apponedemo.top/gravid/"
const WebinarDetail = (props) => {
  const paid = props.route.params.paid
  const [modalVisible, setModalVisible] = useState(false);
  const [delail, setDetail] = useState();

  useEffect(() => {
    // console.log("paid", paid);
    // if (paid.payment_type == "Paid") {
    //   setModalVisible(true)
    // };
    HomePagedata();
  }, [])

  const HomePagedata = () => {
    const params = {
      id: paid.id
    }
    Apis.webinar_detail(params)
      .then(async (json) => {
        console.log('Detail=====:', JSON.stringify(json))
        if (json.status == true) {
          setDetail(json.data)
        }
      })
  }

  const handleRazorpay = () => {
    var options = {
      description: 'Credits towards consultation',
      image: imageurl + "uploads/setting/41142.png",
      currency: 'INR',
      key: 'rzp_test_hFsfNBkztof8dv', // Your api key
      amount: parseFloat(delail?.amount) * 100,
      name: 'Gravid',
      // prefill: {
      //   email: '',
      //   contact: '',
      //   name: ''
      // },
      theme: { color: '#F37254' }
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      setModalVisible(false)
      console.log(`Success: ${data.razorpay_payment_id}`);
      handleUpdatePayment(data.razorpay_payment_id)
    }).catch((error) => {
      // handle failure
      setModalVisible(false)
      console.log("error", JSON.stringify(error));
      // alert(`Error: ${error.code} | ${error.description}`);
    });
  }

  const handleUpdatePayment = (paymentID) => {
    const params = {
      type: 2,
      type_id: delail?.id,
      pay_id: paymentID,
      currency: "INR",
      amount: parseFloat(delail?.amount),
      rozerpay_status: "success"
    }
    Apis.updatePayment(params)
      .then(async (json) => {
        console.log('datalistHomePage=====:', JSON.stringify(json));
        if (json.status == true) {
          HomePagedata()
          alert("Payment Success")
        }
      })
  }

  const handleJoinWebinar = async () => {
    await Linking.openURL("https://meet.google.com/crx-zbws-jad");
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
          {/* <Text style={styles.webinarDes}>{delail?.description}</Text> */}
          <RenderHtml
            contentWidth={width}
            source={{ html: delail?.description }}
          />
          {
            delail?.check_payment?.id || delail?.payment_type == "Free" ? (
              <TouchableOpacity style={styles.joinWebinarBtn} onPress={handleJoinWebinar}>
                <Text style={styles.joinWebinarBtnTxt}>Get Link</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.joinWebinarBtn} onPress={() => { setModalVisible(true) }}>
                <Text style={styles.joinWebinarBtnTxt}>Join Webinar</Text>
              </TouchableOpacity>
            )
          }
        </View>
        {/* <View>
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
        </View> */}

      </ScrollView>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
      >
        <View style={{ backgroundColor: "white", borderRadius: 10, marginHorizontal: 25 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ alignItems: "center", marginHorizontal: 20, marginTop: 10 }}>
              <Image source={require('../../assets/images/GRAVID_O.png')} style={{ height: 104, width: 104 }} />
              <Text style={styles.offHadding}>To Access Paid Features{'\n'} you need to pay</Text>
              <Text style={styles.offDes}>{delail?.amount}</Text>
            </View>
            <TouchableOpacity style={styles.submitBtn} onPress={handleRazorpay}>
              <Text style={styles.submitBtnTxt}>Make Payment</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </View>

  );
};

export default WebinarDetail;
