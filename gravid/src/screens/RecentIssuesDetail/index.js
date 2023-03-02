import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from './style';
import { svgs, colors } from '@common';
import { imageurl } from '../../Services/constants';

const RecentIssuesDetail = (props) => {
  const recentIssueDetail = props?.route?.params?.item;

  // useEffect(() => {
  //   HomePagedata();
  // }, [])

  // const HomePagedata = () => {
  //   const params = {
  //     id: BlogDetail.id,
  //     type: 1
  //   }
  //   Apis.HomeListsDetails(params)
  //     .then(async (json) => {
  //       console.log('Detail=====:', JSON.stringify(json))
  //       if (json.status == true) {
  //         setDetail(json.data)
  //       }
  //     })
  // }

  return (
    <View style={styles.container}>
      <View style={styles.haddingView}>
        <TouchableOpacity style={{ flex: 3 }} onPress={() => props.navigation.goBack()}>
          {svgs.backArrow("black", 24, 24)}
        </TouchableOpacity>
        <Text style={styles.haddingTxt}>Magazine</Text>
        <View style={{ flex: 3 }} />
      </View>
      <View style={styles.radiusView} />
      <ScrollView style={{ paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
        <View>
          <Image style={styles.ScreenshotImage} source={{ uri: imageurl + recentIssueDetail.image }} />
          <Text style={styles.gravidTitleText}>{recentIssueDetail.title}</Text>
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