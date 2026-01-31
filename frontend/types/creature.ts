export type Creature = {
  id: string;
  name: string;
  tierName: string;
  habitat: string;
  biome: string;
  stats?: {
    hp: number;
    armor: number;
  };
  image: {
    url?: string;
    alt: string;
  };
};

export interface CreatureWideFilter {
  name?: string;
  tier?: {
    form?: string;
    color?: string;
  };
  habitat?: string;
  biome?: string;
  stats?: {
    hp?: {
      min: number;
      max: number;
    };
    armor?: {
      min: number;
      max: number;
    };
  };
};

export interface CreatureIdFilter  /* extends ObjectIdFilter */ {
  slug: string;
}

// Maybe pass it to a global archive
export interface ObjectIdFilter {
  id: string;
}