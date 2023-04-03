const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bilyoner'
});

connection.connect((error) => {
if (error) {
  console.error('Error connecting to MySQL database: ', error);
} else {
  console.log('Connected to MySQL database successfully!');
}
});

const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

const questionRouter = require('./routes/question');
const answersRouter = require('./routes/answers');
const correctAnswersRouter = require('./routes/correct_answers');
const usersRouter = require('./routes/users');

app.use('/questions',questionRouter(connection));
app.use('/answers',answersRouter(connection));
app.use('/correct_answers',correctAnswersRouter(connection));
app.use('/users',usersRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Server listening on port:${port}`);
}); 