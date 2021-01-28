"use strict";

let dotenv = require("dotenv");
dotenv.config();
let express = require("express"),
  app = express(),
  configure = require("./helpers/configure");

function logtime() {
  const date = new Date();
  const conDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} [${date.getHours()}:${date.getMinutes()}]`;
  return conDate;
}
//------------------------------------------------------------------SET APP MIDDLEWARE PARAMETER-----------------------------------------------//
//------------------------------------------------------------------                            -----------------------------------------------//
app.set("view", __dirname + "/view"); //google how to set view path
app.set("port", process.env.PORT || 1010); //google how to set dynamic port
app = configure(app);
