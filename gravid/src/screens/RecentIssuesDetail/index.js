import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
import styles from './style';
import { svgs, colors } from '@common';
import { imageurl } from '../../Services/constants';
import Pdf from 'react-native-pdf';
import RazorpayCheckout from 'react-native-razorpay';
import Apis from '../../Services/apis';
import RNFetchBlob from 'rn-fetch-blob'

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
      key: 'rzp_test_2dCKxMSjz9CEKT', // Your api key
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

  const handleDownload = (pdfUrl) => {
    RNFetchBlob.config({
      fileCache: true,
      // android only options, these options be a no-op on IOS
      addAndroidDownloads: {
        // Show notification when response data transmitted
        notification: true,
        // Title of download notification
        title: magazineDetail.title,
        // File description (not notification description)
        description: magazineDetail.short_description,
        mime: 'image/png',
        // Make the file scannable  by media scanner
        mediaScannable: true,
      }
    }).fetch('GET', pdfUrl).then((res) => {
      console.log("res", res);
    }).catch((err) => {
      console.log("err", err);
    })
  }

  const getDownloadsFile = () => {
    const android = RNFetchBlob.android

    RNFetchBlob.config({
      addAndroidDownloads: {
        // useDownloadManager: true,
        title: 'awesome.apk',
        description: 'An APK that will be installed',
        mime: 'application/pdf',
        mediaScannable: true,
        notification: true,
      }
    }).fetch(
      'GET',
      `http://www.example.com/awesome.apk`
    ).then((res) => {
      android.actionViewIntent(res.path(), 'application/vnd.android.package-archive')
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
          // <View style={{flexDirection:"row"}}>
          //   <TouchableOpacity style={{borderWidth:1, alignSelf:"flex-end"}}>
          //     <Text>Download</Text>
          //   </TouchableOpacity>
          <View style={{ flex: 1, marginLeft: 24 }}>
            {/* <TouchableOpacity style={styles.downloadBtn} onPress={() => handleDownload(imageurl + magazineDetail.file)}>
              <Text style={styles.downloadBtnTxt}>Download</Text>
            </TouchableOpacity> */}
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
          </View>
          // </View>
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