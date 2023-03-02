// Models
const User = require("../../models/User/user.model"); // User Model
const response = require("../../utils/response");

const UserController = async (req, res) => {
  try {
    const users = await User.findAll();
    response.success(res, users, "success")
  } catch (err) {
    console.log(err)
  }
};

module.exports = {
  UserController,
};
