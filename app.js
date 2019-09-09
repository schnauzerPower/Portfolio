const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send("Fuck you!");
})


app.listen(3000);