import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from './style';
import { svgs, colors } from '@common';
import { imageurl } from '../../Services/constants';
import Pdf from 'react-native-pdf';
import RazorpayCheckout from 'react-native-razorpay';

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
      {
        recentIssueDetail.payment_type == "Paid" ? (
          <ScrollView style={{ paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
            <View>
              <Image style={styles.ScreenshotImage} source={{ uri: imageurl + recentIssueDetail.image }} />
              <Text style={styles.gravidTitleText}>{recentIssueDetail.title}</Text>
              <Text style={styles.novemberText}>November-December 2022</Text>
            </View>
            <TouchableOpacity style={styles.buyIssuesButton} onPress={() => {
              var options = {
                description: 'Credits towards consultation',
                image: imageurl + "uploads/setting/41142.png",
                currency: 'INR',
                key: 'rzp_live_BlaEnmZv0WaFAe', // Your api key
                amount: parseFloat(recentIssueDetail.amount) * 100,
                name: 'Gravid',
                // prefill: {
                //   email: '',
                //   contact: '',
                //   name: ''
                // },
                theme: { color: '#F37254' }
              }
              RazorpayCheckout.open(options).then((data) => {
                // handle success
                alert(`Success: ${data.razorpay_payment_id}`);
              }).catch((error) => {
                // handle failure
                console.log("error", JSON.stringify(error));
                // alert(`Error: ${error.code} | ${error.description}`);
              });
            }}>
              <Text style={styles.buyIssuesText}>Buy Issues for {recentIssueDetail.amount}</Text>
            </TouchableOpacity>

          </ScrollView>
        ) : (
          <Pdf
            trustAllCerts={false}
            source={{ uri: imageurl + recentIssueDetail.file, cache: true }}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page, numberOfPages) => {
              console.log(`Current page: ${page}`);
            }}
            onError={(error) => {
              console.log(error);
            }}
            onPressLink={(uri) => {
              console.log(`Link pressed: ${uri}`);
            }}
            style={styles.pdf} />
        )
      }
    </View>
  );
};

export default RecentIssuesDetail;