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

const WebinarDetail = (props) => {
  const [modalVisible, setModalVisible] = useState(true);
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

  return (
    <View style={styles.container}>
      <View style={styles.haddingView}>
        <Text style={styles.haddingTxt}>Webinar Detail</Text>
      </View>
      <View style={styles.radiusView} />
      <ScrollView nestedScrollEnabled={true}>
        <View style={{ marginHorizontal: 20 }}>
          <Image source={require('../../assets/images/webinar-detail.png')} style={{ width: "100%", height: 200 }} />
          <Text style={styles.webinarTitle}>It is a long established fact a reader be distracted</Text>
          <Text style={styles.webinarDes}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</Text>
          <Text style={[styles.webinarDes, { marginTop: 6 }]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</Text>
          <Text style={styles.webinarTitle}>It is a long established fact a reader be distracted</Text>
          <Text style={styles.webinarDes}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</Text>
          <Text style={[styles.webinarDes, { marginTop: 6 }]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</Text>

          <TouchableOpacity style={styles.joinWebinarBtn}>
            <Text style={styles.joinWebinarBtnTxt}>Join Webinar</Text>
          </TouchableOpacity>
        </View>
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
      </ScrollView>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
      >
        <View style={{ backgroundColor: "white", borderRadius: 10, marginHorizontal:20 }}>
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

export default WebinarDetail;
