const pool = require("./pool");

async function getAllusers() {
  const { rows } = await pool.query("SELECT * FROM users");
  return rows;
}

module.exports = {
  getAllusers
};