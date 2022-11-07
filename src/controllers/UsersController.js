class UsersController {
  create(request, response) {
    const { name, email, password } = request.body

    response.json()
  }

  update(request, response) {
    const { name, email, password, old_password, avatar } = request.body

    response.json()
  }
}

module.exports = UsersController