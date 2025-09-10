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
    link_tiktok,
    servicios,
    phone_two,
    url_qr,
    map,
    end_day,
  } = data;

  const [result] = await db.query(
    `INSERT INTO business 
    (name, description, address, phone, email, website, category, logo_url, 
    is_active, location, links, zone, rating, category_id, subtipo, link_facebook, 
    link_tiktok, servicios, phone_two, url_qr, map, end_day) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      name, description, address, phone, email, website, category, logo_url,
      is_active, location, links, zone, rating, category_id, subtipo,
      link_facebook, link_tiktok, servicios, phone_two, url_qr, map, end_day,
    ]
  );

  return { id: result.insertId, ...data };
},

  async update(id, data) {
    const { name, description, address, phone, email, website, category, logo_url,location, links, zone, rating, category_id, subtipo, link_facebook, link_tiktok, servicios } = data;
    await db.query(
      "UPDATE business SET name = ?, description = ?, address = ?, phone = ?, email = ?, website = ?, category = ?, logo_url = ?, location = ?, links = ?, zone = ? , rating = ?, category_id = ?, subtipo = ?, link_facebook = ?, link_tiktok = ?, servicios = ? WHERE business_id = ?",
      [name, description, address, phone, email, website, category, logo_url, location, links, zone, rating, category_id, subtipo, link_facebook, link_tiktok, servicios, id]
    );
    return { id, ...data };
  },

  async delete(id) {
    await db.query("DELETE FROM business WHERE business_id = ?", [id]);
  },

  async updateLinks(id, { website, links, link_facebook, link_tiktok }) {
    await db.query(
      `UPDATE business SET website = ?, links = ?, link_facebook = ?, link_tiktok = ? WHERE business_id = ?`,
      [website, links, link_facebook, link_tiktok, id]
    );
  },
  async updateLocation(id, { location }) {
    await db.query(
      `UPDATE business SET location = ? WHERE business_id = ?`,
      [location, id]
    );
  },
  async updateLogo(id, { logo_url }) {
    await db.query(
      `UPDATE business SET logo_url = ? WHERE business_id = ?`,
      [logo_url, id]
    );
  }
  
  
  
};
