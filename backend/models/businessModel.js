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
  async findByCategory(categoryId) {
    const [rows] = await db.query(
      "SELECT * FROM business WHERE category_id = ?",
      [categoryId]
    );
    return rows;
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
      rating,
      category_id,
      subtipo,
      link_facebook,
      link_tiktok
    } = data;
  
    const [result] = await db.query(
      "INSERT INTO business (name, description, address, phone, email, website, category, logo_url, is_active, location, links, zone, rating, category_id, subtipo, link_facebook, link_tiktok) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [name, description, address, phone, email, website, category, logo_url, is_active, location, links, zone, rating, category_id, subtipo, link_facebook, link_tiktok]
    );
  
    return { id: result.insertId, ...data };
  },  

  async update(id, data) {
    const { name, description, address, phone, email, website, category, logo_url,location, links, zone, rating, category_id, subtipo, link_facebook, link_tiktok } = data;
    await db.query(
      "UPDATE business SET name = ?, description = ?, address = ?, phone = ?, email = ?, website = ?, category = ?, logo_url = ?, location = ?, links = ?, zone = ? , rating = ?, category_id = ?, subtipo = ?, link_facebook = ?, link_tiktok = ? WHERE business_id = ?",
      [name, description, address, phone, email, website, category, logo_url, location, links, zone, id , rating, category_id]
    );
  },

  async delete(id) {
    await db.query("DELETE FROM business WHERE business_id = ?", [id]);
  }
};
