require('dotenv').config()

const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const debug = require('debug')('api')

const app = express();
app.use(cors());

const router = express.Router();

router.get('/hello', (req, res) => {
  res.send({
    message: "Hello world"
  });
})

app.use(process.env.API_BASE_PATH, router);

module.exports.handler = serverless(app);