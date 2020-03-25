const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.send({babu:'I love you Babu'});
});

const PORT = process.env.PORT || 5000;
console.log(process.env.PORT);
app.listen(PORT);