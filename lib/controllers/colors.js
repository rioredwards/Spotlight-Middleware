const { Router } = require('express');

// what middleware does this route need to pass?
module.exports = Router().get('/purple', (req, res) => {
  res.json(req.colors);
});
