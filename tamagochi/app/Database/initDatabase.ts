import { SQLiteDatabase } from "expo-sqlite";

export async function initDatabase(database: SQLiteDatabase) {

    // await database.execAsync(`
    //     DROP TABLE pet
    // `);

    await database.execAsync(`
            CREATE TABLE IF NOT EXISTS pet (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            pet_id INTEGER NOT NULL,
            fun INTEGER NOT NULL DEFAULT 50,
            sleep INTEGER NOT NULL DEFAULT 50,
            hunger INTEGER NOT NULL DEFAULT 50,
            is_sleeping BOOLEAN NOT NULL DEFAULT FALSE,
            last_update DATE DEFAULT CURRENT_TIMESTAMP
            );
        `);


}

