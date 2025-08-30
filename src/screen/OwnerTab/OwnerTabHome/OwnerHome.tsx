 
 
import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import imageIndex from '../../../assets/imageIndex';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import PropertyCard from '../../../compoent/PropertyCard';
import ScreenNameEnum from '../../../routes/screenName.enum';
import PropertyCard2 from '../../../compoent/PropertyCard2';

const estates = [
  {
    id: '1',
    type: '1BHK Flat',
    location: 'Shalimar Bagh',
    price: '₹ 4500/month',
    category: 'Flats',
  },
  {
    id: '2',
    type: '2BHK Flat',
    location: 'Shalimar Bagh',
    price: '₹ 10,000/month',
    category: 'Flats',
  },
  {
    id: '3',
    type: '1RK Room',
    location: 'Shalimar Bagh',
    price: '₹ 3000/month',
    category: 'Rooms',
  },
  {
    id: '4',
    type: '3BHK Apartment',
    location: 'Shalimar Bagh',
    price: '₹ 15,000/month',
    category: 'Apartments',
  },
  {
    id: '45',
    type: '3BHK Apartment',
    location: 'Shalimar Bagh',
    price: '₹ 15,000/month',
    category: 'Apartments',
  },
];

const categories = ['Rooms', 'Flats', 'Hostels', 'Apartments'];
const filters = [ '1RK', '1BHK', '2BHK', '3BHK', '4BHK'];

export default function OwnerHome() {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFilter, setSelectedFilter] = useState('All');

  // 🔥 filter logic
  const filteredEstates = useMemo(() => {
    return estates.filter((item) => {
      const categoryMatch =
        selectedCategory === 'All' || item.category === selectedCategory;
      const filterMatch =
        selectedFilter === 'All' || item.type.includes(selectedFilter);
      return categoryMatch && filterMatch;
    });
  }, [selectedCategory, selectedFilter]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBarComponent backgroundColor="white" />

      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
              style={{
                height: 50,
                width: 50,
                borderRadius: 50,
              }}
            />
            <View style={{ marginLeft: 11 }}>
              <Text  allowFontScaling={false} style={styles.greeting}>Hello Dheeraj</Text>
              <Text  allowFontScaling={false} style={styles.location}>Indore, MP</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(ScreenNameEnum.Notification)}
          >
            <Image
              source={imageIndex.Notification}
              style={{ height: 50, width: 50, resizeMode: 'contain' }}
            />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Search Bar */}
          <View style={styles.searchBar}>
            <Image
              source={imageIndex.search}
              style={{ height: 33, width: 33, resizeMode: 'contain' }}
            />
            <TextInput
            allowFontScaling={false}
              style={styles.input}
              placeholder="Provide the location you want to explore"
              placeholderTextColor={'#808080'}
            />
          </View>

        
 

          {/* Estates List */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text allowFontScaling={false} style={styles.sectionTitle}>My Listing</Text>
            <Text  allowFontScaling={false}style={[styles.sectionTitle, { color: '#808080' }]}>
             Explore more
            </Text>
          </View>

          <FlatList
            data={filteredEstates}
            keyExtractor={(item) => item.id}
            style={{ marginTop: 11 }}
            renderItem={({ item }) => (
              <PropertyCard2
                type={item.type}
                location={item.location}
                price={item.price}
                onFavoritePress={() => Alert.alert(`Favorited: ${item.type}`)}
              />
            )}
          />
        </ScrollView>
         <TouchableOpacity 

         style={styles.fab}
          onPress={()=>{
            navigation.navigate(ScreenNameEnum.Ownerocations)
          }}
          >
      <Text  allowFontScaling={false} style={styles.fabText}>+</Text>
    </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  greeting: { fontSize: 18, fontWeight: 'bold' },
  location: { fontSize: 14, color: 'gray' },
  fab: {
    position: "absolute",
    bottom: 20, 
    right: 20,  
    backgroundColor: "#2EACB9",
    width: 50,
    height: 50,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
   
  },
  fabText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "700",
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F4F8',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 25,
    marginVertical: 30,
    height: 70,
  },
  input: { marginLeft: 10, flex: 1, color: 'black', fontSize: 15 },
  categoryRow: { flexDirection: 'row', marginBottom: 10 },
  category: {  marginRight: 10, justifyContent: 'center', alignItems: 'center' },
  filterRow: { flexDirection: 'row', marginBottom: 20,marginTop:15 },
  filter: {
    backgroundColor: '#F5F4F8',
    padding: 12,
    borderRadius: 18,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: { fontSize: 15, fontWeight: '600', marginBottom: 10, color: '#2EACB9' },
});
