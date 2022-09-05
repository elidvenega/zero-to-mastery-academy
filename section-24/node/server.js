const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
 console.log( req.query);
  res.send("getting root");
});

app.listen(3000);
