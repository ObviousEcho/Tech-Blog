const router = require("express").Router();
const { Blog, Comment, User } = require("../models");
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: { all: true },
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // res.status(200).json(blogData);

    res.render("homepage", {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    console.log(`Session ID ${req.session.user_id}`);
    const blogData = await Blog.findAll(
      {
      where: {
        user_id: req.session.user_id,
      },
    }
    );
    
    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/blog/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [{ model: Comment }, { model: User }],
    });
    if (!blogData) {
      res.status(400).json({ message: "No location with that id found!" });
    }
    const blog = blogData.get({ plain: true });
    console.log(blog);
    // res.status(200).json(blogData);
    res.render('blogpost', {
      ...blog,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
