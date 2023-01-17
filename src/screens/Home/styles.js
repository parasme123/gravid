import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from "@common";
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  child: {
    // justifyContent: 'center',
    alignItems: "center",
    marginHorizontal: 24,
    marginVertical: 20,
    flexDirection: "row"
  },
  signupImg: {
    width: 54,
    height: 54
  },
  headingText: {
    marginLeft: 8
  },
  hello: {
    fontFamily: fonts.OptimaRegular,
    color: colors.grayRegular,
    fontSize: 16,
    // marginBottom: 20,
  },
  userName: {
    fontFamily: fonts.OptimaBold,
    color: colors.black,
    fontSize: 20,
    // marginBottom: 20,
  },
  searchBoxView: {
    backgroundColor: colors.grayLight,
    marginHorizontal: 24,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16
  },
  searchBox: {
    fontFamily: fonts.OptimaBold,
    color: colors.black,
    fontSize: 14,
    marginLeft: 6,
    paddingRight: 12,
    height: 45
  },
  subscribeOfferImg: {
    width: "100%",
    height: 210,
    marginTop: 20
  },
  sliderHadding: {
    marginHorizontal: 24,
    marginVertical: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  haddingTxt: {
    fontFamily: fonts.OptimaBold,
    color: colors.black,
    fontSize: 18,
  },
  viewAllBtn: {
    borderWidth: 1,
    borderColor: colors.themeColor,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
  viewAllTxt: {
    fontFamily: fonts.OptimaRegular,
    color: colors.black,
    fontSize: 10,
  },
  currenIssueView: {
    marginRight: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F9FAFC",
    alignItems: "center"
  },
  leftView: {
    width: width - 200,
    paddingLeft: 18,
    paddingVertical: 12,
  },
  isFreeView: {
    backgroundColor: colors.themeColor,
    // paddingHorizontal: 16,
    paddingVertical: 4,
    width: "30%",
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center"
  },
  isFree: {
    fontFamily: fonts.OptimaRegular,
    color: colors.black,
    fontSize: 10,
  },
  issuetitle: {
    marginTop: 12,
    fontFamily: fonts.OptimaBold,
    color: colors.black,
    fontSize: 13,
    lineHeight: 17
  },
  issueDes: {
    marginTop: 5,
    fontFamily: fonts.OptimaRegular,
    color: colors.gray,
    fontSize: 13,
    lineHeight: 16
  },
  issueImg: {
    width: width / 3,
    height: width / 3
  },
  NewsLetterView: {
    marginRight: 15,
    // flexDirection: "row",
    // justifyContent: "space-between",
    backgroundColor: "#F9FAFC",
    alignItems: "center",
    // paddingTop: 12,
    borderRadius: 5
  },
  newsleftView: {
    width: width - 150,
    paddingBottom: 12,
    paddingHorizontal: 12,
    // borderWidth:1
  },
  newsImg: {
    width: width / 2 + 50,
    height: width / 2 + 50
  },
  bkmrkBtn: {
    flexDirection: "row",
    // marginTop: 12,
    alignItems: "center"
  },
  bkmrkBtnTxt: {
    fontFamily: fonts.OptimaRegular,
    color: colors.black,
    fontSize: 12,
    lineHeight: 17,
    marginLeft: 4
  },
  bkmrkIcn: {
    backgroundColor: colors.white,
    padding: 6,
    borderRadius: 100
  },
  endView: {
    marginHorizontal: 24,
    marginVertical: 35
  },
  endImg: {
    width: "100%",
    height: 122,
    borderRadius: 10
  },
  modalMainView: {
    marginHorizontal: 24,
    backgroundColor: "black"
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  offHadding: {
    fontFamily: fonts.OptimaBold,
    color: colors.black,
    fontSize: 18,
    lineHeight: 24,
    marginTop: 10,
    textAlign: "center"
  },
  offDes: {
    fontFamily: fonts.OptimaRegular,
    color: colors.gray,
    fontSize: 18,
    lineHeight: 24,
    marginTop: 18,
    textAlign: "center"
  },
  offType: {
    fontFamily: fonts.OptimaBold,
    color: colors.black,
    fontSize: 48,
    lineHeight: 24,
    textAlign: "center",
    marginTop: 10,
    lineHeight: 100
  },
  digitalReading: {
    marginTop: 10,
    width: 250,
    height: 176
  },
  gravidTime: {
    marginTop: 18,
    marginHorizontal: 36,
    borderWidth: 1,
    borderColor: "#D8D8D8",
    height: 35,
    paddingVertical: 9,
    paddingHorizontal: 7,
    fontFamily: fonts.OptimaBold,
    color: colors.black,
    fontSize: 14,
    lineHeight: 24,
    borderRadius: 5
  },
  priceView: {
    flexDirection: "row",
    marginHorizontal: 36,
    borderWidth: 1,
    borderColor: "#D8D8D8",
    marginTop: 6,
    marginBottom: 45,
    borderRadius: 5
  },
  gravidPrice: {
    flex: 3,
    height: 35,
    fontFamily: fonts.OptimaBold,
    color: colors.black,
    fontSize: 14,
  },
  gravidSelect: {
    flex: 1,
    height: 35,
    borderLeftWidth: 1,
    borderLeftColor: "#D8D8D8",
    textAlign: "center",
    fontFamily: fonts.OptimaBold,
    color: colors.black,
    fontSize: 14,
  },
  submitBtn: {
    marginBottom: 50,
    paddingVertical: 9,
    marginHorizontal: 60,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.themeColor,
    borderRadius: 5
  },
  submitBtnTxt: {
    fontFamily: fonts.OptimaBold,
    color: colors.black,
    fontSize: 14,
  }
});

export default styles;