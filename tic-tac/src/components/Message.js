{/* Import libraries/Functions */}
import { StyleSheet, Text, View, ScrollView } from 'react-native';


{/* Import components from src folder */}
import colors from '../constants/colors';



export default function Message( {text}) {
  return (
    <View style={styles.container}>
      {/* Add Scrollable View */}
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.message_text}>{text}</Text>
      </ScrollView>
      {/* End Scrollable View */}    
    </View>
  );
}





{/* Style Sheets */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.messageBackground,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  message_text: {
    color: colors.textLight,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left'  // more natural for long paragraphs
  },
});
