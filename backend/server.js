import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

let app = express();

app.get("/", (req, res) => {
  res.send("srever isready");
});

app.listen(5000, () => {
  connectDB();
  console.log("site loaded as http://localhost:5000 on port: 5000");
});
