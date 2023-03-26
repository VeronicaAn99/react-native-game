import { Text, StyleSheet } from "react-native";

function Title({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    color: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
