const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

router.get('/my-first-route', function (req, res){
    res.render('my_first_route', { 'first_param' : 'my data'});
});

router.get('/my-first-answer', function (req, res){
    res.render('my_first_answer');
});


module.exports = router;
