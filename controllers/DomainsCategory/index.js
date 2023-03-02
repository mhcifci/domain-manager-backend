// Models
const { DomainsCategory } = require("../../models/DomainsCategory"); // Domains Model
const response = require("../../utils/response");

const ModelName = DomainsCategory;

// @ GET All Domains Category
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

// @ PUT Update
const Update = async (req, res) => {
  try {
    // Kategoriyi bul
    const category = await ModelName.findOne({
      where: { id: req.params.id },
    });
    // Kategori yoksa?
    if (!category) {
      return response.notFound(res, "Veri bulunamadı.");
    }
    await category.update({
      title: req.body.title || ModelName.title,
      description: req.body.description || ModelName.description,
    });
    return response.success(res, null, "success");
  } catch (err) {
    return;
  }
};

// @ POST Create
const Create = async (req, res) => {
  try {
    // Aynı title var mı?
    const data = await ModelName.findOne({
      where: { title: req.body.title },
    });

    // Title varsa?
    if (data) {
      return response.conflict(res);
    }
    await ModelName.create({
      title: req.body.title,
      description: req.body.description || null,
    });
    return response.success(res, null, "success");
  } catch (err) {
    return;
  }
};

module.exports = {
  GetAll,
  Get,
  Update,
  Create,
};
