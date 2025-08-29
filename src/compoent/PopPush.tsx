import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

interface Option {
  id: string;
  label: string;
}

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  options: Option[];
  selectedOption: string | null;
  onSelect: (id: string) => void;
  onApply: () => void;
  onReset: () => void;
}

const PopPush: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  options,
  selectedOption,
  onSelect,
  onApply,
  onReset,
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Title */}
          <Text style={styles.title}>Sort By</Text>

          {/* Options */}
          <FlatList
            data={options}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.optionRow}
                // onPress={() => onSelect(item.id)}
                                onPress={onClose}

              >
                <Text
                  style={[
                    styles.optionText,
                    selectedOption === item.id && styles.selectedText,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
          />

          {/* Footer Buttons */}
          <View style={styles.footer}>
            <TouchableOpacity 
            
            
            // onPress={onReset}
                                onPress={onClose}
            >
              <Text style={styles.reset}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            
              onPress={onClose}
            // onPress={onApply}
            >
              <Text style={styles.apply}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PopPush;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: 170,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 15,
        position:"relative",
        bottom:120,
        left:100,

  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
    marginBottom: 12,
  },
  optionRow: {
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 15,
    color: "#333",
  },
  selectedText: {
    color: "#2EACB9",
    fontWeight: "700",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },
  reset: {
    fontSize: 15,
    color: "#2EACB9",
    fontWeight: "600",
  },
  apply: {
    fontSize: 15,
    color: "#2EACB9",
    fontWeight: "600",
  },
});
