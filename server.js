require("dotenv").config();
const express = require("express");
const rowdy = require("rowdy-logger");
const methodOverride = require("method-override");

const app = express();
const PORT  4000;
const rowdyResults = rowdy.begin(app);
const myController = require("./controller/myController");
const e = require("express");

app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use("/final-project", myController);

app.get("/", (req, res) => {
    res.render("homepage.ejs");
})

app.listen(process.env.PORT || 4000, () => {
    console.log(`The server is running on port ${PORT}`);
    rowdyResults.print();
})