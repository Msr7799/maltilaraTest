const mongoose = require('mongoose');

mongoose.connect('mongodb://yourMongoDBURI')
    .then(() => {
        console.log("Connected to MongoDB Atlas");
    })
    .catch(err => {
        console.error("Connection error", err);
    });
