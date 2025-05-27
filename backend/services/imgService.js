const Image = require("../models/imgModel");

module.exports = {
  getByBusiness: (id) => Image.findByBusinessId(id),
  create: (data) => Image.create(data),
  delete: (id) => Image.delete(id)
};
