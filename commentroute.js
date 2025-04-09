const express = require('express');
const router = express.Router();
const commentService = require('./commentsservice');


router.get('/post/:postId', (req, res) => {
    const postId = req.params.postId;
    const result = commentService.getCommentsWithUser(postId);

    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).json({ message: 'No comments found for this post ID.' });
    }
});

module.exports = router;