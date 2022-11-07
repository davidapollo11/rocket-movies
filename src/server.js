const express = require('express')

const routes = require('./routes')

const app = express()
app.use(express.json()) //define for api that the request pattern is JSON
app.use(routes)

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))