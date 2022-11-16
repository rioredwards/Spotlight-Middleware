module.exports = (req, res, next) => {
  req.colors.push('blue');
  next();
};
