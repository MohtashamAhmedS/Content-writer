const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));
app.set("view engine", "ejs");

app.use("/", (req, res) => {
  res.render("index");
});

app.listen(7070, () => console.log("Server started listening on port : 7070"));
