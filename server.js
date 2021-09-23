// const env = require("dotenv").config();
const express = require("express");
const rowdy = require("rowdy-logger");
const methodOverride = require("method-override");
const myController = require("./controller/myController.js");
const db = require("./models/index.js");

const app = express();
const PORT = 4000;
const rowdyResults = rowdy.begin(app);


app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
// app.use(express.static("public"));
app.use("/final", myController);

app.get("/", (req, res) => {
    res.render("home.ejs");
})




app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
    rowdyResults.print()
});

