const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

// Users have many blogs
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Blogs belong to a user
Blog.belongsTo(User, {
    foreginKey: 'user_id',
});

// Comment belongs to many blogs through users???
Comment.belongsTo(Blog, {
    foreginKey: 'blog_id',
});

// Blog belongs to many Comment through users???
Blog.hasMany(Comment, {
    foreginKey: 'blog_id',
    onDelete: 'CASCADE'
});

// Comment belong to many users through users???
Comment.belongsTo(User, {
    foreginKey: 'user_id',
});

// Blog belongs to many Comment through users???
User.hasMany(Comment, {
    foreginKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Blog,
    Comment
};