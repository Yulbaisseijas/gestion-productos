const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
app.use(cors());
app.options('*', cors());

const api_user = require('./routes/users');
const api_prod = require('./routes/product')


//Starting DB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/API-Products', {
    //Eliminar error deprecated
    useNewUrlParser : true,   
    useUnifiedTopology: true
}).then(db => console.log('Base de datos conectada'))
  .catch(err => console.log(err));

//Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false})) 

//Routes
app.use('/api/users', api_user);
app.use('/api/prod', api_prod);

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});