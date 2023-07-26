const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

router.get('/:videoID', commentsController.getComments);
router.post('/', commentsController.postComment);
router.put('/:id', commentsController.updateComment);
router.delete('/:id', commentsController.deleteComment);

module.exports = router;
