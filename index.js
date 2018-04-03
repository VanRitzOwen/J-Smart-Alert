var express = require('express');
const app = express();
var path = require('path');
var swig = require('swig');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var moment = require('moment');
swig.setDefaults({
    cache : false
});
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'assets')));

app.engine('tpl', swig.renderFile);

app.set('view engine', 'tpl');

app.use("/",require('./server/home'));

app.listen(8083);