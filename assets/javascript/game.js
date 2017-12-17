  $(document).ready(function(){
// setting variables
  let wins =0;
  let losses=0;
  let score =0;
  //let gemsArray;

  let crystalImages = $('.gems');
  let guessNum;

// creates a random number to set as taget of the game
  function randomNum (min,max){
      return Math.floor(Math.random()*(max - min + 1)+min);

  }

  function start(){
    guessNum = randomNum(19,120);
    $("#number-to-guess").text(guessNum);
    $(".score").text(score);
    $("#wins").text(wins);
    $("#losses").text(losses);
    //just like you initialized the socres and guessnum do the same with wins and losses
  }

  function gemsvalues(){

    for(let i=0; i<crystalImages.length; i++){
      crystalImages[i].value=randomNum(1,12);
    }
  }
gemsvalues();

  function checkResult (){
    if (score === guessNum) {
      let winCounter = wins++;
      $("#wins").text(winCounter);
      alert("winner");
      reset();

    } else if(score > guessNum) {
      let lossesCounter = losses++;
      $("#losses").text(lossesCounter);
      alert("loser");
      reset();
    }
  }


  $(crystalImages).on("click", function(event) {
    
    let gemValue = this.value;
    console.log(gemValue);

    //calulate the score by adding the value assigned to each image to the user score
    score += gemValue;
    console.log(score);
    checkResult();
    $(".score").text(score);

  });
   

  start();

  function reset(){
    score = 0;
    gemsvalues();
    guessNum = randomNum(19,120);
    $("#number-to-guess").text(guessNum);
  }

});
