// routes/routes.routes.js
const express = require("express");
const router = express.Router();
const fs = require('fs');

//Schemas 
const user_schema = require("../models/user");


//Mongodb test route
router.route('/users/').get((req, res, next) => {
    user_schema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                data
            })
        }
    })
})

module.exports = router;