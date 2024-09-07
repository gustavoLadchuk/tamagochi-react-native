import { SQLiteDatabase } from "expo-sqlite";

export async function initDatabase(database: SQLiteDatabase){
    await database.execAsync(`
            CREATE TABLE IF NOT EXISTS pet (
            id INTEGER NOT NULL AUTO INCREMENT PRIMARY KEY,
            nome VARCHAR[30] NOT NULL,
            diversao INTEGER NOT NULL,
            sono INTEGER NOT NULL,
            fome INTEGER NOT NULL,
            last_update DATE
            );
        `);


}

