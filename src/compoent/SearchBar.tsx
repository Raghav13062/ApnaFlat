import React from "react";
import { View, TextInput, Image, StyleSheet } from "react-native";
import imageIndex from "../assets/imageIndex";
import localizationStrings from "../Localization/Localization";

interface SearchBarProps {
  placeholder?: string;
  onSearchChange?: (text: string) => void;
  value?: string
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = localizationStrings?.Search, onSearchChange, value }) => {
  return (
    <View style={styles.searchBar}>
      <Image source={imageIndex.redLocation} style={{
        height:22,
        
        width:22,
      }} resizeMode="contain" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="black"
        onChangeText={onSearchChange}
        value={value}
      />
      <Image source={imageIndex.RedSearch} style={styles.icon} resizeMode="cover"  />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#F3F4F5",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginVertical: 10,
    height:70,
    justifyContent:"center"
       //
  },
  icon: {
    height: 15,
    width: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "black",
    marginLeft: 15,
  },
});

export default SearchBar;
