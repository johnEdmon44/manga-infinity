const pool = require('./db');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bycrypt = require('bcrypt');



passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
      const user = result.rows[0];

      if(!user) return done(null, false, { message: 'User not found' });

      const isMatch = await bycrypt.compare(password, user.password);

      if(!isMatch) return done(null, false, { message: 'Password not match' });

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);


passport.serializeUser((user, done) => {
  done(null, user.id)
});


passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    const user = rows[0];
    if (!user) {
      return done(null, false); 
    }
    done(null, user);
  } catch (error) {
    done(error);
  }
});