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

const ProfileEdit = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.haddingView}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => props.navigation.goBack()}>
          {svgs.backArrow("black", 24, 24)}
        </TouchableOpacity>
        <Text style={styles.haddingTxt}>Edit Profile</Text>
        <View style={{ flex: 1, }} />
      </View>
      <View style={styles.radiusView} />
      <ScrollView nestedScrollEnabled={true}>
        <View style={{ marginHorizontal: 16 }}>
          <View style={styles.profileHeader}>
            <Image source={require('../../assets/images/profile.png')} style={{ width: 80, height: 80 }} />
            <TouchableOpacity style={styles.active}>
              {svgs.camera(colors.black, 14, 14)}
            </TouchableOpacity>
          </View>
          <View style={styles.formInputView}>
            {svgs.userIcon(colors.grayRegular, 18, 20)}
            <TextInput
              style={styles.signupInput}
              placeholder="User Name"
              keyboardType='text'
            />
          </View>
          <View style={styles.formInputView}>
            {svgs.email(colors.grayRegular, 18, 20)}
            <TextInput
              style={styles.signupInput}
              placeholder="User Email"
              keyboardType='text'
            />
          </View>
          <View style={styles.formInputView}>
            {svgs.yogo(colors.grayRegular, 18, 20)}
            <TextInput
              style={styles.signupInput}
              placeholder="User Detail"
              keyboardType='text'
            />
          </View>
          <TouchableOpacity style={styles.signUpBtn}>
            <Text style={styles.signUpBtnTxt}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileEdit;
