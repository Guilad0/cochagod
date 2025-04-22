const service = require("../services/imageService");

module.exports = {
  async getByBusiness(req, res) {
    const data = await service.getByBusiness(req.params.businessId);
    res.json(data);
  },

  async create(req, res) {
    const data = await service.create(req.body);
    res.status(201).json(data);
  },

  async remove(req, res) {
    await service.delete(req.params.id);
    res.json({ message: "Deleted" });
  }
};
