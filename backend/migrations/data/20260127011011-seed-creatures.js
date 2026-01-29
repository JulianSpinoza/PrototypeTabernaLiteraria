/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const up = async (db, client) => {
    await db.collection("creatures").insertMany([
      {
        name: "Comandante Volk",
        tier: {
          form: "Pensante",
          color: "Platino",
        },
        habitat: "Metallurgia",
        biome: "Metalico",
        stats: {
          hp: 105,
          armor: 19,
        },
        image: {
          url: "https://rsfoqjrfbjojklugxxyc.supabase.co/storage/v1/object/public/creatures/Comandante_Volk.png",
        },
        habilities: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
};

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const down = async (db, client) => {
    await db.collection("creatures").deleteMany({
      name: {
        $in: [
          "Comandante Volk",
        ],
      },
    });
};
