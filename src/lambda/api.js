require('dotenv').config()

const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const debug = require('debug')('api');
const axios = require('axios').default;

const app = express();
app.use(cors());

const router = express.Router();

router.get('/hello', (req, res) => {
  res.send({
    message: "Hello world"
  });
})
router.get('/links/:linkId', (req, res) => {
  // db.collection("dynamic_links")
  //   .get()
  //   .then((snapshot) => {
  //     let docs = [];
  //     snapshot.forEach((doc) => docs.push(doc.data()));
  //     res.json(docs);
  //   });
});
router.get('/links', (req, res) => {
});
router.delete('/links/:linkId', (req, res) => {
});
router.post('/links', (req, res) => {
});

app.use(process.env.API_BASE_PATH, router);

module.exports.handler = serverless(app);