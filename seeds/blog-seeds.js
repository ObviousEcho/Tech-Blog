const { Blog } = require('../models');

const blogData = [
    {
        post_title: "Do you just love Node.js???",
        user_id: 1,
        contents: "Node is the greatest thing to happen to developers since sliced bread!",
        date: 2022-11-02,
        leave_comment: false
    },
    {
        post_title: "Who prefers writing CSS from scratch?",
        user_id: 2,
        contents: "Or do you prefer to use a third-party library?  Post your thoughts below!",
        date: 2022-11-03,
        leave_comment: false
    },
    {
        post_title: "What programming language does everybody recommend learning next?",
        user_id: 3,
        contents: "Python, PHP, C++, C#, soundoff below!",
        date: 2022-11-04,
        leave_comment: true
    }
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;