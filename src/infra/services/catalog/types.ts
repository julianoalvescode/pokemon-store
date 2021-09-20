export type CatalogAll = {
  count: number;
  next: string;
  previous: string;
  pokemon: Pokemon[];
};

export type CatalogFire = {
  name: string;
  pokemon: Pokemon[];
};

type Pokemon = {
  pokemon: Results;
};

type Results = {
  name: string;
  url: string;
};

export type PokemonUnit = {
  base_experience: number;
  height: number;
  id: number;
  weight: number;
  name: string;
  sprites: Sprites;
};

export type Sprites = {
  front_default: string;
  other: {
    dream_world: {
      front_default: string;
    };
  };
};
