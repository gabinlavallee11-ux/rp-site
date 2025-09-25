const Database = require('better-sqlite3');
const db = new Database('rp.db');

// Création des tables si elles n'existent pas
db.prepare(`
  CREATE TABLE IF NOT EXISTS agents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    role TEXT NOT NULL
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS historiques (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    agent_id INTEGER,
    action TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(agent_id) REFERENCES agents(id)
  )
`).run();

module.exports = db;

