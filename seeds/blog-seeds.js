const { Blog } = require('../models');

const blogData = [
    {
        post_title: "Sailing",
        user_id: 1,
        contents: "Who wants to sail this weekend?",
        date: 2022-11-02,
        leave_comment: false
    },
    {
        post_title: "Skiing",
        user_id: 2,
        contents: "Who wants to ski this weekend?",
        date: 2022-11-03,
        leave_comment: false
    },
    {
        post_title: "Drinking",
        user_id: 3,
        contents: "Who wants to drink this weekend?",
        date: 2022-11-04,
        leave_comment: true
    }
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;