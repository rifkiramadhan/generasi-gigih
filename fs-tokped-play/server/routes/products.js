const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/:videoID', productsController.getProducts);
router.post('/', productsController.postProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
