// Models
const { DomainsHosts } = require("../../models/DomainsHosts"); // Domains Model
const response = require("../../utils/response");

// @ GET All Domains Hosts
const GetAll = async (req, res) => {
  try {
    const data = await DomainsHosts.findAll();
    response.success(res, data, "success");
  } catch (err) {
    console.log(err);
    return;
  }
};

module.exports = {
  GetAll,
};
