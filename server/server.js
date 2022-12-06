const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5001;

const guessHistory = [];

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here



app.post('/guesses', function(req, res){
  console.log('app.post TEST:', req.body);
  guessHistory.push(req.body);
  res.sendStatus(201);



app.get("/guesses", function (req,res){
  console.log ("request for /guesses made", req.body);
  res.send(guessHistory);
})

function compareIt(array){
  if (rando>array.allie){
    array.result = `Allie: ${array.allie} guess too low`
  }
}
// This is where we left off
// Plan is to repeat comparison logic for each guess
let rando;
function randomNumber(min, max){
  rando = Math.floor(Math.random() * (1 + max - min) + min);
}

randomNumber(1, 4);
console.log('RANDO:', rando);


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
