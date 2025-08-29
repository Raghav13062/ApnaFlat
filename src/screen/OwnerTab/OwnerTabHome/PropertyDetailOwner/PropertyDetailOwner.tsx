import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import imageIndex from '../../../../assets/imageIndex';
import CustomButton from '../../../../compoent/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarComponent from '../../../../compoent/StatusBarCompoent';
 import { useNavigation } from '@react-navigation/native';
  
export default function PropertyDetailOwner() {
  
  const [open, setOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("2024");

  const years = ["2024", "2023", "2022", "2021", "2020"];

  const handleSelect = (year: string) => {
    setSelectedYear(year);
    setOpen(false);
  };

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
          {/* <View style={{ flexDirection: 'row', gap: 10 }}>
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
          </View> */}
        </View>

        {/* Small Thumbnails */}
        <View style={styles.thumbnailContainer}>
          <Image            source={imageIndex.Shape}
 style={styles.thumbnail} />
          <Image           source={imageIndex.Shape}
 style={styles.thumbnail} />
          <Image           source={imageIndex.Shape}
 style={styles.thumbnail} />
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
          <Text style={[styles.tag,{
           }]}>Only for Boys</Text>
         
        </View>
            <View >
      {/* Selected Item */}
      <TouchableOpacity
        style={styles.dropdownHeader}
        onPress={() => setOpen(!open)}
      >
        <Text style={styles.dropdownText}>{selectedYear}</Text>
        <Text style={styles.arrow}>{open ? "▲" : "▼"}</Text>
      </TouchableOpacity>

      {/* Dropdown List */}
      {open && (
        <View style={styles.dropdownList}>
          <FlatList
            data={years}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.dropdownText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
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
              allowFontScaling={false}

    style={{
      fontSize: 14,
      color: 'black',
      fontWeight:"600",
      marginLeft:11
    }}
  >
    Similar Properties
  </Text>
</View>

        {/* Features */}
        <Text              allowFontScaling={false}
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
        <Text             allowFontScaling={false}
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
      </View>
    </ScrollView>
<View style={{
  marginTop:15,
  marginHorizontal:18
}}>

<CustomButton
            title={"Ask to Review"}
            
             onPress={()=>navigation.goBack()}
           />
</View>


<View style={{
  marginTop:15,
    marginHorizontal:18,
    marginBottom:15

}}>


          <CustomButton
            title={"Edit your Property"}
            
             onPress={()=>navigation.goBack()}
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

    dropdownHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#2EACB9",
    borderRadius: 15,
    backgroundColor: "#fff",
    
  },
  dropdownText: {
    fontSize: 14,
    color: "black",
  },
  arrow: {
    fontSize: 16,
    color: "black",
  },
  dropdownList: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 5,
    borderRadius: 8,
    backgroundColor: "#fff",
    position:"relative"
   },
  dropdownItem: {
    padding: 10,
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
    left: 12,
    right: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  title: {
    fontSize: 18,
    fontWeight: '600',
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
    marginLeft:4
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
