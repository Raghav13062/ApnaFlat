// Splash.tsx
import React from 'react';
import { View, Image, ImageBackground, StatusBar, Text } from 'react-native';
import styles from './style';
import imageIndex from '../../../assets/imageIndex';
import useSplash from './useSplash';

const Splash: React.FC = () => {
  const {} = useSplash();

  return (
    <ImageBackground
      source={imageIndex.bag} // background image
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={styles.overlay}>
         <Image source={imageIndex.appLogo} style={styles.logo} resizeMode="contain" />

        
      </View>
    </ImageBackground>
  );
};

export default Splash;
