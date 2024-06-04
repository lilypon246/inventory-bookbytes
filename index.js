require('dotenv').config();
const cors = require("cors");
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const inventoryRoute = require('./routes/inventory');
const connectToDB = require('./config/dbConnection');

const corsOptions = {
  origin: process.env.ALLOWED_ORIGIN || '*', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
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
