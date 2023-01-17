/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState, useRef } from 'react';
import { ImageBackground, Image, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View, TouchableOpacity, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { svgs, colors } from '@common';
import styles from './styles';

const CompleteVerifyDoc = (props) => {
  const [term, setTerm] = useState(false)
  const [aboutSelected, setAboutSelected] = useState([])
  const handleTerm = () => {
    setTerm(!term)
  }

  const handleSignUp = () => {
    props.navigation.navigate("signup")
  }

  const selectCat = (item) => {
    let newSelected = [...aboutSelected]
    if (newSelected.includes(item)) {
      setAboutSelected(newSelected.filter((data) => data != item))
    } else {
      newSelected.push(item)
      setAboutSelected(newSelected)
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.haddingView}>
          <Text style={styles.haddingTxt}>Tell us your Interests !</Text>
        </View>
        <View style={styles.mainView}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.btn} onPress={() => selectCat("zumba")}>
              {
                aboutSelected.includes("zumba") ? (
                  <View style={styles.selectedView}>
                    {svgs.selectedClick(colors.themeColor, 12, 10)}
                  </View>
                ) : null
              }
              <View style={styles.imgView}>
                <Image style={styles.btnImg} source={require('../../assets/images/zumba.png')} />
              </View>
              <LinearGradient colors={['#FFFFFF00', '#4B4B4B']} style={styles.linearGradient}>
                <Text style={styles.btnTxt}>Zumba</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => selectCat("paediatrics")}>
              {
                aboutSelected.includes("paediatrics") ? (
                  <View style={styles.selectedView}>
                    {svgs.selectedClick(colors.themeColor, 12, 10)}
                  </View>
                ) : null
              }
              <View style={styles.imgView}>
                <Image style={styles.btnImg} source={require('../../assets/images/pedeitric.png')} />
              </View>
              <LinearGradient colors={['#FFFFFF00', '#4B4B4B']} style={styles.linearGradient}>
                <Text style={styles.btnTxt}>Paediatrics</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.btn} onPress={() => selectCat("gynaecology")}>
              {
                aboutSelected.includes("gynaecology") ? (
                  <View style={styles.selectedView}>
                    {svgs.selectedClick(colors.themeColor, 12, 10)}
                  </View>
                ) : null
              }
              <View style={styles.imgView}>
                <Image style={styles.btnImg} source={require('../../assets/images/Obstetrics-Gynaecology.png')} />
              </View>
              <LinearGradient colors={['#FFFFFF00', '#4B4B4B']} style={styles.linearGradient}>
                <Text style={styles.btnTxt}>Gynaecology</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => selectCat("yoga")}>
              {
                aboutSelected.includes("yoga") ? (
                  <View style={styles.selectedView}>
                    {svgs.selectedClick(colors.themeColor, 12, 10)}
                  </View>
                ) : null
              }
              <View style={styles.imgView}>
                <Image style={styles.btnImg} source={require('../../assets/images/Yoga.png')} />
              </View>
              <LinearGradient colors={['#FFFFFF00', '#4B4B4B']} style={styles.linearGradient}>
                <Text style={styles.btnTxt}>Yoga</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.btn} onPress={() => selectCat("meditation")}>
              {
                aboutSelected.includes("meditation") ? (
                  <View style={styles.selectedView}>
                    {svgs.selectedClick(colors.themeColor, 12, 10)}
                  </View>
                ) : null
              }
              <View style={styles.imgView}>
                <Image style={styles.btnImg} source={require('../../assets/images/shutterstock.png')} />
              </View>
              <LinearGradient colors={['#FFFFFF00', '#4B4B4B']} style={styles.linearGradient}>
                <Text style={styles.btnTxt}>Meditation</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => selectCat("aerobics")}>
              {
                aboutSelected.includes("aerobics") ? (
                  <View style={styles.selectedView}>
                    {svgs.selectedClick(colors.themeColor, 12, 10)}
                  </View>
                ) : null
              }
              <View style={styles.imgView}>
                <Image style={styles.btnImg} source={require('../../assets/images/Aerobic-Exercises.png')} />
              </View>
              <LinearGradient colors={['#FFFFFF00', '#4B4B4B']} style={styles.linearGradient}>
                <Text style={styles.btnTxt}>Aerobics</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.termCondition}>
            <TouchableOpacity onPress={handleTerm}>
              {term ? svgs.checkedCheckbox(colors.grayRegular, 18) : svgs.checkbox(colors.grayRegular, 18)}
            </TouchableOpacity>
            <Text style={styles.termConditionTxt}>I would like to Receive Newsletters on Mail</Text>
          </View>
          <TouchableOpacity style={styles.signUpBtn} onPress={() => props.navigation.navigate("bottomTabs")}>
            <Text style={styles.signUpBtnTxt}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>

  );
};

export default CompleteVerifyDoc;
