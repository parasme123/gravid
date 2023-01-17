import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Introduction from '../screens/Introduction';
import Welcome from '../screens/Welcome';
import Signup from '../screens/Signup';
import Signin from '../screens/Signin';
import OtpVerify from '../screens/OtpVerify';
import CompleteVerify from '../screens/CompleteVerify';
import CompleteVerifyDoc from '../screens/CompleteVerifyDoc';
import BottomTabs from './BottomTabs';
const RootStack = createNativeStackNavigator();

const Navigators = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="splash" component={Splash} options={{ headerShown: false }} />
      <RootStack.Screen name="introduction" component={Introduction} options={{ headerShown: false }} />
      <RootStack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
      <RootStack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
      <RootStack.Screen name="signin" component={Signin} options={{ headerShown: false }} />
      <RootStack.Screen name="otpverify" component={OtpVerify} options={{ headerShown: false }} />
      <RootStack.Screen name="completeVerify" component={CompleteVerify} options={{ headerShown: false }} />
      <RootStack.Screen name="completeVerifydoc" component={CompleteVerifyDoc} options={{ headerShown: false }} />
      <RootStack.Screen name="bottomTabs" component={BottomTabs} options={{ headerShown: false }} />
    </RootStack.Navigator>
  );
};

export default Navigators