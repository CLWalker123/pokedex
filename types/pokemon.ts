import { PokemonType } from "./pokemonType";

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
}
