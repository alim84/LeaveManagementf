const express = require("express");
const cors = require("cors");
require("dotenv").config();
const router = require("./router");
const DbConnect = require("./database/database");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
DbConnect();
app.use(cookieParser());
app.use(router);

//localhost:4000
const PORT = process.env.SERVER_PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is running");
});
