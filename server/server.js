require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const app = express();

// Setting up some middleware
app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  console.log("yeah our middleware");
  next();
});

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

// Create a Restaurant

app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);
});

// Update a Restaurant

app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.send("updated restaurant");
});

//Delete a Restaurant

app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "success",
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
