{/* Import libraries/Functions */}
import { StyleSheet, Text, View } from 'react-native';


{/* Import components from src folder */}
import colors from '../constants/colors';



export default function Title( {text}) {
  return (
    <View style={styles.container}>
      {/* Display Title Text */}
      <Text style={styles.title_text}>
        {text}
      </Text>
      {/* End Display Title Text */}
    </View>
  );
}





{/* Style Sheets */}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.titleBackground,
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  title_text: {
    color: colors.textLight,
    fontSize: 24,
    fontWeight: "bold",
  },
});
