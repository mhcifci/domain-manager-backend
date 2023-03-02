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
    console.log(err);
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
    console.error(err);
    return res.status(500).json({ message: "Bir hata oluştu" });
  }
};

module.exports = {
  GetAll,
  Get
};