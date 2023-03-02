// Models
const User = require("../../models/User"); // User Model
const response = require("../../utils/response");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ModelName = User;

const Auth = async (req, res) => {
  try {
    const data = await ModelName.findOne({
      where: { email: req.body.email },
    });

    if (!data) {
      return response.unauthorized(res, "Your credentials are invalid");
    }
    const passwordMatches = await bcrypt.compare(
      req.body.password,
      data.password
    );
    if (!passwordMatches) {
      return response.badRequest(res, "Your credentials are invalid");
    }
    const token = jwt.sign(
      { user_id: data.id, email: data.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    return response.success(
      res,
      {
        token: token,
        user: {
          email: req.body.email,
        },
      },
      "success"
    );
  } catch (err) {
    return;
  }
};

module.exports = {
  Auth,
};
