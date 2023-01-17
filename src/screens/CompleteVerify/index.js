/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState, useRef } from 'react';
import { ImageBackground, Image, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View, TouchableOpacity, TextInput } from 'react-native';

import { svgs, colors } from '@common';
import styles from './styles';

const CompleteVerify = (props) => {
  const [term, setTerm] = useState(false)

  const handleSubmit = () => {
    props.navigation.navigate("completeVerifydoc")
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.haddingView}>
          <Text style={styles.haddingTxt}>Tell us Something About you !</Text>
        </View>
        <View style={styles.mainView}>
          <TouchableOpacity style={styles.btn}>
            <View style={styles.imgView}>
              <Image style={styles.btnImg} source={require('../../assets/images/planning.png')} />
            </View>
            <Text style={styles.btnTxt}>Planning</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <View style={styles.imgView}>
              <Image style={styles.btnImg} source={require('../../assets/images/carring.png')} />
            </View>
            <Text style={styles.btnTxt}>Carrying</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <View style={styles.imgView}>
              <Image style={styles.btnImg} source={require('../../assets/images/mom.png')} />
            </View>
            <Text style={styles.btnTxt}>Mom</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpBtn} onPress={handleSubmit}>
            <Text style={styles.signUpBtnTxt}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>

  );
};

export default CompleteVerify;
