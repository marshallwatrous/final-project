const express = require("express");
const db = require("../models/index.js");
const router = express.Router();

router.get("/", (req, res) => {

    db.Entry.find({ user: req.session.currentUser._id }, (err, allEntries) => {
        if (err) return console.log(err);

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

router.post("/", (req, res) => {
    
    console.log(req.session);

    console.log("req.body ==>", req.body);

    req.body.user = req.session.currentUser._id;

    db.Entry.create(req.body, (err, createdEntry) => {
        if (err) return console.log(err);

        console.log(createdEntry);

        res.redirect("/list")
    });
})

router.delete("/:entryId", (req, res) => {
    
    db.Entry.findByIdAndDelete(req.params.entryId, (err) => {
        if (err) return console.log(err);

        res.redirect("/list");
    })
})

router.get("/:entryId/edit", (req, res) => {

    db.Entry.findById(req.params.entryId, (err, foundEntry) => {
        if (err) return console.log(err);

        res.render("edit.ejs", { oneEntry: foundEntry });
    })
});

router.put("/:entryId", (req, res) => {
    console.log(req.body);

    console.log(req.body);

    db.Entry.findByIdAndUpdate(req.params.entryId, req.body, (err, updatedEntry) => {
        if (err) return console.log(err);

        res.redirect(`/list/${req.params.entryId}`)
    })
})

module.exports = router;