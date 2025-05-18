
const mysql = require('mysql2/promise'); 

var dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({ 
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT || 3306,
  connectTimeout: 10000,
  ssl: false,
  connectTimeout: 10000,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
setInterval(async () => {
  try {
    await pool.query('SELECT 1');
    console.log('Ping a la base de datos exitoso (keep-alive).');
  } catch (err) {
    console.error('Error en keep-alive ping:', err);
  }
}, 5 * 60 * 1000);


module.exports = pool;
