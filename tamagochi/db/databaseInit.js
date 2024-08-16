const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

// Function to open the SQLite database
async function openDb() {
  return open({
    filename: './my-database.db',
    driver: sqlite3.Database,
  });
}

// Example function to create a table, insert data, and query data
async function run() {
  const db = await openDb();

  // Create a new table
  await db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome VARCHAR[30] NOT NULL,
      fome INT NOT NULL,
      diversao INT NOT NULL,
      sono INT NOT NULL,
    )
  `);

  // Insert some data
  await db.run('INSERT INTO users (name) VALUES (?)', 'Alice');

  // Query data
  const rows = await db.all('SELECT * FROM users');
  console.log(rows);

  await db.close();
}

run().catch((err) => console.error(err));
