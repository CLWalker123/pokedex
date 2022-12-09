import { PokemonType } from "../types/pokemonType";

const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export const pokedexRed = "#CA2E36";
const pokedexGreen = "#69AA68";

export const TYPE_TO_COLOR: Record<PokemonType, string> = {
  [PokemonType.NORMAL]: "#A8A77A",
  [PokemonType.FIRE]: "#EE8130",
  [PokemonType.WATER]: "#6390F0",
  [PokemonType.ELECTRIC]: "#F7D02C",
  [PokemonType.GRASS]: "#7AC74C",
  [PokemonType.ICE]: "#96D9D6",
  [PokemonType.FIGHTING]: "#C22E28",
  [PokemonType.POISON]: "#A33EA1",
  [PokemonType.GROUND]: "#E2BF65",
  [PokemonType.FLYING]: "#A98FF3",
  [PokemonType.PSYCHIC]: "#F95587",
  [PokemonType.BUG]: "#A6B91A",
  [PokemonType.ROCK]: "#B6A136",
  [PokemonType.GHOST]: "#735797",
  [PokemonType.DRAGON]: "#6F35FC",
  [PokemonType.DARK]: "#705746",
  [PokemonType.STEEL]: "#B7B7CE",
  [PokemonType.FAIRY]: "#D685AD",
};

export const TYPE_TO_TEXT_COLOR: Record<PokemonType, "#000" | "#F8EADC"> = {
  [PokemonType.NORMAL]: "#000",
  [PokemonType.FIRE]: "#000",
  [PokemonType.WATER]: "#000",
  [PokemonType.ELECTRIC]: "#000",
  [PokemonType.GRASS]: "#000",
  [PokemonType.ICE]: "#000",
  [PokemonType.FIGHTING]: "#F8EADC",
  [PokemonType.POISON]: "#F8EADC",
  [PokemonType.GROUND]: "#000",
  [PokemonType.FLYING]: "#000",
  [PokemonType.PSYCHIC]: "#000",
  [PokemonType.BUG]: "#000",
  [PokemonType.ROCK]: "#000",
  [PokemonType.GHOST]: "#F8EADC",
  [PokemonType.DRAGON]: "#F8EADC",
  [PokemonType.DARK]: "#F8EADC",
  [PokemonType.STEEL]: "#000",
  [PokemonType.FAIRY]: "#000",
};

export default {
  light: {
    text: "#000",
    background: pokedexRed,
    accent: pokedexGreen,
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    card: pokedexRed,
  },
  dark: {
    text: "#fff",
    background: pokedexRed,
    accent: pokedexGreen,
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    card: pokedexRed,
  },
};
