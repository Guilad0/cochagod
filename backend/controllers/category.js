const service = require("../services/categoryService");

module.exports = {
    getAll: async (req, res) => {
        const data = await service.getAll();
        res.json(data);
    },
    create: async (req, res) => {
        const data = await service.create(req.body);
        res.status(201).json(data);
    },
    update: async (req, res) => {
        const data = await service.update(req.params.id, req.body);
        res.json(data);
    },
    delete: async (req, res) => {
        await service.delete(req.params.id);
        res.json({ message: "Deleted" });
    },
    getById: async (req, res) => {
        const data = await service.getById(req.params.id);
        res.json(data);
    },
};