const express = require("express");
const db = require("..models/index.js");
const router = express.Router();

router.get("/", (req, res) => {

    db.Post.find({ user: req.session.currentUser._id }, (err, allPosts) => {
        if(err) return console.log(err);
    })
})