/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { ImageBackground, Image, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View, TouchableOpacity, TextInput } from 'react-native';
import { svgs, colors } from '@common';
import styles from './styles';

const Signup = (props) => {
  const [term, setTerm] = useState(false)
  const handleTerm = () => {
    setTerm(!term)
  }

  const handleSignIn = () => {
    props.navigation.navigate("signin")
  }

  const handleSignUp = () => {
    props.navigation.navigate("otpverify")
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.child}>
          <Image style={styles.signupImg} source={require('../../assets/images/signup.png')} />
        </View>
        <View style={styles.formMainView}>
          <Text style={styles.welcmTxt}>Create your account</Text>
          <View style={styles.formInputView}>
            {svgs.userIcon(colors.grayRegular, 20)}
            <TextInput
              style={styles.signupInput}
              placeholder="First Name"
            />
          </View>
          <View style={styles.formInputView}>
            {svgs.userIcon(colors.grayRegular, 20)}
            <TextInput
              style={styles.signupInput}
              placeholder="Last Name"
            />
          </View>
          <View style={styles.formInputView}>
            {svgs.mobileIcon(colors.grayRegular, 18, 20)}
            <TextInput
              style={styles.signupInput}
              placeholder="Phone Number"
              keyboardType='numeric'
              maxLength={10}
            />
          </View>
          <View style={styles.formInputView}>
            {svgs.email(colors.grayRegular, 20, 16)}
            <TextInput
              style={styles.signupInput}
              placeholder="Email ID"
            />
          </View>
          <View style={styles.formInputView}>
            {svgs.email(colors.grayRegular, 20, 16)}
            <TextInput
              style={styles.signupInput}
              placeholder="City"
            />
          </View>
          <View style={styles.termCondition}>
            <TouchableOpacity onPress={handleTerm}>
              {term ? svgs.checkedCheckbox(colors.grayRegular, 18) : svgs.checkbox(colors.grayRegular, 18)}
            </TouchableOpacity>
            <Text style={styles.termConditionTxt}>you're agree to our <Text style={styles.termTxt}>Terms & Conditions</Text> and <Text style={styles.termTxt}>Privacy Policy</Text></Text>
          </View>
          <TouchableOpacity style={styles.signUpBtn} onPress={handleSignUp}>
            <Text style={styles.signUpBtnTxt}>SIGN UP</Text>
          </TouchableOpacity>
          <Text style={styles.alreadyAct}>Already have a account? <Text onPress={handleSignIn} style={styles.termTxt}>Sign in</Text></Text>
        </View>
      </ScrollView>
    </View>

  );
};

export default Signup;
