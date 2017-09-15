var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('landquery', { title: 'Express' });
});
/* GET users listing. */
router.get('/add', function(req, res, next) {
    res.render('landadd', { title: 'Express' });
});

module.exports = router;
