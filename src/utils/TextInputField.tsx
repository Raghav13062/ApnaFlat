import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
 import imageIndex from '../assets/imageIndex';

export default function TextInputField({ ...props }) {
  const [showPassword, setShowPassword] = useState(props.hide);
  const [isFocused, setIsFocused] = useState(false);

  const onChangeText = (value: string) => {
    if (props.onChangeText) {
      props.onChangeText(value);
    }
  };

  return (
    <View style={{ marginVertical: 12,  }}>
       <View style={{ position: 'relative' }}>
         
<View style={{
                backgroundColor: '#F5F4F8',
                borderRadius: 20,
                justifyContent:"center",
                alignItems:"center",
                height: 65,
                borderColor: isFocused ? "#2EACB9" : "", 
                borderWidth:isFocused ? 1.3 :0

}}> 
         <View
          style={[
            {
              flexDirection: 'row',
              paddingHorizontal: 10,
              alignItems: 'center',
        
            },
            props.style,
          ]}
        >
          {/* Left Icon */}
          {props.firstLogo && (
            <Image
              source={props.img}
              style={{ width: 24, height: 24,  marginRight: 8 }}
              resizeMode="contain"
            />
          )}
  
          {/* Input Field */}
          <TextInput
                      allowFontScaling={false}

            placeholder={props.placeholder}
            cursorColor={"#2EACB9"}
            placeholderTextColor="#252B5C"
            style={{
              flex: 1,
              color: '#000',
              fontWeight: '500',
               fontSize: 14,
             }}
            onChangeText={onChangeText}
            value={props.text}
            secureTextEntry={showPassword}
            maxLength={props.maxLength}
            keyboardType={props.type}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            editable={props.editable}
            multiline={props.multiline}
          />

          {/* Eye Icon for Password Visibility */}
          {props.showEye && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={showPassword ? imageIndex.eye : imageIndex.view}
                style={{ width: 22, height: 22, tintColor: isFocused ? "#000000" : "" }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      </View>
    </View>
  );
}

 