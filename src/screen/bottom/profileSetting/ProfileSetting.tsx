import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import imageIndex from '../../../assets/imageIndex';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
 import ScreenNameEnum from '../../../routes/screenName.enum';
import LogoutModal from '../../../compoent/LogoutModal';
import useProfilSetting from './useSetting';

const ProfileSetting = () => {
   const {
     navigation ,
    handleLogout,
    modalVisible, setModalVisible
   }= useProfilSetting()
  const MenuItem = ({ icon, label,onPress }:any) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={{
        flexDirection:"row",
        alignItems:"center"
      }}>
      <Image source={icon}  style={{
        height:33,
        width:33
      }} />
      <Text              allowFontScaling={false}
style={styles.menuText}>{label}</Text>
      </View>
      <Image source={imageIndex.arrowright}  style={{
        height:22,
        width:22,
        resizeMode:"contain"
      }} />
    </TouchableOpacity>
  );


  return (
    <SafeAreaView style={styles.container}>
 <StatusBarComponent/>
      <Text              allowFontScaling={false}
style={styles.title}>Profile</Text>

       <View style={styles.profileContainer}>
        <Image
          source={imageIndex.prfoielImg} // Replace with actual image
          style={styles.avatar}
        />
        <Text             allowFontScaling={false}
 style={styles.name}>Dheeraj</Text>
        <Text              allowFontScaling={false}
style={styles.email}>mail@gmail.com</Text>

        <TouchableOpacity style={styles.editIcon}>
        <Image source={imageIndex.edit1} style={{

          height:22,
          width:22,
          resizeMode:"cover"
        }}/>
        </TouchableOpacity>
      </View>

      {/* Menu Options */}
      <View style={styles.menuContainer}>
        <MenuItem icon="person-circle-outline" label="Profile"  
          icon={imageIndex.profile2}
        
        onPress={()=>{
          navigation.navigate(ScreenNameEnum.editProfile)
          
        }}
        />
        <MenuItem icon="person-circle-outline" label="Language"  
          icon={imageIndex.profile2}
        
        onPress={()=>{
          navigation.navigate(ScreenNameEnum.LanguageSelectionScreen)
          
        }}
        />
        <MenuItem icon="card-outline" label="Subscription"  
        icon={imageIndex.Payment}
        
        
        />
        <MenuItem icon="log-out-outline" label="Logout"
        
        onPress={()=>{
          setModalVisible(true);
          
        }}
       
        icon={imageIndex.logout}

        />
      </View>
      <LogoutModal
        visible={modalVisible}
        onNo={() => {
          setModalVisible(false);
          
          // Handle cancel logic
        }}
        
        onYes={handleLogout}
      />
    </SafeAreaView>
  );
};

// Reusable Menu Item Component


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    color: '#2EACB9',
    fontWeight: '600',
    marginTop:30
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
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  email: {
    fontSize: 14,
    color: '#777',
  },
  editIcon: {
    position: 'absolute',
    top: 50,
    right: 130,
    backgroundColor: '#e0f7f8',
    padding: 5,
    borderRadius: 15,
  },
  menuContainer: {
    marginTop: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    justifyContent:"space-between"
  },
  menuText: {
    fontSize: 17,
    marginLeft: 15,
    color:"#352C48",
    fontWeight:"600"
  },
});

export default ProfileSetting;
