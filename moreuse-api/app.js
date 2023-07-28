const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

//console.log('env**',process.env.NODE_ENV)
require('dotenv').config({ path: `src/env/.env.${process.env.NODE_ENV}` });
//console.log('jwt', process.env.JWT_SECRET);

const app = express();
const port = process.env.PORT || 3000;



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//connect with database
require ('./src/conn/mongo_conn')

// modules
app.use('/auth', require('./src/modules/users/auth.routes'))
app.use('/clothes', require('./src/modules/clothes/clothes.routes'))

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});


