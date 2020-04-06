import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.all("/", (req, res) => {
  console.log(req.body);
  res.send("goodbye.");
});

app.listen(6040);
