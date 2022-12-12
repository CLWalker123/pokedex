import { ActivityIndicator, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Text, TouchableOpacity, View } from "../components/Themed";
import { pokedexRed } from "../constants/Colors";
import { RootStackScreenProps } from "../navigation/types";
import { useCallback, useEffect, useState } from "react";
import { Pokemon } from "../types/pokemon";
import { StorageKeys } from "../constants/StorageKeys";

export default function ModalScreen({
  navigation,
}: RootStackScreenProps<"Modal">) {
  const [party, setParty] = useState<Pokemon[]>();

  useEffect(() => {
    const fetchCurrentParty = async () => {
      const currentParty = await AsyncStorage.getItem(StorageKeys.PARTY);
      const parsedParty = !!currentParty ? JSON.parse(currentParty) : null;
      setParty(parsedParty);
    };
    
    fetchCurrentParty();
  }, []);

  const handlePressDelete = useCallback(
    (pokemon: Pokemon) => () => {
      const newParty = party?.filter(
        (partyPokemon) => partyPokemon.name !== pokemon.name
      );
      setParty(newParty);
      AsyncStorage.setItem(StorageKeys.PARTY, JSON.stringify(newParty));
    },
    [party]
  );

  return !party ? (
    <ActivityIndicator style={{ flex: 1 }} />
  ) : (
    <View style={styles.container} safeInsets>
      {!party.length ? (
        <>
          <View />
          <Text style={styles.emptyText}>
            When you add a Pokemon to your party, they'll show up here!
          </Text>
        </>
      ) : (
        <View style={styles.contentContainer}>
          {party.map((pokemon) => (
            <View style={styles.pokemonContainer}>
              <Text style={styles.partyCTA}>{`${pokemon.name
                .charAt(0)
                .toUpperCase()}${pokemon.name.slice(1)}`}</Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={handlePressDelete(pokemon)}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.partyCTA}>Close</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
  },
  emptyText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  contentContainer: {
    borderTopWidth: 1,
    borderColor: "black",
  },
  backBtn: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black",
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,
    borderBottomWidth: 1,
    borderColor: "#1E252B",
    backgroundColor: "#F8EADC",
    paddingHorizontal: 16,
  },
  deleteButton: {
    height: "100%",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  deleteText: {
    fontWeight: "bold",
    color: pokedexRed,
  },
});
