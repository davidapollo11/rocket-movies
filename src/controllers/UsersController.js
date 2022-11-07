const AppError = require('../utils/AppError')

class UsersController {
  create(request, response) {
    const { name, email, password } = request.body

    if(!name) {
      throw new AppError('Nome é necessário!')
    }

    response.json({ name, email, password })
  }

  update(request, response) {
    const { name, email, password, old_password, avatar } = request.body

    response.json()
  }
}

module.exports = UsersController