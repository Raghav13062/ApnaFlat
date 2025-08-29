import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import imageIndex from '../../../assets/imageIndex';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';

const properties = [
  {
    id: '1',
    image: 'https://www.transparentpng.com/thumb/apartment/apartment-clipart-hd-14.png',
    type: '1BHK Flat',
    price: '4500',
    location: 'Bhawarkuan Marg',
  },
  {
    id: '2',
    image: 'https://www.transparentpng.com/thumb/apartment/apartment-clipart-hd-14.png',
    type: '2BHK Flat',
    price: '10000',
    location: 'Bhawarkuan Marg',
  },
  {
    id: '3',
    image: 'https://www.transparentpng.com/thumb/apartment/apartment-clipart-hd-14.png',
    type: '1BHK Flat',
    price: '450',
    location: 'Bhawarkuan Marg',
  },
];

const SaveFavorite = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBarComponent />

      {/* Header */}
      <View style={styles.header}>
        
        <View style={{flexDirection:"row",alignItems:"center"}}>
        <Image           source={{ uri: 'https://i.pravatar.cc/150?img=12' }} // Replace with actual user image URL
 style={{
          height:50,
          width:50,
          resizeMode:"contain",
          borderRadius:50,
        }}/>
        <View style={{
          flexDirection:"column" ,
          marginLeft:11
        }}>
          <Text style={styles.greeting}>Hello Dheeraj</Text>
          <Text style={styles.location}>Indore, MP</Text>
          </View>
        </View>
        <Image source={imageIndex.Notification} style={{
          height:50,
          width:50,
          resizeMode:"contain"
        }}/>
      </View>

      {/* Title */}
      <View style={styles.titleRow}>
        <Text style={styles.savedTitle}>Saved Estates</Text>
        <TouchableOpacity style={styles.selectBox}>
        
        <Image source={imageIndex.slited} style={{
            height:55,
            width:55,
            resizeMode:"contain"
        }} />

                   </TouchableOpacity>
      </View>

      {/* Properties */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={properties}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={imageIndex.homebagr} style={styles.cardImage} />
            <TouchableOpacity style={styles.heartIcon}>
              <Image
                source={imageIndex.FavoriteLike}
                style={styles.heartImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View style={styles.cardInfo}>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"space-between"
                }}>
              <Text style={styles.cardTitle}>{item.type}</Text>
              <Text style={styles.cardPrice}>₹{item.price}/Month</Text>
              </View>
              <View style={styles.cardLocation}>
                <Image source={imageIndex.Location} style={{

                  height:22,
                  width:22
                }}/>
                <Text style={styles.cardLocationText}>{item.location}</Text>
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
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: 'gray',
  },
  bellIcon: {
    position: 'absolute',
    top: -5,
    right: -10,
    
 
    
  },
  bellImage: {
    width: 20,
    height: 20,
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
  selectBox: {
    backgroundColor: '#fff',
    paddingVertical: 6,
 
  },
  selectText: {
    fontSize: 14,
    color: '#444',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 10,
    padding: 12,
     shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    borderWidth:0.8,
    borderColor:"#2EACB9"
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  heartIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
     padding: 8,
 
  },
  heartImage: {
    height: 42,
    width: 42,
    resizeMode:"cover"
  },
  cardInfo: {
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#2EACB9',
  },
  cardPrice: {
    fontSize: 15,
    color: '#2EACB9',
    marginTop: 3,
  },
  cardLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  cardLocationText: {
    fontSize: 13,
    color: '#666',
  },
});
