// Models
const { Domains, UnusedDomains, sequelize } = require("../../models/Domains"); // Domains Model
const response = require("../../utils/response");
const axios = require("axios");
const { QueryTypes } = require("sequelize");

const ModelName = Domains;

// @ GET All Domains
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

// @ PUT Update a domain
const Update = async (req, res) => {
  try {
    // Domaini bul
    const domain = await ModelName.findOne({
      where: { id: req.params.id },
    });
    // Domain yoksa?
    if (!domain) {
      return response.notFound(res, "Veri bulunamadı.");
    }
    await domain.update({
      domain: req.body.domain || ModelName.domain,
      category: req.body.category || ModelName.domain,
      host: req.body.host || ModelName.host,
      tags: req.body.tags || ModelName.tags,
      is_banned: req.body.is_banned || ModelName.is_banned,
      is_active: req.body.is_active || ModelName.is_active,
      added_by: req.body.added_by || ModelName.added_by,
    });
    return response.success(res, null, "success");
  } catch (err) {
    return;
  }
};

// @ POST Create a new domain
const Create = async (req, res) => {
  try {
    // Domaini var mı?
    const domain = await ModelName.findOne({
      where: { domain: req.body.domain },
    });

    // Domain yoksa?
    if (domain) {
      return response.notFound(res, "Daha önce benzer bir kayıt var.");
    }
    await ModelName.create({
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
    return;
  }
};

// Check and update domains
const CheckDomainIsBanned = async (req, res) => {
  try {
    const bannedDomains = await axios.get(process.env.CHECK_DOMAIN_URL);
    const aranacaklar = bannedDomains.data.data; // Array
    const domainList = await ModelName.findAll({
      where: {
        is_active: 1,
        is_banned: 0,
      },
    });
    const bannedDomainList = [];
    for (let i = 0; i < domainList.length; i++) {
      if (aranacaklar.some((url) => url.includes(domainList[i].domain))) {
        bannedDomainList.push(domainList[i].domain);
      }
    }
    bannedDomainList.forEach(async (domain) => {
      await sequelize.query(
        "UPDATE domains SET is_banned = 1 WHERE domain = ?",
        {
          replacements: [domain],
          type: QueryTypes.UPDATE,
        }
      );
    });
    await sequelize.query(
      "INSERT into domain_control_log SET match_domain = ?, result = ?",
      {
        replacements: [
          bannedDomainList.toString() ? bannedDomainList.toString() : null,
          bannedDomains.status,
        ],
        type: QueryTypes.INSERT,
        timestamps: true,
        underscored: true,
        tableName: "domain_control_log",
      }
    );
    response.success(
      res,
      bannedDomainList.length > 0 ? bannedDomainList : null,
      "success"
    );
  } catch (err) {
    console.log(err);
    return;
  }
};

module.exports = {
  GetAll,
  Get,
  Update,
  Create,
  GetAllUnusedDomains,
  CheckDomainIsBanned,
};
