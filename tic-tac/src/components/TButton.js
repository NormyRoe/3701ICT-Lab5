import { View, StyleSheet, Text, Pressable } from "react-native";
import colors from "../constants/colors";
export default function TButton({
  label,
  fun = () => {},
  width = 90,
  enabled = true,
}) {
  return (
    <Pressable
      style={({ pressed }) =>
        enabled
          ? pressed
            ? [styles.container, { opacity: 0.5 }, { width }]
            : [styles.container, { width }]
          : [styles.container, { width, backgroundColor: "#ccc" }]
      }
      onPress={enabled ? fun : null}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 40,
    backgroundColor: colors.button,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});
