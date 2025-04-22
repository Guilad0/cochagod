const db = require("../database");

module.exports = {
  async findByBusinessId(businessId) {
    const [rows] = await db.query("SELECT * FROM images WHERE business_id = ?", [businessId]);
    return rows;
  },

  async create(data) {
    const { business_id, image_path, image_title, image_description, is_primary } = data;
    const [result] = await db.query(
      "INSERT INTO images (business_id, image_path, image_title, image_description, is_primary) VALUES (?, ?, ?, ?, ?)",
      [business_id, image_path, image_title, image_description, is_primary]
    );
    return { id: result.insertId, ...data };
  },

  async delete(id) {
    await db.query("DELETE FROM images WHERE image_id = ?", [id]);
  }
};
