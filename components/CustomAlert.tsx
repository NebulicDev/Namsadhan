import { CheckCircle } from 'lucide-react-native';
import React from 'react';
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const THEME = {
  primary: '#D2B48C',
  text: '#5D4037',
  lightText: '#A1887F',
  white: '#FFFFFF',
  success: '#FFB88D',
  card: '#FFFFFF',
};

interface CustomAlertProps {
  visible: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

export default function CustomAlert({ visible, title, message, onClose }: CustomAlertProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.modalOverlay} onPress={onClose}>
        <Pressable style={styles.modalContent}>
          <View style={styles.iconContainer}>
            <CheckCircle size={48} color={THEME.white} />
          </View>
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalMessage}>{message}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>OK</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Using a semi-transparent text color for the overlay
  },
  modalContent: {
    width: '85%',
    maxWidth: 320,
    backgroundColor: THEME.card,
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingBottom: 25,
    paddingTop: 60, // Top padding to make space for the icon
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: THEME.success,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -40, // Position the icon half-way outside the top of the card
    borderWidth: 4,
    borderColor: THEME.card,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: THEME.text,
    marginBottom: 10,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 16,
    color: THEME.lightText,
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 24,
  },
  closeButton: {
    backgroundColor: THEME.primary,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  closeButtonText: {
    color: THEME.white,
    fontSize: 16,
    fontWeight: '600',
  },
});