const express = require("express");
const router = express.Router();
const {
  handleGetAllUsers,
  handleGetUserById,
  handleCreateUser,
  handleDeleteUser,
  handleUpdateById,
} = require("../controllers/user");

router.route("/").get(handleGetAllUsers).post(handleCreateUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .delete(handleDeleteUser)
  .patch(handleUpdateById);

module.exports = router;
