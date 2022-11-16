const { Router } = require('express');
const blue = require('../middleware/blue.js');
const colors = require('../middleware/colors.js');
const red = require('../middleware/red.js');

// what middleware does this route need to pass?
module.exports = Router().get('/purple', [colors, red, blue], (req, res) => {
  res.json(req.colors);
});
