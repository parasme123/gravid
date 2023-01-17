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

const PrivacyPolicy = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.haddingView}>
        <Text style={styles.haddingTxt}>Privacy Policy</Text>
      </View>
      <View style={styles.radiusView} />
      <ScrollView>
        <View>
          <Text style={styles.policyTxt}>A terms and conditions agreement outlines the rules that your website or mobile app users must follow. They usually cover topics such restricted behavior, payment terms, acceptable use, and more that we cover below. Read on to learn more about terms and conditions agreements, why you should have one, and how to implement one using our sample terms and conditions template.</Text>
          <Text style={styles.policyTxt}>A terms and conditions agreement outlines the rules that your website or mobile app users must follow. They usually cover topics such restricted behavior, payment terms, acceptable use, and more that we cover below. Read on to learn more about terms and conditions agreements, why you should have one, and how to implement one using our sample terms and conditions template.</Text>
        </View>
      </ScrollView>
    </View>

  );
};

export default PrivacyPolicy;
