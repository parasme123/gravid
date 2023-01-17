/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { ImageBackground, Image, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { svgs, colors } from '@common';
import Modal from "react-native-modal";
import styles from './styles';

const HealthTracker = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.haddingView}>
        <Text style={styles.haddingTxt}>Health Tracker</Text>
      </View>
      <View style={styles.radiusView} />
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text style={styles.comingSoon}> Coming Soon</Text>
      </View>
    </View>

  );
};

export default HealthTracker;
