const router = require("express").Router();
const { Comment, Blog, User } = require("../../models");
const withAuth = require('../../utils/auth');

router.get("/", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.findAll();
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: [{ model: Blog }, { model: User }],
    });
    if (!commentData) {
      res.status(400).json({ message: "No location with that id found!" });
    }
    const comment = commentData.get({ plain: true });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create(req.body);
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
