const db = require("../database");

module.exports = {
  async findByBusinessId(businessId) {
    const [rows] = await db.query("SELECT * FROM image WHERE business_id = ?", [businessId]);
    return rows;
  },

  async create(data) {
    const { business_id, url_image, public_id, folder, type, titulo, descripcion } = data;
    const [result] = await db.query(
      "INSERT INTO image (business_id, url_image, public_id, folder, type, titulo, descripcion) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [business_id, url_image, public_id, folder, type, titulo, descripcion]
    );
    return { id: result.insertId, ...data };
  },

  async delete(id) {
    await db.query("DELETE FROM image WHERE image_id = ?", [id]);
  }
};
