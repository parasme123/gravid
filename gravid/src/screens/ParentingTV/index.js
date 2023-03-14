import react, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import { svgs, colors } from '@common';
import VideoPlayer from 'react-native-video-controls';
import { imageurl } from '../../Services/constants';
import Video from 'react-native-video';
const { width } = Dimensions.get('window');
import { useIsFocused } from '@react-navigation/native';

const ParentingTV = (props) => {
    const isFocused = useIsFocused();
    const [isPaused, setIsPaused] = useState(false);
    const playerRef = useRef(null)
    const videoUrl = 'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4';

    useEffect(() => {
        setIsPaused(!isFocused)
    }, [isFocused])
    return (
        <View style={styles.container}>
            <View style={styles.haddingView}>
                <TouchableOpacity style={{ flex: 3 }} onPress={() => props.navigation.goBack()}>
                    {svgs.backArrow("black", 24, 24)}
                </TouchableOpacity>
                <Text style={styles.haddingTxt}>Parenting TV</Text>
                <View style={{ flex: 3 }} />
            </View>
            <View style={styles.radiusView} />
            {/* <Video
                source={{ uri: videoUrl }}
                resizeMode="contain"
                style={{ width: 250, height: 200 }}
                controls
            /> */}
            <VideoPlayer
                paused={isPaused}
                source={{ uri: 'https://rasatva.apponedemo.top/gravid/public/vedio/Tusshar_Kapoor_7th.mp4', initOptions: ['--codec=avcodec'] }}
                // source={{ uri: imageurl + 'public\vedio\Tusshar Kapoor 7th Cut.mov' }}
                onPause={() => console.log("pause")}
                onPlay={() => console.log("Play")}
                navigator={props.navigator}
                onError={err => console.log("err", err)}
                style={{ width: width, height: 100 }}
            />
            {/* <ScrollView style={{ paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
                
            </ScrollView> */}
        </View>
    )
}
export default ParentingTV 