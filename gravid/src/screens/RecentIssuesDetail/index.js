import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
import styles from './style';
import { svgs, colors } from '@common';
import { imageurl } from '../../Services/constants';
import Pdf from 'react-native-pdf';
import RazorpayCheckout from 'react-native-razorpay';
import Apis from '../../Services/apis';

const RecentIssuesDetail = (props) => {
  let recentIssueDetail = props?.route?.params?.item;
  const [magazineDetail, setMagazineDetail] = useState({})
  const [isLoader, setIsLoader] = useState(false)

  useEffect(() => {
    setMagazineDetail(recentIssueDetail);
  }, [recentIssueDetail])

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

  const handleRazorpay = () => {
    var options = {
      description: 'Credits towards consultation',
      image: imageurl + "uploads/setting/41142.png",
      currency: 'INR',
      key: 'rzp_test_hFsfNBkztof8dv', // Your api key
      amount: parseFloat(magazineDetail.amount) * 100,
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
      console.log(`Success: ${data.razorpay_payment_id}`);
      handleUpdatePayment(data.razorpay_payment_id)
    }).catch((error) => {
      // handle failure
      console.log("error", JSON.stringify(error));
      // alert(`Error: ${error.code} | ${error.description}`);
    });
  }

  const handleUpdatePayment = (paymentID) => {
    setIsLoader(true)
    const params = {
      type: 1,
      type_id: magazineDetail.id,
      pay_id: paymentID,
      currency: "INR",
      amount: parseFloat(magazineDetail.amount),
      rozerpay_status: "success"
    }
    Apis.updatePayment(params)
      .then(async (json) => {
        console.log('datalistHomePage=====:', JSON.stringify(json));
        if (json.status == true) {
          alert("Payment Success")
          setMagazineDetail({ ...magazineDetail, check_payment: json.data });
        }
        setIsLoader(false)
      }).catch((error) => {
        console.log("error", error);
        setIsLoader(false)
      })
  }

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
        magazineDetail.payment_type != "Paid" || magazineDetail?.check_payment?.id ? (
          <Pdf
            trustAllCerts={false}
            source={{ uri: imageurl + magazineDetail.file, cache: true }}
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
        ) : (
          <ScrollView style={{ paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
            <View>
              <Image style={styles.ScreenshotImage} source={{ uri: imageurl + magazineDetail.image }} />
              <Text style={styles.gravidTitleText}>{magazineDetail.title}</Text>
              <Text style={styles.novemberText}>{magazineDetail.short_description}</Text>
            </View>
            <TouchableOpacity
              style={styles.buyIssuesButton}
              disabled={isLoader}
              onPress={handleRazorpay}
            >
              {
                isLoader ? (
                  <ActivityIndicator />
                ) : (
                  <Text style={styles.buyIssuesText}>Buy Issues for {magazineDetail.amount}</Text>
                )
              }
            </TouchableOpacity>

          </ScrollView>
        )
      }
    </View>
  );
};

export default RecentIssuesDetail;