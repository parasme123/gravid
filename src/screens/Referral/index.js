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

const Referral = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.haddingView}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => props.navigation.goBack()}>
          {svgs.backArrow("black", 24, 24)}
        </TouchableOpacity>
        <Text style={styles.haddingTxt}>My Referral</Text>
        <View style={{ flex: 1, }} />
      </View>
      <View style={styles.radiusView} />
      <ScrollView nestedScrollEnabled={true}>
        <View style={{ marginHorizontal: 16 }}>
          <Text style={styles.referralHadding}>You and Colleagues Will get</Text>
          <Text style={styles.referralPrice}>1 Referral = Rs.100/-</Text>
          <View style={styles.profileHeader}>
            <Image source={require('../../assets/images/profile.png')} style={{ width: 120, height: 120 }} />
          </View>
          <Text style={styles.imgBottomTxt}>Refer a Colleague</Text>
          <View style={styles.referralCodeView}>
            <Text style={styles.codeTxt}>ABCDEFT1542</Text>
            <TouchableOpacity style={styles.tapToCopyBtn}>
              <Text style={styles.tapToCopyBtnTxt}>Tap to copy</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.points}>Invite your friends and get buzz points</Text>
          <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 16 }}>
            <TouchableOpacity style={styles.shareBtn}>
              {svgs.facebook()}
              <Text style={styles.shareBtnTxt}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareBtn}>
              {svgs.whatsapp()}
              <Text style={styles.shareBtnTxt}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareBtn}>
              {svgs.instagram()}
              <Text style={styles.shareBtnTxt}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareBtn}>
              {svgs.linkdin()}
              <Text style={styles.shareBtnTxt}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareBtn}>
              {svgs.twitter()}
              <Text style={styles.shareBtnTxt}>Facebook</Text>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center", marginTop: 50 }}>
            <Image source={require('../../assets/images/global.png')} style={{ width: 43, height: 43 }} />
            <Text>www.Gravid.In</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Referral;
