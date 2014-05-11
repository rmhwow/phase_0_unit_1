// I worked [with Allison Reilly and Morgan O"Leary] on this challenge

// Your mission description:
Rock, Paper, Scissors
Ask user to put in rock paper or scissors. Plays against computer. Computer randomizes choice.
Paper > Rock
Rock > Scissors
Scissors > Paper
Rock === Rock
Paper === Paper
Scissors === Scissors

// Pseudocode

1. (ask user) Rock, Paper or Scissors?
2. Computer randomizes choice
    -Math.random
3. If computer math.random is less than .34 === rock
    -if between .34 and .67 == paper
    -else it is scissors
4. compare choices
    - if choice one is equal to choice two its a tie
    -if choice one beats choice two returns choice one won
    -if choice one loses to choice two return choice two won

// Initial Code

var userChoice = prompt("Rock, Paper, or Scissors?");
var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if (computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

var compare = function(choice1, choice2) {
	if (choice1 === choice2) {
		return "Its a tie!";
	} else if (choice1 === "rock") {
		if (choice2 === "paper") {
			return "Paper wins!";
		} else if (choice2 === "scissors") {
			return "Rock wins!";
		}
	} else if (choice1 === "paper") {
		if (choice2 === "rock") {
			return "Paper wins!";
		} else if (choice2 === "scissors") {
			return "Scissors wins!";
		}
	} else if (choice1 === "scissors") {
		if (choice2 === "rock") {
			return "Rock wins!";
		} else if (choice2 === "paper") {
			return "scissors wins!";
		}
	}
};

compare(userChoice, computerChoice);


// Refactored Code
In this code we use a broad If, Else If, Else If statement and inside the statement we break it down into if and else if choices. If we eliminated any of those statements then we would lose the function. We researched forms of this game and it seems ours is the most basic and straightforward approach. 




// Reflection
// We definitely weren't sure about pseudo code and what that all entailed. I think this challenge was good for us because we decided to do something a little complicated and made us think of different ways we could solve a problem.  Originally we were going to use arrays but then decided against that. I think we didn't feel confident in the expectations of this challenge, but we were more comfortable with the code. I think I personally learned a lot of tricks during this challenge and saw that I should try to navigate more. 
// 
// 
// 
// 
// 
// 
// 