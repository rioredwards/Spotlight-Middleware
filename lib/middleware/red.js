module.exports = (req, res, next) => {
  req.colors.push('red');
  next();
};
