import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, ImageBackground, Dimensions } from 'react-native';
import styles from './style';
import { svgs, colors } from '@common';
import { imageurl } from '../../Services/constants';
import RenderHtml from 'react-native-render-html';
const { width, height } = Dimensions.get('window')

const VideosDetails = (props) => {
    const videoDetail = props?.route?.params?.item;

    return (
        <View style={styles.container}>
            <View style={styles.haddingView}>
                <TouchableOpacity style={{ flex: 3 }} onPress={() => props.navigation.goBack()}>
                    {svgs.backArrow("black", 24, 24)}
                </TouchableOpacity>
                <Text style={styles.haddingTxt}>Videos</Text>
                <View style={{ flex: 3 }} />
            </View>
            <View style={styles.radiusView} />
            <ScrollView style={{ paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
                <View>
                    <ImageBackground source={{ uri: imageurl + videoDetail.image }} style={styles.imageBackgroundImage} >
                        <Image style={styles.playVideoIcons} source={require('../../assets/images/playIcons.png')} />
                    </ImageBackground>
                    <Text style={styles.CONTRIBUTORSTEXT}>{videoDetail.title}</Text>
                    <Text style={styles.gravidDigestText}>Gravid Digest India | May-June 2022</Text>
                </View>
                <RenderHtml
                    contentWidth={width}
                    source={{ html: videoDetail.description }}
                />

                {/* <Text style={styles.loremText}>{videoDetail.description}</Text> */}
            </ScrollView>
        </View>
    );
};

export default VideosDetails;