import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  Keyboard,
  ScrollView,
 } from 'react-native';
import imageIndex from '../../../assets/imageIndex';
import BackButton from '../../../compoent/BackButton';
import TextInputField from '../../../utils/TextInputField';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import { TouchableWithoutFeedback } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenNameEnum from '../../../routes/screenName.enum';

const AddInformationScreen = () => {
  const Navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
        <StatusBarComponent/>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
       <TouchableOpacity style={styles.skipContainer}>
        <Text              allowFontScaling={false}
 style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <Text style={styles.heading}
                  allowFontScaling={false}

      >
        Add new  information 
        {"\n"}below to continue
      </Text>
      {/* Profile Image Upload */}
      <View style={styles.profileContainer}>
        <View style={styles.profileCircle}>
          <Image
            source={imageIndex.Addimage}
            resizeMode="cover"
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Image source={imageIndex.Customize} style={styles.editIconImage} />
          </TouchableOpacity>
        </View>
        <Text              allowFontScaling={false}
style={styles.profileLabel}>Add profile image</Text>
      </View>
      <View style={{
        marginTop:11
      }}>
        <TextInputField
                  placeholder="Full Name"

          firstLogo={true}
          
                  img={imageIndex.prfoile}
                   
                />
 

      
          <TextInputField
          placeholder="Andersonwilson@email.com"
          firstLogo={true}
                  img={imageIndex.sms}
                   
                />
      </View>
 
 <BackButton  
  
 title={"Next"}
 onPress={()=>{
  Navigation.navigate(ScreenNameEnum.Successfully)
 }}/>
 </ScrollView>
 </TouchableWithoutFeedback>
 </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddInformationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
  },
  skipContainer: {
    alignItems: 'flex-end',
    marginTop: 20,
  },
  skipText: {
    color: '#2EACB9',
    fontSize: 20,
    fontWeight: '700',
  },
  heading: {
    marginTop: 40,
    fontSize: 28,
    color: '#2EACB9',
    fontWeight: '700',
   },
  highlight: {
    color: '#2EACB9',
    fontWeight: '700',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 32,
  },
  profileCircle: {
    width: 80,
    height: 80,
      alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,

    },
  editIconImage: {
    width: 30,
    height: 30,
    resizeMode:"contain"
   },
  profileLabel: {
    marginTop: 10,
    color: '#808080',
    fontSize: 13,
  },
  inputBox: {
    marginTop: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    paddingHorizontal: 16,
  },
  input: {
    height: 50,
    fontSize: 15,
    color: '#000',
    fontWeight: '500',
  },
  
});
