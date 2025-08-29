import { useNavigation } from '@react-navigation/native';
  import { NativeStackNavigationProp } from '@react-navigation/native-stack';
 import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenNameEnum from '../../../../routes/screenName.enum';
import { successToast } from '../../../../utils/customToast';
import { RootStackParamList } from '../../../auth/login/LoginTypes';
 

const useProfilSetting = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [modalVisible, setModalVisible] = useState(false);

   
 const handleLogout = async () => {
  try {
    // await AsyncStorage.removeItem('token');  // Remove user data from storage
     navigation.reset({
      index: 0,
      routes: [{ name: ScreenNameEnum.SPLASH_SCREEN }],
    });
    // await AsyncStorage.removeItem('user');  // Remove user data from storage
    successToast("Logout Successfully")
  } catch (error) {
    console.error("Error during logout:", error);
  }
};
 
  return {
     
     navigation ,
    handleLogout,
    modalVisible, setModalVisible
   };
};

export default useProfilSetting;
