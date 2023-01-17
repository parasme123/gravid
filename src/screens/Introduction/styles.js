import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from "@common";
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  swiper: {
    height: 600,
    // marginHorizontal: 52,
    justifyContent: "center",
    alignItems: "center"
  },
  child: {
    flex: 1,
    // flexDirection: "column",
    width,
    justifyContent: 'center',
    alignItems: "center"
  },
  introTitle: {
    fontFamily: fonts.OptimaBold,
    color: colors.themeColor,
    marginTop: 34,
    marginBottom: 14,
    fontSize: 26,
    textAlign: "center",
  },
  text: {
    // fontSize: width * 0.5,
    fontFamily: fonts.OptimaBold,
    color: colors.grayRegular,
    marginHorizontal: 24,
    fontSize: 14,
    textAlign: "center",
  },
  activeSliderpage: {
    width: 26,
    height: 10,
    borderRadius:10,
    backgroundColor: colors.themeColor,
    marginHorizontal: 4,
  },
  inActiveSliderpage: {
    width: 10,
    height: 10,
    borderRadius:10,
    backgroundColor: colors.themeRegular,
    marginHorizontal: 4,
  },
  btnMainView: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 24,
    marginTop: 100
  },
  skipBtn: {
    padding: 5
  },
  skipBtnTxt: {
    fontFamily: fonts.OptimaBold,
    color: colors.gray,
    marginHorizontal: 24,
    fontSize: 18
  },
  nextBtnTxt: {
    fontFamily: fonts.OptimaBold,
    color: colors.themeColor,
    marginHorizontal: 24,
    fontSize: 18
  },
});

export default styles;