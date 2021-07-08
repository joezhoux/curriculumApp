const express = require('express')
const helmet = require('helmet')
const routes = require('./api')
require('../db')
const app = express()
const port = 5000

app.use(express.json())

app.use(helmet())

app.use('/api/v1', routes)

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
