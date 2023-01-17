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
    alignItems: "center"
  },
  haddingTxt: {
    flex: 3,
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
    paddingHorizontal: 4
  },
  NewsLetterView: {
    marginHorizontal: 8,
    marginBottom: 16,
    backgroundColor: colors.white,
    borderWidth: 0.4,
    borderColor: "#00000029",
    borderBottomWidth: 3,
    borderBottomColor:  "#00000010",
    alignItems: "center",
    borderRadius: 5,
    width: width / 2 - 20,
  },
  newsleftView: {
    paddingBottom: 12,
    paddingHorizontal: 12,
  },
  newsImg: {
    width: width / 2 - 18,
    height: 150,
    borderRadius: 5,
    // borderTopLeftRadius: 5,
    // borderTopRightRadius: 5
  },
  bkmrkBtn: {
    flexDirection: "row",
    alignItems: "center"
  },
  bkmrkBtnTxt: {
    fontFamily: fonts.OptimaRegular,
    color: colors.black,
    fontSize: 10,
    lineHeight: 17,
    marginLeft: 4
  },
  bkmrkIcn: {
    backgroundColor: colors.white,
    padding: 6,
    borderRadius: 100
  },
  issuetitle: {
    marginTop: 20,
    fontFamily: fonts.OptimaBold,
    color: colors.black,
    fontSize: 16,
    lineHeight: 17
  },
  issueDes: {
    marginTop: 8,
    fontFamily: fonts.OptimaRegular,
    color: colors.gray,
    fontSize: 13,
    lineHeight: 16
  },

});

export default styles;