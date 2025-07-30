// Need to create url where after user there can be login or profile
// 1) ----/user/login
// 2) ----/uesr/profile

const express = require('express');
const app = express();

// Mount the router
const routerInstance = require('./routes');

app.use('/user',routerInstance);

app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000");
})