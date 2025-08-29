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
} from 'react-native';
 
interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  gradientColors?: string[];
  gradientStyle?: ViewStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  disabled = false,
  gradientColors = ['#8F52CA', '#3658AE', '#19A3BD'],
  gradientStyle,
}) => {
  return (
       <View
       style={[styles.touchable,gradientStyle]}
        // style={{
        //   backgroundColor:"#2EACB9" ,
        //   height:70,
        //   borderRadius:20 ,
        //   justifyContent:"center",
        //   alignItems:"center"

        // }}
      >
        <TouchableOpacity
          onPress={onPress}
          disabled={disabled}
          activeOpacity={0.8}
          style={styles.touchable}
        >
          <Text 
          
                      allowFontScaling={false}

          style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
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
  gradient: {
    borderRadius: 15,
  },
  touchable: {
    paddingVertical: 14,
    paddingHorizontal: 25,
    height: 60,
    borderRadius: 18,
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

export default memo(CustomButton);
