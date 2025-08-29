import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LogoutModal = ({ visible, onYes, onNo }:ANY) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.icon}>❓</Text>
          <Text style={styles.title}>Are you sure you want to{'\n'}cancel this payment?</Text>
          <Text style={styles.subText}>Please do not close this page</Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={onYes} style={styles.yesButton}>
              <Text style={styles.yesText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onNo} style={styles.noButton}>
              <Text style={styles.noText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  icon: {
    fontSize: 30,
    color: '#00BCD4',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 5,
  },
  subText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 15,
  },
  yesButton: {
    borderWidth: 1,
    borderColor: '#00BCD4',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  yesText: {
    color: '#00BCD4',
    fontWeight: 'bold',
  },
  noButton: {
    backgroundColor: '#F44336',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  noText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LogoutModal;
