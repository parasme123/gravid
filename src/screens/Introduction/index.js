/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { ImageBackground, Image, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import styles from './styles';
const Introduction = (props) => {
  const sliders = [
    { title: "PREGNANCY", des: "Stay informed , active and connected with the experts and a community during your entire pregnancy journey.", img: require('../../assets/images/intro1.jpg'), height: 332, width: 307 },
    { title: "PARENTING", des: "Get the support you need from experts and a safe community to do your best as a Parent", img: require('../../assets/images/intro2.jpg'), height: 321, width: 321 },
    { title: "PERSONAL GROWTH", des: "Stay in the best of your health at a physical, emotional and Mental Level. Thrive in every area of your life.", img: require('../../assets/images/intro3.jpg'), height: 321, width: 325 }
  ];

  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    // setTimeout(() => {
    //   props.navigation.navigate("introduction")
    // }, 2000);
  }, [])

  const handleNext = () => {
    if (activeIndex > 1) {
      props.navigation.navigate("welcome")
    } else {
      setActiveIndex(activeIndex + 1)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.swiper}>
        {/* <SwiperFlatList
          autoplay={true}
          autoplayDelay={5}
          autoplayLoop
          // index={2}
          showPagination
          data={["1"]}
          paginationStyleItemActive={styles.activeSliderpage}
          paginationStyleItemInactive={styles.inActiveSliderpage}
          renderItem={({ item }) => ( */}
        <View style={styles.child}>
          <Image style={{ height: sliders[activeIndex].height, width: sliders[activeIndex].width }} source={sliders[activeIndex].img} />
          <Text style={styles.introTitle}>{sliders[activeIndex].title}</Text>
          <Text style={styles.text}>{sliders[activeIndex].des}</Text>
        </View>
        {/* )}
        /> */}
        <View style={{ flexDirection: "row" }}>
          <View style={activeIndex == 0 ? styles.activeSliderpage : styles.inActiveSliderpage} />
          <View style={activeIndex == 1 ? styles.activeSliderpage : styles.inActiveSliderpage} />
          <View style={activeIndex == 2 ? styles.activeSliderpage : styles.inActiveSliderpage} />
        </View>
      </View>
      <View style={styles.btnMainView}>
        <TouchableOpacity style={styles.skipBtn} onPress={() => props.navigation.navigate("welcome")}>
          <Text style={styles.skipBtnTxt}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipBtn} onPress={handleNext}>
          <Text style={styles.nextBtnTxt}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default Introduction;
