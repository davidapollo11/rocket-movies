const { Router } = require('express')

const usersRoutes = Router()

usersRoutes.post('/', (request, response) => {
  const { name } = request.body
  response.json(`Chama na bota ${name}`)
})

module.exports = usersRoutes