const express = require("express");
const User = require("../models/User");
const router = express.Router();

/*
  ------------------------------
  POST API (Add New User)
  ------------------------------
*/
router.post("/add", async (req, res) => {
  try {
    const { name, age, city } = req.body;

    // Validate required fields
    if (!name || !age || !city) {
      return res
        .status(400)
        .json({ error: "Name, age, and city are required" });
    }

    const user = new User({
      name,
      age: parseInt(age),
      city,
    });

    await user.save();

    res.json({ message: "User Added Successfully", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
  ------------------------------
  GET API (Pagination + Filtering)
  ------------------------------
  Examples:
  /users?page=1&limit=5
  /users?city=Lahore
  /users?age=20&page=2&limit=3
*/
router.get("/", async (req, res) => {
  try {
    let { page = 1, limit = 5, age, city } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    let filter = {};

    // Filtering Logic
    if (age) {
      filter.age = parseInt(age);
    }
    if (city) {
      filter.city = { $regex: new RegExp(city, "i") }; // Case-insensitive search
    }

    // Count total documents after applying filter
    const total = await User.countDocuments(filter);

    // Pagination Logic
    const users = await User.find(filter)
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      users,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
