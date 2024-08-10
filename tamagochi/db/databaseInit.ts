import { enablePromise, openDatabase, type SQLiteDatabase } from 'react-native-sqlite-storage';

type animal = {
    nome: string
}

export const getDBConnection = async () => {
    return openDatabase({ name: 'tamagochi.db', location: 'default' });
};

export const createTable = async (db: SQLiteDatabase) => {
    const query = `CREATE TABLE IF NOT EXISTS animais(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR(100) NOT NULL,
        imagem BLOB,
        fome INTEGER DEFAULT 100,
        sono INTEGER DEFAULT 100,
        diversao INTEGER DEFAULT 100,
      );`;

    await db.executeSql(query);
};

enablePromise(true)

export const getAnimais = async (db: SQLiteDatabase) => {
    try {
        const animais: animal[] = [];
        const data = await db.executeSql(`SELECT FROM animais`);
        data.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                animais.push(result.rows.item(index))
            }
        });
        return animais;
    } catch (error) {
        console.log(error);
    }
};

export const postAnimal = async (db: SQLiteDatabase, animal: animal[]) => {
    const insert =
        `INSERT OR REPLACE INTO (rowid, value) values` +
        animal.map(i => `(${i.nome}, )`).join(',');

    return db.executeSql(insert);
};

export const updateAnimal = async (db: SQLiteDatabase, id: number, animal: animal) => {
    const update =
        `UPDATE animais SET nome = ${animal.nome} WHERE id = ${id}`
}

export const deleteTodoItem = async (db: SQLiteDatabase, id: number) => {
    const deleteAnimal = `DELETE from animais where rowid = ${id}`;
    await db.executeSql(deleteAnimal);
};