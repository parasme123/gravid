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
  const [aboutSelected, setAboutSelected] = useState([])

  const handleSubmit = () => {
    props.navigation.navigate("completeVerifydoc")
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
          <Text style={styles.haddingTxt}>Tell us Something About you !</Text>
        </View>
        <View style={styles.mainView}>
          <TouchableOpacity style={styles.btn} onPress={() => selectCat("planning")}>
            <View style={styles.imgView}>
              <Image style={styles.btnImg} source={require('../../assets/images/planning.png')} />
            </View>
            <Text style={styles.btnTxt}>Planning</Text>
            {
              aboutSelected.includes("planning") ? (
                <View style={styles.selectedView}>
                  {svgs.selectedClick(colors.themeColor, 12, 10)}
                </View>
              ) : null
            }
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => selectCat("carring")}>
            <View style={styles.imgView}>
              <Image style={styles.btnImg} source={require('../../assets/images/carring.png')} />
            </View>
            <Text style={styles.btnTxt}>Carrying</Text>
            {
              aboutSelected.includes("carring") ? (
                <View style={styles.selectedView}>
                  {svgs.selectedClick(colors.themeColor, 12, 10)}
                </View>
              ) : null
            }
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => selectCat("mom")}>
            <View style={styles.imgView}>
              <Image style={styles.btnImg} source={require('../../assets/images/mom.png')} />
            </View>
            <Text style={styles.btnTxt}>Mom</Text>
            {
              aboutSelected.includes("mom") ? (
                <View style={styles.selectedView}>
                  {svgs.selectedClick(colors.themeColor, 12, 10)}
                </View>
              ) : null
            }
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => selectCat("personal")}>
            <View style={styles.imgView}>
              <Image style={styles.btnImg} source={require('../../assets/images/growth.png')} />
            </View>
            <Text style={styles.btnTxt}>Personal Growth</Text>
            {
              aboutSelected.includes("personal") ? (
                <View style={styles.selectedView}>
                  {svgs.selectedClick(colors.themeColor, 12, 10)}
                </View>
              ) : null
            }
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
