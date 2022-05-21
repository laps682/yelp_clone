require("dotenv").config();
const express = require("express");

const app = express();

//Get all restaurants

app.get("/api/v1/restaurants", (req, res) => {
  res.json({
    status: "success",
    data: {
      restaurant: ["mcdonalds", "wendys"],
    },
  });
});

app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  res.send("hi");
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
