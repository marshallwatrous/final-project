const express = require("express");
const db = require("..models/index.js");
const router = express.Router();

router.get("/", (req, res) => {

    db.Entry.find({ user: req.session.currentUser._id }, (err, allEntries) => {
        if(err) return console.log(err);

        res.render("list.ejs", { allEntries: allEntries })
    })
})


router.get("/add", (req, res) => {

    res.render("add.ejs")
})

router.get("/:entryId", (req, res) => {

    db.Entry.findById(req.params.entryId, (err, foundEntry) => {
        if(err) return console.log(err);

        res.render("post.ejs", { oneEntry: foundEntry })
    })
})

