const express = require("express");
const router = express.Router();

// // Protect all notes routes
// router.use(auth);

// GET /api/weather/:city
router.get("/:city", async (req, res) => {
  try {
    const { city } = req.params;
    const response = await fetch(`https://goweather.xyz/weather/${city}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

module.exports = router;