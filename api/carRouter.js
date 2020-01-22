const express = require("express");

const router = express.Router();

const db = require("../data/carsDbConfig.js");

router.get("/", (req, res) => {
  db("cars")
    .select()
    .then(result => {
      res.status(500).json(result);
    })
    .catch(err => {
      res.status(500).json({ error: "Something broke." });
    });
});

router.post("/", validateEntry, (req, res) => {
  db("cars")
    .insert(req.body)
    .then(result => {
      res.status(500).json(result);
    })
    .catch(err => {
      res.status(500).json({ error: "Something broke." });
    });
});

function validateEntry(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ error: "No data received from client post." });
  } else if (!req.body.VIN || !req.body.model || !req.body.mileage) {
    res
      .status(400)
      .json({ error: "One or more required fields not received." });
  } else next();
}

module.exports = router;
