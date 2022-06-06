const express = require('express');
const mongoose = require('./config/db')
const Users = require('./models/user_model')
const router = require('./routes/user.route')
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({message : 'Working...'})
})

//app.use('/', router);
app.use('/users', router)
const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log('Server listenong on port: ', port);
})