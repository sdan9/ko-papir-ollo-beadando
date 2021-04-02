let userScore = 0;
let compScore = 0;

var userChoice;
var computerChoice;
var ranNum;
var result;

const computerPick = document.getElementById('compChoice');
const userPick = document.getElementById('userChoice');
const possibleChoices = document.querySelectorAll('.choices');
const displayResult = document.getElementById('result');
const resetBtn = document.getElementById('reset');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', x =>
{
  computerPick.innerHTML = '<img src="assets/rock.png" width = "150px">';
  userPick.innerHTML = '<img src="assets/rock.png" width = "150px">';
  userPick.style.animation = "shakeUser 1.5s ease";
  computerPick.style.animation = "shakeComputer 1.5s ease";
  displayResult.innerHTML = '...';
  
  setTimeout(() => {
    userChoice = x.target.id;
    ranNum = Math.floor(Math.random() * 3) + 1;
    genCompChoice();
    compareChoices();
    computerPick.innerHTML = '<img src="assets/' + computerChoice + '.png" width = "150px">';
    userPick.innerHTML = '<img src="assets/' + userChoice + '.png" width = "150px">';
    displayResult.innerHTML = result;
    userPick.style.animation = "animationend";
    computerPick.style.animation = "animationend";
  }, 1500);
}));

function genCompChoice()
{
  if(ranNum == 1)
  {
    computerChoice = 'rock';
  }
  else if(ranNum == 2)
  {
    computerChoice = 'paper';
  }
  else if(ranNum == 3)
  {
    computerChoice = 'scissors';
  }
}

const updateScore = () => {
  const playerScore = document.querySelector(".user-score p");
  const computerScore = document.querySelector(".computer-score p");
  playerScore.textContent = userScore;
  computerScore.textContent = compScore;
};

function reset(){
  computerChoice = '<img src="assets/rock.png" width="150px" class ="choices" id ="rock">';
  computerPick.innerHTML = computerChoice;
  ranNum = 0;
  userChoice = '<img src="assets/rock.png" width="150px" class ="choices" id ="rock">';
  userPick.innerHTML = userChoice;
  displayResult.innerHTML = 'Válassz az alábbi lehetőségek közül!';
  userScore = 0;
  compScore = 0;
  updateScore();
}

function compareChoices(){
  if(userChoice == computerChoice)
  {
    result = "Döntetlen.";
  }
  else if (userChoice == 'scissors' && computerChoice == 'paper')
  {
    userScore++;
    updateScore();
    result = "Nyertél!";
  }
   else if (userChoice == 'paper' && computerChoice == 'rock')
  {
    userScore++;
    updateScore();
    result = "Nyertél!";
  }
   else if (userChoice == 'rock' && computerChoice == 'scissors')
  {
    userScore++;
    updateScore();
    result = "Nyertél!";
  }
   else if (userChoice == 'rock' && computerChoice == 'paper')
  {
    compScore++;
    updateScore();
    result = "A gép nyert.";
  }
   else if (userChoice == 'paper' && computerChoice == 'scissors')
  {
    compScore++;
    updateScore();
    result = "A gép nyert.";
  }
   else if (userChoice == 'scissors' && computerChoice == 'rock')
  {
    compScore++;
    updateScore();
    result = "A gép nyert.";
  }
}