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
import SimilarProperties from '../../../../compoent/SimilarProperties';
import { useNavigation } from '@react-navigation/native';
import ScreenNameEnum from '../../../../routes/screenName.enum';
 
export default function PropertyDetailScreen() {
  const navigation = useNavigation();

  // 🔹 Property Details Dynamic Object
  const propertyDetails = {
    furnishing: "Semi Furnished", // Furnished | Semi Furnished | Full Furnished
    flatNo: "201",
    roomNo: "101",
    price: "4500",
    title: "Apartment",
  };

  const similarProperties = [
    {
      id: '1',
      type: '1BHK Flat',
      price: '4500',
      image: 'https://www.transparentpng.com/thumb/apartment/apartment-clipart-hd-14.png',
    },
    {
      id: '2',
      type: '2BHK Apartment',
      price: '6500',
      image: 'https://www.transparentpng.com/thumb/apartment/apartment-clipart-hd-14.png',
    },
    {
      id: '3',
      type: 'Studio Room',
      price: '1500',
      image: 'https://www.transparentpng.com/thumb/apartment/apartment-clipart-hd-14.png',
    },
  ];
  const [selectedFlat, setSelectedFlat] = useState("101 (Furnished)");
  const [open, setOpen] = useState(false);

  const flatOptions = [
    "Flat No : 101 (Furnished)",
    "Flat No : 102 (Semi Furnished)",
    "Flat No : 103 (Full Furnished)",
    "Flat No : 104 (Furnished)",
  ];

  const handleSelect = (item: string) => {
    setSelectedFlat(item);
    setOpen(false);
  };

  return (
    <SafeAreaView style={{ flex:1, backgroundColor:"white" }}>
      <StatusBarComponent/>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Header Image */}
        <View style={styles.imageContainer}>
          <Image source={imageIndex.Shape} style={styles.mainImage}/>
          
          {/* Header Icons */}
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.goBack()}>
              <Image source={imageIndex.backImg} style={{ height:40, width:40, resizeMode:"contain" }}/>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <TouchableOpacity style={styles.iconBtn}>
                <Image source={imageIndex.Share} style={{ height:40, width:40, resizeMode:"contain" }}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBtn}>
                <Image source={imageIndex.FavoriteActive} style={{ height:40, width:40, resizeMode:"contain" }}/>
              </TouchableOpacity>
            </View>
          </View>

          {/* Small Thumbnails */}
          <View style={styles.thumbnailContainer}>
            <Image source={imageIndex.Shape} style={styles.thumbnail} />
            <Image source={imageIndex.Shape} style={styles.thumbnail} />
            <Image source={imageIndex.Shape} style={styles.thumbnail} />
            <Text style={{position:"absolute", bottom:11, color:"white", right:15, fontSize:15}}>+3</Text>
          </View>
        </View>

        {/* Info Section */}
        <View style={styles.details}>
          <View style={styles.rowSpace}>
            <Text allowFontScaling={false} style={styles.title}>
              {propertyDetails.title}
            </Text>
            <Text allowFontScaling={false} style={styles.price}>
              ₹{propertyDetails.price}/<Text style={styles.subText}>Month</Text>
            </Text>
          </View>

          {/* 🔹 Furnishing & Flat/Room No Row */}
          <View style={styles.rowSpace2}>
            <View style={styles.row}>
              <Text style={styles.tag}>Furnished</Text>
            </View>
            <View style={styles.row}>
              <Text allowFontScaling={false} style={[styles.tag, { fontSize:14, color:"black" }]}>
                Only for Boys
              </Text>
            </View>
          </View>

          <View style={{ borderBottomWidth:1.5, borderColor:"#ECEDF3" }}/>

          {/* Similar Properties Info Box */}
             <View>
      {/* Main Box */}
      <TouchableOpacity
        style={styles.infoBox}
        onPress={() => setOpen(!open)}
        activeOpacity={0.7}
      >
        <Image
          source={imageIndex.slef}
          style={{ height: 22, width: 22, resizeMode: "contain" }}
        />
        <Text
          allowFontScaling={false}
          style={{
            fontSize: 14,
            color: "black",
            fontWeight: "600",
            marginLeft: 11,
            flex: 1,
          }}
        >
          {selectedFlat}
        </Text>
        <Image
          source={imageIndex.arrowDown}
          style={{
            height: 22,
            width: 22,
            resizeMode: "contain",
            transform: [{ rotate: open ? "180deg" : "0deg" }],
          }}
        />
      </TouchableOpacity>

      {/* Dropdown List */}
      {open && (
        <View style={styles.dropdown}>
          <FlatList
            data={flatOptions}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>


          {/* Features */}
          <Text allowFontScaling={false} style={styles.sectionTitle}>Features</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1,2].map((item, index) => (
              <View key={index} style={styles.featureRow}>
                <View style={styles.featureBox}>
                  <Image source={imageIndex.carrHome} style={{ height:25, width:25, resizeMode:"cover" }}/>
                  <Text allowFontScaling={false} style={styles.featureText}>2 Bedroom</Text>
                </View>
              </View>
            ))}
          </ScrollView>

          {/* Amenities */}
          <Text allowFontScaling={false} style={styles.sectionTitle}>Amenities</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {["Cttv","Parking","Cameras"].map((item, index) => (
              <View key={index} style={styles.featureRow}>
                <View style={styles.featureBox}>
                  <Image source={imageIndex.carrHome} style={{ height:15, width:15, resizeMode:"contain" }}/>
                  <Text allowFontScaling={false} style={styles.featureText}>{item}</Text>
                </View>
              </View>
            ))}
          </ScrollView>

          <Text style={{ fontSize:14, color:'black', fontWeight:"800", marginTop:20, marginBottom:15 }}>
            Similar Properties
          </Text>

          {/* Similar Properties */}
          <SimilarProperties data={similarProperties} />
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <View style={{ marginBottom: 12, marginHorizontal:15 }}>
        <CustomButton
          title={"Schedule Visit Now"}
          // onPress={() => navigation.navigate(ScreenNameEnum.ScheduleVisit)}
                    onPress={() => navigation.navigate(ScreenNameEnum.CalendarScreen)}

        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  imageContainer: { position: 'relative' },
  mainImage: { width: '100%', height: 400 },
  headerIcons: {
    position: 'absolute', top: 10, left: 12, right: 12,
    flexDirection: 'row', justifyContent: 'space-between',
  },
  iconBtn: { padding: 8, borderRadius: 20 },
  thumbnailContainer: { position: 'absolute', right: 15, bottom: 15, gap: 10 },
  thumbnail: { width: 50, height: 50, borderRadius: 10, borderWidth: 2, borderColor: '#2EACB9' },
  details: { padding: 20, paddingTop: 30 },
  row: { flexDirection: 'row', gap: 10, alignItems: 'center' },
  rowSpace: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  rowSpace2: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 11, marginBottom: 11 },
  title: { fontSize: 18, fontWeight: '600' },
  price: { fontSize: 20, fontWeight: '700', color: '#2EACB9' },
  subText: { fontWeight: '400', fontSize: 14 },
  tag: { backgroundColor: '#e0f7ff', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, fontSize: 13 },
 
  sectionTitle: { marginTop: 20, marginBottom: 10, fontSize: 16, fontWeight: '600' },
  featureRow: { flexDirection:'row', alignItems:"center", justifyContent:"center" },
  featureBox: { backgroundColor: '#F5F4F8', padding: 15, borderRadius: 25, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginLeft:2 },
  featureText: { fontSize: 12, color: '#333', textAlign: 'center', marginLeft:10 },
    infoBox: {
     alignItems: "center",
    
    paddingHorizontal: 10,
      backgroundColor: "#F5F4F8", flexDirection: 'row',  
    padding:25, borderRadius: 20, marginTop:11
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginTop: 5,
    backgroundColor: "#fff",
    maxHeight: 150,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  optionText: {
    fontSize: 14,
    color: "black",
  },

});
