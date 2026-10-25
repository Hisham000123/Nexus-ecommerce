
import express from "express";

import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllusers,
  getCurrentUserProfile,
  updateCurrentUserProfile,
  deleteUser,
  getUserById,
  updateUserById
} from "../controllers/userController.js";

import {
  authenticate,
  authorizeAdmin,
} from "../middlewears/authMiddleware.js";

const router = express.Router();

// Register
router.post("/", createUser);

// Get all users - Admin only
router.get("/", authenticate, authorizeAdmin, getAllusers);

// Login
router.post("/auth", loginUser);

// Logout
router.post("/logout", logoutCurrentUser);

// Get current user profile
router.get("/profile", authenticate, getCurrentUserProfile);

// Update current user profile
router.put("/profile", authenticate, updateCurrentUserProfile);


router.delete("/:id",authenticate,authorizeAdmin , deleteUser)

router.get("/:id", authenticate,authorizeAdmin, getUserById)
router.put("/:id", authenticate,authorizeAdmin, updateUserById)

export default router;

