import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity, Platform } from 'react-native';
import imageIndex from '../assets/imageIndex';

const screenWidth = Dimensions.get('window').width;

 const SimilarProperties = ({ data }:any) => {
    return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.imageWrapper}>
              <Image source={imageIndex.homebagr} style={styles.image} />
              <TouchableOpacity style={styles.heartIcon}>
                <Image
                  source={imageIndex.Favorite}
                  style={{ height: 44, width: 44, resizeMode: 'contain' }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.typeText}>{item.type}</Text>
              <Text style={styles.priceText}>₹{item.price}/Month</Text>
            </View>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

      {/* Pagination Dots */}
      <View style={styles.dotsContainer}>
        <View style={styles.dotActive} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  );
};

export default SimilarProperties;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  card: {
    width: screenWidth * 0.7,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 10,
    overflow: 'hidden',
    borderWidth:0.2,
    borderColor:"#2EACB9",
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      },
      android: {
        // elevation: 6,
      },
    }),
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  heartIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
  
   },
  cardContent: {
    padding: 15,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  typeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2EACB9',
  },
  priceText: {
    fontSize: 14,
    color: '#666',
    marginTop: 6,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 4,
  },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2EACB9',
    marginHorizontal: 4,
  },
});
