const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
passport.use(
    new GoogleStrategy(
       {
            clientID:"971802146220-0eau2a8depr0nlat9h20n4dgumkqkr0r.apps.googleusercontent.com",
            clientSecret:"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",
            callbackURL: "/auth/google/callback",
            scope: ["profile","email"],
            response_type: "application/json"
       },
       function(accessToken, refreshToken,profile,callback){
            callback(null,profile);
       } 
    )
);

passport.serializeUser((user,done) => {
    done(null,user);
});

passport.deserializeUser((user,done) => {
    done(null,user);
});