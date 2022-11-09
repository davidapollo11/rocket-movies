const sqlite3 = require('sqlite3') // connection driver
const sqlite = require('sqlite') // used to connect
const path = require('path')

async function sqliteConnection() {
  const database = await sqlite.open({
    filename: path.resolve(__dirname, '..', 'database.db'),
    driver: sqlite3.Database
  })

  return database
}

module.exports = sqliteConnection