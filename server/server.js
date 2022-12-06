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

app.get("/guesses", function (req,res){
  console.log ("request for /guesses made", req.body);
  res.send(guessHistory);
})

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
