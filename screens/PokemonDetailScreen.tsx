import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { TYPE_TO_COLOR, TYPE_TO_TEXT_COLOR } from "../constants/Colors";
import { URLs } from "../constants/Urls";
import { RootStackScreenProps } from "../navigation/types";
import { PokemonDetails } from "../types/pokemon";

export default function PokemonDetailScreen({
  route,
}: RootStackScreenProps<"PokemonDetailScreen">) {
  const { pokemon } = route.params ?? {};
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>();

  const fetchPokemonDetails = useCallback(async () => {
    const data = await fetch(
      URLs.POKEMON_DETAILS.replace(/\{.*\}/g, pokemon.name)
    );
    const body = await data.json();
    setPokemonDetails({
      name: body.name,
      height: body.height,
      weight: body.weight,
      types: body.types.map(
        ({ type }: { type: { name: string } }) => type.name
      ),
    });
  }, []);

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {!pokemonDetails ? (
          <ActivityIndicator style={{ flex: 1 }} />
        ) : (
          <>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{`${pokemon.name
                .charAt(0)
                .toUpperCase()}${pokemon.name.slice(1)}`}</Text>
            </View>
            <View style={styles.titleContainer}>
              <Text
                style={styles.detailsText}
              >{`Height: ${pokemonDetails?.height}dm`}</Text>
              <Text
                style={styles.detailsText}
              >{`Weight: ${pokemonDetails?.weight}hg`}</Text>
            </View>
            <View style={styles.typeGroup}>
              {pokemonDetails?.types?.map((type, idx) => (
                <View
                  style={[
                    { backgroundColor: TYPE_TO_COLOR[type] },
                    styles.typeContainer,
                  ]}
                >
                  <Text style={{ color: TYPE_TO_TEXT_COLOR[type] }}>
                    {type}
                  </Text>
                </View>
              ))}
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: "space-between",
    backgroundColor: "#000",
    margin: 16,
    padding: 16,
    height: "50%",
    borderRadius: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F8EADC",
  },
  titleContainer: {
    backgroundColor: "transparent",
    marginVertical: 32,
  },
  detailsText: {
    color: "#F8EADC",
  },
  typeGroup: {
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  typeContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 24,
    width: "30%",
    marginBottom: 16,
    marginRight: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
});
