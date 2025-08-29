import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import CustomHeader from "../../../../compoent/CustomHeader";
import imageIndex from "../../../../assets/imageIndex";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBarComponent from "../../../../compoent/StatusBarCompoent";
 
const AccountRemoveSuccess = () => {
  return (
    <SafeAreaView style={{
      flex:1,
      backgroundColor:"white"
    }}>
      <StatusBarComponent/>
                    <CustomHeader imageSource={imageIndex.backImg} label={"Account Remove"}/>

    <View style={styles.container}>
      {/* Success Icon */}
      <View style={styles.iconWrapper}>
        <Image source={imageIndex.susfuly}
        
        style={{
          height:60,
          width:60,
          resizeMode:"contain"
        }}
        
        
        />
        </View>

      {/* Title */}
      <Text   allowFontScaling={false}style={styles.title}>
        Your account removal request{" "}
        <Text  allowFontScaling={false} style={styles.successText}>successfully sent</Text>
      </Text>

      {/* Description */}
      <Text  allowFontScaling={false} style={styles.description}>
        Your request to delete your Property Owner account has been accepted.
        Your account will be deleted immediately after verification.
      </Text>

      {/* Button */}
      <TouchableOpacity style={styles.cancelButton}>
        <Text   allowFontScaling={false} style={styles.cancelText}>Cancel Request</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default AccountRemoveSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F4F8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#00B8B8",
  },
  iconWrapper: {
    alignItems: "center",
    marginBottom: 20,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#00B8B8",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
    marginBottom: 15,
    paddingHorizontal: 20,
        lineHeight:33

  },
  successText: {
    color: "#2EACB9",
    fontWeight: "700",
  },
  description: {
    textAlign: "center",
    fontSize: 14,
    color: "#666",
    marginBottom: 30,
    paddingHorizontal: 20,
    lineHeight:28
  },
  cancelButton: {
    backgroundColor: "#2EACB9",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    alignSelf: "center",
    width: "70%",
  },
  cancelText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
