const express = require("express");
const router = express.Router();
const api = require('./api')



//localhost:5000
const root_url = process.env.ROOT_URL;
//localhost:5000/api/v1
router.use(root_url, api);

router.use(root_url, (req,res)=>{
    res.status(404).send({msg:"No api found on this route"})
})

module.exports = router;
