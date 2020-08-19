const express = require ('express');
const bodyParser = require ('body-parser');
// cors allows us to make requests from other services since node out of teh box doesnt allow us to do that
const cors = require ('cors');
// morgan logs errors on server adn logs it to a text file
const morgan = require ('morgan');

const app = express();
app.use(bodyParser.json());
app.use(cors());
// have to pass waht type of errors we want to log, combine will log warnigs and errors
app.use(morgan('combine'));

app.get('/status', (req, res) => {
  res.send({message: 'hello world'});
});

app.post('/register', (req, res) => {
  res.send({message: `hello ${req.body.email}`});
});

app.listen(process.env.PORT || 8080);