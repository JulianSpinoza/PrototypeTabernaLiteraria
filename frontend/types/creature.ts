export type Creature = {
  id: string;
  image: {
    url?: string;
    alt: string;
  };
};

export type SpecificCreature = {
  id: string;
  name: string;
  creature_tier: {
    creature_form: string;
    creature_color: string;
  };
  habitat: string;
  biome: string;
  stats?: {
    hp: number;
    armor: number;
    movement: number;
    size: string;
  };
  image: {
    url?: string;
    alt: string;
  };
  description: string;
  habilities?: [string];
  attributes: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
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
    ca?: {
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