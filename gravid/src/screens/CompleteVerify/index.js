/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState, useRef } from 'react';
import { ImageBackground, Image, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { svgs, colors } from '@common';
import styles from './styles';
import Apis from '../../Services/apis';
import { imageurl } from '../../Services/constants';
// const imageurl = "https://rasatva.apponedemo.top/gravid/"

const CompleteVerify = (props) => {
  const handleSubmit = () => {
    props.navigation.navigate("BottomTabs")
  }
  const [momlist, setMomList] = useState([])
  useEffect(() => {
    CategoryApi()
  }, [])
  const [righticon, setRighIcon] = useState('0')
  const selectArrow = (index) => {
    setRighIcon(index)
  }
  const CategoryApi = () => {
    const params = {

    }
    Apis.CategoryApi(params)
      .then(async (json) => {
        console.log('CategoryApi=====:', JSON.stringify(json));
        if (json.status == true) {
          setMomList(json.data)
        }

      })
  }

  const renderItem = ({ item, index }) => (
    <View>
      <TouchableOpacity onPress={() => { selectArrow(index) }} style={[styles.btn]}>
        <View style={styles.imgView}>
          <Image style={styles.btnImg} source={{ uri: imageurl + item.image }} />
        </View>
        <Text style={styles.btnTxt}>{item.title}</Text>
      </TouchableOpacity>
      <ImageBackground style={styles.rightbg}
        source={righticon == index ? require('../../assets/images/Rectangle.png') : null}>
        <Image style={styles.rightimg}
          source={righticon == index ? require('../../assets/images/rightsvg.png') : null} />
      </ImageBackground>
    </View>
  )
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.haddingView}>
          <Text style={styles.haddingTxt}>Tell us a bit about you!</Text>
        </View>
        <View style={styles.mainView}>
          <View>
            <FlatList
              data={momlist}
              renderItem={renderItem}
            />
          </View>
          <TouchableOpacity style={styles.signUpBtn} onPress={() => { handleSubmit() }}>
            <Text style={styles.signUpBtnTxt}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>

  );
};

export default CompleteVerify;
