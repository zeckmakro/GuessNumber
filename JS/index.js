const form = document.getElementById('form');
 form.addEventListener('submit', handleSubmit);

const statusTitle = document.getElementById('status');
const attempt = document.getElementById('attempt');
const inputValue = document.getElementById('kick');
const result = document.getElementById('result');
const btnRestart = document.getElementById('btnRestart');

const GuessNumber = {

   max: 10,
   attemptsNumber: 0,
   numberDraw: function(){
      return Math.round(Math.random () * this.max);
   },
   showButtonRestart: function(){
      btnRestart.style.display = 'flex';
   },
   clearInput: function(){
      inputValue.value= '';
   },
   updateAttempt: function(attempt, value){
      attempt.innerHTML ='Tentativa: ' + value;
   },
   correctAnswer:function() {
      this.showButtonRestart();
      statusTitle.innerHTML = 'Parabéns você acertou!';
   
      statusTitle.classList.remove('incorrect-answer');
      statusTitle.classList.add('status-correct');
     
      result.classList.remove('result-box-default');
      result.classList.add('result-correct-answer');

      status

      this.clearInput();
     
   },
   incorrectAnswer:function(message){

   statusTitle.innerHTML = message;
   statusTitle.classList.add('incorrect-answer');

   this.clearInput();
   }

};

const numberDraw = Math.round(Math.random()*10);

function handleSubmit(e) {

    e.preventDefault(); /* NAO APAGA O OULTIMO NUMERO DIGITADO E MANTEM NA BOX*/

   const kick = inputValue.value;

   if(!kick){ /* "!" FORMA NEGATIVA ( SE NAO TIVER VALOR OU CAMPO VAZIO) */
    alert(' Digite um valor');
    return;
   }
         GuessNumber.updateAttempt(attempt,++GuessNumber.attemptsNumber);

    if (numberDraw == kick){
      GuessNumber.correctAnswer();
 }
    else if (numberDraw < kick){
      GuessNumber.incorrectAnswer('O numero é menor!');
  
 } 
    else if(numberDraw > kick){

      GuessNumber.incorrectAnswer('O numero é maior!');
     
 }
 
};
function restartGame(){

   document.location.reload(true);
  }




