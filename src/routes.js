const express = require("express")
const { createclicks, getTracks } = require("./controllers")
const router = express.Router()


router.post("/createclick", createclicks )
router.get("/getclicks",  getTracks)









module.exports = router
