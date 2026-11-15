var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var places = [
    { name: 'Tokyo, Japan', rating: 10 },
    { name: 'Paris, France', rating: 9 },
    { name: 'New York City', rating: 9 },
    { name: 'Seoul, South Korea', rating: 10 },
    { name: 'Virginia Beach', rating: 8 }
  ];

  // Student name
  var myname = "Princess Ellis";

  res.render('index', {
    title: 'Favorite Places',
    places: places,
    myname: myname
  });

});

module.exports = router;