var express = require('express');
var router = express.Router();

router.delete("/remove",function(req,res){
    var db = req.db;
    var collection = db.get("site");
    collection.remove({"name": "Company Inc"},function(e,docs){
        res.json(docs);
    });
});

module.exports = router;
