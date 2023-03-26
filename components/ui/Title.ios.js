import { Text, StyleSheet, Platform } from "react-native";

function Title({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    textAlign: "center",
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    color: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
