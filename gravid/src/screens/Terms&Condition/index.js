import react from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { svgs, colors } from '@common';

const TermsCondition = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.haddingView}>
                <TouchableOpacity style={{ flex: 3 }} onPress={() => navigation.goBack()}>
                    {svgs.backArrow("black", 24, 24)}
                </TouchableOpacity>
                <Text style={styles.haddingTxt}>Terms & Condition</Text>
                <View style={{ flex: 3 }} />
            </View>
            <View style={styles.radiusView} />
            <ScrollView style={{ paddingHorizontal: 10 }} showsVerticalScrollIndicator={false}>
                <Text style={styles.termstxt}>
                    A terms and conditions agreement outlines the rules{'\n'}
                    that your website or mobile app users must follow.{'\n'}
                    They usually cover topics such restricted behavior,{'\n'}
                    payment terms, acceptable use, and more that we{'\n'}
                    cover below.{'\n'}{'\n'}
                    Read on to learn more about terms and conditions{'\n'}
                    agreements, why you should have one, and how to{'\n'}
                    implement one using our sample terms and conditions template.{'\n'}{'\n'}
                    A terms and conditions agreement outlines the rules {'\n'}
                    that your website or mobile app users must follow.{'\n'}
                    They usually cover topics such restricted behavior,{'\n'}
                    payment terms, acceptable use, and more that we{'\n'}
                    cover below.{'\n'}{'\n'}
                    Read on to learn more about terms and conditions{'\n'}
                    agreements, why you should have one, and how to{'\n'}
                    implement one using our sample terms and conditions template.
                </Text>
            </ScrollView>
        </View>
    )
}
export default TermsCondition 