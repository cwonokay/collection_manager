const express = require("express");
const Hair    = require("../models/hair")
const router  = express.Router();


router.get("/", function(req,res) {
  Hair.find({}).then(function(hairTypes){

    res.render("index", {hairTypes: hairTypes});
  })

});

router.post("/", function(req,res){
  let hair = new Hair({
    name: req.body.name,
    installTime:req.body.installTime,
    cost: req.body.cost,
    source: req.body.source
  });
  hair.styles.push({color: req.body.color, length: req.body.length});
  Hair.create(hair).then(function(Hair){
    res.redirect("/");
  })
  .catch(function(err){

  });
});

router.post("/:hairId/delete", function(req, res) {
  Hair.deleteOne({_id: req.params.hairId}).then(function(hair){
    res.redirect("/");
  })
});

router.get("/:hairId/edit", function(req, res){
  Hair.findOne({_id: req.params.hairId}).then(function(hairTypes){
    res.render("edit", {hairTypes: hairTypes})
  })
});
router.post("/edit", function(req, res){
  Hair.updateOne({
    _id: req.body.button
  },
  {name: req.body.name,
    installTime:req.body.installTime,
    cost: req.body.cost,
    source: req.body.source,
    styles: {color: req.body.color, length: req.body.length}
  },
).then(function(hair){
    res.redirect("/");
  })
});




























module.exports= router;
