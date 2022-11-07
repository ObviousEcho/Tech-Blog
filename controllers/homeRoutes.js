const router = require("express").Router();
const { Blog, Comment, User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: { all: true },
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    console.log(blogs);

    // res.status(200).json(blogData);

    res.render("homepage", {
      blogs,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
