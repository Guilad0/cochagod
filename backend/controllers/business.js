const service = require("../services/businessService");

module.exports = {
  async getAll(req, res) {
    const data = await service.getAll();
    res.json(data);
  },

  async getById(req, res) {
    const data = await service.getById(req.params.id);
    if (data) res.json(data);
    else res.status(404).json({ message: "Not found" });
  },

  async getByCategory(req, res) {
    const data = await service.getByCategory(req.params.categoryId);
    res.json(data);
  }
,

  async create(req, res) {
    const data = await service.create(req.body);
    res.status(201).json(data);
  },

  async update(req, res) {
    await service.update(req.params.id, req.body);
    res.json({ message: "Updated" });
  },

  async remove(req, res) {
    await service.delete(req.params.id);
    res.json({ message: "Deleted" });
  },
  updateLinks: async (req, res) => {
    const { id } = req.params;
    const { website, link_facebook, link_tiktok, links } = req.body;
    await businessService.updateLinks(id, { website, link_facebook, link_tiktok, links });
    res.json({ message: "Enlaces actualizados con éxito" });
  },

  updateLocation: async (req, res) => {
    const { id } = req.params;
    const { location } = req.body;
    await businessService.updateLocation(id, { location });
    res.json({ message: "Ubicación actualizada con éxito" });
  },

  updateLogo: async (req, res) => {
    const { id } = req.params;
    const { logo_url } = req.body;
    await businessService.updateLogo(id, { logo_url });
    res.json({ message: "Logo actualizado con éxito" });
  },

};
