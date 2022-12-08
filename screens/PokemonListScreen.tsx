import React from "react";
import { Pressable, StyleSheet } from "react-native";

import { RootTabScreenProps } from "../navigation/types";

export default function PokemonListScreen({
  navigation,
}: RootTabScreenProps<"PokemonListScreen">) {
  return (
    <View style={styles.container}>
      <View style={styles.partyBtnWrapper}>
        <Pressable
          onPress={() => navigation.navigate("Modal")}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <View style={styles.partyBtn}>
            <Text style={{ fontSize: 10 }}>My Party</Text>
          </View>
        </Pressable>
      </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f5ede6",
  },
  partyBtn: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#F8EADC",
    marginRight: 16,
    justifyContent: "center",
    padding: 16,
  },
  partyBtnWrapper: {
    paddingBottom: 24,
    paddingTop: 8,
    backgroundColor: "transparent",
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
