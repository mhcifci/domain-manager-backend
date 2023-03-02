// Models
const { Domains, UnusedDomains } = require("../../models/Domains"); // Domains Model
const response = require("../../utils/response");

// @ GET All Domains
const GetAll = async (req, res) => {
  try {
    const data = await Domains.findAll();
    response.success(res, data, "success");
  } catch (err) {
    console.log(err);
    return;
  }
};

const Get = async (req, res) => {
  try {
    const data = await Domains.findOne({
      where: { id: req.params.id },
    });

    if (!data) {
      return response.notFound(res, "Veri bulunamadı.");
    }

    return response.success(res, data, "success");
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Bir hata oluştu" });
  }
};

// @ PUT Update a domain
const Update = async (req, res) => {
  try {
    // Domaini bul
    const domain = await Domains.findOne({
      where: { id: req.params.id },
    });
    // Domain yoksa?
    if (!domain) {
      return response.notFound(res, "Veri bulunamadı.");
    }
    await domain.update({
      domain: req.body.domain || Domains.domain,
      category: req.body.category || Domains.domain,
      host: req.body.host || Domains.host,
      tags: req.body.tags || Domains.tags,
      is_banned: req.body.is_banned || Domains.is_banned,
      is_active: req.body.is_active || Domains.is_active,
      added_by: req.body.added_by || Domains.added_by,
    });
    return response.success(res, null, "success");
  } catch (err) {
    console.log(err);
    return;
  }
};

// @ POST Create a new domain
const Create = async (req, res) => {
  try {
    // Domaini var mı?
    const domain = await Domains.findOne({
      where: { domain: req.body.domain },
    });

    // Domain yoksa?
    if (domain) {
      return response.notFound(res, "Daha önce benzer bir kayıt var.");
    }
    await Domains.create({
      domain: req.body.domain,
      category: req.body.category,
      host: req.body.host,
      tags: req.body.tags,
      is_banned: 0,
      is_active: 0,
      added_by: 0, // TODO: JWT ile userid eklenecek
    });
    return response.success(res, null, "success");
  } catch (err) {
    console.log(err);
    return;
  }
};

// Spesific Controllers
// @ GET Unused Domains
const GetAllUnusedDomains = async (req, res) => {
  try {
    const data = await UnusedDomains.findAll();
    response.success(res, data, "success");
  } catch (err) {
    console.log(err);
    return;
  }
};

module.exports = {
  GetAll,
  Get,
  GetAllUnusedDomains,
  Update,
  Create,
};
