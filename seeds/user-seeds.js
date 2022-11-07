const { User } = require("../models");

const userData = [
  {
    name: "Dani",
    email: "dani@test.com",
    password: "test1",
  },
  {
    name: "Willow",
    email: "willow@test.com",
    password: "test2",
  },
  {
    name: "Boo",
    email: "boo@test.com",
    password: "test3",
  },
];

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
