import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import CurrentIssue from '../screens/CurrentIssue';
import Blogs from '../screens/Blogs';
import Webinar from '../screens/Webinar';
import WebinarDetail from '../screens/WebinarDetail';
import Library from '../screens/Library';
import Profile from '../screens/Profile';
import ProfileEdit from '../screens/ProfileEdit';
import Referral from '../screens/Referral';
import HealthTracker from '../screens/HealthTracker';
import TermCondition from '../screens/TermCondition';
import PrivacyPolicy from '../screens/PrivacyPolicy';

import { svgs } from '@common';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="currentIssue" component={CurrentIssue} options={{ tabBarVisible: false }} />
      <Stack.Screen name="blogs" component={Blogs} options={{ tabBarVisible: false }} />
    </Stack.Navigator>
  )
}
function WebinarTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="webinarScreen" component={Webinar} />
      <Stack.Screen name="webinarDetail" component={WebinarDetail} />
    </Stack.Navigator>
  )
}
function LibraryTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="libraryScreen" component={Library} />
    </Stack.Navigator>
  )
}
function HealthTrackerTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="healthTracker"
        component={HealthTracker}
      // options={{ title: 'Welcome' }}
      />
    </Stack.Navigator>
  )
}
function ProfileTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="profileScreen" component={Profile} />
      <Stack.Screen name="profileEdit" component={ProfileEdit} />
      <Stack.Screen name="referral" component={Referral} />
      <Stack.Screen name="termCondition" component={TermCondition} />
      <Stack.Screen name="privacyPolicy" component={PrivacyPolicy} />
    </Stack.Navigator>
  )
}
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return svgs.home(color, 22, 20);
          } else if (route.name === 'Webinar') {
            return svgs.webinar(color, 22, 20);
          } else if (route.name === 'Library') {
            return svgs.library(color, 22, 20);
          } else if (route.name === 'Health Tracker') {
            return svgs.healthTracker(color, 22, 20);
          } else if (route.name === 'Profile') {
            return svgs.userIcon(color, 22, 20);
          }

          // You can return any component that you like here!
          ;
        },
        tabBarActiveTintColor: '#FE887E',
        tabBarInactiveTintColor: '#929397',
      })}
    >
      <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeTab} />
      <Tab.Screen name="Webinar" options={{ headerShown: false }} component={WebinarTab} />
      <Tab.Screen name="Library" options={{ headerShown: false }} component={LibraryTab} />
      <Tab.Screen name="Health Tracker" options={{ headerShown: false }} component={HealthTrackerTab} />
      <Tab.Screen name="Profile" options={{ headerShown: false }} component={ProfileTab} />
    </Tab.Navigator>
  );
}

export default BottomTabs;