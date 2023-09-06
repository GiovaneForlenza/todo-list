const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo_list_postit",
});

app.get("/post_its", (req, res) => {
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

app.listen(8081, () => {
  console.log("Listening");
});
