var express = require('express');
var router = express.Router();
var paisController = require('../controllers/PaisController');

router.get('/', function(req, res, next) {
    res.render('insert', { error:{bad: false}});
  });
  
  router.post('/',paisController.register);
  
  module.exports = router;