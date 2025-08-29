import { View, Text, ScrollView, Image,   } from 'react-native';
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { CodeField, Cursor, } from
  'react-native-confirmation-code-field';
import Loading from '../../../utils/Loader';
import imageIndex from '../../../assets/imageIndex';
import CustomButton from '../../../compoent/CustomButton';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import CustomHeader from '../../../compoent/CustomHeader';
 import styles from './style';
import userOtp from './userOtp';
import localizationStrings from '../../../Localization/Localization';
import ScreenNameEnum from '../../../routes/screenName.enum';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../theme/ThemeProvider';

export default function OtpScreen() {
  const {
     isLoading,
    ref,
    errorMessage,  
    props, getCellOnLayoutHandler,
    value,  
    handleChangeText,
    handleVerifyOTP,
    email,
    navigation
  } = userOtp()
  const { theme }:any = useTheme();

  return (
    <View style={{
      backgroundColor: theme.background,
      flex: 1,
    }}>
        <StatusBarComponent />

      {isLoading ? <Loading /> : null}
      <SafeAreaView style={{
        flex: 1,
      }}>
           <CustomHeader imageSource={imageIndex.backImg} />
         <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 15 }}>
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Text              allowFontScaling={false}
style={[styles.txtHeading,{
              color:"#2EACB9" ,
              fontSize:28,
              fontWeight:"700",
            }]}>Enter your code here</Text>
            {email &&             <Text style={styles.txtHeading}>{email}</Text>
          }
            <Text             allowFontScaling={false}
 style={[styles.txtsubHeading,{
              color:"#FFA044",
              marginTop:11 ,
              fontSize:13 ,
              textAlign:"center"
            }]}>
            Please enter the verification code{'\n'}
            we sent to your Mobile Number ******2020    
                  </Text>
          </View>
          <View
            style={{ height: hp(10), marginHorizontal: 55, marginTop: 38, justifyContent: "flex-start" }} >
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={handleChangeText}
              cellCount={4}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }:any) => (
                <View style={{ marginStart: -1, backgroundColor: '#E9E9E9', borderRadius: 15, }}>
                  <Text
                    key={index}
                    style={[styles?.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
            {errorMessage ? (
              <Text              allowFontScaling={false}
style={{ color: 'red', marginTop: 18 }}>{errorMessage}</Text>
            ) : null}
          </View>
          <Text             allowFontScaling={false}
 style={[styles.txtsubHeading,{
              color:"#2EACB9",
              marginTop:11 ,
              fontSize:13 ,
              fontWeight:"400",
              textAlign:"center"
            }]}>
           Don’t receive the OTP your code?   
                  </Text> 
                  <View style={{
                    justifyContent:"center" ,
                    alignItems:"center",
                    flexDirection:"row" ,
                    marginTop:8,
                   }}>
                    <Image source={imageIndex.Clock} style={{
height:20,
width:20,
resizeMode:"contain"
                    }}/>
                    <Text              allowFontScaling={false}
style={[styles.txtsubHeading,{
              color:"#2EACB9",
               fontSize:13 ,
              fontWeight:"400",
              textAlign:"center",
              left:5
            }]}>
          00:30
                  </Text> 
                  </View>
                  <Text              allowFontScaling={false}
style={[styles.txtsubHeading,{
              color:"#FFA044",
               fontSize:14 ,
              fontWeight:"700",
              textAlign:"center" ,
              textDecorationLine: "underline"  // 👈 this adds underline

              
            }]}>
         Resend again here 
                  </Text> 
        </ScrollView>
        <View style={styles.btn}>
          <CustomButton
            title={"Verify your account"}
            // onPress={() =>
            //   handleVerifyOTP()
            //  }
            onPress={()=>
              navigation.navigate(ScreenNameEnum.AddInformationScreen)
            }
          />
        </View>
      </SafeAreaView>
    </View>
  );
}





