import { Creature } from "../models/Creature.js";

export const getCreatures = async (req, res) => {
  try {
    const { name, tier, biome, habitat, hpMin, hpMax } = req.query;

    const filter = {};

    // Búsqueda por nombre (Case Insensitive)
    if (name) {
      filter.name = { $regex: name, $options: "i" };
    }

    // Filtros anidados para Tier
    if (tier?.form) {
      filter["tier.form"] = tier.form;
    }
    
    if (tier?.color) {
      filter["tier.color"] = tier.color;
    }

    // Filtros directos
    if (biome) filter.biome = biome;
    if (habitat) filter.habitat = habitat;

    // Filtros anidados para Stats (HP)
    if (hpMin || hpMax) {
      filter["stats.hp"] = {};
      if (hpMin) filter["stats.hp"].$gte = Number(hpMin);
      if (hpMax) filter["stats.hp"].$lte = Number(hpMax);
    }

    const creatures = await Creature.find(filter);

    res.json(creatures);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener criaturas" });
  }
};

export const getCreatureById = async (req, res) => {
  try {
    const creature = await Creature.findById(req.params.id);

    if (!creature) {
      return res.status(404).json({ message: "Criatura no encontrada" });
    }

    res.json(creature);
  } catch (error) {
    res.status(400).json({ message: "ID inválido" });
  }
};
