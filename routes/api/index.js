const express = require('express');
const router = express.Router();

let helper = require('./../../config/helper');

router.all('/', (req, res, next) => {
  res.send({
    app_name : res.locals.app_name,
    message : `Data API ${res.locals.app_name}`
  });
});

module.exports = router;