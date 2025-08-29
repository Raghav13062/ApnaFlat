import React, { memo } from 'react';
import {
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Platform,
  TouchableOpacity,
  View,
  GestureResponderEvent,
  Image,
} from 'react-native';
import imageIndex from '../assets/imageIndex';
 
interface BackButton1 {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  gradientColors?: string[];
  gradientStyle?: ViewStyle;
}

const BackButton: React.FC<BackButton1> = ({
  title,
  onPress,
   
}) => {
  return (
    <View style={{
      justifyContent:"center",
      alignItems:"center"
   }}>
    <View style={styles.nextButton}>
      <View style={
          {
              flexDirection:"row",
              alignItems:"center",
              justifyContent:"space-between" ,
              flex:1
          }
      }>
        

      <Text              allowFontScaling={false}
style={styles.nextText}>{title}</Text>
      <TouchableOpacity style={styles.arrowCircle} 
      onPress={onPress}
      >
        <Image source={imageIndex.Next} style={{ width: 33, height: 33 }} resizeMode='cover' />
      </TouchableOpacity>
      
      </View>
    </View>
    </View>
   );
};

const styles = StyleSheet.create({
  shadowWrapper: {
    borderRadius: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        backgroundColor: 'transparent',
      },
      android: {
        // elevation: 5,
        // backgroundColor: 'transparent',
      },
    }),
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2EACB9',
    borderRadius: 25,
     paddingHorizontal: 24,
    justifyContent: 'center',
    marginTop: 40,
    width:"50%",
    height:70
  },
  nextText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    textAlign:"center",
    left:15
  },
  arrowCircle: {
    backgroundColor: '#fff',
    borderRadius: 100,
    padding: 8,
    marginLeft: 12,
  },
  touchable: {
    paddingVertical: 14,
    paddingHorizontal: 25,
    height: 70,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#2EACB9" ,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
   },
  disabledGradient: {
    opacity: 0.5,
  },
});

export default memo(BackButton);
