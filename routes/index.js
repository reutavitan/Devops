var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
	return res.render('index.ejs');
});

router.post('/', function(req, res, next) {
	console.log(req.body);
	var personInfo = req.body;

	if (!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf || !personInfo.exam1 || !personInfo.exam2 || !personInfo.exam3) {
		res.send();
	} else {
		if (personInfo.password == personInfo.passwordConf) {
			if (personInfo.exam1 <= 100 && personInfo.exam1 >= 0) {
				if (personInfo.exam2 <= 100 && personInfo.exam2 >= 0) {
					if (personInfo.exam3 <= 100 && personInfo.exam3 >= 0) {
						User.findOne({ email: personInfo.email }, function(err, data) {
							if (!data) {
								var c;
								User.findOne({}, function(err, data) {
									if (data) {
										console.log("if");
										c = data.unique_id + 1;
									} else {
										c = 1;
									}

									var newPerson = new User({
										unique_id: c,
										email: personInfo.email,
										username: personInfo.username,
										exam1: personInfo.exam1,
										exam2: personInfo.exam2,
										exam3: personInfo.exam3,
										password: personInfo.password,
										passwordConf: personInfo.passwordConf
									});

									newPerson.save(function(err, Person) {
										if (err)
											console.log(err);
										else
											console.log('Success');
									});
								}).sort({ _id: -1 }).limit(1);

								res.send({ "Success": "You are registered. You can login now." });
							} else {
								res.send({ "Success": "Email is already used." });
							}
						});
					} else {
						res.send({ "Success": "exam3 not valid" });
					}
				} else {
					res.send({ "Success": "exam2 not valid" });
				}
			} else {
				res.send({ "Success": "exam1 not valid" });
			}
		} else {
			res.send({ "Success": "password is not matched" });
		}
	}
});

router.get('/login', function (req, res, next) {
	return res.render('login.ejs');
});

router.post('/login', function (req, res, next) {
	User.findOne({ email: req.body.email }, function(err, data) {
		if (data) {
			if (data.password == req.body.password) {
				req.session.userId = data.unique_id;
				res.send({ "Success": "Success!" });
			} else {
				res.send({ "Success": "Wrong password!" });
			}
		} else {
			res.send({ "Success": "This Email is not registered!" });
		}
	});
});

router.get('/profile', function (req, res, next) {
	console.log("profile");
	User.findOne({ unique_id: req.session.userId }, function(err, data) {
		console.log("data");
		console.log(data);
		if (!data) {
			res.redirect('/');
		} else {
			return res.render('data.ejs', { "name": data.username, "email": data.email, "exam1": data.exam1, "exam2": data.exam2, "exam3": data.exam3 });
		}
	});
});

router.get('/logout', function (req, res, next) {
	console.log("logout");
	if (req.session) {
		// delete session object
		req.session.destroy(function (err) {
			if (err) {
				return next(err);
			} else {
				return res.redirect('/');
			}
		});
	}
});

module.exports = router;
