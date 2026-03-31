import mongoose from "mongoose";
import connectDB from "../../src/config/database.js";
import { Classifier } from "../../src/models/Classifier.js";

const singleTiers = [
  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/PacificTier.png",
    },
    slug: "creature_pacific",
    name: "Pácifico",
    category: {
      slug: "creature_form",
      name: "Forma",
    },
    description: "Bestias serenas, que no atacarán si no son atacadas primero.",
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/MinorTier.png",
    },
    slug: "creature_minor",
    name: "Menor",
    category: {
      slug: "creature_form",
      name: "Forma",
    },
    description: "Depredadores primarios, agresivos, suelen atacar en grupos.",
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/AlphaTier.png",
    },
    slug: "creature_alpha",
    name: "Alfa",
    category: {
      slug: "creature_form",
      name: "Forma",
    },
    description:
      "Grandes depredadores, letales, criaturas dominantes de sus biomas.",
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/ThinkerTier.png",
    },
    slug: "creature_thinker",
    name: "Pensante",
    category: {
      slug: "creature_form",
      name: "Forma",
    },
    description:
      "Criaturas dotadas de razón, que harán lo que su conciencia les dicte.",
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/BronceStar.png",
    },
    slug: "creature_bronce",
    name: "Bronce",
    category: {
      slug: "creature_color",
      name: "Color",
    },
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/SilverStar.png",
    },
    slug: "creature_silver",
    name: "Plata",
    category: {
      slug: "creature_color",
      name: "Color",
    },
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/GoldenStar.png",
    },
    slug: "creature_gold",
    name: "Oro",
    category: {
      slug: "creature_color",
      name: "Color",
    },
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/PlatinumStar.png",
    },
    slug: "creature_platinum",
    name: "Platino",
    category: {
      slug: "creature_color",
      name: "Color",
    },
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/RubiStar.png",
    },
    slug: "creature_rubi",
    name: "Rubí",
    category: {
      slug: "creature_color",
      name: "Color",
    },
  },
];

async function seed() {
  await connectDB();

  for (const singleTier of singleTiers) {
    const exists = await Classifier.findOne({
      slug: singleTier.slug
    });

    if (exists) {
      console.log(
        `⏭️  Saltado: Clasificador ${singleTier.category.name} ${singleTier.name}`,
      );
      continue;
    }

    await Classifier.create(singleTier);
    console.log(
      `✅ Insertado: Clasificador ${singleTier.category.name} ${singleTier.name}`,
    );
  }

  await mongoose.disconnect();
  console.log("🔴 MongoDB desconectado");
}

seed()
  .then(() => {
    console.log("🌱 Seed de clasificadores simples tier criaturas finalizado correctamente");
    process.exit(0);
  })
  .catch((err) => {
    console.error(
      "❌ Error en seed de clasificadores simples tier criaturas",
      err,
    );
    process.exit(1);
  });