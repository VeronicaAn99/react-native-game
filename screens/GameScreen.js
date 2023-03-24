import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title title="Opponent's guess" />
      <View>
        <Text>Higher or Lower</Text>
        <Text>Log rounds</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
