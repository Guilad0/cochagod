const db = require("../database");

module.exports = {
  async findAll() {
    const [rows] = await db.query("SELECT * FROM business");
    return rows;
  },

  async findById(id) {
    const [rows] = await db.query("SELECT * FROM business WHERE business_id = ?", [id]);
    return rows[0];
  },

  async create(data) {
    const {
      name,
      description,
      address,
      phone,
      email,
      website,
      category,
      logo_url,
      is_active,
      location,
      links,
      zone,
    } = data;
  
    const [result] = await db.query(
      "INSERT INTO business (name, description, address, phone, email, website, category, logo_url, is_active, location, links, zone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [name, description, address, phone, email, website, category, logo_url, is_active, location, links, zone]
    );
  
    return { id: result.insertId, ...data };
  },  

  async update(id, data) {
    const { name, description, address, phone, email, website, category, logo_url,location, links, zone } = data;
    await db.query(
      "UPDATE business SET name = ?, description = ?, address = ?, phone = ?, email = ?, website = ?, category = ?, logo_url = ?, location = ?, links = ?, zone = ? WHERE business_id = ?",
      [name, description, address, phone, email, website, category, logo_url, location, links, zone, id]
    );
  },

  async delete(id) {
    await db.query("DELETE FROM business WHERE business_id = ?", [id]);
  }
};
