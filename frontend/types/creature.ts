export type Creature = {
  _id: string;
  name: string;
  tierName: string;
  habitat: string;
  biome: string;
  stats: {
    hp: number;
    armor: number;
  };
  image: {
    url?: string;
    alt: string;
  };
};
