const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../app/models/config');

router.get('/', (req, res, next) => {
    return res.render('index');
});

router.post('/register_users', (req,res, next) => {

	// send the post request to back end
	request.post({

		// backend url
		url: config.apiUrl + '/users',

		// make the old req.body the new one
		form: req.body
	}).pipe(res)
})

module.exports = router;
