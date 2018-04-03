var express = require('express'),
    router = express.Router(),
    moment = require('moment');

router.get("/", function (req,res) {
    res.render("index");
});

module.exports = router;