import mongoose from "mongoose";
import connectDB from "../../src/config/database.js";
import { Classifier } from "../../src/models/Classifier.js";

const singleTiers = [
  {
    image: {
      url: "",
    },
    slug: "biome_city",
    name: "Ciudad",
    category: {
      slug: "biome",
      name: "Bioma",
    },
  },

  {
    image: {
      url: "",
    },
    slug: "biome_forest",
    name: "Bosque",
    category: {
      slug: "biome",
      name: "Bioma",
    },
  },

  {
    image: {
      url: "",
    },
    slug: "biome_water",
    name: "Agua",
    category: {
      slug: "biome",
      name: "Bioma",
    },
  },

  {
    image: {
      url: "",
    },
    slug: "biome_shore",
    name: "Costa",
    category: {
      slug: "biome",
      name: "Bioma",
    },
  },

  {
    image: {
      url: "",
    },
    slug: "biome_dessert",
    name: "Desierto",
    category: {
      slug: "biome",
      name: "Bioma",
    },
  },

  {
    image: {
      url: "",
    },
    slug: "biome_mountain",
    name: "Montaña",
    category: {
      slug: "biome",
      name: "Bioma",
    },
  },

  {
    image: {
      url: "",
    },
    slug: "biome_cave",
    name: "Cueva",
    category: {
      slug: "biome",
      name: "Bioma",
    },
  },

  {
    image: {
      url: "",
    },
    slug: "biome_meadow",
    name: "Pradera",
    category: {
      slug: "biome",
      name: "Bioma",
    },
  },

  {
    image: {
      url: "",
    },
    slug: "biome_sky",
    name: "Cielo",
    category: {
      slug: "biome",
      name: "Bioma",
    },
  },

  {
    image: {
      url: "",
    },
    slug: "biome_darkness",
    name: "Tinieblas",
    category: {
      slug: "biome",
      name: "Bioma",
    },
  },

  {
    image: {
      url: "",
    },
    slug: "biome_snow",
    name: "Nieve",
    category: {
      slug: "biome",
      name: "Bioma",
    },
  },

  {
    image: {
      url: "",
    },
    slug: "biome_field_of_flowers",
    name: "Campo de Flores",
    category: {
      slug: "biome",
      name: "Bioma",
    },
  },

  {
    image: {
      url: "",
    },
    slug: "biome_swamp",
    name: "Pantano",
    category: {
      slug: "biome",
      name: "Bioma",
    },
  },

  {
    image: {
      url: "",
    },
    slug: "biome_cult_of_tywill",
    name: "Culto de Tywill",
    category: {
      slug: "biome",
      name: "Bioma",
    },
  },

  // Fuera de Larhana

  {
    image: {
      url: "",
    },
    slug: "biome_void",
    name: "Vacío",
    category: {
      slug: "biome",
      name: "Bioma",
    },
  },

  {
    image: {
      url: "",
    },
    slug: "biome_fae_kingdom",
    name: "Reino Fae",
    category: {
      slug: "biome",
      name: "Bioma",
    },
  },

  {
    image: {
      url: "",
    },
    slug: "biome_demons",
    name: "Demonios",
    category: {
      slug: "biome",
      name: "Bioma",
    },
  },

  {
    image: {
      url: "",
    },
    slug: "biome_spiritual_realm",
    name: "Reino Espiritual",
    category: {
      slug: "biome",
      name: "Bioma",
    },
  },

  {
    image: {
      url: "",
    },
    slug: "biome_lands_of_the_hisui",
    name: "Tierras del Hisui",
    category: {
      slug: "biome",
      name: "Bioma",
    },
  },

  {
    image: {
      url: "",
    },
    slug: "biome_empire_of_metallurgy",
    name: "Imperio de Metallurgia",
    category: {
      slug: "biome",
      name: "Bioma",
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