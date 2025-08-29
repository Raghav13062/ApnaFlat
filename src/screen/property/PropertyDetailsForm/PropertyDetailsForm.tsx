import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import TextInputField from '../../../utils/TextInputField';
import ScreenNameEnum from '../../../routes/screenName.enum';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import CustomHeader from '../../../compoent/CustomHeader';
import CustomButton from '../../../compoent/CustomButton';
import imageIndex from '../../../assets/imageIndex';

const PropertyForm = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [propertyType, setPropertyType] = useState<string>('Rental');
  const [propertyCount, setPropertyCount] = useState<string>('');
  const navigation = useNavigation();

  const propertyCategories = [
    'Building', 'Apartment', 'Hostel', 'Flat',
    'Room', 'Hall', 'Shop'
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBarComponent />
      <CustomHeader imageSource={imageIndex.backImg} label="Add Property" />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>
          Hi <Text style={styles.highlight}>{""}</Text>, Fill detail of your <Text style={styles.highlight}>property</Text>
        </Text>

        {/* Property Category */}
        <Text style={[styles.label,{
              marginTop: 40,

        }]}>Property category</Text>
        <View style={styles.rowContainer}>
          {propertyCategories.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.chip,
                selectedCategory === item && styles.chipSelected
              ]}
              onPress={() => setSelectedCategory(item)}
            >
              <Text
                style={[
                  styles.chipText,
                  selectedCategory === item && styles.chipTextSelected
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Property Type */}
        <Text style={[styles.label,{
              marginTop: 10,

        }]}>Property type</Text>
        <View style={styles.rowContainer}>
          {['Rental', 'Owned'].map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.chip,
                propertyType === type && styles.chipSelected
              ]}
              onPress={() => setPropertyType(type)}
            >
              <Text
                style={[
                  styles.chipText,
                  propertyType === type && styles.chipTextSelected
                ]}
              >
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Property Count */}
        <Text style={[styles.label,{
          marginTop:15,
          color:"#252B5C"
        }]}>Enter Number of properties</Text>
        <TextInputField
          placeholder="Enter Number"
          firstLogo={false}
          type="decimal-pad"
          value={propertyCount}
          onChangeText={setPropertyCount}
        />
      </ScrollView>

      <View style={styles.buttonWrapper}>
        <CustomButton
          title="Next"
          onPress={() => navigation.navigate(ScreenNameEnum.AddProperty)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    paddingTop: 60,
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
    color: '#252B5C',
  },
  highlight: {
    fontWeight: '500',
    fontSize: 25,
    color: '#1F4C6B',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#252B5C',
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 10,
    marginTop:12
  },
  chip: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#fff', // Not selected background
    borderWidth: 1,
    borderColor: '#2EACB9',
    marginRight: 10,
    marginBottom: 10,
  },
  chipSelected: {
    backgroundColor: '#2EACB9', // Selected background
  },
  chipText: {
    color: '#252B5C', // Default text color
  },
  chipTextSelected: {
    color: '#fff', // White text when selected
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 10,
  }
});

export default PropertyForm;
