var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
	res.render('index');
});

/* GET partials */
router.get('/views/:name', function(req, res){
	var name = req.params.name;
	var page = name.toString();
	console.log('Incoming request for the ' + page + ' page.');
	res.render(page);
});

/* catch-all */
router.get('*', function(req, res, next) {
  res.render('home', { title: 'nickyT' });
});



module.exports = router;
