var mysql = require('mysql');
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
const port = 3000;
const bodyParser = require('body-parser');
const { disconnect } = require('process');
const { doesNotMatch } = require('assert');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
let genotp;
let check = 1;
let prevphone = 0;
let isRegisterd;


// const home = fs.readFileSync('index.html');

console.log(__dirname);
// app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

app.all('/login.html', (req, res, next) => {
  if (req.method === 'POST') {
    check = 0;
    console.log(req.body);
    let phone = req.body.phoneno;
    let option = req.body.option;
    prevphone = phone;
    console.log(`Phone: ${phone} Option: ${option}`);
    let auth;
    con.query(`select 1 from fdata where phoneno = ${phone}`, function (err, result) {
      if (err) throw err;
      console.log(result.length);
      auth = result.length;
      if (auth === 1) {
        res.redirect('index.html')
      } 
      else {
        genotp = Math.floor(Math.random() * 10000 + 10000);
        console.log(genotp);
        res.redirect('otp.html');
      }
    });
  } else {
    res.status(405).send('Method Not Allowed');
  }
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

// MYSQL

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE IF NOT EXISTS mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
  con.query("USE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database selected");
  })
  con.query("CREATE TABLE IF NOT EXISTS fdata (fid INT AUTO_INCREMENT PRIMARY KEY, name CHAR(255) NOT NULL, phoneno CHAR(10) NOT NULL CHECK (phoneno LIKE '__________'))", function (err, result) {
    if (err) throw err;
    console.log("Table created");

  });

});

app.post('/otp.html', (request, res) => {
  let otpa = request.body.otpa;
  let otpb = request.body.otpb;
  let otpc = request.body.otpc;
  let otpd = request.body.otpd;
  let otpe = request.body.otpe;
  res.sendFile(path.join(__dirname, 'public/' + 'otp.html'))
  console.log(`OTP: ${otpa} ${otpb} ${otpc} ${otpd} ${otpe}`);
  let otp = request.body.otpa * 10000 + request.body.otpb * 1000 + request.body.otpc * 100 + request.body.otpd * 10 + request.body.otpe * 1;
  console.log(otp);
  if (genotp == otp) {
    //send response correct otp
    res.send('<h1>you are now registered</h1><a href="index.html">Go to Home</a>');
    console.log(prevphone);
    con.query(`INSERT INTO fdata (phoneno,name) VALUES (${prevphone},'apple')`, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    prevphone = 0;
  }
  else {
    res.send('Wrong OTP');
  }
});







  // con.end(function(err) {
  //   if (err) {
  //     return console.log('error:' + err.message);
  //   }
  //   console.log('Close the database connection.');
  // });