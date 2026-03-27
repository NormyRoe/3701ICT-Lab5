{/* Import libraries/Functions */}
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text } from 'react-native';


{/* Import components from src folder */}
import colors from '../constants/colors';



export default function TButton( {text, onPress, size = "normal", disabled = false}) {
  return (    
    /* Adding a pressable button */
    <Pressable 
      style={[
        styles.button,
        size === "small" ? styles.small_button : styles.normal_button,
        disabled && styles.disabled_button
      ]}
      onPress = {onPress}
      disabled = {disabled}
      >
        <Text style={styles.button_text}>
          {text}
        </Text>      
    </Pressable>
    /* End Adding a pressable button */
  );
}





{/* Style Sheets */}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonBackground,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  small_button: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    minWidth: 40,     // compact but still tappable
  },
  normal_button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    minWidth: 120,
  },
  button_text: {
    color: colors.textLight,
    fontSize: 18,
    fontWeight: "bold",
  },
  disabled_button: {
  backgroundColor: "#888", // greyed out
  opacity: 0.6
  },
});
