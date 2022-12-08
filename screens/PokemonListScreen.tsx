import React from "react";
import { Pressable, StyleSheet } from "react-native";

import { Text, TouchableOpacity, View } from "../components/Themed";
import { RootTabScreenProps } from "../navigation/types";

export default function PokemonListScreen({
  navigation,
}: RootTabScreenProps<"PokemonListScreen">) {
  return (
    <View style={styles.container} safeInsets>
      <Pressable
        onPress={() => navigation.navigate("TabTwo")}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <View style={styles.pokemonContainer}>
          <Text style={styles.pokemonTitle}>Pikachu</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("TabTwo")}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <View style={styles.pokemonContainer}>
          <Text style={styles.pokemonTitle}>Charmander</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("TabTwo")}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <View style={styles.pokemonContainer}>
          <Text style={styles.pokemonTitle}>Bulbasaur</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("TabTwo")}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <View style={styles.pokemonContainer}>
          <Text style={styles.pokemonTitle}>Squirtle</Text>
        </View>
      </Pressable>
      <TouchableOpacity style={styles.partyBtn} onPress={() => navigation.navigate("Modal")}>
        <Text style={styles.partyCTA}>My Party</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
  },
  partyBtn: {
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  partyCTA: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E252B",
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
