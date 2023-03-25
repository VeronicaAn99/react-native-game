import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary500,
    elevation: 4,
    shadowColor: "#282828",
    shadowOffset: { width: 1, height: 8 },
    shadowRadius: 6,
    shadowOpacity: 0.11,
  },
});
