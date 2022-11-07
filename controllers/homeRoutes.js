const router = require("express").Router();
const { Blog } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: { all: true },
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    // const comments = blogs.map((comment) => {
    //   return comment.comments;
    // });
    // console.log(comments);
    // console.log(blogs);
    // res.status(200).json(blogData);

    res.render('homepage', {
      blogs,
      // comments,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
