const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongodb_revision', {useNewUrlParser: true},

    (err) => {
        if(!err){
            console.log('Connection successfully estlablished...');
        }
        else{
            console.log('Failed to estlablished the connection...');
        }
    }

);

module.exports = mongoose;