/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState, useRef } from 'react';
import { ImageBackground, Image, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View, TouchableOpacity, TextInput } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { svgs, colors } from '@common';
import styles from './styles';

const OtpVerify = (props) => {
  const [term, setTerm] = useState(false)
  const handleTerm = () => {
    setTerm(!term)
  }
  const handleSubmit = () => {
    props.navigation.navigate("completeVerify")
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.child}>
          <Image style={styles.signupImg} source={require('../../assets/images/otp-verify.png')} />
        </View>
        <View style={styles.formMainView}>
          <Text style={styles.welcmTxt}>Verification Code</Text>
          <Text style={styles.signinTxt}>We have sent the code verification to Your Mobile Number</Text>
          <View style={styles.formInputView}>
            <OTPInputView
              style={styles.otpBox}
              pinCount={4}
              // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              // onCodeChanged = {code => { this.setState({code})}}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={(code => {
                props.navigation.navigate("completeVerify")
              })}
            />
          </View>
          <TouchableOpacity style={styles.signUpBtn} onPress={handleSubmit}>
            <Text style={styles.signUpBtnTxt}>Submit</Text>
          </TouchableOpacity>
          <Text style={styles.alreadyAct}>Didn't receive an OTP? </Text>
          <TouchableOpacity>
            <Text style={[styles.alreadyAct, styles.termTxt]}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>

  );
};

export default OtpVerify;
