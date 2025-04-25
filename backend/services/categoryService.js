const category = require("../models/categoryModel");

module.exports = {
  getAll: () => category.findAll(),
  getById: (id) => category.findById(id),
  create: (data) => category.create(data),
  update: (id, data) => category.update(id, data),
  delete: (id) => category.delete(id)
};
