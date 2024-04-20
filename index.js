const express = require('express');
const app = express();
const staff = require('./app/route/staff');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

staff(app);

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});