const router = require("express").Router();
const { Blog, Comment, User } = require("../models");
const withAuth = require("../utils/auth");

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
    const blogData = await Blog.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [{ model: User }, { model: Comment }],
    });

    // res.status(200).json(blogData);
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    const userId = req.session.user_id;
    res.render("dashboard", {
      blogs,
      userId,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/dashboard/blog/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [{ model: Comment }, { model: User }],
    });
    if (!blogData) {
      res.status(400).json({ message: "No location with that id found!" });
    }
    const blog = blogData.get({ plain: true });
    const userId = req.session.user_id;
    console.log(blog);
    // res.status(200).json(blogData);
    res.render("dashblog", {
      ...blog,
      userId,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
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
    const userId = req.session.user_id;
    console.log(blog);
    // res.status(200).json(blogData);
    res.render("blogpost", {
      ...blog,
      userId,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
