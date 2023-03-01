import React from 'react';
import { Text, View ,TouchableOpacity,ScrollView, Image} from 'react-native';
import styles from './style';
import { svgs, colors } from '@common';

const RecentBlogsDetail = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.haddingView}>
                <TouchableOpacity style={{ flex: 3 }} onPress={() => navigation.goBack()}>
                    {svgs.backArrow("black", 24, 24)}
                </TouchableOpacity>
                <Text style={styles.haddingTxt}>Recent Blogs</Text>
                <View style={{ flex: 3 }} />
            </View>
            <View style={styles.radiusView} />
            <ScrollView style={{ paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
              <View>
                <Image style={styles.ScreenshotImage} source={require('../../assets/images/recentBlogsListImage.png')}/>
                <Text style={styles.CONTRIBUTORSTEXT}>CONTRIBUTORS</Text>
                <Text style={styles.gravidDigestText}>Gravid Digest India | May-June 2022</Text>
              </View>
             <Text style={styles.loremText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus undearchitect ooptio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</Text>
            </ScrollView>
        </View>
    );
};

export default RecentBlogsDetail;