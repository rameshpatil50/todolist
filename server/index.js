// get the client
const mysql = require('mysql2');
const express = require('express');
const app = express();

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'todo'
  });

  connection.connect((err) => {
      if(err){
          console.log(err)
          process.exit();
      } else {
          console.log("Database Connected")
      }
  });

app.get('/get_todo', (request, response) => {

    const query = "SELECT * FROM list";
connection.query(query, (error,result) => {
    if(error){
        console.log(error);
    } else {
        response.send(result);
    }
})
})



app.listen(5000, () => {console.log('app is running on port 500')})