// Models
const { DomainsCategory } = require("../../models/DomainsCategory"); // Domains Model
const response = require("../../utils/response");

// @ GET All Domains Category
const GetAll = async (req, res) => {
  try {
    const data = await DomainsCategory.findAll();
    response.success(res, data, "success");
  } catch (err) {
    console.log(err);
    return;
  }
};

module.exports = {
  GetAll,
};
