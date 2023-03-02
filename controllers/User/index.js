// Models
const User = require("../../models/User"); // User Model
const response = require("../../utils/response");


// @ GET all user
const GetAll = async (req, res) => {
  try {
    const data = await User.findAll();
    response.success(res, data, "success")
  } catch (err) {
    console.log(err)
  }
};




module.exports = {
  GetAll,
};
