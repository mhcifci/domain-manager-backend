// Models
const { DomainsNote } = require("../../models/DomainsNote"); // Domains Model
const response = require("../../utils/response");

// @ GET All Domains Notes
const GetAll = async (req, res) => {
  try {
    const data = await DomainsNote.findAll();
    response.success(res, data, "success");
  } catch (err) {
    console.log(err);
    return;
  }
};

module.exports = {
  GetAll,
};
