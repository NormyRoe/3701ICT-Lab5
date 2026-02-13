import { View, StyleSheet, Text, ScrollView } from "react-native";
import colors from "../constants/colors";
export default function MessageBoard({ message }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>{message}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "70%",
    backgroundColor: colors.messageBoard,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
  },
});
