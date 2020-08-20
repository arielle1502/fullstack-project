const express = require ('express');
const bodyParser = require ('body-parser');
// cors allows us to make requests from other services since node out of teh box doesnt allow us to do that
const cors = require ('cors');
// morgan logs errors on server adn logs it to a text file
const morgan = require ('morgan');
// sequelize allows us to talk to the database, like mongoose for mogndob excpet this works for sql
const {sequelize} = require('./models');
const config = require('./config/config.js');


const app = express();
app.use(bodyParser.json());
app.use(cors());
// have to pass what type of errors we want to log, combined will log warnigs and errors
app.use(morgan('combined'));

// import routes
require('./routes')(app)

// sync will look at the structure (models) of our tables adn then create them
// we also are making our server start once our tables are set up
sequelize.sync().then(
  ()=>{
    app.listen(process.env.PORT || config.port);
    console.log(`Server started on port ${config.port}`)
  }
)

