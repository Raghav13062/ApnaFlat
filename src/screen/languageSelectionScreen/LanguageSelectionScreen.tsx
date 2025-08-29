import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import imageIndex from '../../assets/imageIndex';
import { useNavigation } from '@react-navigation/native';
import StatusBarComponent from '../../compoent/StatusBarCompoent';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../compoent/CustomButton';
import ScreenNameEnum from '../../routes/screenName.enum';
import CustomHeader from '../../compoent/CustomHeader';

const LanguageSelectionScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Hindi');
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const navigation = useNavigation();

  const languages = ['English', 'Chinese', 'Hindi', 'German', 'Russian', 'Spanish', 'French'];

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
  };

  const handleSave = () => {
    Alert.alert('Language Selected', `Selected Language: ${selectedLanguage}`);
  };
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarComponent />
      <CustomHeader imageSource={imageIndex.backImg} label={"Language"}/>

 <View style={{
  marginHorizontal:15 ,
  paddingTop:11
 }}>
 
      <TouchableOpacity
        onPress={() => setDropdownOpen(!dropdownOpen)}
        style={styles.dropdownToggle}
      >
       </TouchableOpacity>

      {/* Language Options */}
      {dropdownOpen && (
      
        <ScrollView style={styles.scrollBox} 
       
        >
          {languages.map((lang) => (
            <TouchableOpacity
              key={lang}
              style={styles.option}
              onPress={() => handleLanguageSelect(lang)}
            >
              <View style={styles.checkbox}>
                {selectedLanguage === lang && <View style={styles.checked} />}
              </View>
              <Text              allowFontScaling={false}
style={styles.optionText}>{lang}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {/* Save Button */}
 
 
      </View>
      <View style={{ marginTop: 11,marginHorizontal:15 }}>
                <CustomButton
                  title={"Save No"}
                  //  onPress={()=>navigation.navigate(ScreenNameEnum.LoginSuccess)}
                  //  onPress={()=>navigation.navigate(ScreenNameEnum.TabNavigator)}
                />
              </View>
       
    </SafeAreaView>
  );
};

export default LanguageSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
  },
 
  backArrowImage: {
    height: 33,
    width: 33,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2EACB9',
    textAlign: 'center',
    marginLeft:18
   
  },
  dropdownToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dropdownLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  scrollBox: {
    maxHeight: 250,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    marginTop:20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#999',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: '#00c2c7',
  },
  optionText: {
    fontSize: 15,
    color: '#333',
  },
  saveButton: {
    marginTop: 'auto',
    backgroundColor: '#00c2c7',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  saveText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
