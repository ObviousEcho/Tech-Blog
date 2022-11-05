const { Comments } = require('../models');

const commentData = [
    {
        comment: "I'm in!",
        blog_id: 1,
        user_id: 1,
        date: 2022-11-05
    },
    {
        comment: "I'm in!",
        blog_id: 2,
        user_id: 2,
        date: 2022-11-06
    },
    {
        comment: "I'm in!",
        blog_id: 3,
        user_id: 3,
        date: 2022-11-07
    }
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;