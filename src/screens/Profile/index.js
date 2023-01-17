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

const Profile = (props) => {
  const handleEditProfile = () => {
    props.navigation.navigate("profileEdit");
  }

  const handleReferral = () => {
    props.navigation.navigate("referral");
  }

  const handleTermCondition = () => {
    props.navigation.navigate("termCondition");
  }

  const handlePrivacyPolicy = () => {
    props.navigation.navigate("privacyPolicy");
  }

  return (
    <View style={styles.container}>
      <View style={styles.haddingView}>
        <Text style={styles.haddingTxt}>Profile</Text>
      </View>
      <View style={styles.radiusView} />
      <ScrollView nestedScrollEnabled={true}>
        <View style={{ marginHorizontal: 16 }}>
          <TouchableOpacity style={styles.editBtn} onPress={handleEditProfile}>
            {svgs.editProfile(colors.black, 16, 14)}
            <Text style={styles.editTxt}>Edit</Text>
          </TouchableOpacity>
          <View style={styles.profileHeader}>
            <Image source={require('../../assets/images/profile.png')} style={{ width: 80, height: 80 }} />
            <Text style={styles.userName}>Darlene Robertson</Text>
          </View>
          <View style={styles.active}>
            {svgs.activeDot(colors.activeDot, 8, 8)}
            <Text style={styles.activeTxt}>Active</Text>
          </View>
          <TouchableOpacity style={styles.profileOption}>
            <View style={styles.optionLeftView}>
              {svgs.userIcon(colors.themeColor, 20, 20)}
              <Text style={styles.optionTxt}>My Account</Text>
            </View>
            <View>
              {svgs.rightArrow(colors.themeColor, 10, 14)}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileOption} onPress={handleReferral}>
            <View style={styles.optionLeftView}>
              {svgs.refferal(colors.themeColor, 20, 20)}
              <Text style={styles.optionTxt}>Referral</Text>
            </View>
            <View>
              {svgs.rightArrow(colors.themeColor, 10, 14)}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileOption}>
            <View style={styles.optionLeftView}>
              {svgs.list(colors.themeColor, 20, 20)}
              <Text style={styles.optionTxt}>List of Doctors</Text>
            </View>
            <View>
              {svgs.rightArrow(colors.themeColor, 10, 14)}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileOption} onPress={handleTermCondition}>
            <View style={styles.optionLeftView}>
              {svgs.termCondition(colors.themeColor, 20, 20)}
              <Text style={styles.optionTxt}>Term & condition</Text>
            </View>
            <View>
              {svgs.rightArrow(colors.themeColor, 10, 14)}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileOption} onPress={handlePrivacyPolicy}>
            <View style={styles.optionLeftView}>
              {svgs.privacyPolicy(colors.themeColor, 20, 20)}
              <Text style={styles.optionTxt}>Privacy Policy</Text>
            </View>
            <View>
              {svgs.rightArrow(colors.themeColor, 10, 14)}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signOutBtn}>
            {svgs.signOut(colors.white, 20, 20)}
            <Text style={styles.signOutTxt}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
