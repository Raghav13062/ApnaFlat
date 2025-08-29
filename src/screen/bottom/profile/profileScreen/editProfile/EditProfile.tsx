import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
   KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarComponent from '../../../../../compoent/StatusBarCompoent';
import imageIndex from '../../../../../assets/imageIndex';
import { useNavigation } from '@react-navigation/native';
import TextInputField from '../../../../../utils/TextInputField';
import CustomButton from '../../../../../compoent/CustomButton';
import CustomHeader from '../../../../../compoent/CustomHeader';

const EditProfile = () => {
  const nss = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarComponent />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <CustomHeader imageSource={imageIndex.backImg} label={"Profile"}/>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 ,    paddingHorizontal: 20,
}}>
 
          <View style={styles.profileContainer}>
            <Image
              source={imageIndex.prfoielImg}
              style={styles.avatar}
            />
          </View>

          <TextInputField
            placeholder={"Dheerai"}
            firstLogo={true}
            img={imageIndex.prfoile}
           />
          <TextInputField
            placeholder={"Mathew@email.com"}
            firstLogo={true}
            img={imageIndex.sms}
           />
          <TextInputField
            placeholder={"+62 112-3288-9111 "}
            firstLogo={true}
            img={imageIndex.mobile}
            type={"decimal-pad"}
          />

          <View style={{ marginTop: 11 }}>
            <CustomButton
              title={"Save Now"}
              // onPress={() => navigation.navigate(ScreenNameEnum.TabNavigator)}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    color: '#2EACB9',
    fontWeight: '600',
    marginTop: 30,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 30,
    position: 'relative',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default EditProfile;
