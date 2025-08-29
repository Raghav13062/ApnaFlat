
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView,  } from 'react-native';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import ScreenNameEnum from '../../../routes/screenName.enum';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginSuccess = ({ navigation }:any) => {
const handleHomePress = async () => {
  try {
    // Save role in AsyncStorage
    const value = await AsyncStorage.getItem('user_role');
console.log("role",value)
    // Check if role is renter
    if (value == 'renter') {
      navigation.navigate(ScreenNameEnum.PropertySelect);
    } 
    
    
    if(value =="seeker"){
            navigation.navigate(ScreenNameEnum.OwnerNavigator);

    }
    
  } catch (error) {
          navigation.navigate(ScreenNameEnum.OwnerNavigator);

    console.error('Error saving role:', error);
  }
};
;

  return (
    <SafeAreaView style={styles.container}>
              <StatusBarComponent backgroundColor='#73E0EB' />

      <View style={styles.whiteBox}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=12' }} // Replace with actual user image URL
          style={styles.avatar}
        />
        <Text             allowFontScaling={false}
 style={styles.successText}>Login Success Into{"\n"}Your Account</Text>

        <TouchableOpacity style={styles.button} onPress={handleHomePress}>
          <Text              allowFontScaling={false}
style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
     justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor:"#73E0EB"
  },
  whiteBox: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 30,
    alignItems: 'center',
    width: '90%',
    position: 'absolute',
    bottom: 55,
  
    // ✅ iOS shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  
    // ✅ Android shadow
    elevation: 5,
  
  },
  avatar: {
    width: 100,            // or any desired size
    height: 100,
    borderRadius: 50,      // Half of width/height for a perfect circle
    borderWidth: 3,        // Optional: to add a border
    borderColor: '#73E0EB',   // Optional: border color
  },
  successText: {
    fontSize: 25,
    color: '#2EACB9',
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#2EACB9',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 15,
    height:60 ,
    justifyContent:"center",
    alignItems:"center"
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
