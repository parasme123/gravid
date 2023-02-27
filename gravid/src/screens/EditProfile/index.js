import react, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import { svgs, colors } from '@common';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Apis from "../../Services/apis";
import Toast from 'react-native-simple-toast';
import { TSpan } from "react-native-svg";
import { imageurl } from "../../Services/constants";

const EditProfile = ({ navigation }) => {
    const [fname, setFName] = useState("")
    const [lname, setLname] = useState("")
    const [mail, setMail] = useState('')
    const [showdpimage, setShowdpimage] = useState({})
    const [userData, setUserData] = useState({})
    const [userProfile, setUserProfile] = useState({})
    useEffect(async () => {
        try {
            const userProfile = await AsyncStorage.getItem('userProfile');
            console.log('userProfile+++++++++++++++', userProfile);
            if (userProfile !== null) {
                var newVal = JSON.parse(userProfile);
                setUserProfile(newVal)
            }
        } catch (error) {
            // Error retrieving data
        }
        try {
            const jsondata = await AsyncStorage.getItem('valuedata');
            if (jsondata !== null) {
                var newVal = JSON.parse(jsondata);
                setUserData(newVal)
                console.log('imageurl + newVal.profile', imageurl + newVal.profile);
                setShowdpimage({ path: imageurl + newVal.profile })
            }
        } catch (error) {
            // Error retrieving data
        }

    }, [navigation])
    const editprofile = async () => {
        // try {
        //     await AsyncStorage.setItem("userProfile", JSON.stringify(showdpimage))
        // } catch (e) {
        //     // saving error
        // }
        let error = false
        if (userData?.name == '') {
            Toast.show("Enter First name", Toast.LONG);
            error = true
        } else if (userData?.lname == '') {
            Toast.show('Enter Last name', Toast.LONG);
            error = true
        } else if (userData?.email == '') {
            Toast.show('Enter Email id', Toast.LONG);
            error = true
        }
        //  else if (showdpimage == '') {
        //     Toast.show("Please select DP Image ", Toast.LONG)
        // }
        else {
            const params = {
                fname: userData?.name,
                lname: userData?.lname,
                email: userData?.email,
            }
            if (showdpimage?.mime && showdpimage?.mime != "") {
                let fileName = showdpimage?.path?.split("/");
                params.imgfile = {
                    uri: showdpimage.path, 
                    name: fileName[fileName.length - 1],
                    type: showdpimage.mime
                }
            }
            console.log("params", params);
            Apis.Updata_Profile(params)
                .then(async (json) => {
                    console.log('Updata_Profile ====== ', json.data);
                    if (json.status == true) {
                        try {
                            await AsyncStorage.setItem("valuedata", JSON.stringify(json.data))
                        } catch (e) {
                            // saving error
                        }
                        navigation.navigate("Profile")
                    } else (json)(
                        Toast.show(json.message, Toast.LONG)
                    )
                })
        }
    }
    const opne_Gallery = () =>
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setShowdpimage(image)
            console.log(image)
        });

    const opne_Camera = () =>
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setShowdpimage(image)
            console.log(image);
        });

    const DPSuggestion = () =>
        Alert.alert(
            "Select Option",
            "",
            [
                { text: "GALLERY", onPress: () => opne_Gallery() },
                { text: "CAMERA", onPress: () => opne_Camera() },
                { text: "Cancel", onPress: () => console.log("Cancel Pressed"), },
            ]
        );
    return (
        <View style={styles.container}>
            <View style={styles.haddingView}>
                <TouchableOpacity style={{ flex: 3 }} onPress={() => navigation.goBack()}>
                    {svgs.backArrow("black", 24, 24)}
                </TouchableOpacity>
                <Text style={styles.haddingTxt}>Edit Profile</Text>
                <View style={{ flex: 3 }} />
            </View>
            <View style={styles.radiusView} />
            <ScrollView style={{ paddingHorizontal: 16 }}>
                <Image source={showdpimage?.path ? { uri: showdpimage?.path } : require('../../assets/images/user_icons.png')}
                    style={styles.profileimg} />
                <TouchableOpacity style={styles.cameraman} onPress={() => DPSuggestion()}>
                    <Image source={require('../../assets/images/camera_pink.png')} style={styles.cameraicon} />
                </TouchableOpacity>
                <View style={{ marginTop: 60 }}>
                    <View style={styles.formInputView}>
                        <Image source={require('../../assets/images/user_icons.png')} style={styles.user_img} />
                        <TextInput
                            style={styles.signupInput}
                            placeholder={'First Name'}
                            onChangeText={(text) => setUserData({ ...userData, name: text })}
                            value={userData.name}
                        />
                    </View>
                    <View style={styles.formInputView}>
                        <Image source={require('../../assets/images/mail_icon.png')} style={styles.user_img} />
                        <TextInput
                            // keyboardType='numeric'
                            style={styles.signupInput}
                            placeholder={'Last Name'}
                            onChangeText={(text) => setUserData({ ...userData, lname: text })}
                            value={userData.lname}
                        />
                    </View>
                    <View style={styles.formInputView}>
                        <Image source={require('../../assets/images/yoga_icon.png')} style={styles.user_img} />
                        <TextInput
                            style={styles.signupInput}
                            keyboardType='email-address'
                            placeholder={'Email Id'}
                            onChangeText={(text) => setUserData({ ...userData, email: text })}
                            value={userData.email}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.signUpBtn}
                    onPress={() => editprofile()}>
                    <Text style={styles.signUpBtnTxt}>SAVE</Text>
                </TouchableOpacity>
            </ScrollView>
        </View >
    )
}
export default EditProfile 