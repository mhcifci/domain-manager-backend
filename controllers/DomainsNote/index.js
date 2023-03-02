// Models
const { DomainsNote } = require("../../models/DomainsNote"); // Domains Model
const response = require("../../utils/response");

const ModelName = DomainsNote;

// @ GET All Domains Notes
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
    const data = await DomainsNote.findOne({
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

// @ PUT Update a domain
const Update = async (req, res) => {
  try {
    // Notu bul
    const data = await ModelName.findOne({
      where: { id: req.params.id },
    });
    // not yoksa?
    if (!data) {
      return response.notFound(res, "Veri bulunamadı.");
    }
    await data.update({
      domain_id: req.body.domain_id || ModelName.domain_id,
      description: req.body.description || ModelName.description,
    });
    return response.success(res, null, "success");
  } catch (err) {
    return;
  }
};

// @ POST Create a new domain
const Create = async (req, res) => {
  try {
    await ModelName.create({
      user_id: 1, // TODO: JWT ile userid eklenecek
      domain_id: req.body.domain_id,
      description: req.body.description,
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
