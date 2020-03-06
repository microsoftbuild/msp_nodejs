var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //todo: write your application
  res.send({message: 'Hello World 🌍'});
});

module.exports = router;
