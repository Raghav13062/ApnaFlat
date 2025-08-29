import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
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
  import localizationStrings from '../../../Localization/Localization';
  import font from '../../../theme/font';
  import { SafeAreaView } from 'react-native-safe-area-context';
  import { useTheme } from '../../../theme/ThemeProvider';
import useSignup from './useSinup';
import CustomHeader from '../../../compoent/CustomHeader';
  
  export default function Login() {
    const {
        credentials,
        errors,
        isLoading,
        handleChange,
        handleSignup,
        navigation,
    } = useSignup();
    
    const { theme }: any = useTheme();
  
    return (
      <SafeAreaView style={[Styles.mainView, { backgroundColor: theme.background }]}>
        <StatusBarCompoent backgroundColor='white' />
        {isLoading ? <Loading /> : null}
        <CustomHeader imageSource={imageIndex.backImg} />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
              <View style={{ padding: 15, flex: 1, marginTop: hp(7) }}>
                <View style={{ marginTop: 22 }}>
                  <Text             allowFontScaling={false}
 style={[styles.txtHeading, { color: "#2EACB9" }]}>
                  Register your account
                  </Text>
  
                  <Text             allowFontScaling={false}
 style={[styles.txtsubHeading, {
                     color: "#808080",
                    fontSize: 15,
                    marginTop:15, 
                   }]}>
                   Enter you you Mobile number
                   </Text>
                </View>
  
                <View style={{ marginTop: ResponsiveSize.marginTop(20), paddingVertical: hp(1) }}>
                  <TextInputField
                    placeholder={"Enter Number"}
                    firstLogo={true}
                    img={imageIndex.mob2}
                    type={"decimal-pad"}
                  />
                  {/* {emailError ? <Text style={Styles.redText}>{emailError}</Text> : null} */}
                </View>
  
                <View style={{ marginTop: 11 }}>
                  <CustomButton
                    title={"Register Now"}
                      onPress={()=> navigation.navigate(ScreenNameEnum.OtpScreen)}
                  />
                  <Text  
                  
                              allowFontScaling={false}

                  style={{
  color: "#808080",
  marginTop: 18,
  textAlign: "center",
   fontSize: 12,
   lineHeight:18
}}>
  By login or registering, you agree with{'\n'}our Term and Policy ✅
</Text>

                </View>
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
  