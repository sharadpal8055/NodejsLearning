const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res) => {
  console.log("user route hit", req.url, req.method);

  res.sendFile(
    path.join(rootDir, 'views', 'user.html')
  );
});

module.exports = router;
