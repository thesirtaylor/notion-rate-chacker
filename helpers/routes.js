"use strict";
let rate = require("../controller/exchange-rate");
var express = require("express"),
  router = express.Router();

module.exports = function (app) {
  router.get("/", (req, res) => {
    res.send(
      "Hey, check out current exchange rate in multiple currencies.\nTry something like this to use the endpoint `https://notion-backend.herokuapp.com/api/rates?base=CZK&ampcurrency=EUR,GBP,USD` "
    );
  });
  router.get("/api/rates", rate.rate);
  app.use(router);
};
