const express = require("express");
const router = express.Router();

const protect = require("../middlewares/authMiddleware");

const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost
} = require("../controllers/postController");

// Create (Protected)
router.post("/", protect, createPost);

// Get all
router.get("/", getAllPosts);

// Get single
router.get("/:id", getPostById);

// Update (Protected)
router.put("/:id", protect, updatePost);

// Delete (Protected)
router.delete("/:id", protect, deletePost);

module.exports = router;