import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator, Dimensions } from 'react-native';
import styles from './style';
import { svgs, colors } from '@common';
import { imageurl } from '../../Services/constants';
import Pdf from 'react-native-pdf';
import RazorpayCheckout from 'react-native-razorpay';
import Apis from '../../Services/apis';
import RNFetchBlob from 'rn-fetch-blob'
import VideoPlayer from 'react-native-video-controls';
const { width } = Dimensions.get('window');
import { useIsFocused } from '@react-navigation/native';
import RenderHtml from 'react-native-render-html';

const RecordedVideoDetail = (props) => {
  const isFocused = useIsFocused();
  let recordedVideoData = props?.route?.params?.item;
  const [magazineDetail, setMagazineDetail] = useState({})
  const [isLoader, setIsLoader] = useState(false)
  const [playVideoId, setPlayVideoId] = useState()

  useEffect(() => {
    if (!isFocused) {
      setPlayVideoId(null)
    }
  }, [isFocused])

  useEffect(() => {
    setMagazineDetail(recordedVideoData);
  }, [recordedVideoData])

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
      type: 3,
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
        <Text style={styles.haddingTxt}>Recorded Video</Text>
        <View style={{ flex: 3 }} />
      </View>
      <View style={styles.radiusView} />
      {
        magazineDetail.payment_type != "Paid" || magazineDetail?.check_payment?.id ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            {magazineDetail?.url_data?.map((item, index) => {
              return (
                <View style={{ marginBottom: 10 }}>
                  {/* <WebView
                    source={{ html: '<iframe width="100%" height="50%" src="https://drive.google.com/file/d/1vnm4-WoX4ewwgxH80JfppxVN2cjuNEEC/view" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' }}
                    style={{ marginTop: 20 }}
                  /> */}
                  {/* <RenderHtml
                    contentWidth={width}
                    source={{ html: '<iframe width="100%" height="50%" src="https://drive.google.com/file/d/1vnm4-WoX4ewwgxH80JfppxVN2cjuNEEC/view" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' }}
                  /> */}
                  <VideoPlayer
                    paused={playVideoId == item.id ? true : false}
                    source={{ uri: "https://drive.google.com/uc?id=1vnm4-WoX4ewwgxH80JfppxVN2cjuNEEC&export=download", initOptions: ['--codec=avcodec'] }}
                    // source={{ uri: imageurl + 'public\vedio\Tusshar Kapoor 7th Cut.mov' }}
                    onPause={() => console.log("pause")}
                    onPlay={() => setPlayVideoId(item.id)}
                    navigator={props.navigator}
                    onError={err => console.log("err", err)}
                    style={{ width: width, height: 200 }}
                  />
                </View>
              )
            })
            }
          </ScrollView>
        ) : (
          <ScrollView style={{ paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
            <View>
              <Image style={styles.ScreenshotImage} source={{ uri: imageurl + magazineDetail.file }} />
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
                  <Text style={styles.buyIssuesText}>Buy Video {magazineDetail.amount}</Text>
                )
              }
            </TouchableOpacity>

          </ScrollView>
        )
      }
    </View>
  );
};

export default RecordedVideoDetail;