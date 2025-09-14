// components/CustomAlert.tsx
import { AlertTriangle, CheckCircle2, X } from 'lucide-react-native';
import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const THEME = {
  background: 'rgba(59, 44, 39, 0.18)',
  card: '#FFFFFF',
  text: '#5D4037',
  lightText: '#A1887F',
  accent: '#FFB88D',
  danger: '#D9534F',
  shadow: 'rgba(93, 64, 55, 0.15)',
  disabled: '#EAE3DA',
};

export type AlertType = 'success' | 'confirm';

interface CustomAlertProps {
  visible: boolean;
  title: string;
  message: string;
  type?: AlertType;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  visible,
  title,
  message,
  type = 'success',
  onClose,
  onConfirm,
  confirmText = 'OK',
  cancelText = 'Cancel',
}) => {
  const Icon = type === 'success' ? CheckCircle2 : AlertTriangle;
  const iconColor = type === 'success' ? THEME.accent : THEME.danger;

  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.alertBox}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <X size={20} color={THEME.lightText} />
          </TouchableOpacity>

          <View style={styles.iconContainer}>
            <Icon size={40} color={iconColor} />
          </View>

          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>

          <View style={styles.buttonContainer}>
            {type === 'confirm' && (
              <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onClose}>
                <Text style={[styles.buttonText, styles.cancelButtonText]}>{cancelText}</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={[styles.button, type === 'confirm' ? styles.confirmButton : styles.successButton]}
              onPress={onConfirm || onClose}
            >
              <Text style={styles.buttonText}>{confirmText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.background,
  },
  alertBox: {
    width: '85%',
    maxWidth: 320,
    backgroundColor: THEME.card,
    borderRadius: 24,
    padding: 25,
    alignItems: 'center',
    elevation: 20,
    shadowColor: THEME.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 30,
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  iconContainer: {
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: THEME.text,
    textAlign: 'center',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: THEME.lightText,
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: THEME.disabled,
  },
  confirmButton: {
    backgroundColor: THEME.danger,
  },
  successButton: {
    backgroundColor: THEME.accent,
    flex: 0.8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: THEME.white,
  },
  cancelButtonText: {
    color: THEME.text,
  },
});

export default CustomAlert;