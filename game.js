let you = 0;
let computer = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#result-msg");

const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");

const getComputer = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame = () => {
    msg.innerText = "Game was a draw. Play again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
    if (userWin) {
        you++;                              // ✅ correct variable
        userScore.innerText = you;          // ✅ correct element

        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    } else {
        computer++;                         // ✅ correct variable
        computerScore.innerText = computer; // ✅ correct element

        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("User choice =", userChoice);

    const computerChoice = getComputer();
    console.log("Computer choice =", computerChoice);

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            userWin = computerChoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked:", userChoice);
        playGame(userChoice);
    });
});
