// Models
const { DomainsHosts } = require("../../models/DomainsHosts"); // Domains Model
const response = require("../../utils/response");

const ModelName = DomainsHosts;

// @ GET All Domains Hosts
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
    // Host bul
    const host = await ModelName.findOne({
      where: { id: req.params.id },
    });
    // Kategori yoksa?
    if (!host) {
      return response.notFound(res, "Veri bulunamadı.");
    }
    await host.update({
      title: req.body.title || ModelName.title,
      ip: req.body.ip || ModelName.ip,
      url: req.body.url || ModelName.url,
      username: req.body.username || ModelName.username,
      password: req.body.password || ModelName.password,
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
      ip: req.body.ip,
      url: req.body.url || null,
      username: req.body.username || null,
      password: req.body.password || null,
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
