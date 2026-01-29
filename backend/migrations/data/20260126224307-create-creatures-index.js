/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const up = async (db, client) => {
    /*
    await db.collection("creatures").createIndex(
        { name: 1 },
        { unique: false }
    );
    */
};

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const down = async (db, client) => {
    /*
    await db.collection("creatures").dropIndex("name_1")
    */
};
