const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');


router.post('/createuser', [body('username', 'Name length should be 6 characters').isLength({ min: 6, max: 12 }).isAlphanumeric(),
body('password', 'Please enter strong password, use cimbination of alphabates, special characters and number').isLength({ min: 6 }).isStrongPassword()], async (req, res) => {

    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.send({ errors: result.array() });
    }
    const user = User(req.body)
    await user.save()
    res.json(user)
})



module.exports = router
