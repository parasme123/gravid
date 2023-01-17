/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState, useRef } from 'react';
import { ImageBackground, Image, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View, TouchableOpacity, TextInput } from 'react-native';
import { svgs, colors } from '@common';
import styles from './styles';

const Signin = (props) => {
  const phoneRef = useRef(null);
  const myCountryPickerRef = useRef(null);

  const [term, setTerm] = useState(false)
  const handleTerm = () => {
    setTerm(!term)
  }
  const handleSignUp = () => {
    props.navigation.navigate("signup")
  }

  const handleSignIn = () => {
    props.navigation.navigate("otpverify")
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.child}>
          <Image style={styles.signupImg} source={require('../../assets/images/signup.png')} />
        </View>
        <View style={styles.formMainView}>
          <Text style={styles.welcmTxt}>Sign in</Text>
          <Text style={styles.signinTxt}>Enter your Mobile Number to Continue</Text>
          <View style={styles.formInputView}>
            {svgs.mobileIcon(colors.grayRegular, 18, 20)}
            <TextInput
              style={styles.signupInput}
              placeholder="Phone Number"
              keyboardType='numeric'
            />
          </View>
          <TouchableOpacity style={styles.signUpBtn} onPress={handleSignIn}>
            <Text style={styles.signUpBtnTxt}>SIGN IN</Text>
          </TouchableOpacity>
          <Text style={styles.alreadyAct}>Not have an account? <Text style={styles.termTxt} onPress={handleSignUp}>Sign Up</Text></Text>
        </View>
      </ScrollView>
    </View>

  );
};

export default Signin;
