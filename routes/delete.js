var express = require('express');
var router = express.Router();
var paisController = require('../controllers/PaisController');

router.get('/', function(req, res, next) {
    res.render('delete', { error:{bad: false}});
  });

router.delete('/:codigo_postal',paisController.delete);
module.exports = router;