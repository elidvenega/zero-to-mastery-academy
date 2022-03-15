const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('<h1>HELLOOO</h1>');
    next();
})

app.get('/', (req,res) => {
    res.send("tests")
});

app.listen(3000);