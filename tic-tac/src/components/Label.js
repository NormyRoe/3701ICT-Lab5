{/* Import libraries/Functions */}
import { StyleSheet, Text, View } from 'react-native';


{/* Import components from src folder */}
import colors from '../constants/colors';



export default function Label( {text}) {
  return (
    <View style={styles.container}>
      {/* Display Label Text */}
      <Text style={styles.label_text}>
        {text}
      </Text>
      {/* End Display Label Text */}
    </View>
  );
}


{/* Style Sheets */}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.messageBackground,
        width: 300,
        alignItems: 'center',
        marginBottom: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 10,
    },
    label_text: {
        fontSize: 24,
        fontWeight: 'bold',        
        color: colors.textLight,
        textAlign: 'center',
    },
});
