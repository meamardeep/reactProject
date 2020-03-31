const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL:'/auth/google/callback',
    proxy: true
},
(accessToken,refreshToken,profile,done)=>{
    User.findOne({googleId:profile.id}).then((existingUser) => {
            if(existingUser){
                // Already a record present
                //console.log('already exists record!');
                done(null, existingUser);
            }else{
                //add new user record
                //new User({ googleId: profile.id }).save();
                //console.log('googleId' + profile.id + 'saved to database');
                new User({ googleId: profile.id })
                    .save()
                    .then(user => done(null, user));
            }
        })
    }
));
    // console.log('accessToken : ', accessToken);
    // console.log('refreshToken: ', refreshToken);
    //console.log('googleId :', profile.id);