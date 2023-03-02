// Models
const User = require("../../models/User"); // User Model
const response = require("../../utils/response");
const bcrypt = require("bcrypt");

const ModelName = User;

// @ GET all user
const GetAll = async (req, res) => {
  try {
    const data = await ModelName.findAll();
    response.success(res, data, "success");
  } catch (err) {
    return;
  }
};

const Get = async (req, res) => {
  try {
    const data = await ModelName.findOne({
      where: { id: req.params.id },
    });

    if (!data) {
      return response.notFound(res, "Veri bulunamadı.");
    }

    return response.success(res, data, "success");
  } catch (err) {
    return res.status(500).json({ message: "Bir hata oluştu" });
  }
};

// @ PUT Update a user
const Update = async (req, res) => {
  try {
    const data = await ModelName.findOne({
      where: { id: req.params.id },
    });
    // Kullanıcı varsa
    if (!data) {
      return response.notFound(res);
    }

    if (req.body.password) {
      var hashedPassword = await bcrypt.hash(req.body.password, 10);
    }
    const result = await data.update({
      password: hashedPassword || ModelName.password,
      email: req.body.email || ModelName.email,
    });
    return response.success(res, null, "success");
  } catch (err) {
    return;
  }
};

// @ POST Create a new user
const Create = async (req, res) => {
  try {
    // Kullanıcıyı bul
    const data = await ModelName.findOne({
      where: { email: req.body.email },
    });
    // Kullanıcı varsa
    if (data) {
      return response.conflict(res);
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await ModelName.create({
      email: req.body.email,
      password: hashedPassword,
    });
    return response.success(res, null, "success");
  } catch (err) {
    return response.badRequest(res, { errors: err });
  }
};

module.exports = {
  GetAll,
  Get,
  Update,
  Create,
};
