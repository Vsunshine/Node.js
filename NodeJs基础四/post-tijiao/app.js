let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.listen(3000);

app.set('views', './views');
app.set('view engine', 'xtpl');
app.use(bodyParser.urlencoded(false))
app.use(express.static('./public'));
~
app.get('/', (req, res) => {

    // 请求头
    // console.log(req.headers);
    // 在express中直接使用 req.query
    // 来获得地址参数
    // console.log(req.url);
    console.log(req.query);
    res.render('test', {});
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('lll');
})