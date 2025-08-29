import { useEffect } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenNameEnum from '../../../routes/screenName.enum';

type RootStackParamList = {
  TabNavigator: undefined;
  LoginScreen: undefined;
  ChooseRole: undefined;
  OnboardingScreen: undefined;
};

const useSplash = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const isFocused = useIsFocused();

  const checkAuthStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        // ✅ Token found → Go to ChooseRole
        navigation.replace(ScreenNameEnum.ChooseRole);
      } else {
        // ❌ No token → Go to Onboarding
        navigation.replace(ScreenNameEnum.OnboardingScreen);
      }
    } catch (error) {
      console.error('Error reading token from storage:', error);
      navigation.replace(ScreenNameEnum.OnboardingScreen);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isFocused) {
        checkAuthStatus();
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [isFocused]);

  return {};
};

export default useSplash;
