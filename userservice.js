const users = require('./users');
const postsservice=require('../posts/postsservice')
const commentsservice = require('../comments/commentsservice');

function getusers() {
    return users;
}

function getUser(id) {
    return users.find((users)=>users.id==id)
}

function getUserSummary(id){
    const postcount=postsservice.countUserPosts(id)
    const commentcount = commentsservice.countUserComments(id)

    let summary =users.find((users)=>users.id==id)
    summary ['No of Posts'] = postcount
    summary['No of Comments'] = commentcount
    return summary
}



module.exports= {getusers,getUser,getUserSummary}