import mongoose from "mongoose";
import connectDB from "../../src/config/database.js";
import { ComposedClassifier } from "../../src/models/Classifier.js";

const composedTiers = [
  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/RubiPacificTier.png",
    },
    slug: "creature_rubi_pacific",
    name: "Rubí Pácifico",
    category: {
      slug: "creature_tier",
      name: "Tier",
    },
    composedClassifier: {
      creature_color: "creature_rubi",
      creature_form: "creature_pacific",
    },
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/PlatinumPacificTier.png",
    },
    slug: "creature_platinum_pacific",
    name: "Platino Pácifico",
    category: {
      slug: "creature_tier",
      name: "Tier",
    },
    composedClassifier: {
      creature_color: "creature_platinum",
      creature_form: "creature_pacific",
    },
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/GoldenPacificTier.png",
    },
    slug: "creature_gold_pacific",
    name: "Oro Pácifico",
    category: {
      slug: "creature_tier",
      name: "Tier",
    },
    composedClassifier: {
      creature_color: "creature_gold",
      creature_form: "creature_pacific",
    }, 
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/SilverPacificTier.png",
    },
    slug: "creature_silver_pacific",
    name: "Plata Pácifico",
    category: {
      slug: "creature_tier",
      name: "Tier",
    },
    composedClassifier: {
      creature_color: "creature_silver",
      creature_form: "creature_pacific",
    },
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/BroncePacificTier.png",
    },
    slug: "creature_bronce_pacific",
    name: "Bronce Pácifico",
    category: {
      slug: "creature_tier",
      name: "Tier",
    },
    composedClassifier: {
      creature_color: "creature_bronce",
      creature_form: "creature_pacific",
    },
  },

  //

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/RubiMinorTier.png",
    },
    slug: "creature_rubi_minor",
    name: "Rubí Menor",
    category: {
      slug: "creature_tier",
      name: "Tier",
    },
    composedClassifier: {
      creature_color: "creature_rubi",
      creature_form: "creature_minor",
    },
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/PlatinumMinorTier.png",
    },
    slug: "creature_platinum_minor",
    name: "Platino Menor",
    category: {
      slug: "creature_tier",
      name: "Tier",
    },
    composedClassifier: {
      creature_color: "creature_platinum",
      creature_form: "creature_minor",
    },
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/GoldenMinorTier.png",
    },
    slug: "creature_gold_minor",
    name: "Oro Menor",
    category: {
      slug: "creature_tier",
      name: "Tier",
    },
    composedClassifier: {
      creature_color: "creature_gold",
      creature_form: "creature_minor",
    },
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/SilverMinorTier.png",
    },
    slug: "creature_silver_minor",
    name: "Plata Menor",
    category: {
      slug: "creature_tier",
      name: "Tier",
    },
    composedClassifier: {
      creature_color: "creature_silver",
      creature_form: "creature_minor",
    },
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/BronceMinorTier.png",
    },
    slug: "creature_bronce_minor",
    name: "Bronce Menor",
    category: {
      slug: "creature_tier",
      name: "Tier",
    },
    composedClassifier: {
      creature_color: "creature_bronce",
      creature_form: "creature_minor",
    },
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/RubiAlphaTier.png",
    },
    slug: "creature_rubi_alpha",
    name: "Rubí Alfa",
    category: {
      slug: "creature_tier",
      name: "Tier",
    },
    composedClassifier: {
      creature_color: "creature_rubi",
      creature_form: "creature_alpha",
    },
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/PlatinumAlphaTier.png",
    },
    slug: "creature_platinum_alpha",
    name: "Platino Alfa",
    category: {
      slug: "creature_tier",
      name: "Tier",
    },
    composedClassifier: {
      creature_color: "creature_platinum",
      creature_form: "creature_alpha",
    },
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/GoldenAlphaTier.png",
    },
    slug: "creature_gold_alpha",
    name: "Oro Alfa",
    category: {
      slug: "creature_tier",
      name: "Tier",
    },
    composedClassifier: {
      creature_color: "creature_gold",
      creature_form: "creature_alpha",
    },
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/SilverAlphaTier.png",
    },
    slug: "creature_silver_alpha",
    name: "Plata Alfa",
    category: {
      slug: "creature_tier",
      name: "Tier",
    },
    composedClassifier: {
      creature_color: "creature_silver",
      creature_form: "creature_alpha",
    },
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/BronceAlphaTier.png",
    },
    slug: "creature_bronce_alpha",
    name: "Bronce Alfa",
    category: {
      slug: "creature_tier",
      name: "Tier",
    },
    composedClassifier: {
      creature_color: "creature_bronce",
      creature_form: "creature_alpha",
    },
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/RubiThinkerTier.png",
    },
    slug: "creature_rubi_thinker",
    name: "Rubí Pensante",
    category: {
      slug: "creature_tier",
      name: "Tier",
    },
    composedClassifier: {
      creature_color: "creature_rubi",
      creature_form: "creature_thinker",
    },
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/PlatinumThinkerTier.png",
    },
    slug: "creature_platinum_thinker",
    name: "Platino Pensante",
    category: {
      slug: "creature_tier",
      name: "Tier",
    },
    composedClassifier: {
      creature_color: "creature_platinum",
      creature_form: "creature_thinker",
    },
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/GoldenThinkerTier.png",
    },
    slug: "creature_gold_thinker",
    name: "Oro Pensante",
    category: {
      slug: "creature_tier",
      name: "Tier",
    },
    composedClassifier: {
      creature_color: "creature_gold",
      creature_form: "creature_thinker",
    },
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/SilverThinkerTier.png",
    },
    slug: "creature_silver_thinker",
    name: "Plata Pensante",
    category: {
      slug: "creature_tier",
      name: "Tier",
    },
    composedClassifier: {
      creature_color: "creature_silver",
      creature_form: "creature_thinker",
    },
  },

  {
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Tiers/BronceThinkerTier.png",
    },
    slug: "creature_bronce_thinker",
    name: "Bronce Pensante",
    category: {
      slug: "creature_tier",
      name: "Tier",
    },
    composedClassifier: {
      creature_color: "creature_bronce",
      creature_form: "creature_thinker",
    },
  },
];

async function seed() {
  await connectDB();

  for (const composedTier of composedTiers) {
    const exists = await ComposedClassifier.findOne({
      slug: composedTier.slug,
    });

    if (exists) {
      console.log(
        `⏭️  Saltado: Clasificador ${composedTier.category.name} ${composedTier.name}`,
      );
      continue;
    }

    await ComposedClassifier.create(composedTier);
    console.log(
      `✅ Insertado: Clasificador ${composedTier.category.name} ${composedTier.name}`,
    );
  }

  await mongoose.disconnect();
  console.log("🔴 MongoDB desconectado");
}

seed()
  .then(() => {
    console.log(
      "🌱 Seed de clasificadores compuestos tier criaturas finalizado correctamente",
    );
    process.exit(0);
  })
  .catch((err) => {
    console.error(
      "❌ Error en seed de clasificadores compuestos tier criaturas",
      err,
    );
    process.exit(1);
  });