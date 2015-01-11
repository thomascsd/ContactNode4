var path = require('path');
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser')
var methodOverride = require('method-override');
var contact = require('./routes/contact.js');
var config = require('./config.js');
var app = express();

mongoose.connect(config.mongoDBUrl);

app.set('port', process.env.PORT || 3000);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride());

app.get('/', function (req, res) {
    res.send('index.html');
});

app.get('/api/contacts', contact.getContacts);

app.post('/api/contacts', contact.saveContacts);

app.put('/api/contacts/:id', contact.modifyContacts);

app.delete('/api/contacts/:id', contact.deleteContacts);

app.listen(app.get('port'), function () {
    console.log('Server start');
});

