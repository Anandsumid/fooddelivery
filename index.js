require("dotenv").config()
const dotenv = require("dotenv").config();
const express = require("express");
const apiRoutes = require("./routes/api");
const connection = require("./database");
const adminRoutes = require('./routes/admin')
const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.static("static"));
app.use("/api", apiRoutes);
app.use("/admin", adminRoutes)
app.all("*", (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
