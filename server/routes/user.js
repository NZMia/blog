var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({
    error: 0,
    data: ['1', '2', '3'],
  });
  next();
});

module.exports = router;
