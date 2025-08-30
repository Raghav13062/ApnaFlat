import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableHighlight,
  Platform,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import TextInputField from '../../../utils/TextInputField';
import CustomButton from '../../../compoent/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import CustomHeader from '../../../compoent/CustomHeader';
import imageIndex from '../../../assets/imageIndex';
import ScreenNameEnum from '../../../routes/screenName.enum';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddProperty = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const navigation = useNavigation();

  const location = {
    latitude: -6.90389,
    longitude: 107.61861,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  // Separate state for date & time pickers
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  // Date Change Handler
  const onDateChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }
    if (event.type === 'set' && selectedDate) {
      const day = selectedDate.getDate();
      const month = selectedDate.getMonth() + 1;
      const year = selectedDate.getFullYear();
      const formattedDate = `${day < 10 ? '0' + day : day}/${
        month < 10 ? '0' + month : month
      }/${year}`;
      setDate(formattedDate);
    }
  };

  // Time Change Handler
  const onTimeChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShowTimePicker(false);
    }
    if (event.type === 'set' && selectedDate) {
      let hours = selectedDate.getHours();
      let minutes = selectedDate.getMinutes();
      let ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12; // 12-hour format
      const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
      setTime(formattedTime);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBarComponent />
      <CustomHeader imageSource={imageIndex.backImg} label="Add Property" />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Title */}
        <Text style={styles.title}>Share your Details</Text>

        {/* Input Fields */}
        <TextInputField
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
          firstLogo={false}
        />

        <TextInputField
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          firstLogo={false}
          keyboardType="decimal-pad"
        />

        {/* Date Picker Field */}
        <TouchableHighlight
          onPress={() => setShowDatePicker(true)}
          activeOpacity={0.8}
        >
          <TextInputField
            placeholder="Select Meeting Date"
            text={date}
            firstLogo={false}
            editable={false}
          />
        </TouchableHighlight>

        {/* Time Picker Field */}
        <TouchableHighlight
          onPress={() => setShowTimePicker(true)}
          activeOpacity={0.8}
        >
          <TextInputField
            placeholder="Select Meeting Time"
            text={time}
            editable={false}
            firstLogo={false}
          />
        </TouchableHighlight>

        {/* Date Picker Modal */}
        {showDatePicker && (
          <DateTimePicker
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            value={new Date()}
            onChange={onDateChange}
          />
        )}

        {/* Time Picker Modal */}
        {showTimePicker && (
          <DateTimePicker
            mode="time"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            value={new Date()}
            onChange={onTimeChange}
          />
        )}

        {/* Location Section */}
        <Text style={[styles.subtitle, { marginTop: 10 }]}>
          Where is the location?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 12,
          }}
        >
          <Image
            source={imageIndex.Location}
            style={{
              height: 22,
              width: 22,
              resizeMode: 'contain',
            }}
          />
          <Text style={[styles.locationText, { marginLeft: 10 }]}>
            Jl. Cisangkuy, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat
            40115
          </Text>
        </View>

        <View style={styles.mapContainer}>
          <MapView style={styles.map} initialRegion={location}>
            <Marker coordinate={location} pinColor="#2EACB9" />
          </MapView>
          <Text style={styles.mapLabel}>Select on the map</Text>
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <View style={styles.buttonWrapper}>
        <CustomButton
          title="Request A Visit"
          onPress={() => navigation.navigate(ScreenNameEnum.Successfully)}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddProperty;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
    color: '#252B5C',
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 8,
    color: '#252B5C',
    marginTop: 8,
    fontWeight: '500',
  },
  locationText: {
    color: '#53587A',
    fontSize: 14,
    marginBottom: 11,
    marginTop: 1,
  },
  mapContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  map: {
    width: '100%',
    height: 200,
  },
  mapLabel: {
    textAlign: 'center',
    padding: 10,
    color: '#252B5C',
    fontSize: 14,
  },
  buttonWrapper: {
    marginBottom: 11,
    marginHorizontal: 15,
  },
});
