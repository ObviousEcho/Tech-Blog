const router = require("express").Router();
const { Blog, Comment } = require("../../models");

router.get("/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [{ model: Comment }],
    });
    if (!blogData) {
      res.status(400).json({ message: "No location with that id found!" });
    }
    const blog = blogData.get({ plain: true });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const blogData = await Blog.create(req.body);
    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: "No location found with this id!" });
      return;
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
