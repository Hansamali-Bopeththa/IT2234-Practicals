const posts = require('./posts');

function countUserPosts(usersid) {
    return posts.filter((posts)=>posts.authorId==usersid).length
}



module.exports= {countUserPosts}