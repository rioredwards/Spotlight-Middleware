module.exports = (req, res, next) => {
  req.colors = [];
  next();
};
