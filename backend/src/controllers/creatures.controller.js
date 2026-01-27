import Creature from "../models/Creature.js";

export const getCreatures = async (req, res) => {
  try {
    const { name, tier, biome, habitat, hpMin, hpMax } = req.query;

    const filter = {};

    if (name) {
      filter.name = { $regex: nombre, $options: "i" };
    }

    if (tier) {
      filter.tier = tier;
    }

    if (biome) {
      filter.biome = biome;
    }

    if (habitat) {
      filter.habitat = habitat;
    }

    if (hpMin || hpMax) {
      filter.hp = {};
      if (hpMin) filter.hp.$gte = Number(hpMin);
      if (hpMax) filter.hp.$lte = Number(hpMax);
    }

    const creatures = await Creature.find(filter);

    res.json(creatures);
  } catch (error) {
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
