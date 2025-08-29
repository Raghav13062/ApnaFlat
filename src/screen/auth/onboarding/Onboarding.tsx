import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
 import imageIndex from "../../../assets/imageIndex";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBarComponent from "../../../compoent/StatusBarCompoent";
import ScreenNameEnum from "../../../routes/screenName.enum";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Find Your Favorite flat and more in Just a Few Clicks! ",
    subtitle:
      "Discover thousands of properties tailored to your preferences. Search, compare, and save your favoritesall in one place.",
            image: imageIndex.onbag2,

  },
  {
    id: "2",
    title: "Stay Updated with Property Alerts ",
    subtitle: "priceNever miss an opportunity! Get instant notifications for new listings, price drops, and offers that match your preferences.",
    image: imageIndex.ImageProperty,
  },
  {
    id: "3",
    image: imageIndex.p1,

    title: "Contact the owner directly, not the broker today",
    subtitle: "From browsing to renting, we’re here with you every step of the way. Join now and discover your perfect place!",
  },
];

const Onboarding = ({ navigation }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
    navigation.replace(ScreenNameEnum.ChooseRole);
    }
  };

  const handleSkip = () => {
    navigation.replace(ScreenNameEnum.ChooseRole);
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.slide}>
      <Text              allowFontScaling={false}
 style={styles.title}>{item.title}</Text>
      <Text              allowFontScaling={false}
style={styles.subtitle}>{item.subtitle}</Text>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Skip button */}
      <StatusBarComponent/>
      <TouchableOpacity style={styles.skipBtn} onPress={handleSkip}>
        <Text              allowFontScaling={false}
style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Slides */}
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />

      {/* Dots Indicator */}
      <View style={styles.pagination}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, i === currentIndex && styles.activeDot]}
          />
        ))}
      </View>

      {/* Next / Done Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text              allowFontScaling={false}
style={styles.nextText}>
          {currentIndex === slides.length - 1 ? "Done" : "Next"}
        </Text>
        <View style={styles.iconWrapper}>
          <Image  source={imageIndex.Next}
          
          style={{
            height:20,
            width:20,
            resizeMode:"contain"
          }}
          />
         </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  skipBtn: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 1,
  },
  skipText: {
    color: "#00ACC1",
    fontSize: 16,
    fontWeight: "600",
  },
  slide: {
    width: width,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "#00ACC1",
    marginBottom: 12,
    marginTop:45,
    lineHeight:35
  },
  subtitle: {
    textAlign: "center",
    fontSize: 14,
    color: "#777",
    marginBottom: 20,
    paddingHorizontal: 10,
    lineHeight:25,
   },
  image: {
    width: width * 0.9,
    height: height * 0.45,
    borderRadius: 20,
    resizeMode: "cover",
    marginTop:45
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#2EACB9",
    width: 20,
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "#2EACB9",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 30,
    width: 150,
  },
  nextText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  iconWrapper: {
    backgroundColor: "#fff",
    width: 32,
    height: 32,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
