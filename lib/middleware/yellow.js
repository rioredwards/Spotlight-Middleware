module.exports = (req, res, next) => {
  req.colors.push('yellow');
  next();
};
