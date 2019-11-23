var express = require('express');
var router = express.Router();
var paisController = require('../controllers/PaisController');

var myList;
/* GET pais listing. */
router.get('/:codigo_postal', paisController.getOne);
router.get('/', paisController.getAll);
router.post('/',paisController.register);
router.put('/:codigo_postal', paisController.update);
router.delete('/:codigo_postal',paisController.delete);

module.exports = router;