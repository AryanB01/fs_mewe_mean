var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('chat', { title: 'About Page' });
});
router.get('/chat', function(req, res, next) {
  res.render('chat', { title: 'Chat Page' });
});
module.exports = router;
