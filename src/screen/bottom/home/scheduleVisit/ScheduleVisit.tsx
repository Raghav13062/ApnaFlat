import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
 } from 'react-native';
import imageIndex from '../../../../assets/imageIndex';
import CustomButton from '../../../../compoent/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarComponent from '../../../../compoent/StatusBarCompoent';
import SimilarProperties from '../../../../compoent/SimilarProperties';
import { useNavigation } from '@react-navigation/native';
 import MapView, { Marker } from 'react-native-maps';

export default function ScheduleVisit() {
  const similarProperties1 = [
    {
      id: '1',
      type: '1BHK Flat',
      price: '4500',
      image: 'https://www.transparentpng.com/thumb/apartment/apartment-clipart-hd-14.png',
    },
   
  ];
  
  
const navigation = useNavigation()
  return (
    <SafeAreaView style={{
      flex:1,
      backgroundColor:"white"
    }}>
      <StatusBarComponent/>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Image */}
      <View style={styles.imageContainer}>
        <Image
          source={imageIndex.Shape}
          style={styles.mainImage}
        />
        {/* Header Icons */}
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconBtn} 
          
          onPress={() => navigation.goBack()}
          >
            <Image source={imageIndex.backImg} style= {{
            height:40,
              width:40,
              resizeMode:"contain"
            }}/>
            {/* <Ionicons name="arrow-back" size={20} color="#000" /> */}
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <TouchableOpacity style={styles.iconBtn} 
            
            onPress={() => navigation.goBack()}
            >
            <Image source={imageIndex.Share} style= {{
            height:40,
              width:40,
              resizeMode:"contain"
            }}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
            <Image source={imageIndex.FavoriteActive} style= {{
               height:40,
              width:40,
              resizeMode:"contain"
            }}/>
            </TouchableOpacity>
          </View>
        </View>

        {/* Small Thumbnails */}
        <View style={styles.thumbnailContainer}>
          <Image source={{ uri: 'https://e7.pngegg.com/pngimages/447/166/png-clipart-house-real-estate-property-bank-house-building-grass-thumbnail.png'}} style={styles.thumbnail} />
          <Image source={{ uri: 'https://e7.pngegg.com/pngimages/447/166/png-clipart-house-real-estate-property-bank-house-building-grass-thumbnail.png' }} style={styles.thumbnail} />
          <Image source={{ uri: 'https://e7.pngegg.com/pngimages/447/166/png-clipart-house-real-estate-property-bank-house-building-grass-thumbnail.png'}} style={styles.thumbnail} />
        </View>
      </View>

      {/* Info Section */}
      <View style={styles.details}>
        <View style={styles.rowSpace}>
          <Text             allowFontScaling={false}
 style={styles.title}>Apartment</Text>
          <Text              allowFontScaling={false}
style={styles.price}>₹4500/<Text style={styles.subText}>Month</Text></Text>
        </View>
<View style={{
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-between" ,
  marginTop:11,
  marginBottom:11,
 
}}>
        <View style={styles.row}>
          {/* <Image  style={{
            height:11,
            width:11,
            resizeMode:"contain"t
          }} source={imageIndex.prfoielImg}/> */}
          <Text              allowFontScaling={false}
style={[styles.tag,{
           }]}>Only for Boys</Text>
         
        </View>
        <View style={styles.row}>
        <Text             allowFontScaling={false}
 style={[styles.tag,{ fontSize:14, color:"black"}]}>2024 ⇅</Text>
        </View>
        </View>
        <View style={{
 
 
  borderBottomWidth:1.5,
  borderColor:"#ECEDF3"
}}/>
    
        <View
  style={{
    backgroundColor: "#F5F4F8",
    flexDirection: 'row',
    alignItems: 'center',
    padding:25,
     borderRadius: 20,
     marginTop:11
 
  
    }}
>
  <Image
    source={imageIndex.slef}
    style={{
      height: 22,
      width: 22,
      resizeMode: "contain",
     }}
  />
  <Text
    style={{
      fontSize: 14,
      color: 'black',
      fontWeight:"600",
      marginLeft:11
    }}
                allowFontScaling={false}

  >
    Similar Properties
  </Text>
</View>

        {/* Features */}
        <Text             allowFontScaling={false}
 style={styles.sectionTitle}>Features</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}  >
  {[1,2].map((item, index) => (
    <View key={index} style={styles.featureRow}>
      <View style={styles.featureBox}>
        <Image 
          source={imageIndex.carrHome} 
          style={{
            height:25,
            width:25,
            resizeMode:"cover"
          }} 
        />
        <Text              allowFontScaling={false}
style={styles.featureText}>2 Bedroom</Text>
      </View>
    </View>
  ))}
</ScrollView>

        {/* Amenities */}
        <Text              allowFontScaling={false}
style={styles.sectionTitle}>Amenities</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}  >
  {[1,2].map((item, index) => (
    <View key={index} style={styles.featureRow}>
      <View style={[styles.featureBox,{
 
      }]}>
        <Image 
          source={imageIndex.carrHome} 
          style={{
            height:25,
            width:25,
            resizeMode:"cover"
          }} 
        />
        <Text             allowFontScaling={false}
 style={styles.featureText}>Parking</Text>
      </View>
    </View>
  ))}
</ScrollView>

<Text
    style={{
      fontSize: 14,
      color: 'black',
      fontWeight:"800",
      marginTop:20 ,
      marginBottom:15
     }}
                 allowFontScaling={false}

  >
   Owner Details
  </Text>


  {[{ima:imageIndex.userp,num:"ram"},{
    ima:imageIndex.call,
    num:"9374873883"
  }].map((item, index) => (
    <View key={index} style={{
      flexDirection:'row',
      flex:1,
      marginTop:11
      }}>
      <View style={{
        backgroundColor: '#F5F4F8',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
         flexDirection: 'row',
        marginLeft:2 ,
        width:"100%",
        height:60
      }}>
        <Image 
          source={item.ima} 
          style={{
            height:25,
            width:25,
            resizeMode:"cover"
          }} 
        />
        <Text              allowFontScaling={false}
style={styles.featureText}>{item?.num}</Text>
      </View>
    </View>
  ))}

        {/* Similar Properties */}
    <Text
    style={{
      fontSize: 14,
      color: 'black',
      fontWeight:"800",
      marginTop:20 ,
      marginBottom:15
     }}
                 allowFontScaling={false}

  >
    Property Location
  </Text>
       <MapView
        style={{
     height: 250, // aapko jitni height chahiye set kar do
    borderRadius: 50,
        }}
        initialRegion={{
          latitude: 28.6139,   // Example: Delhi latitude
          longitude: 77.2090,  // Example: Delhi longitude
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {/* Marker */}
        <Marker
          coordinate={{ latitude: 28.6139, longitude: 77.2090 }}
          title={"Bholaram Ustad Marg"}
          description={"भोपाल का स्थान"}
        />
      </MapView>
 <Text
    style={{
      fontSize: 14,
      color: 'black',
      fontWeight:"800",
      marginTop:20 ,
      }}
                 allowFontScaling={false}

  >
    Similar Properties
  </Text>
        {/* <SimilarProperties data={similarProperties1} /> */}
    <View style={styles.card}>
      {/* Image with heart icon */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://picsum.photos/400/250" }} // Replace with your property image
          style={styles.image}
        />
        <TouchableOpacity style={styles.heartIcon}>
          <Image
          source={imageIndex.FavoriteLike} // Replace with your property image
          style={{
            height:25,
            width:25,
            resizeMode:"contain"
          }}
        />
        </TouchableOpacity>
      </View>

      {/* Details */}
      <View style={styles.detailsRow}>
        <Text style={styles.title}>1BHK Flat</Text>
        <Text style={styles.price}>
          ₹ 4500
          <Text style={styles.month}>/Month</Text>
        </Text>
      </View>
    </View>


      </View>

      {/* Bottom Button */}
  
  
    </ScrollView>
    <View style={{ flexDirection:"row", marginBottom: 12,marginHorizontal:15  ,justifyContent:"space-between"}}>

<CustomButton
            title={"Self Visit"}
            //  onPress={()=>navigation.navigate(ScreenNameEnum.LoginSuccess)}
            //  onPress={()=>navigation.navigate(ScreenNameEnum.TabNavigator)}
          />
<CustomButton
            title={"Ask a Visitor"}
            //  onPress={()=>navigation.navigate(ScreenNameEnum.LoginSuccess)}
            //  onPress={()=>navigation.navigate(ScreenNameEnum.TabNavigator)}
          />
          </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
  },
  mainImage: {
    width: '100%',
    height: 400,
  
  },
  headerIcons: {
    position: 'absolute',
    top: 10,
    left: 15,
    right: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: "#F5F4F8",
    borderRadius: 20,
    padding: 10,
    margin: 10,
    marginTop:15
  
  },
 
  image: {
    width: "100%",
    height: 160,
    borderRadius: 20,
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
     borderRadius: 20,
    padding: 5,
    elevation: 3,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#008080",
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#008080",
  },
  month: {
    fontSize: 12,
    color: "gray",
  },

  iconBtn: {
     padding: 8,
    borderRadius: 20,
   },
  thumbnailContainer: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    gap: 10,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2EACB9',
  },
  details: {
    padding: 20,
    paddingTop: 30,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  scrollContainer: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  featureRow: {
     flexDirection:'row',
    alignItems:"center",
    justifyContent:"center"
  },
  featureBox: {
    backgroundColor: '#F5F4F8',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft:2
    // for Android shadow
   },
  featureIcon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginLeft:10
  },

  price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2EACB9',
  },
  subText: {
    fontWeight: '400',
    fontSize: 14,
  },
  tag: {
    backgroundColor: '#e0f7ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 13,
  },
  tagSecondary: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 13,
  },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  
  similarCard: {
    width: 250,
    borderRadius: 15,
    backgroundColor: '#f5f5f5',
    marginRight: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  similarImage: {
    width: '100%',
    height: 130,
    borderRadius: 10,
  },
  similarType: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#00A8FF', // light blue color matching the card
  },
  similarPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: '#555',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#00aaff',
    margin: 20,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
