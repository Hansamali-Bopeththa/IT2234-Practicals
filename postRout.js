const express = require('express');
const router = express.Router();
const posts = require('../data/posts.json');
const comments = require('../data/comments.json');
const users = require('../data/users.json');

// 2. Get comments of a post with commentator's full name
router.get('/:id/comments', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    const postComments = comments.filter(comment => comment.postId === postId);

    const enrichedComments = postComments.map(comment => {
        const user = users.find(u => u.id === comment.userId);
        return {
            text: comment.text,
            commenter: user ? `${user.firstName} ${user.lastName}` : "Unknown"
        };
    });

    res.json(enrichedComments);
});

module.exports = router;
