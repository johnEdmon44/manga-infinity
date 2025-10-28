const { addBookmark, getBookmarksByUser, removeBookmark } = require("./bookmarkQueries");

// Add a bookmark
async function addBookmarkPost(req, res) {
  try {
    if (!req.user) return res.status(401).json({ message: "Not authenticated" });

    const { mangaId, mangaTitle, coverImage } = req.body;
    if (!mangaId || !mangaTitle) {
      return res.status(400).json({ message: "Manga ID and title are required" });
    }

    await addBookmark(req.user.id, mangaId, mangaTitle, coverImage);
    res.status(201).json({ message: "Bookmark added successfully" });
  } catch (error) {
    console.error("Add bookmark error:", error);
    res.status(500).json({ message: "Failed to add bookmark" });
  }
}

// Get all bookmarks for the logged-in user
async function getUserBookmarks(req, res) {
  try {
    if (!req.user) return res.status(401).json({ message: "Not authenticated" });

    const bookmarks = await getBookmarksByUser(req.user.id);
    res.status(200).json({ bookmarks });
  } catch (error) {
    console.error("Get bookmarks error:", error);
    res.status(500).json({ message: "Failed to fetch bookmarks" });
  }
}

// Remove a bookmark
async function removeBookmarkPost(req, res) {
  try {
    if (!req.user) return res.status(401).json({ message: "Not authenticated" });

    const { mangaId } = req.body;
    if (!mangaId) return res.status(400).json({ message: "Manga ID is required" });

    await removeBookmark(req.user.id, mangaId);
    res.status(200).json({ message: "Bookmark removed successfully" });
  } catch (error) {
    console.error("Remove bookmark error:", error);
    res.status(500).json({ message: "Failed to remove bookmark" });
  }
}

module.exports = {
  addBookmarkPost,
  getUserBookmarks,
  removeBookmarkPost,
};
