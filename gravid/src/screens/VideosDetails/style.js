import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from "@common";
// const { width } = Dimensions.get('window');
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
        justifyContent: 'space-between'
    },
    haddingTxt: {
        fontFamily: fonts.OptimaBold,
        color: colors.black,
        fontSize: 18,
    },
    radiusView: {
        height: 50,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: "white",
        marginTop: -30,
    },
    // backicon: {
    //     height: 32, width: 32, resizeMode: 'contain'
    // },
    // termstxt: {
    //     fontSize: 15, lineHeight: 25, color: colors.black,
    //     fontWeight: '500'
    // },
    imageBackgroundImage: {
        // resizeMode:"contain",
        width: '100%',
        height: 230,
        borderRadius: 20,
        resizeMode: "cover",
        alignItems: 'center',
        justifyContent: 'center',
        // alignSelf:'center'

    },
    CONTRIBUTORSTEXT: {
        marginTop: 25,
        color: '#262626',
        fontSize: 17,
        fontWeight: 'bold',
        marginHorizontal:25
    },
    gravidDigestText: {
        fontSize: 16,
        color: '#808080',
        marginTop: 5,
        marginHorizontal:25
    },
    buyIssuesButton: {
        backgroundColor: '#FE887E',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
        height: 43
    },
    buyIssuesText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 17,
    },
    loremText: {
        marginTop: 30,
        lineHeight: 18,
        color: '#929397'
    },
    playVideoIcons: {
        width: 100,
        height: 100
    }
})
export default styles;