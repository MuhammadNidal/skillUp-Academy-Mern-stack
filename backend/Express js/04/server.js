const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection (Compass)
mongoose
  .connect("mongodb://127.0.0.1:27017/studentdb")
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log(err));

// Routes
app.use("/users", userRoutes);

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
