import {
  View,
  Text,
 
  ScrollView,
   KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TextInputField from '../../../utils/TextInputField';
import Loading from '../../../utils/Loader';
import StatusBarCompoent from '../../../compoent/StatusBarCompoent';
import imageIndex from '../../../assets/imageIndex';
import { styles } from '../loginStyle';
import ResponsiveSize from '../../../utils/ResponsiveSize';
import CustomButton from '../../../compoent/CustomButton';
import ScreenNameEnum from '../../../routes/screenName.enum';
import Styles from './style';
import useLogin from './useLogin';
 import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../theme/ThemeProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const {
    navigation,
    LoginFunction,
    loading,
    handleIdentityText,
    handlePassText,
    emailError,
    passwordError,
    email, password
  } = useLogin();
  
  const { theme }: any = useTheme();
  
const getUserRole = async () => {
  try {
    const value = await AsyncStorage.getItem("user_role");
    if (value == "renter") {
            navigation.navigate(ScreenNameEnum.LoginSuccess);

      console.log("Stored role:", value);
      return value;
    }
    else {
      navigation.navigate(ScreenNameEnum.PropertyDetailsForm);
    }
  } catch (error) {
    console.log("Error retrieving role:", error);
  }
};


  return (
    <SafeAreaView style={[Styles.mainView]}>
      <StatusBarCompoent backgroundColor='white' />
      {loading ? <Loading /> : null}

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
            <View style={{ padding: 15, flex: 1, marginTop: hp(7) }}>
              <View style={{ marginTop: 22 }}>
                <Text  
                
            allowFontScaling={false}
                style={[styles.txtHeading, { color: "#2EACB9" }]}>
                  Let’s Sign In!
                </Text>

                <Text 
                            allowFontScaling={false}

                style={[styles.txtsubHeading, {
                   color: "#808080",
                  fontSize: 15,
                  marginTop:15, 
                 }]}>
                  You don’t have account? {''}
                  <Text 
                  
                              allowFontScaling={false}

                  style={{ color: "#2EACB9" }}
                  
                  onPress={()=>navigation.navigate(ScreenNameEnum.SignUpScreen)}
                  >Register Here 👉</Text>
                </Text>
              </View>

              <View style={{ marginTop: ResponsiveSize.marginTop(20), paddingVertical: hp(1) }}>
                <TextInputField
                  placeholder={"Enter Number"}
                  firstLogo={true}
                              allowFontScaling={false}

                  img={imageIndex.mobile}
                  type={"decimal-pad"}
                />
                {/* {emailError ? <Text style={Styles.redText}>{emailError}</Text> : null} */}
              </View>

              <View style={{ marginTop: 11 }}>
                <CustomButton
                  title={"Sign In Now"}
                          // navigation.navigate(ScreenNameEnum.PropertyDetailsForm);
                 onPress={getUserRole}
                 />
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
