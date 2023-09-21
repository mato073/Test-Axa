const express = require("express");
const api = require("../api");

module.exports = () => {
  const app = new express.Router();

  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/stocks", function (req, res) {
    const { _limit } = req.query;
    try {
      const data = api();

      if (_limit) {
        res.status(200).json({ stocks: data.stocks.slice(0, _limit) });
      } else {
        res.status(200).json(data);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err });
    }
  });

  return app;
};
