/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const up = async (db, client) => {
    await db.collection("creatures").insertMany([
      {
        name: "Comandante Volk",
        tier: "S",
        habitat: "Metallurgia",
        biome: "Metalico",
        hp: 105,
        armor: 19,
        image:
          "https://cdn.discordapp.com/attachments/838811889551015966/1452636318122115125/Comandante_Volk.png?ex=697955be&is=6978043e&hm=d1e56965e46dbb933c1e2acba17787fb0a2791a39e7dde76847b55128543b7eb",
        habilidades: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Avalá Rhoeas",
        tier: "S",
        habitat: "Orden Draconiana",
        biome: "Ciudad",
        hp: 180,
        armor: 40,
        image:
          "https://cdn.discordapp.com/attachments/838811889551015966/1452419663261733005/image.png?ex=697934b8&is=6977e338&hm=fabc60466942c592a5208bc92663305fc934fb4463bcaa182635aed9b80101c3",
        habilidades: [],
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
      nombre: { $in: ["Comandante Volk", "Avalá Rhoeas"] },
    });
};
