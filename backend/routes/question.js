
//http://localhost:3001/questions
const router = require('express').Router();

module.exports = function (connection) {

  router.route('/').get((req, res) => {
    const query = 'SELECT * FROM questions';

    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error fetching data from MySQL database: ', error);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(results);
      }
    });
  });

  router.route('/:id').get((req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      res.status(400).send('Invalid ID');
      return;
    }
      const query = `SELECT * FROM questions WHERE id = ${req.params.id};`;
      connection.query(query, (error, results) => {
        if (error) {
          console.error('Error fetching data from MySQL database: ', error);
          res.status(500).send('Internal Server Error');
        } else {
          res.json(results);
        }
      });
  });

  router.route('/add').post((req, res) => {
    let question = req.body.question;
    let option_1 = req.body.option_1;
    let option_2 = req.body.option_2;
    let option_3 = req.body.option_3;
    let option_4 = req.body.option_4;
    let correct_answer_id = req.body.correct_answer_id;

    let query = '';

    query = 'SELECT * FROM questions';
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error fetching data from MySQL database: ', error); res.status(500).send('Internal Server Error');
      } else {
        let question_id = results.length + 1;
        query = `INSERT INTO questions (question_id, text) VALUES (?,?);`;
        connection.query(query, [question_id, question], (error) => { if (error) { console.error('Error fetching data from MySQL database: ', error); res.status(500).send('Internal Server Error'); } });
        query = 'INSERT INTO answers (question_id, text, option) VALUES (?,?,?)';
        connection.query(query, [question_id, option_1, 1], (error) => { if (error) { console.error('Error fetching data from MySQL database: ', error); res.status(500).send('Internal Server Error'); }});
        connection.query(query, [question_id, option_2, 2], (error) => { if (error) { console.error('Error fetching data from MySQL database: ', error); res.status(500).send('Internal Server Error'); }});
        connection.query(query, [question_id, option_3, 3], (error) => { if (error) { console.error('Error fetching data from MySQL database: ', error); res.status(500).send('Internal Server Error'); }});
        connection.query(query, [question_id, option_4, 4], (error) => { if (error) { console.error('Error fetching data from MySQL database: ', error); res.status(500).send('Internal Server Error'); }});
        query = 'INSERT INTO correct_answers (question_id, correct_answer_id) VALUES (?,?)';
        connection.query(query, [question_id, correct_answer_id], (error) => { if (error) { console.error('Error fetching data from MySQL database: ', error); res.status(500).send('Internal Server Error');}}); 
      }
    });
  });

  router.route('/delete/:question_id').delete((req,res)=>{
     let query = `DELETE FROM questions WHERE question_id = ${req.params.question_id};`;
     connection.query(query, (error) => { if (error) { console.error('Error fetching data from MySQL database: ', error); res.status(500).send('Internal Server Error'); }});
     query = `DELETE FROM answers WHERE question_id = ${req.params.question_id};`;
     connection.query(query, (error) => { if (error) { console.error('Error fetching data from MySQL database: ', error); res.status(500).send('Internal Server Error'); }});
     query = `DELETE FROM correct_answers WHERE question_id = ${req.params.question_id};`;
     connection.query(query, (error) => { if (error) { console.error('Error fetching data from MySQL database: ', error); res.status(500).send('Internal Server Error'); }});
  });


  return router;
}
