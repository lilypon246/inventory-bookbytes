require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 3000

mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('DB CONNECTED')
    Initial()
  })
  .catch((err) => {
    console.error('UNABLE to connect to DB:', err)
  })

const inventoryRoute = require('./routes/inventory')

app.use('/inventory', inventoryRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app
