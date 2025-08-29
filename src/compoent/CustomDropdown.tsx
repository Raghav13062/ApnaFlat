import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from "react-native";
import imageIndex from "../assets/imageIndex";
 
interface Props {
  label: string;
  options: string[];
  onSelect: (value: string) => void;
  selectedValue?: string;
}

const CustomDropdown: React.FC<Props> = ({ label, options, onSelect, selectedValue }) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      {/* Dropdown Header */}
      <TouchableOpacity style={styles.dropdownHeader} onPress={() => setOpen(!open)}>
        <Text style={styles.dropdownText}>
          {selectedValue ? selectedValue : label}
        </Text>
        <Image source={imageIndex.downarrow}
        style={{
          height:22,
          width:22,
          resizeMode:"cover"
        }}
        
        />
        {/* <Ionicons
          name={open ? "chevron-up" : "chevron-down"}
          size={18}
          color="#666"
        /> */}
      </TouchableOpacity>

      {/* Dropdown Options */}
      {open && (
        <View style={styles.optionsContainer}>
          <FlatList
            data={options}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.optionItem}
                onPress={() => {
                  onSelect(item);
                  setOpen(false);
                }}
              >
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },
  dropdownHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F5F4F8",
    borderRadius: 20,
    paddingHorizontal: 12,
    alignItems: "center",
    height: 60,
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
  },
  optionsContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginTop: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden",
  },
  optionItem: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionText: {
    fontSize: 15,
    color: "#333",
  },
});

export default CustomDropdown;
