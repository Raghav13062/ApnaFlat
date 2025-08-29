import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import imageIndex from '../../../assets/imageIndex';
import BackButton from '../../../compoent/BackButton';
import ScreenNameEnum from '../../../routes/screenName.enum';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import { errorToast } from '../../../utils/customToast';

const properties = [
  { id: '1', name: 'Apartment', image: imageIndex.p1 },
  { id: '2', name: 'House', image: imageIndex.p2 },
  { id: '3', name: 'Townhouse', image: imageIndex.p4 },
  { id: '4', name: 'Villa', image: imageIndex.ba2 },
];

export default function PropertySelect() {
  const [selected, setSelected] = useState<string | null>(null);
  const navigation = useNavigation();

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={[styles.card, selected === item.id && styles.selectedCard]}
      onPress={() => setSelected(item.id)}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.label}>{item.name}</Text>
      {selected === item.id ? <View style={styles.checkCircle} /> :
      <View style={styles.checkCircle1} />
      }
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBarComponent backgroundColor="white" />
      <View style={styles.container}>
        <TouchableOpacity style={styles.skipBtn}
          onPress={() => {
              
                navigation.navigate(ScreenNameEnum.LocationsScreen);
            
            }}
        >
          <Text              allowFontScaling={false}
style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <Text              allowFontScaling={false}
style={styles.title}>Select your favourite{"\n"}property.</Text>

        <FlatList
          data={properties}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.grid}
          showsVerticalScrollIndicator={false}
        />

        <View style={styles.buttonWrapper}>
          <BackButton
            title="Next"
            onPress={() => {
              if (selected) {
                navigation.navigate(ScreenNameEnum.LocationsScreen);
              } else {
                errorToast("Please select a property.")
                // Alert.alert("Please select a property.");
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  skipBtn: {
    alignSelf: 'flex-end',
  },
  skipText: {
    color: '#2EACB9',
    fontSize: 15,
    fontWeight: '500',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 20,
    color: '#2EACB9',
    lineHeight: 26,
  },
  grid: {
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  card: {
    width: '47%',
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#F5F4F8',
    alignItems: 'center',
    position: 'relative',
  },
  selectedCard: {
    borderColor: '#00B4D8',
    borderWidth: 2,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 20,
  },
  label: {
    marginTop: 10,
    fontWeight: '500',
    fontSize: 16,
    color:"#2EACB9"
  },
  checkCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#2EACB9',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  checkCircle1: {
    width: 18,
    height: 18,
    borderRadius: 9,
    // backgroundColor: '#BCC2D2',
    position: 'absolute',
    top: 10,
    right: 10,
    borderWidth:1,
    borderColor:"#BCC2D2"
  },
  buttonWrapper: {
    marginBottom: 20,
  },
});
