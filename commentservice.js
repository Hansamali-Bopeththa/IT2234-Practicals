const comments = require('./comments');
const users = require('../users/users.js');

function countUserComments(userId) {
    return comments.filter((comment) => comment.userId == userId).length;
}

function getCommentsWithUser(postId) {
    // Step 1: Filter comments based on postId
    const filteredComments = comments.filter(comment => comment.postId === postId);

    // If no comments are found, return null
    if (filteredComments.length === 0) {
        return null;
    }

    // Step 2: Map each comment to the user who made it
    return filteredComments.map(comment => {
        // Find the user corresponding to the comment's userId
        const user = users.find(u => u.id === comment.userId);

        // Return the commentator's name and the comment
        return {
            commentator: user ? user.fullName : 'Unknown User',  // Use 'fullName' of the user
            comment: comment.content  // Comment content from the comment object
        };
    });
}

module.exports = { countUserComments,getCommentsWithUser };