const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/:id", (req, res) => {
  //console.log(req.query);
  //req.body;
  //req.header
  console.log(req.params);
  res.status(404).send("not found");
});

app.listen(3000);
