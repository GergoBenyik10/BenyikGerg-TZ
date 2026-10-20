const express = require('express');
const app = express();
const mysql = require('mysql2');

const con = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password:'',
     database:'raktar_db',
     port:3307
});

app.get('/termekek',(req, res) => {
    con.log('SELECT * FROM Termekek');
    if (err) {
        next(err) 
      } else {
        res.send(data)
      }
  })
app.get('/termekek/elerheto', (req, res) => {
    res.json();
    if (err) {
        next(err) 
      } else {
        res.send(data)
      }
  })
app.get('/termekek/kereses/:szoveg', (req, res) => {
    res.send();
    if (err) {
        next(err) 
      } else {
        res.send(data)
      }
  })
app.get('/kategoriak/statisztika', (req, res) => {
    res.json();
    if (err) {
        next(err) 
      } else {
        res.send(data)
      }
  });
  app.get('/termekek/dragak', (req, res) => {
    res.json();
    if (err) {
        next(err) 
      } else {
        res.send(data)
      }
  });

app.listen((3000), () => {
    console.log('Express server listening on port http://localhost:3000/ ')
    
  });