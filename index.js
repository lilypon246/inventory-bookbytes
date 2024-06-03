require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const inventoryRoute = require('./routes/inventory');
const connectToDB = require('./config/dbConnection');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/inventory', inventoryRoute);

connectToDB().then(() => {
  app.listen(port, () => {
    console.log(`listening for requests on port: ${port}`);
  });
});
