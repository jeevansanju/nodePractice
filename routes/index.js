var express = require('express');
var router = express.Router();

router.get("/get",function(req,res){
  var db = req.db;
  var collection = db.get("site");
  collection.find({"name":"Company Inc"},{}/*"name"*/,function (e,docs){
    res.json(docs);
  });
  });


router.post("/insert",function(req,res){
  var db = req.db;
  var collection = db.get("site");
  var obj = { name: "Company Inc", address: "Highway 37" };
  collection.insert(obj,function(e,docs){
    res.json(docs);
  });
});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
