const express = require("express");
const router = express.Router();
const auth =require('./auth')
const leave=require('./leave')


//localhost:4000/api/v1/auth
router.use('/auth', auth )
router.use('/leave',  leave)

module.exports = router;
