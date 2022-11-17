import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

const myPokemonParty = ["Charmander", "Bulbasaur"];

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      {myPokemonParty.length &&
        myPokemonParty.map((pokemon) => (
          <View style={styles.pokemonContainer}>
            <Text style={styles.pokemonTitle}>{pokemon}</Text>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#f5ede6",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },

  pokemonTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E252B",
  },
  pokemonContainer: {
    height: 56,
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#1E252B",
    backgroundColor: "#F8EADC",
    justifyContent: "center",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
});
