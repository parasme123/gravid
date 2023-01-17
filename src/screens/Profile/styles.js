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
    flexDirection: "row",
    alignItems: "center"
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
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    paddingLeft: 16,
    paddingBottom: 40,
    marginBottom: 40,
    borderBottomWidth: 0.4,
    borderBottomColor: colors.gray
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
  signOutTxt:{
    fontFamily: fonts.OptimaBlack,
    color: colors.black,
    fontSize: 18,
    marginLeft: 16
  }
});

export default styles;