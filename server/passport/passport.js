const TwitterStrategy = require("passport-twitter").Strategy;

const User = require('../models/User-model.js');
const auth = require('../auth/auth.js');


module.exports = function(passport) {
	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user){
			done(err, user);
		});
	});

	passport.use(new TwitterStrategy({
		consumerKey: auth.twitterAuth.consumerKey,
		consumerSecret: auth.twitterAuth.consumerSecret,
		callbackURL: auth.twitterAuth.callbackURL
	}, function(token, tokenSecret, profile, done){
		process.nextTick(function(){
			User.findOne({ 'twitter.id': profile.id }, function(err, user){
				if(err)
					done(err);
				if(user)
					done(null, user);
				else {
					var newUser = new User();
					
					newUser.twitter.id = profile.id;
					newUser.twitter.token = token;
					newUser.twitter.displayName = profile.username;
					newUser.twitter.username = profile.username;

					newUser.save(function(err) {
						if(err)
							throw err;
						done(null, newUser);
					});
				}
			});
		});
	}));
};