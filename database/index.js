const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost/express_blog';

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = () => mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = db;
