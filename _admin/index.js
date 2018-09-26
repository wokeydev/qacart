var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

var menuRouter = require('./routes/menuRouter');
var bannerRouter = require('./routes/bannerRouter');
var imageRouter = require('./routes/imageRouter');
var contactusRouter = require('./routes/contactusRouter');
var sociallinkRouter = require('./routes/sociallinkRouter');
var samplepageDataRouter = require('./routes/samplepageDataRouter');
var clientRouter = require('./routes/clientRouter');
var experienceRouter = require('./routes/experienceRouter');
var app = express();

const PORT = 4000;

// App configuration
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use('/api/menus', menuRouter);
app.use('/api/banners', bannerRouter);
app.use('/api/images', imageRouter);
app.use('/api/contactus', contactusRouter);
app.use('/api/sociallinks', sociallinkRouter);
app.use('/api/samplepagedata', samplepageDataRouter);
app.use('/api/clients', clientRouter);
app.use('/api/experiences', experienceRouter);


app.listen(PORT, function () {
    console.log(" Admin API is running at PORT: ", PORT);
}); 