require("dotenv").config();
const express = require("express");
const rowdy = require("rowdy-logger");
const methodOverride = require("method-override");

const app = express();
const PORT  4000;
const rowdyResults = rowdy.begin(app);
const myController = require("./controller/myController");