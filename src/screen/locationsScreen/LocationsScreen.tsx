import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarComponent from '../../compoent/StatusBarCompoent';
import BackButton from '../../compoent/BackButton';
import ScreenNameEnum from '../../routes/screenName.enum';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../compoent/SearchBar';
 
const LocationsScreen = () => {
  const Navigation = useNavigation();

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarComponent backgroundColor="white" />

      <View style={styles.topBar}>
        <TouchableOpacity>
          <Text style={styles.skip} 
            onPress={() => {
              Navigation.navigate(ScreenNameEnum.TabNavigator);
            }}
          >Skip</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>
        Search <Text style={styles.boldText}>Property</Text> nearby{'\n'}you &
        your favourite <Text style={styles.boldText}>Locations</Text>
      </Text>
      <SearchBar placeholder={"Find Location"}/>

      <View style={styles.mapContainer}>
         <MapView
          style={styles.map}
          showsUserLocation={true}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            title="Selected Location"
            pinColor='#2EACB9'
          />
        </MapView>  

        <TouchableOpacity style={styles.detailButton}>
          <Text style={styles.detailButtonText}>Set detail location</Text>
        </TouchableOpacity>
      </View>
<View style={{
  marginTop:22
}}>
      <BackButton
        title={'Next'}
        onPress={() => {
          Navigation.navigate(ScreenNameEnum.TabNavigator);
        }}
      />
      </View>
    </SafeAreaView>
  );
};

export default LocationsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  topBar: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  skip: {
    color: '#2EACB9',
    fontSize: 18,
    fontWeight: '600',
    marginTop:10
  },
  title: {
    fontSize: 22,
    marginVertical: 20,
    color: '#2EACB9',
   },
  boldText: {
    fontWeight: 'bold',
    color: '#0BC1D2',
  },
  mapContainer: {
    height: 300,
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
    marginTop:30
  },
  map: {
    flex: 1,
  },
  detailButton: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#2EACB9',
    width: '100%',
    padding: 22,
    alignItems: 'center',
    justifyContent:"center"
  },
  detailButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize:18
  },
});
