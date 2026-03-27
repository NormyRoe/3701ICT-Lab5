
{/* Import libraries/Functions */}
import { StyleSheet, Text, Pressable } from 'react-native';


{/* Import components from src folder */}
import colors from '../constants/colors';



export default function Cell( {value, onPress, highlight }) {
  return (
    // Cell View
    <Pressable style={[styles.cell, highlight && styles.highlightCell]} onPress={onPress}>
        {/* Cell Text */}
        <Text style={[styles.text, highlight && styles.highlightText]}>{value}</Text>
         {/* End Cell Text */}
    </Pressable>
    // End Cell View
  );
}





{/* Style Sheets */}
const styles = StyleSheet.create({
  cell: {
    flex: 1,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.textLight,
  },
  highlightCell: {
    backgroundColor: colors.highlightBackground,
  },
  highlightText: {
    color: colors.highlightText,
    fontWeight: "bold",
  },
});