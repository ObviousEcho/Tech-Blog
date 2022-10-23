const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comments extends Model {}

Comments.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allownull: false,
      primaryKey: true,
      allowIncrement: true,
    },
    user_name: {
      type: Datatypes,
      INTEGER,
      allowNull: false,
    },
    comment: {
      type: Datatypes.TEXT,
      allowNull: true,
      references: {
        model: "user",
        key: "id",
      },
      references: {
        model: "blog",
        key: "id",
      },
    },
    date: {
      type: Datatypes.DATE,
      defaultValue: Datatypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "comments",
  }
);

module.exports = Comments;
