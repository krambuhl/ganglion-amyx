module.exports = function (req, res) {
  return passport.authenticate('twitter');
};