// Take 2, Lets do this

// Once complete create a playGame function
    // add playRound inside of this function
    // call it five times. So that you play five rounds
    let humanScore = 0;
    let computerScore = 0;
    function playGame(){
        

        while( humanScore < 5 && computerScore < 5){
            playRound()
        }

    }
// create var for humanScore and computerScore
    // values = 0


// Write the logic for computer choice
// computer will randomly return "Rock", "Paper" or "scissors"
function getComputerChoice(){

    let mathRandy = Math.random();
    let compChoice = undefined;

    if (mathRandy < 0.33) {
        compChoice = "rock";
    } else if (mathRandy < 0.66) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }

    return compChoice;
}

// write the logic for User Choice
// get user input
 // prompt user.

 function getUserChoice(){
    let userChoice = prompt("rock, paper, scissors? ^_^ =: ").toLowerCase();

    while (userChoice !== "rock"
         && userChoice !== "paper" 
         && userChoice !== "scissors")
        {
            alert("That's not it! Do it properly!")
            userChoice = prompt("rock, paper, scissors? ^_^ =: ").toLowerCase();
        }
    return userChoice;
 }

// write logic to play a single round
    // make humanChoice Case sensitive 
    // console.log a string value that defines who the winner is and why. 
    // increment the humanScore or computerScore based on the round winner

    function playRound(humanChoice, computerChoice){

         humanChoice = getUserChoice();
         computerChoice = getComputerChoice();

         console.log(humanChoice, computerChoice);

         switch(true){
            case (humanChoice == computerChoice):
                alert("draw!")
                break;
            case (humanChoice == "rock" && computerChoice == "paper"):
                computerScore++;
                alert("Oh shucks playa! Ya lost. Paper beats rock" + "score: " + `${humanScore}` + ":" +  
                    `${computerScore}`)
                
            case (humanChoice == "scissors" && computerChoice == "rock"):
                computerScore++;
                alert("well.. that's a fail, you've been smashed. rock pummels scissors. " + "score: "+ `${humanScore}` + ":" +  
                    `${computerScore}`)
                break;
            case (humanChoice == "paper" && computerChoice == "scissors"):
                computerScore++;
                alert("Oof- that stings, you've failed. scissors cuts paper. " + "score: " + `${humanScore}` + ":" +  
                    `${computerScore}`)
                break;
            case (computerChoice == "rock" && humanChoice == "paper"):
                humanScore++;
                alert("Way to go! you've won! the rock has been restrained " + "score: " + `${humanScore}` + ":" +  
                    `${computerScore}`)
                break;
            case (computerChoice == "scissors" && humanChoice == "rock"):
                humanScore++;
                alert("AND THE WINNER IS--- YOU! scissors have been OBLITORATED " + "score: " + `${humanScore}` + ":" +  
                    `${computerScore}`)
                break;
            case (computerChoice == "paper" && humanChoice == "scissors"):
                humanScore++;
                alert("feeling a lil bit stabby eh? You win! scissors cut through paper! " + "score: " + `${humanScore}` + ":" +  
                    `${computerScore}`)
                break;
            default :
            alert("wait... Who brought a gun in here? AHH- ERROR\\404¬\\")
            break;
         }

        console.log(humanScore + ":" + computerScore)
        return playRound
    }

