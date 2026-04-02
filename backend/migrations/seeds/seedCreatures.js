import mongoose from "mongoose";
import connectDB from "../../src/config/database.js";
import Creature from "../../src/models/Creature.js";

const creatures = [
  {
    name: "Comandante Volk",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_platinum",
    },
    habitat: "Metallurgia",
    biome: "biome_empire_of_metallurgy",
    stats: {
      hp: 105,
      armor: 19,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Comandante_Volk.png",
    },
    habilities: [],
  },

  {
    name: "Abyssurionyx",
    creature_tier: {
      creature_form: "creature_alpha",
      creature_color: "creature_rubi",
    },
    habitat: "Romadhus",
    biome: "biome_darkness",
    stats: {
      hp: undefined,
      armor: undefined,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Abyssurionyx_NOSTATS.png",
    },
    habilities: [],
  },

  {
    name: "Exterminador DH1",
    creature_tier: {
      creature_form: "creature_alpha",
      creature_color: "creature_gold",
    },
    habitat: "Metallurgia",
    biome: "biome_empire_of_metallurgy",
    stats: {
      hp: 54,
      armor: 17,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Exterminador_DH1.png",
    },
    habilities: [],
  },

  {
    name: "Avalá Rhoeas",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_platinum",
    },
    habitat: "Orden Draconiana",
    biome: "biome_city",
    stats: {
      hp: undefined,
      armor: undefined,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Avala_Rhoeas_NOSTATS.png",
    },
    habilities: [],
  },

  {
    name: "Adoness",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_rubi",
    },
    habitat: "Elaör'Man",
    biome: "biome_city",
    stats: {
      hp: undefined,
      armor: undefined,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Adoness_NOSTATS.png",
    },
    habilities: [],
  },

  {
    name: "Xan Ka'Diar",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_gold",
    },
    habitat: "Reino Espiritual",
    biome: "biome_spiritual_realm",
    stats: {
      hp: undefined,
      armor: undefined,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Xan_KaDiar_NOSTATS.png",
    },
    habilities: [],
  },

  {
    name: "Z3-NITH",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_gold",
    },
    habitat: "Metallurgia",
    biome: "biome_empire_of_metallurgy",
    stats: {
      hp: 55,
      armor: 12,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Z3-NITH.png",
    },
    habilities: [],
  },

  {
    name: "Ze'iNaga",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_silver",
    },
    habitat: "Templos Ze'iNaga",
    biome: "biome_city",
    stats: {
      hp: undefined,
      armor: undefined,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/ZeiNaga_NOSTATS.png",
    },
    habilities: [],
  },

  {
    name: "S1RI",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_silver",
    },
    habitat: "Vitrum Civitas",
    biome: "biome_city",
    stats: {
      hp: undefined,
      armor: undefined,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/S1RI_NOSTATS.png",
    },
    habilities: [],
  },

  {
    name: "Comandante Groom-FORG3",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_platinum",
    },
    habitat: "Groom",
    biome: "biome_city",
    stats: {
      hp: 95,
      armor: 17,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Comandante_Groom-FORG3.png",
    },
    habilities: [],
  },

  {
    name: "Forjado Hambriento",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_silver",
    },
    habitat: "Innsmouth",
    biome: "biome_city",
    stats: {
      hp: 16,
      armor: 12,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Forjado_Hambriento.png",
    },
    habilities: [],
  },

  {
    name: "D.M.Y.",
    creature_tier: {
      creature_form: "creature_pacific",
      creature_color: "creature_silver",
    },
    habitat: "Vitrum Civitas",
    biome: "biome_city",
    stats: {
      hp: 40,
      armor: 10,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/DMY.png",
    },
    habilities: [],
  },

  {
    name: "Demoledor R-TT",
    creature_tier: {
      creature_form: "creature_alpha",
      creature_color: "creature_platinum",
    },
    habitat: "Metallurgia",
    biome: "biome_empire_of_metallurgy",
    stats: {
      hp: undefined,
      armor: undefined,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Demoledor_R-TT_NOSTATS.png",
    },
    habilities: [],
  },

  {
    name: "P3SOK Tracker",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_gold",
    },
    habitat: "Signa Solis",
    biome: "biome_empire_of_metallurgy",
    stats: {
      hp: 44,
      armor: 14,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/P3SOK_Tracker.png",
    },
    habilities: [],
  },

  {
    name: "Comandante Solaris",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_platinum",
    },
    habitat: "Signa Solis",
    biome: "biome_empire_of_metallurgy",
    stats: {
      hp: undefined,
      armor: undefined,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Comandante_Solaris_NOSTATS.png",
    },
    habilities: [],
  },

  {
    name: "Snowflake",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_platinum",
    },
    habitat: "Zauberwald",
    biome: "biome_city",
    stats: {
      hp: 38,
      armor: 15,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Snowflake.png",
    },
    habilities: [],
  },

  {
    name: "Ghork",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_platinum",
    },
    habitat: "Zauberwald",
    biome: "biome_city",
    stats: {
      hp: undefined,
      armor: undefined,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Ghork_NOSTATS.png",
    },
    habilities: [],
  },

  {
    name: "Caza Imperial",
    creature_tier: {
      creature_form: "creature_alpha",
      creature_color: "creature_gold",
    },
    habitat: "Metallurgia",
    biome: "biome_empire_of_metallurgy",
    stats: {
      hp: 70,
      armor: 14,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Caza_Imperial.png",
    },
    habilities: [],
  },

  {
    name: "Cedric Helium",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_gold",
    },
    habitat: "Vanslange",
    biome: "biome_city",
    stats: {
      hp: undefined,
      armor: undefined,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Cedric_Helium_NOSTATS.png",
    },
    habilities: [],
  },

  {
    name: "Maskro",
    creature_tier: {
      creature_form: "creature_pacific",
      creature_color: "creature_gold",
    },
    habitat: "Praderas",
    biome: "biome_field_of_flowers",
    stats: {
      hp: 28,
      armor: 13,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Maskro.png",
    },
    habilities: [],
  },

  {
    name: "Comandante Metárdida",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_platinum",
    },
    habitat: "Metallurgia",
    biome: "biome_empire_of_metallurgy",
    stats: {
      hp: undefined,
      armor: undefined,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Comandante_Metardida_NOSTATS.png",
    },
    habilities: [],
  },

  {
    name: "Protector Imperial S7",
    creature_tier: {
      creature_form: "creature_alpha",
      creature_color: "creature_platinum",
    },
    habitat: "Metallurgia",
    biome: "biome_empire_of_metallurgy",
    stats: {
      hp: undefined,
      armor: undefined,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Protector_Imperial_S7_NOSTATS.png",
    },
    habilities: [],
  },

  {
    name: "Luceron Kaeldros",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_gold",
    },
    habitat: "Metallurgia",
    biome: "biome_empire_of_metallurgy",
    stats: {
      hp: undefined,
      armor: undefined,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Luceron_Kaeldros_NOSTATS.png",
    },
    habilities: [],
  },

  {
    name: "Comandante Geisteskrank",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_platinum",
    },
    habitat: "Metallurgia",
    biome: "biome_empire_of_metallurgy",
    stats: {
      hp: undefined,
      armor: undefined,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Comandante_Geisteskrank_NOSTATS.png",
    },
    habilities: [],
  },

  {
    name: "Oraken",
    creature_tier: {
      creature_form: "creature_minor",
      creature_color: "creature_bronce",
    },
    habitat: "Cielos",
    biome: "biome_sky",
    stats: {
      hp: undefined,
      armor: undefined,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Oraken_NOSTATS.png",
    },
    habilities: [],
  },

  {
    name: "Kayn Zigurd",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_gold",
    },
    habitat: "Nibelungo",
    biome: "biome_city",
    stats: {
      hp: undefined,
      armor: undefined,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Kayn_Zigrud_NOSTATS.png",
    },
    habilities: [],
  },

  {
    name: "Mitay Rhül",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_platinum",
    },
    habitat: "Magis Quam Cetera",
    biome: "biome_city",
    stats: {
      hp: undefined,
      armor: undefined,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Mitay_Rhul_NOSTATS.png",
    },
    habilities: [],
  },

  {
    name: "Anomalía de Andvaranaut",
    creature_tier: {
      creature_form: "creature_alpha",
      creature_color: "creature_rubi",
    },
    habitat: "Nibelungo",
    biome: "biome_city",
    stats: {
      hp: undefined,
      armor: undefined,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Anomalia_de_Andvaranaut_NOSTATS.png",
    },
    habilities: [],
  },

  {
    name: "Surcanubes",
    creature_tier: {
      creature_form: "creature_pacific",
      creature_color: "creature_gold",
    },
    habitat: "Cielos Nubosos",
    biome: "biome_sky",
    stats: {
      hp: 40,
      armor: 13,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Surcanubes.png",
    },
    habilities: [],
  },

  {
    name: "Gatlin",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_gold",
    },
    habitat: "Gremio de Aventureros",
    biome: "biome_city",
    stats: {
      hp: 28,
      armor: 12,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Gatlin.png",
    },
    habilities: [],
  },

  {
    name: "Comando XTR-T",
    creature_tier: {
      creature_form: "creature_alpha",
      creature_color: "creature_platinum",
    },
    habitat: "Metallurgia",
    biome: "biome_empire_of_metallurgy",
    stats: {
      hp: 64,
      armor: 16,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Comando_XTR-T.png",
    },
    habilities: [],
  },

  {
    name: "Explorador C-TT",
    creature_tier: {
      creature_form: "creature_alpha",
      creature_color: "creature_gold",
    },
    habitat: "Metallurgia",
    biome: "biome_empire_of_metallurgy",
    stats: {
      hp: 65,
      armor: 15,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Explorador_C-TT.png",
    },
    habilities: [],
  },

  {
    name: "Morwën Amberblaze",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_gold",
    },
    habitat: "Vanslange",
    biome: "biome_city",
    stats: {
      hp: undefined,
      armor: undefined,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Morwen_Amberblaze_NOSTATS.png",
    },
    habilities: [],
  },

  {
    name: "Awog",
    creature_tier: {
      creature_form: "creature_minor",
      creature_color: "creature_gold",
    },
    habitat: "Ríos y Lagos",
    biome: "biome_water",
    stats: {
      hp: 15,
      armor: 13,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Awog.png",
    },
    habilities: [],
  },

  {
    name: "Ailupin",
    creature_tier: {
      creature_form: "creature_pacific",
      creature_color: "creature_silver",
    },
    habitat: "Bosques y Praderas",
    biome: "biome_fae_kingdom",
    stats: {
      hp: 7,
      armor: 9,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Ailupin.png",
    },
    habilities: [],
  },

  {
    name: "Alquimiau",
    creature_tier: {
      creature_form: "creature_minor",
      creature_color: "creature_gold",
    },
    habitat: "Vanslange",
    biome: "biome_city",
    stats: {
      hp: 8,
      armor: 14,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Alquimiau.png",
    },
    habilities: [],
  },

  {
    name: "Fánatec Flos",
    creature_tier: {
      creature_form: "creature_pacific",
      creature_color: "creature_silver",
    },
    habitat: "Bosque Paldäin",
    biome: "biome_forest",
    stats: {
      hp: 14,
      armor: 13,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Fanatec_Flos.png",
    },
    habilities: [],
  },

  {
    name: "Fánatec",
    creature_tier: {
      creature_form: "creature_pacific",
      creature_color: "creature_silver",
    },
    habitat: "Bosque Paldäin",
    biome: "biome_forest",
    stats: {
      hp: 12,
      armor: 12,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Fanatec.png",
    },
    habilities: [],
  },

  {
    name: "Kimi Flōs",
    creature_tier: {
      creature_form: "creature_pacific",
      creature_color: "creature_bronce",
    },
    habitat: "Bosque Paldäin",
    biome: "biome_forest",
    stats: {
      hp: 5,
      armor: 8,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Kimi_Flos.png",
    },
    habilities: [],
  },

  {
    name: "Aullido X-V5",
    creature_tier: {
      creature_form: "creature_minor",
      creature_color: "creature_gold",
    },
    habitat: "Metallurgia",
    biome: "biome_empire_of_metallurgy",
    stats: {
      hp: 36,
      armor: 16,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Aullido_X-V5.png",
    },
    habilities: [],
  },

  {
    name: "Droide Centinela Z3",
    creature_tier: {
      creature_form: "creature_pacific",
      creature_color: "creature_silver",
    },
    habitat: "Metallurgia",
    biome: "biome_empire_of_metallurgy",
    stats: {
      hp: 10,
      armor: 14,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Droide_Centinela_Z3.png",
    },
    habilities: [],
  },

  {
    name: "Cónsul Imperial A-IX",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_gold",
    },
    habitat: "Metallurgia",
    biome: "biome_empire_of_metallurgy",
    stats: {
      hp: undefined,
      armor: undefined,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Consul_Imperial_A-IX_NOSTATS.png",
    },
    habilities: [],
  },

  {
    name: "Droide Metallurgio",
    creature_tier: {
      creature_form: "creature_alpha",
      creature_color: "creature_silver",
    },
    habitat: "Metallurgia",
    biome: "biome_empire_of_metallurgy",
    stats: {
      hp: 22,
      armor: 16,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Droide_Metallurgio.png",
    },
    habilities: [],
  },

  {
    name: "Cirio Fúnebre",
    creature_tier: {
      creature_form: "creature_minor",
      creature_color: "creature_gold",
    },
    habitat: "Reino Espiritual",
    biome: "biome_spiritual_realm",
    stats: {
      hp: 11,
      armor: 13,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Cirio_Funebre.png",
    },
    habilities: [],
  },

  {
    name: "Kuchisake-onna",
    creature_tier: {
      creature_form: "creature_thinker",
      creature_color: "creature_gold",
    },
    habitat: "Amuxurá",
    biome: "biome_spiritual_realm",
    stats: {
      hp: undefined,
      armor: undefined,
    },
    image: {
      url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Kuchisake-onna_NOSTATS.png",
    },
    habilities: [],
  },
];


async function seed() {
  await connectDB();

  for (const creatureData of creatures) {
    const exists = await Creature.findOne({
      name: creatureData.name,
      "tier.form": creatureData.tier.form,
      "tier.color": creatureData.tier.color,
    });

    if (exists) {
      console.log(
        `⏭️  Saltado: ${creatureData.name} (${creatureData.tier.color} ${creatureData.tier.form})`,
      );
      continue;
    }

    await Creature.create(creatureData);
    console.log(
      `✅ Insertado: ${creatureData.name} (${creatureData.tier.color} ${creatureData.tier.form})`,
    );
  }

  await mongoose.disconnect();
  console.log("🔴 MongoDB desconectado");

}

seed()
  .then(() => {
    console.log("🌱 Seed de criaturas finalizado correctamente");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Error en seed de criaturas", err);
    process.exit(1);
  });
