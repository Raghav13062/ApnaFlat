import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import CustomHeader from "../../../../compoent/CustomHeader";
import imageIndex from "../../../../assets/imageIndex";
import CustomButton from "../../../../compoent/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBarComponent from "../../../../compoent/StatusBarCompoent";
import CustomDropdown from "../../../../compoent/CustomDropdown";

const PropertyFormScreen = () => {
  const [selectedFeatures, setSelectedFeatures] = useState([
    "2 Bedroom",
    "1 Bathroom",
  ]);
 
  const removeItem = (list: string[], setList: Function, item: string) => {
    setList(list.filter((i) => i !== item));
  };
 const [propertyType, setPropertyType] = useState("");
  const [availability, setAvailability] = useState("");
  const [interior, setInterior] = useState("");
  const [layout, setLayout] = useState("");
  const [space, setSpace] = useState("");
  const [feature, setFeature] = useState("");
  const [amenity, setAmenity] = useState("");
    const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
 
  const allAmenities = ["Parking Area", "CCTV", "Balcony", "Swimming Pool"];
  const allFeatures = ["1 Bedroom", "2 Bedroom", "1 Bathroom", "Kitchen"];

  const toggleItem = (item: string, selectedList: string[], setList: Function) => {
    if (selectedList.includes(item)) {
      // unselect
      setList(selectedList.filter((i) => i !== item));
    } else {
      // select
      setList([...selectedList, item]);
    }
  };

  return (
    <SafeAreaView style={{
        flex:1,
        backgroundColor:"white"
        
    }}>
        <StatusBarComponent/>
              <CustomHeader imageSource={imageIndex.backImg} 
              imageSource1={imageIndex.eidticone}
              showRightIcon={true}
              label={""} />
{/*  */}
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Custom Header */}

      {/* Add Images Section */}
      <Text style={styles.header}>Add Images +</Text>
      <TouchableOpacity style={styles.imageBox}>
        <Text style={{ fontSize: 22, color: "#666" }}>+</Text>
      </TouchableOpacity>

      {/* Dropdown Sections */}
            <CustomDropdown
        label="Select Property Type"
        options={["Flat", "Villa", "Plot", "Studio"]}
        selectedValue={propertyType}
        onSelect={setPropertyType}
      />

      <CustomDropdown
        label="Property Availability"
        options={["Ready to Move", "Under Construction"]}
        selectedValue={availability}
        onSelect={setAvailability}
      />

      <CustomDropdown
        label="Add Interior"
        options={["Semi-Furnished", "Fully-Furnished", "Unfurnished"]}
        selectedValue={interior}
        onSelect={setInterior}
      />

      <CustomDropdown
        label="Property Layout"
        options={["1BHK", "2BHK", "3BHK", "4BHK"]}
        selectedValue={layout}
        onSelect={setLayout}
      />

      <CustomDropdown
        label="Property Space"
        options={["500 sqft", "1000 sqft", "1500 sqft", "2000 sqft"]}
        selectedValue={space}
        onSelect={setSpace}
      />

      <CustomDropdown
        label="Add Features"
        options={["Balcony", "Modular Kitchen", "Wardrobe"]}
        selectedValue={feature}
        onSelect={setFeature}
      />

      <CustomDropdown
        label="Add Amenities"
        options={["Parking", "CCTV", "Swimming Pool", "Gym"]}
        selectedValue={amenity}
        onSelect={setAmenity}
      />


      {/* Features */}
      <Text style={styles.sectionTitle}>Features</Text>
          <View style={styles.tagsContainer}>
             {allFeatures.map((feature, index) => {
          const isSelected = selectedFeatures.includes(feature);
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.tag,
                isSelected && { backgroundColor: "black" }, // selected color
              ]}
              onPress={() => toggleItem(feature, selectedFeatures, setSelectedFeatures)}
            >
              <Text
                style={[
                  styles.tagText,
                  isSelected && { color: "white", fontWeight: "600" },
                ]}
              >
                {feature}
              </Text>
            </TouchableOpacity>
          );
        })}
       
      </View>


      {/* Amenities */}
      <Text style={styles.sectionTitle}>Amenities</Text>
          <View style={styles.tagsContainer}>
        {allAmenities.map((amenity, index) => {
          const isSelected = selectedAmenities.includes(amenity);
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.tag,
                isSelected && { backgroundColor: "black" }, // selected color
              ]}
              onPress={() => toggleItem(amenity, selectedAmenities, setSelectedAmenities)}
            >
              <Text
                style={[
                  styles.tagText,
                  isSelected && { color: "white", fontWeight: "600" },
                ]}
              >
                {amenity}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Buttons */}
      {/* <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, { backgroundColor: "#0d6efd" }]}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: "#20c997" }]}>
          <Text style={styles.buttonText}>Add More</Text>
        </TouchableOpacity>
      </View> */}
      <View style={styles.buttonRow}>
          <CustomButton
                  title={"Save"}
                  //  onPress={()=>navigation.navigate(ScreenNameEnum.TabNavigator)}
                />

                  <CustomButton
                  title={"Add More"}
                  //  onPress={()=>navigation.navigate(ScreenNameEnum.TabNavigator)}
                />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 16,
  },
  imageBox: {
    width: 80,
    height: 80,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
                backgroundColor: '#F5F4F8',
                borderRadius: 20,
             
     marginBottom: 10,
     height:65,
     alignItems:"center"
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
    marginLeft:12
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,
    marginTop:5
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
     backgroundColor: '#F5F4F8',
                borderRadius: 20,    paddingHorizontal: 10,
    paddingVertical: 10,
    },
  tagText: {
    color: "black",
    marginRight: 6,
    fontSize:14
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 40,
  },
  button: {
    flex: 1,
    padding: 14,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default PropertyFormScreen;
