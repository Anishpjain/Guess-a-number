var randomNumber= Math.floor(Math.random() * 20) + 1;
var guesses = document.querySelector('.guesses');
var LastResult = document.querySelector('.lastresult');
var LoworHigh = document.querySelector('.loworHigh');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount= 1;
var resetButton;



function checkGuess(){
    var userGuess=Number(guessField.value);
    if(guessCount === 1){
        guesses.textContent='Previous Guesses:';

    }

 guesses.textContent += userGuess +' ';
 if(userGuess ===randomNumber) {
    LastResult.textContent='Congratulations! You got it right!';
    LastResult.style.backgroundColor='green';
    LoworHigh.textContent='';
    setGameOver()
 } else if(guessCount === 5){
    LastResult.textContent ='!!!Game Over!!!';
    LoworHigh.textContent='';
    setGameOver()
 } else {   
    LastResult.textContent= 'Wrong!';
    
  if(userGuess < randomNumber){
    LoworHigh.textContent='Last guess  was too low!';
 } else if(userGuess > randomNumber){
    LoworHigh.textContent='Last guess was too high!';
 }
   LastResult.style.backgroundColor='red';
   
 }

 guessCount ++;
 guessField.value='';
 
 
}

guessSubmit.addEventListener('click',checkGuess);

function setGameOver(){
    guessField.disabled =true;
    guessSubmit.disabled=true;
    resetButton= document.createElement('button');
    resetButton.textContent='Play Again!';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click',resetGame);

}

function resetGame() {
    guessCount= 1;

    var resetParas=document.querySelector('.resultParas p');
    for(var i=0;i<resetParas.length;i++){
        resetParas[i].textContent='';   
    }
     
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled=false;
    guessSubmit.disabled=false;
    guessField.value=' ';
    guessField.focus();
    
    randomNumber= Math.floor(Math.random() * 20) + 1;

}
