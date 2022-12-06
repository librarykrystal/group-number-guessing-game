$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  $('#submit').on('click', submitIt);
$('#restart').on('click', restartIt);
}

let guesses;

function submitIt(){
  guesses = {
    Allie: $('#guessAllie').val(),
    David: $('#guessDavid').val(),
    Krystal: $('#guessKrystal').val(),
  }
  postGuesses();
}

function postGuesses(){
  console.log('f postGuesses TEST');
  $.ajax({
    method: 'POST',
    url: '/guesses',
    data: guesses,
  }).then(function(response){
    console.log('response from server', response)
    getResult();
  }).catch(function(error){
    alert(error.responseText);
  })
}

function getResult(){
  console.log('f getResults TEST');
  $.ajax({
    method: 'GET',
    url: '/guesses',
  }).then(function(response){
    console.log('Response from server', response);
    appendToDom(response);
  })
}

function appendToDom(array) {
  console.log('f appendToDom TEST');
  // $("#most-recent").empty();
  
  $("#most-recent").append(guesses);

  $("#history").empty();
  for (let object of array) {
    $("#history").append(`
    <li>${object.Allie} ${object.David} ${object.Krystal}</li>
    `);
  }
}

function restartIt(){
  
}


