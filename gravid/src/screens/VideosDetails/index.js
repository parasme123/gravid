import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native';
import styles from './style';
import { svgs, colors } from '@common';

const VideosDetails = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.haddingView}>
                <TouchableOpacity style={{ flex: 3 }} onPress={() => navigation.goBack()}>
                    {svgs.backArrow("black", 24, 24)}
                </TouchableOpacity>
                <Text style={styles.haddingTxt}>Videos</Text>
                <View style={{ flex: 3 }} />
            </View>
            <View style={styles.radiusView} />
            <ScrollView style={{ paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
                <View>
                    <ImageBackground source={require('../../assets/images/recentBlogsListImage.png')} style={styles.imageBackgroundImage} >

                        <TouchableOpacity>
                            <Image style={styles.playVideoIcons} source={require('../../assets/images/playIcons.png')} />
                        </TouchableOpacity>
                    </ImageBackground>
                    <Text style={styles.CONTRIBUTORSTEXT}>CONTRIBUTORS</Text>
                    <Text style={styles.gravidDigestText}>Gravid Digest India | May-June 2022</Text>
                </View>
                <Text style={styles.loremText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus undearchitect ooptio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</Text>
            </ScrollView>
        </View>
    );
};

export default VideosDetails;