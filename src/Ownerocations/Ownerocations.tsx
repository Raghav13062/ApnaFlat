import { useNavigation } from '@react-navigation/native';
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
import StatusBarComponent from '../compoent/StatusBarCompoent';
import ScreenNameEnum from '../routes/screenName.enum';
import BackButton from '../compoent/BackButton';
import TextInputField from '../utils/TextInputField';
 
 
const Ownerocations = () => {
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

    
      <Text style={styles.title}>
        Provide exact location
{'\n'}
        of your property
       </Text>
 
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
       <TextInputField
                  placeholder={"Near By"}
                  firstLogo={true}
                              allowFontScaling={false}

                 />
<View style={{
  marginTop:22
}}>
      <BackButton
        title={'Next'}
        onPress={() => {
          Navigation.navigate(ScreenNameEnum.PropertyFormScreen);
        }}
      />
      </View>
    </SafeAreaView>
  );
};

export default Ownerocations;
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
    marginTop:20
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
