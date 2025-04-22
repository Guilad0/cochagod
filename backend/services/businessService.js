const Business = require("../models/businessModel");

module.exports = {
  getAll: () => Business.findAll(),
  getById: (id) => Business.findById(id),
  create: (data) => Business.create(data),
  update: (id, data) => Business.update(id, data),
  delete: (id) => Business.delete(id)
};
