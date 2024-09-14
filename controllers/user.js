const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const userData = await User.find();
  return res.json(userData);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  return res.send(user);
}

async function handleCreateUser(req, res) {
  let body = req.body;

  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    ip_address: body.ip_address,
  });

  return res.json({ msg: result });
}

async function handleDeleteUser(req, res) {
  const user = await User.findByIdAndDelete(req.params.id);
  return res.send(user);
}

async function handleUpdateById(req, res) {
  const user = await User.findByIdAndUpdate(req.params.id);
  return res.send(user);
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleCreateUser,
  handleDeleteUser,
  handleUpdateById,
};
