import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import imageIndex from '../../../assets/imageIndex';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';

const initialProperties = [
  {
    id: '1',
    image:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAPtdNrhGmS0a1ud1TfQgcPmoq12it3xj41pl9-s1vLAWH_3RL-FG63jSnzq_8Vr6Av2fxCkeUqTG2bf130IUnoY7IL7Ypj7iMZIdyL2kljFaYW8nhg-_FFOv9yjcONWlMwtx4EusI2P4/s1600/south-indian-house.jpg',
    type: '1BHK Flat',
    price: '4500',
    location: 'Bholaram Marg',
    isLiked: true,
    isSelected: false,
  },
  {
    id: '2',
    image:
      'https://p.kindpng.com/picc/s/313-3138798_apartment-building-png-plain-apartment-building-png-transparent.png',
    type: '2BHK Flat',
    price: '4500',
    location: 'Bholaram Marg',
    isLiked: false,
    isSelected: false,
  },
  {
    id: '3',
    image:
      'https://www.seekpng.com/png/detail/241-2415291_house-indian-home-images-png.png',
    type: '2BHK Flat',
    price: '4500',
    location: 'Bholaram Marg',
    isLiked: false,
    isSelected: false,
  },
];

const SaveFavorite = () => {
  const [properties, setProperties] = useState(initialProperties);

  // toggle like
  const toggleLike = (id: string) => {
    const updated = properties.map((item) =>
      item.id === id ? { ...item, isLiked: !item.isLiked } : item
    );
    setProperties(updated);
  };

  // toggle select checkbox
  const toggleSelect = (id: string) => {
    const updated = properties.map((item) =>
      item.id === id ? { ...item, isSelected: !item.isSelected } : item
    );
    setProperties(updated);
  };

  // select all
  const selectAll = () => {
    setProperties(properties.map((item) => ({ ...item, isSelected: true })));
  };

  // unselect all
  const unselectAll = () => {
    setProperties(properties.map((item) => ({ ...item, isSelected: false })));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarComponent />

      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
            style={styles.profilePic}
          />
          <View style={{ marginLeft: 11 }}>
            <Text allowFontScaling={false} style={styles.greeting}>
              Hello Dheeraj
            </Text>
            <Text allowFontScaling={false} style={styles.location}>
              Indore, (M.P)
            </Text>
          </View>
        </View>
        <Image source={imageIndex.Notification} style={styles.notification} />
      </View>

      {/* Title */}
      <View style={styles.titleRow}>
        <Text allowFontScaling={false} style={styles.savedTitle}>
          Saved Estates
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={unselectAll} style={styles.checkAction}>
            <Image  style={{
            height:11,
            width:11,
            resizeMode:"cover"
           }}source={imageIndex.Rectangle}/>
           
            <Text style={styles.actionText}>Unselect All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={selectAll} style={styles.checkAction}>
           
           
           <Image  style={{
            height:11,
            width:11,
            resizeMode:"cover"
           }}source={imageIndex.Rectangle}/>
            <Text style={styles.actionText}>Select All</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Properties */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={properties}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={styles.cardRow}>
            {/* Checkbox */}
            <TouchableOpacity
              onPress={() => toggleSelect(item.id)}
              style={[
                styles.checkbox,
                { backgroundColor: item.isSelected ? '#2EACB9' : '#fff' },
              ]}
            />

            {/* Card */}
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />

              {/* Like icon */}
              <TouchableOpacity
                style={styles.heartIcon}
                onPress={() => toggleLike(item.id)}
              >
                <Image
                  source={
                    item.isLiked
                      ? imageIndex.FavoriteLike
                      : imageIndex.Favorite
                  }
                  style={styles.heartImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              {/* Info */}
              <View style={styles.cardInfo}>
                <View style={styles.cardHeader}>
                  <Text allowFontScaling={false} style={styles.cardTitle}>
                    {item.type}
                  </Text>
                  <Text style={styles.cardPrice}>₹{item.price}/Month</Text>
                </View>
                <View style={styles.cardLocation}>
                  <Image
                    source={imageIndex.Location}
                    style={styles.locationIcon}
                  />
                  <Text
                    allowFontScaling={false}
                    style={styles.cardLocationText}
                  >
                    {item.location}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default SaveFavorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profilePic: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: 'gray',
  },
  notification: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  savedTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2EACB9',
  },
  checkAction: {
    marginHorizontal: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
    
  },
  actionText: {
    fontSize: 13,
    color: 'black',
    marginLeft:5,
  
   },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1.2,
    borderColor: '#2EACB9',
    borderRadius: 3,
    marginRight: 10,
    marginTop: 15,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    borderWidth: 0.8,
    borderColor: '#2EACB9',
  },
  cardImage: {
    width: '100%',
    height: 180,
    borderRadius: 15,
  },
  heartIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 8,
  },
  heartImage: {
    height: 32,
    width: 32,
  },
  cardInfo: {
    marginTop: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2EACB9',
  },
  cardPrice: {
    fontSize: 15,
    color: '#2EACB9',
  },
  cardLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationIcon: {
    height: 20,
    width: 20,
  },
  cardLocationText: {
    fontSize: 13,
    color: '#666',
    marginLeft: 5,
  },
});
