const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const protectView = require("./middlewares/viewAuth");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ✅ API routes
app.use("/api/auth", authRoutes);

// ✅ Pages
app.get("/login", (req, res) => {
  res.render("pages/login");
});

app.get("/register", (req, res) => {
  res.render("pages/register");
});

app.get("/dashboard", protectView, (req, res) => {
  res.send("Welcome Dashboard 🚀");
});

module.exports = app;