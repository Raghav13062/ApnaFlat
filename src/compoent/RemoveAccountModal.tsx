import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

interface RemoveAccountModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const RemoveAccountModal: React.FC<RemoveAccountModalProps> = ({
  visible,
  onClose,
  onConfirm,
}) => {
   

// Example usage
   

  return (
  <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text  allowFontScaling={false} style={styles.title}>Remove Account</Text>
          <Text   allowFontScaling={false} style={styles.subtitle}>
            Are you sure you want to remove your account? This action cannot be undone.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
              <Text   allowFontScaling={false}  style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.removeBtn} onPress={onConfirm}>
              <Text   allowFontScaling={false} style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F6FA",
  },
  openBtn: {
    backgroundColor: "#E74C3C",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: width * 0.85,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cancelBtn: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  removeBtn: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#2EACB9",
    alignItems: "center",
 
  },
  cancelText: {
    color: "#333",
    fontSize: 16,
  },
  removeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default RemoveAccountModal;
