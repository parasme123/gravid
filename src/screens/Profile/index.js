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

  return (
    <View style={styles.container}>
      <View style={styles.haddingView}>
        <Text style={styles.haddingTxt}>Profile</Text>
      </View>
      <View style={styles.radiusView} />
      <ScrollView nestedScrollEnabled={true}>
        <View style={{ marginHorizontal: 16 }}>
          <TouchableOpacity style={{ flexDirection: "row", backgroundColor: "#F8E3DA", alignSelf: "flex-end", paddingVertical: 6, paddingHorizontal: 16, borderRadius: 16, alignItems:"center" }}>
            {svgs.editProfile(colors.black, 16, 14)}
            <Text>Edit</Text>
          </TouchableOpacity>
          <View style={styles.profileHeader}>
            <Image source={require('../../assets/images/profile.png')} style={{ width: 126, height: 126 }} />
            <Text style={styles.userName}>Darlene Robertson</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
