import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <PrimaryButton
        handleButtonPress={() => console.log("Reset")}
        text="Reset"
      />
      <PrimaryButton
        handleButtonPress={() => console.log("Confirm")}
        text="Confirm"
      />
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#4b0426",
    elevation: 4,
    shadowColor: "#282828",
    shadowOffset: { width: 1, height: 8 },
    shadowRadius: 6,
    shadowOpacity: 0.11,
  },
  input: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
    width: 50,
  },
});
