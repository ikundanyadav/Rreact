const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const apiRoutes = require('./router/api-routes'); 

app.use(bodyParser.urlencoded({
    extended:true
}));
mongoose.connect('mongodb://localhost:27017/mer-api', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
if(db) {
    //console.log(db.collection.explain());
    console.log('Db is connected!');
}
else console.log('connection failed');
const port = process.env.PORT||8080;
app.use('/',apiRoutes);
app.listen(port,()=>console.log(`App is listening on port number :`+port));