const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const users = require('./routes/api/UserRoute');

const app = express();

// bodyparser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// connect to mongo
mongoose.connect(db)
    .then(() => console.log(`mongodb connected via: ${db}`))
    .catch((err) => console.log(`error: ${err}`));

// use routes
app.use('/api/items/', items);
app.use('/', users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on ${port}`))