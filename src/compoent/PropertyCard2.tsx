import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import imageIndex from '../assets/imageIndex';
 import ScreenNameEnum from '../routes/screenName.enum';
import { useNavigation } from '@react-navigation/native';
 
const PropertyCard2 = ({ image, type, location, price, onFavoritePress }:any) => {
    const na = useNavigation()
  return (
    <TouchableOpacity 
    onPress={()=>{
        na.navigate (ScreenNameEnum.PropertyDetailOwner)
    }}
    style={styles.card}>
      {/* Image and Heart Icon */}
      <View style={styles.imageWrapper}>
        <Image source={imageIndex.homebag2} style={styles.image} />
        
      </View>

      {/* Details */}
      <View style={styles.details}>
        <View style={{
            flexDirection:"row",
            justifyContent:"space-between"
        }}>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.price}>
         {price} 
        </Text>
        </View>
        <View style={styles.row}>
        <Image source={imageIndex.Location} style={{
            height:22,
            width:22
        }} />
          <Text style={styles.location}>{location}</Text>
        </View>
       
      </View>
    </TouchableOpacity>
  );
};

export default PropertyCard2;
const styles = StyleSheet.create({
    card: {
      backgroundColor: "#F5F4F8",
      marginBottom:15 ,
      padding:11,
      borderRadius:25
  
    },
    imageWrapper: {
      position: 'relative',
      top:11
    },
    image: {
      width: '100%',
      height: 160,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    heartIcon: {
      position: 'absolute',
      top: 10,
      right: 13,
 
    },
    details: {
        marginTop:20 ,
        marginBottom:10
     },
    type: {
      fontSize: 16,
      fontWeight: '600',
      color: '#00aaff',
      marginBottom: 6,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    location: {
      marginLeft: 4,
      fontSize: 13,
      color: '#666',
    },
    price: {
      fontSize: 15,
      color: '#2EACB9',
      fontWeight:"600"
    },
    priceValue: {
      color: '#00aaff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  