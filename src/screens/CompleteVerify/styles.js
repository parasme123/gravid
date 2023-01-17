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
    marginTop: -32,
    borderRadius: 40,
    backgroundColor: colors.white,
    paddingTop: 45
  },
  btn: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginHorizontal: 24,
    borderWidth: 1,
    borderColor: colors.themeColor,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFC"
  },
  btnTxt: {
    fontFamily: fonts.OptimaBold,
    color: colors.black,
    fontSize: 22,
    lineHeight: 32
  },
  imgView: {
    borderWidth: 0.3,
    borderColor: colors.themeColor,
    borderRadius: 100,
    padding: 10,
    marginRight: 24,
    backgroundColor: colors.white
  },
  btnImg: {
    width: 38,
    height: 38
  },
  signUpBtn: {
    backgroundColor: colors.themeColor,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    padding: 5,
    marginTop: 70,
    marginBottom: 30,
    marginHorizontal: 50
  },
  signUpBtnTxt: {
    fontFamily: fonts.OptimaBold,
    color: colors.black,
    fontSize: 16
  },
  selectedView: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: colors.white,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius:5,
  }
});

export default styles;