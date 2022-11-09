const { hash, compare } = require('bcryptjs')
const AppError = require('../utils/AppError')
const sqliteConnection = require('../database/sqlite')

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body

    const database = await sqliteConnection()
    const checkUserExists = await database.get('SELECT * FROM users WHERE email = (?)', [email])

    if(checkUserExists) {
      throw new AppError('Esse e-mail já está cadastrado!')
    }

    const hashPassword = await hash(password, 8)

    await database.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashPassword])

    return response.status(201).json()
  }

  update(request, response) {
    const { name, email, password, old_password, avatar } = request.body

    response.json()
  }
}

module.exports = UsersController