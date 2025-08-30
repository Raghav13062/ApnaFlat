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
import PopPush from '../../../compoent/PopPush';

// Dummy Estates Data
const estates = [
  {
    id: '1',
    type: '1BHK Flat',
    location: 'Shalimar Bagh',
    price: '₹ 4500/month',
    category: 'Flats',
    image:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAPtdNrhGmS0a1ud1TfQgcPmoq12it3xj41pl9-s1vLAWH_3RL-FG63jSnzq_8Vr6Av2fxCkeUqTG2bf130IUnoY7IL7Ypj7iMZIdyL2kljFaYW8nhg-_FFOv9yjcONWlMwtx4EusI2P4/s1600/south-indian-house.jpg',
  },
  {
    id: '2',
    type: '2BHK Flat',
    location: 'Shalimar Bagh',
    price: '₹ 10,000/month',
    category: 'Flats',
    image:
      'https://p.kindpng.com/picc/s/313-3138798_apartment-building-png-plain-apartment-building-png-transparent.png',
  },
  {
    id: '3',
    type: '1RK Room',
    location: 'Shalimar Bagh',
    price: '₹ 3000/month',
    category: 'Rooms',
    image:
      'https://www.seekpng.com/png/detail/241-2415291_house-indian-home-images-png.png',
  },
  {
    id: '4',
    type: '2 Seater',
    location: 'Shalimar Bagh',
    price: '₹ 2500/month',
    category: 'Hostels',
    image:
      'https://png.pngtree.com/png-vector/20221223/ourmid/pngtree-hostel-png-image_6537807.png',
  },
  {
    id: '5',
    type: '3BHK Villa',
    location: 'Shalimar Bagh',
    price: '₹ 25,000/month',
    category: 'House/Villa',
    image:
      'https://static.vecteezy.com/system/resources/previews/022/484/747/non_2x/modern-villa-house-png.png',
  },
  {
    id: '6',
    type: 'Medium Shop',
    location: 'Shalimar Bagh',
    price: '₹ 15,000/month',
    category: 'Shop/Hall',
    image:
      'https://png.pngtree.com/png-vector/20230324/ourmid/pngtree-street-shop-building-png-image_6667349.png',
  },
];

// Categories
const categories = [
  'Rooms',
  'Flats',
  'Hostels',
  'Apartments',
  'House/Villa',
  'Shop/Hall',
];

// 👇 Category-wise filters
const categoryFilters: Record<string, string[]> = {
  All: [],
  Rooms: [], // Rooms -> filter hide
  Flats: ['1RK', '1BHK', '2BHK', '3BHK', '4BHK'],
  Apartments: ['1RK', '1BHK', '2BHK', '3BHK', '4BHK'],
  Hostels: ['1 Seater', '2 Seaters', '3 Seaters', '4 Seaters'],
  'House/Villa': ['1BHK', '2BHK', '3BHK', '4BHK', 'Duplex'],
  'Shop/Hall': ['Small', 'Medium', 'Large'],
};

export default function Home() {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    { id: 'low', label: 'Low to High' },
    { id: 'high', label: 'High to Low' },
    { id: 'near', label: 'Nearest' },
    { id: 'view', label: 'Most Viewed' },
  ];

  // 🔥 Dynamic filters based on selectedCategory
  const availableFilters = categoryFilters[selectedCategory] || [];

  // 🔥 Estates filter logic
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
              style={{ height: 50, width: 50, borderRadius: 50 }}
            />
            <View style={{ marginLeft: 11 }}>
              <Text allowFontScaling={false} style={styles.greeting}>
                Hello Dheeraj
              </Text>
              <Text allowFontScaling={false} style={styles.location}>
                Indore, MP
              </Text>
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
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.searchBar}>
              <Image
                source={imageIndex.search}
                style={{ height: 20, width: 20, resizeMode: 'contain' }}
              />
              <TextInput
                allowFontScaling={false}
                style={styles.input}
                placeholder="Provide the location you want to explore"
                placeholderTextColor={'#808080'}
              />
            </View>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image
                source={imageIndex.SearchEmpty}
                style={{ height: 60, width: 60, resizeMode: 'contain' }}
              />
            </TouchableOpacity>
          </View>

          {/* Categories */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryRow}
          >
            {categories.map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.category}
                onPress={() => {
                  setSelectedCategory(item);
                  setSelectedFilter('All'); // reset filter on category change
                }}
              >
                <Image
                  source={imageIndex.propery}
                  style={{
                    height: 70,
                    width: 70,
                    resizeMode: 'center',
                    borderWidth: 1,
                    borderColor: '#2EACB9',
                    borderRadius: 70,
                  }}
                />
                <Text
                  allowFontScaling={false}
                  style={{
                    color: '#2EACB9',
                    fontSize: 16,
                    marginTop: 10,
                    fontWeight: '600',
                    marginBottom: 5,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Filters (only if available) */}
          {availableFilters.length > 0 && (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.filterRow}
            >
              {availableFilters.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.filter,
                    selectedFilter === item && { backgroundColor: '#2EACB9' },
                  ]}
                  onPress={() => setSelectedFilter(item)}
                >
                  <Text
                    allowFontScaling={false}
                    style={{
                      color: selectedFilter === item ? 'white' : '#252B5C',
                      fontSize: 10,
                      fontWeight: '500',
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}

          {/* Estates List */}
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text allowFontScaling={false} style={styles.sectionTitle}>
              Nearby Estates
            </Text>
            <Text
              allowFontScaling={false}
              style={[styles.sectionTitle, { fontSize: 14, color: '#808080' }]}
            >
              Explore more
            </Text>
          </View>

          <FlatList
            data={filteredEstates}
            keyExtractor={(item) => item.id}
            style={{ marginTop: 11 }}
            renderItem={({ item }) => (
              <PropertyCard
                type={item.type}
                location={item.location}
                price={item.price}
                onFavoritePress={() => Alert.alert(`Favorited: ${item.type}`)}
              />
            )}
          />

          {/* PopPush Modal */}
          <PopPush
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            options={options}
            selectedOption={selected}
            onSelect={setSelected}
            onApply={() => {
              setModalVisible(false);
              console.log('Applied:', selected);
            }}
            onReset={() => setSelected(null)}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: { fontSize: 14, fontWeight: 'bold', color: '#2EACB9' },
  location: { fontSize: 14, color: '#2EACB9' },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F4F8',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 25,
    marginVertical: 30,
    height: 60,
    flex: 1,
  },
  input: { marginLeft: 8, flex: 1, color: 'black', fontSize: 11 },
  categoryRow: { flexDirection: 'row', marginBottom: 10 },
  category: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterRow: { flexDirection: 'row', marginBottom: 20, marginTop: 15 },
  filter: {
    backgroundColor: '#F5F4F8',
    padding: 12,
    borderRadius: 18,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 10,
    color: '#2EACB9',
  },
});
