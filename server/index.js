const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors);

const db = mysql.createConnection({
  host: "b60ejrwkvhbvbjv7yqmn-mysql.services.clever-cloud.com",
  user: "uzgy4bwrrlixr1jy",
  password: "tM1sCSlXKBUz6LEmbFP8",
  database: "b60ejrwkvhbvbjv7yqmn",
});

app.get("/getPost_its", (req, res) => {
  const sql = "SELECT * FROM post_its";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

app.get("/", (req, res) => {
  return res.json("From backend");
});

app.listen(3306, () => {
  console.log("Listening");
});
