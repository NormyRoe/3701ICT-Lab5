{/* Import libraries/Functions */}
import { Pressable, Text, StyleSheet } from 'react-native';


{/* Import components from src folder */}
import colors from '../constants/colors';


export default function SButton({ text, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: colors.buttonBackground,
    borderRadius: 8,
    marginVertical: 6,
    width: "100%",
    alignItems: "center",
  },
  text: {
    color: colors.textLight,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});