import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";

import { Text, TouchableOpacity, View } from "../components/Themed";
import { URLs } from "../constants/Urls";
import { RootStackScreenProps } from "../navigation/types";
import { Pokemon } from "../types/pokemon";

export default function PokemonListScreen({
  navigation,
}: RootStackScreenProps<"PokemonListScreen">) {
  const [loaded, setLoaded] = useState(false);
  const [loadedPokemon, setLoadedPokemon] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>(URLs.POKEMON);

  const fetchNextPokemon = useCallback(
    async (url: string) => {
      const data = await fetch(url);
      const body = await data.json();
      setLoadedPokemon([...loadedPokemon, ...body.results]);
      setNextUrl(body.next);
      if (!loaded) {
        setLoaded(true);
      }
    },
    [loaded, loadedPokemon, setLoaded, setLoadedPokemon, setNextUrl]
  );

  useEffect(() => {
    fetchNextPokemon(nextUrl);
  }, []);

  const renderItem = ({ item: pokemon }: { item: Pokemon }) => (
    <TouchableOpacity
      style={styles.pokemonContainer}
      onPress={() => navigation.navigate("PokemonDetailScreen", { pokemon })}
    >
      <Text style={styles.partyCTA}>{`${pokemon.name
        .charAt(0)
        .toUpperCase()}${pokemon.name.slice(1)}`}</Text>
    </TouchableOpacity>
  );
  return !loaded ? (
    <ActivityIndicator style={{ flex: 1 }} />
  ) : (
    <View style={styles.container} safeInsets>
      <FlatList
        data={loadedPokemon}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        snapToInterval={56}
        onEndReachedThreshold={0.2}
        onEndReached={() => fetchNextPokemon(nextUrl)}
      />
      <TouchableOpacity
        style={styles.partyBtn}
        onPress={() => navigation.navigate("Modal")}
      >
        <Text style={styles.partyCTA}>My Party</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  partyBtn: {
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
    borderBottomWidth: 1,
    borderColor: "#1E252B",
    backgroundColor: "#F8EADC",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
});
