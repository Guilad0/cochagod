const db = require("../database");

module.exports = {
  async findAll() {
    const [rows] = await db.query("SELECT * FROM categorias");
    return rows;
  },

  async findById(id) {
    const [rows] = await db.query("SELECT * FROM categorias WHERE category_id = ?", [id]);
    return rows[0];
  },

  async create(data) {
    const { name } = data;
    if (!name) throw new Error("El nombre de la categoría es requerido.");
    const [result] = await db.query("INSERT INTO categorias (name) VALUES (?)", [name]);
    return { id: result.insertId, name };
  },  
  
  async update(id, data) {
    const { name } = data;
    if (!name) throw new Error("El nombre de la categoría es requerido.");
    await db.query("UPDATE categorias SET name = ? WHERE category_id = ?", [name, id]);
  },

  async delete(id) {
    await db.query("DELETE FROM categorias WHERE category_id = ?", [id]);
  }
};
