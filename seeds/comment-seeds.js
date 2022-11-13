const { Comment } = require('../models');

const commentData = [
    {
        comment: "Node is life changing!",
        blog_id: 1,
        user_id: 1,
        date: 2022-11-05
    },
    {
        comment: "I couldn't agree more, so many npm packages to utilize!",
        blog_id: 1,
        user_id: 2,
        date: 2022-11-06
    },
    {
        comment: "Tailwinds is interesting.",
        blog_id: 2,
        user_id: 2,
        date: 2022-11-06
    },
    {
        comment: "From scratch!",
        blog_id: 2,
        user_id: 3,
        date: 2022-11-08
    },
    {
        comment: "How about oldschool C.",
        blog_id: 3,
        user_id: 3,
        date: 2022-11-07
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;