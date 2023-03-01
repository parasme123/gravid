import React from 'react';
import { Text, View ,TouchableOpacity,ScrollView, Image} from 'react-native';
import styles from './style';
import { svgs, colors } from '@common';

const RecentIssuesDetail = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.haddingView}>
                <TouchableOpacity style={{ flex: 3 }} onPress={() => navigation.goBack()}>
                    {svgs.backArrow("black", 24, 24)}
                </TouchableOpacity>
                <Text style={styles.haddingTxt}>Recent Issues</Text>
                <View style={{ flex: 3 }} />
            </View>
            <View style={styles.radiusView} />
            <ScrollView style={{ paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
              <View>
                <Image style={styles.ScreenshotImage} source={require('../../assets/images/Screenshot.png')}/>
                <Text style={styles.gravidTitleText}>Gravid Digest India</Text>
                <Text style={styles.novemberText}>November-December 2022</Text>
              </View>
              <TouchableOpacity style={styles.buyIssuesButton}>
                <Text style={styles.buyIssuesText}>Buy Issues for 179.00</Text>
              </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default RecentIssuesDetail;