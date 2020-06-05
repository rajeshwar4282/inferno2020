const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static('frontend'))
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/register', (req, res) => res.send('register'))
app.get('/login', (req, res) => res.send('login'))
app.get('/home',function(req,res) {
    res.sendFile(__dirname+'/frontend/index.html');
  });
  var student = {"name" : "Being Zero",
               "college" : "VNRVJIET",
               "regno": "112323232"}
app.get('/data',function(req,res){
    res.json(student);
 });
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
