import react, { useRef } from "react";
import { View, Text, TouchableOpacity, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import { svgs, colors } from '@common';
import VideoPlayer from 'react-native-video-controls';
import { imageurl } from '../../Services/constants';

const ParentingTV = (props) => {
    const playerRef = useRef(null)
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
            <ScrollView style={{ paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
                <VideoPlayer
                    source={{ uri: imageurl + 'public\vedio\Tusshar Kapoor 7th Cut.mov' }}
                    onPause={() => console.log("pause")}
                    onPlay={() => console.log("onPlay")}
                    navigator={props.navigator}
                />
            </ScrollView>
        </View>
    )
}
export default ParentingTV 