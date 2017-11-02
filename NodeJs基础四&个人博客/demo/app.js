let express = require('express');

let app = express();

app.listen(300);

app.set('views', './views');

app.set('view engine', 'xtpl');

let bodyParser = require('./body-parser');
//使用中间件
app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
    res.render('index', {});
})

app.post('/add', (req, res) => {
    console.log(req.body());
    res.send('hhhh');
})