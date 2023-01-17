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
    flexDirection: "row",
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center"
  },
  haddingTxt: {
    flex: 3,
    fontFamily: fonts.OptimaBold,
    color: colors.black,
    fontSize: 20,
    textAlign: "center",
    lineHeight: 32
  },
  radiusView: {
    paddingTop: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "white",
    marginTop: -30,
  },
  profileHeader: {
    // flexDirection: "row",
    alignSelf: "center",
    marginBottom: 80
  },
  userName: {
    fontFamily: fonts.OptimaBold,
    color: colors.black,
    fontSize: 20,
    lineHeight: 32,
    marginLeft: 14
  },
  editBtn: {
    flexDirection: "row",
    backgroundColor: "#F8E3DA",
    alignSelf: "flex-end",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center"
  },
  editTxt: {
    fontFamily: fonts.OptimaBlack,
    color: colors.black,
    fontSize: 14,
    // lineHeight: 32,
    marginLeft: 4
  },
  active: {
    position: "absolute",
    top: 12,
    right: -4,
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: 4
  },
  activeTxt: {
    fontFamily: fonts.OptimaBlack,
    color: colors.black,
    fontSize: 13,
    marginLeft: 4
    // lineHeight: 32,
  },
  profileOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 32
  },
  optionLeftView: {
    flexDirection: "row",
    alignItems: "center"
  },
  optionTxt: {
    fontFamily: fonts.OptimaBlack,
    color: colors.black,
    fontSize: 18,
    marginLeft: 16
    // lineHeight: 32,
  },
  signOutBtn: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: colors.themeColor,
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginTop: 20
  },
  signOutTxt: {
    fontFamily: fonts.OptimaBlack,
    color: colors.black,
    fontSize: 18,
    marginLeft: 16
  },
  formInputView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 0.4,
    borderBottomColor: colors.grayRegular,
  },
  signupInput: {
    width: "86%",
    marginLeft: 12,
    paddingVertical: 5,
    fontFamily: fonts.OptimaRoman,
    color: colors.inputPlaceHolder,
    fontSize: 14,
  },
  signUpBtn: {
    backgroundColor: colors.themeColor,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    padding: 5,
    marginTop: 30,
    marginBottom: 30,
  },
  signUpBtnTxt: {
    fontFamily: fonts.OptimaBold,
    color: colors.black,
    fontSize: 16
  },  
});

export default styles;