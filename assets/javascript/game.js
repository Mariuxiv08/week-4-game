  $(document).ready(function(){
// setting variables
  let wins =0;
  let losses=0;
  let score = 0;
// creates a random number to set as taget of the game
  function randomNum (min,max){
      return Math.floor(Math.random()*(max - min + 1)+min);

  }

  function start(){
    let guessNum = randomNum(19,120);
    $("#number-to-guess").text(guessNum);
    $("#score").text(score);

  }

  function gemsvalues(){
    gemsArray=[];

    for(let i=0; i<4; i++){
      gemsArray.push(randomNum(1,12));
      $("#crystals").val(gemsArray[i]);
    }
  }

  $("#crystals").on("click", function() {
  


    let crystalValue = ($(this).val());
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    $("#score").text(score);

    if (randomNum === score) {
      $("#result").text(++wins);
    }

    else if (randomNum >= score) {
       $("#result").text(++losses);
    }

  });

  start();

});
