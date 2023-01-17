import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from "@common";
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  haddingView: {
    backgroundColor: colors.themeColor,
    paddingTop: 16,
    paddingBottom: 40,
  },
  haddingTxt: {
    fontFamily: fonts.OptimaBold,
    color: colors.black,
    fontSize: 20,
    textAlign: "center",
    lineHeight: 32
  },
  mainView: {
    marginTop: -30,
    borderRadius: 39,
    backgroundColor: colors.white,
    paddingTop: 45,
    paddingHorizontal: 24
  },
  btn: {
    marginHorizontal: 12,
    borderRadius: 10,
    marginBottom: 32,
    flexDirection: "row",
    width: width / 2.5,
    justifyContent: "center"
  },
  btnTxt: {
    fontFamily: fonts.OptimaBold,
    color: colors.white,
    fontSize: 20,
  },
  imgView: {
    borderWidth: 2,
    borderColor: colors.themeColor,
    borderRadius: 12,
    marginRight: 24
  },
  btnImg: {
    width: width / 3,
    height: width / 3,
    borderRadius: 10,
  },
  signUpBtn: {
    backgroundColor: colors.themeColor,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    padding: 5,
    marginTop: 40,
    marginBottom: 30,
    marginHorizontal: 50
  },
  signUpBtnTxt: {
    fontFamily: fonts.OptimaBold,
    color: colors.black,
    fontSize: 16
  },
  termCondition: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 12,
  },
  termConditionTxt: {
    fontFamily: fonts.OptimaRoman,
    color: colors.inputPlaceHolder,
    fontSize: 15,
    marginLeft: 12,
    lineHeight: 25,
    // marginTop:15
  },
  termTxt: {
    color: colors.themeColor,
  },
  linearGradient: {
    borderRadius: 10,
    position: "absolute",
    left: 0,
    bottom: 2,
    height: width / 3,
    width: width / 3,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 6
  },
  selectedView: {
    position: "absolute",
    top: -4,
    right: 14,
    backgroundColor: colors.white,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius:5,
    zIndex:999
  }
});

export default styles;