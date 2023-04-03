
//http://localhost:3001/answers
const router = require('express').Router();

module.exports = function(connection) {

    router.route('/').get((req,res)=>{
        const query = 'SELECT * FROM correct_answers';
      
        connection.query(query, (error, results) => {
          if (error) {
            console.error('Error fetching data from MySQL database: ', error);
            res.status(500).send('Internal Server Error');
          } else {
            res.json(results);
          }
        });
    });

    router.route('/:id').get((req,res)=>{
        const query = `SELECT * FROM answers WHERE id = ${req.params.id};`;

        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error fetching data from MySQL database: ', error);
                res.status(500).send('Internal Server Error');
            } else {
                res.json(results);
            }
            });
    });
    
     return router;
}
