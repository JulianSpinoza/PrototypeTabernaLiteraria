import mongoose from "mongoose";
import connectDB from "../../src/config/database.js";
import Creature from "../../src/models/Creature.js";

const creatures = [
  {
    name: "Comandante Volk",
    tier: {
      form: "Pensante",
      color: "Platino",
    },
    habitat: "Metallurgia",
    biome: "Imperio de Metallurgia",
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
    tier: {
      form: "Alfa",
      color: "Rubí",
    },
    habitat: "Romadhus",
    biome: "Tinieblas",
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
    tier: {
      form: "Alfa",
      color: "Oro",
    },
    habitat: "Metallurgia",
    biome: "Imperio de Metallurgia",
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
    tier: {
      form: "Pensante",
      color: "Platino",
    },
    habitat: "Orden Draconiana",
    biome: "Ciudad",
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
    tier: {
      form: "Pensante",
      color: "Rubí",
    },
    habitat: "Elaör'Man",
    biome: "Ciudad",
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
    tier: {
      form: "Pensante",
      color: "Oro",
    },
    habitat: "Reino Espiritual",
    biome: "Espiritual",
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
    tier: {
      form: "Pensante",
      color: "Oro",
    },
    habitat: "Metallurgia",
    biome: "Imperio de Metallurgia",
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
    tier: {
      form: "Pensante",
      color: "Plata",
    },
    habitat: "Templos Ze'iNaga",
    biome: "Ciudad",
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
    tier: {
      form: "Pensante",
      color: "Plata",
    },
    habitat: "Vitrum Civitas",
    biome: "Ciudad",
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
    tier: {
      form: "Pensante",
      color: "Platino",
    },
    habitat: "Groom",
    biome: "Ciudad",
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
    tier: {
      form: "Pensante",
      color: "Plata",
    },
    habitat: "Innsmouth",
    biome: "Ciudad",
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
    tier: {
      form: "Pácifico",
      color: "Plata",
    },
    habitat: "Vitrum Civitas",
    biome: "Ciudad",
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
    tier: {
      form: "Alfa",
      color: "Platino",
    },
    habitat: "Metallurgia",
    biome: "Imperio de Metallurgia",
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
    tier: {
      form: "Pensante",
      color: "Oro",
    },
    habitat: "Signa Solis",
    biome: "Imperio de Metallurgia",
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
    tier: {
      form: "Pensante",
      color: "Platino",
    },
    habitat: "Signa Solis",
    biome: "Imperio de Metallurgia",
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
    tier: {
      form: "Pensante",
      color: "Platino",
    },
    habitat: "Zauberwald",
    biome: "Ciudad",
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
    tier: {
      form: "Pensante",
      color: "Platino",
    },
    habitat: "Zauberwald",
    biome: "Ciudad",
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
    tier: {
      form: "Alfa",
      color: "Oro",
    },
    habitat: "Metallurgia",
    biome: "Imperio de Metallurgia",
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
    tier: {
      form: "Pensante",
      color: "Oro",
    },
    habitat: "Vanslange",
    biome: "Ciudad",
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
    tier: {
      form: "Pácifico",
      color: "Oro",
    },
    habitat: "Praderas",
    biome: "Campo de flores",
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
    tier: {
      form: "Pensante",
      color: "Platino",
    },
    habitat: "Metallurgia",
    biome: "Imperio de Metallurgia",
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
    tier: {
      form: "Alfa",
      color: "Platino",
    },
    habitat: "Metallurgia",
    biome: "Imperio de Metallurgia",
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
    tier: {
      form: "Pensante",
      color: "Oro",
    },
    habitat: "Metallurgia",
    biome: "Imperio de Metallurgia",
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
    tier: {
      form: "Pensante",
      color: "Platino",
    },
    habitat: "Metallurgia",
    biome: "Imperio de Metallurgia",
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
    tier: {
      form: "Menor",
      color: "Bronce",
    },
    habitat: "Cielos",
    biome: "Cielo",
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
    tier: {
      form: "Pensante",
      color: "Oro",
    },
    habitat: "Nibelungo",
    biome: "Ciudad",
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
    tier: {
      form: "Pensante",
      color: "Platino",
    },
    habitat: "Magis Quam Cetera",
    biome: "Ciudad",
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
    tier: {
      form: "Alfa",
      color: "Rubí",
    },
    habitat: "Nibelungo",
    biome: "Ciudad",
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
    tier: {
      form: "Pácifico",
      color: "Oro",
    },
    habitat: "Cielos Nubosos",
    biome: "Cielo",
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
    tier: {
      form: "Pensante",
      color: "Oro",
    },
    habitat: "Gremio de Aventureros",
    biome: "Ciudad",
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
    tier: {
      form: "Alfa",
      color: "Platino",
    },
    habitat: "Metallurgia",
    biome: "Imperio de Metallurgia",
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
    tier: {
      form: "Alfa",
      color: "Oro",
    },
    habitat: "Metallurgia",
    biome: "Imperio de Metallurgia",
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
    tier: {
      form: "Pensante",
      color: "Oro",
    },
    habitat: "Vanslange",
    biome: "Ciudad",
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
    tier: {
      form: "Pensante",
      color: "Oro",
    },
    habitat: "Ríos y Lagos",
    biome: "Agua",
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
    tier: {
      form: "Pácifico",
      color: "Plata",
    },
    habitat: "Bosques y Praderas",
    biome: "Reino Fae",
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
    tier: {
      form: "Menor",
      color: "Oro",
    },
    habitat: "Vanslange",
    biome: "Ciudad",
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
    tier: {
      form: "Pácifico",
      color: "Plata",
    },
    habitat: "Bosque Paldäin",
    biome: "Bosque",
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
    tier: {
      form: "Pácifico",
      color: "Plata",
    },
    habitat: "Bosque Paldäin",
    biome: "Bosque",
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
    tier: {
      form: "Pácifico",
      color: "Bronce",
    },
    habitat: "Bosque Paldäin",
    biome: "Bosque",
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
    tier: {
      form: "Menor",
      color: "Oro",
    },
    habitat: "Metallurgia",
    biome: "Imperio de Metallurgia",
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
    tier: {
      form: "Pácifico",
      color: "Plata",
    },
    habitat: "Metallurgia",
    biome: "Imperio de Metallurgia",
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
    tier: {
      form: "Pensante",
      color: "Oro",
    },
    habitat: "Metallurgia",
    biome: "Imperio de Metallurgia",
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
    tier: {
      form: "Alfa",
      color: "Plata",
    },
    habitat: "Metallurgia",
    biome: "Imperio de Metallurgia",
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
    tier: {
      form: "Menor",
      color: "Oro",
    },
    habitat: "Reino Espiritual",
    biome: "Espiritual",
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
    tier: {
      form: "Pensante",
      color: "Oro",
    },
    habitat: "Amuxurá",
    biome: "Espiritual",
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
