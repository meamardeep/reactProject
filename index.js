const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.send({hi:'babu'});
});

const PORT = process.env.PORT || 5000;
console.log(process.env.PORT);
app.listen(PORT);