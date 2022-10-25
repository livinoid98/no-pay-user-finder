const express = require("express");
const app = express();
const ejs = require("ejs");
const port = 3000;

const maria = require('./database/connect/maria');
maria.connect();

app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', (req,res) => {
    res.send('server on');
});

app.get('/create', (req,res) => {
    maria.query('select * from cafe24.orderitems limit 800', (err, rows, fields) => {
        if(!err){
            res.render('order.ejs', {'db':rows});
        }else{
            console.log("error message : " + err);
            res.send(err);
        }
    });
});

app.listen(port, (req,res) => {
    console.log(`server start on https://localhost:${port}`);
});