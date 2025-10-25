const pool = require("./db");

async function addBookmark(userId, mangaId, mangaTitle, coverImage) {
  await pool.query(
    `INSERT INTO bookmarks (user_id, manga_id, manga_title, cover_image)
     VALUES ($1, $2, $3, $4)
     ON CONFLICT DO NOTHING`,
    [userId, mangaId, mangaTitle, coverImage]
  );
}

// Get all bookmarks for a user
async function getBookmarksByUser(userId) {
  const { rows } = await pool.query(
    `SELECT id, manga_id, manga_title, cover_image
     FROM bookmarks
     WHERE user_id = $1`,
    [userId]
  );
  return rows;
}


async function removeBookmark(userId, mangaId) {
  await pool.query(
    `DELETE FROM bookmarks
     WHERE user_id = $1 AND manga_id = $2`,
    [userId, mangaId]
  );
}

module.exports = {
  addBookmark,
  getBookmarksByUser,
  removeBookmark,
};
