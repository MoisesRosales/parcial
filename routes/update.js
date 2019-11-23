var express = require('express');
var router = express.Router();
var paisController = require('../controllers/PaisController');

router.get('/', function(req, res, next) {
    res.render('update', { error:{bad: false}});
  });
  
  router.put('/:codigo_postal',paisController.update);
  module.exports = router;