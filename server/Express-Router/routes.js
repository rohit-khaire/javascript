const express = require('express');
const router = express.Router();

// Define user-related routes
router.get('/login',(req,res)=>{
    res.send("From routes.js and it's /login");
});

router.get('/profile',(req,res)=>{
    res.send("From routes.js and it's /profile");
});

module.exports = router;