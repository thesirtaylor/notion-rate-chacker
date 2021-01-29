"use strict";
let rate = require("../controller/exchange-rate");
var express = require("express"),
  router = express.Router();

module.exports = function (app) {
  router.get("/", (req, res) => {
    res.send(`
    Hey, check out current exchange rate in multiple currencies
    `);
  });
  router.get("/api/rates", rate.rate);
  app.use(router);
};
