const Business = require("../models/businessModel");

module.exports = {
  getAll: () => Business.findAll(),
  getById: (id) => Business.findById(id),
  getByCategory: (categoryId) => Business.findByCategory(categoryId),
  create: (data) => Business.create(data),
  update: (id, data) => Business.update(id, data),
  delete: (id) => Business.delete(id),
  updateLinks: (id, linksData) => Business.updateLinks(id, linksData),
  updateLocation: (id, locationData) => Business.updateLocation(id, locationData),
  updateLogo: (id, logoData) => Business.updateLogo(id, logoData),
};
