let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const showUserScore = document.querySelector("#user-score");
const showCompScore = document.querySelector("#comp-score");

const genCompChoice = (compChoice) => {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  return options[random];
};

const draw = () =>{
    console.log("the game is draw");
    msg.innerText = `Game Draw! Play it Again`;
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin , userChoice , compChoice) =>{
    if(userWin){
        console.log("you win");
        userScore++;
        showUserScore.innerText = userScore;
        msg.innerText = `You win!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        showCompScore.innerText = compScore;
        msg.innerText = `You loose !! ${compChoice} beats ${userChoice}`;
        console.log("you loose");
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);

  //Generate computer choice
  const compChoice = genCompChoice();
  console.log("comp choice =", compChoice);
  if(userChoice === compChoice ){
    draw();
  }else{
    let userWin = true;
    if (userChoice === 'rock'){
        userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper"){
        userWin = compChoice === "scissor" ? false : true;
    }else {
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin , userChoice , compChoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);

    // console.log("choice was clicked =", userChoice);
  });
});
