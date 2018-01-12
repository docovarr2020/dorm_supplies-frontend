const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../app/models/config');

router.get('/', (req, res, next) => {
    return res.render('index');
});

router.get('/items', (req, res, next) => {
	request.get({
		url: config.apiUrl + '/items',
		form: req.body
	}, (err, response, body) => {
		if (err) return next(err)
		if (!body) return next(new Error('Missing Body ' + body))
		return res.render('items', { items: body })
	})
})

router.post('/register', (req,res, next) => {

	// send the post request to back end
	request.post({

		// backend url
		url: config.apiUrl + '/users/student',

		// make the old req.body the new one
		form: req.body
	}).pipe(res)
})

router.post('/login', (req, res, next) => {
  request.post({
    url: config.apiUrl + '/auth/login',
    form: req.body
  }).pipe(res)
})

module.exports = router;
