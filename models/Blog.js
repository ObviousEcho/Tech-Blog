const { Model, Datatypes } = require('sequelize');
const sequelize = require('sequelize');

class Blog extends Model {}

Blog.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_title: {
            type: Datatypes.STRING,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        contents: {
            type: Datatypes.TEXT,
            allowNull: false,
            references: {
                model: 'comments',
                key: 'id'
            }
        },
        creator_name: {
            type: Databypes.STRING,
            allowNull: false,
        },
        date: {
            type: Datatypes.DATE,
            defaultValue: Datatypes.NOW,
        },
        leave_comment: {
            type: Datatypes.BOOLEAN
        },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
    }
);

module.exports = Blog;