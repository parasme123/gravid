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
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import Referral from '../screens/Referral';
import TermsCondition from '../screens/Terms&Condition';
import Privacy_Policy from '../screens/Privacy_Policy';
import List_of_Docters from '../screens/List_of_Doctors';
import RecentBlogsDetail from '../screens/RecentBlogsDetail';
import VideosDetails from '../screens/VideosDetails';
import RecentIssuesDetail from '../screens/RecentIssuesDetail';
import ExpertListDetail from '../screens/ExpertListDetail';
const RootStack = createNativeStackNavigator();

const Navigators = () => {
  return (
    <RootStack.Navigator>
      {/* <RootStack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} /> */}

      <RootStack.Screen name="splash" component={Splash} options={{ headerShown: false }} />
      <RootStack.Screen name="Introduction" component={Introduction} options={{ headerShown: false }} />
      <RootStack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
      <RootStack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
      <RootStack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
      <RootStack.Screen name="otpverify" component={OtpVerify} options={{ headerShown: false }} />
      <RootStack.Screen name="completeVerify" component={CompleteVerify} options={{ headerShown: false }} />
      <RootStack.Screen name="CompleteVerifyDoc" component={CompleteVerifyDoc} options={{ headerShown: false }} />
      <RootStack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <RootStack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
      <RootStack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
      <RootStack.Screen name="Referral" component={Referral} options={{ headerShown: false }} />
      <RootStack.Screen name="TermsCondition" component={TermsCondition} options={{ headerShown: false }} />
      <RootStack.Screen name="Privacy_Policy" component={Privacy_Policy} options={{ headerShown: false }} />
      <RootStack.Screen name="List_of_Docters" component={List_of_Docters} options={{ headerShown: false }} />
      <RootStack.Screen name="RecentBlogsDetail" component={RecentBlogsDetail} options={{ headerShown: false }} />
      <RootStack.Screen name="VideosDetails" component={VideosDetails} options={{ headerShown: false }} />
      <RootStack.Screen name="RecentIssuesDetail" component={RecentIssuesDetail} options={{ headerShown: false }} />
      <RootStack.Screen name="ExpertListDetail" component={ExpertListDetail} options={{ headerShown: false }} />

    </RootStack.Navigator>
  );
};

export default Navigators