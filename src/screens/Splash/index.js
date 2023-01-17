/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { ImageBackground, Image, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View } from 'react-native';

const Home = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace("introduction")
    }, 2000);
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../assets/images/Splash-bg.png')} resizeMode="cover" style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ width: "90%", height: "49%" }}
          source={require('../../assets/images/gravid-logo.png')}
        />
      </ImageBackground>
    </View>

  );
};

export default Home;
