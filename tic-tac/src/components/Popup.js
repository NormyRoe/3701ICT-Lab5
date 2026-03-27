{/* Import libraries/Functions */}
import { View, Text, StyleSheet } from 'react-native';


{/* Import components from src folder */}
import colors from '../constants/colors';


export default function Popup({ title, message, children }) {
  return (
    <View style={styles.overlay}>
      <View style={styles.box}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>

        <View style={styles.buttonArea}>
          {children}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 300,
    backgroundColor: colors.textLight,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  buttonArea: {
    width: "100%",
  },
});