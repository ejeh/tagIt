const
    express = require('express'),
    util = require('util');

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Home");
})

module.exports = router;
