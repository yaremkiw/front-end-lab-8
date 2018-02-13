var Play = true;
var State = "new";
var Prize = 0;
var maxNum = 5;
var maxPrize = 10;

while (Play == true) {
    switch (State) {
        case "new":
            confirm("Do you want to play a game?") ? Play = true : Play = false;
            break;
        case "again":
            confirm("Do you want to try again ?") ? Play = true : Play = false;
            break;
        case "continue":
            break;
    }

    var prizeOnAttempt;
    var prize = 0;
    var attempts = 3;
    var numToGuess = Math.floor(Math.random() * Math.floor(maxNum + 1));

    if (Play == false && State == "new") {
        console.log("You did not become a millionaire");
    } else if (Play == true) {
        for (; attempts != 0; attempts--) {
            switch (attempts) {
                case 3:
                    prizeOnAttempt = maxPrize;
                    break;
                case 2:
                    prizeOnAttempt = Math.floor(maxPrize / 2);
                    break;
                case 1:
                    prizeOnAttempt = Math.floor(prizeOnAttempt / 2);
                    break;
            }

            var userGuess = prompt(`Enter a number from 0 to ${maxNum}\nAttempts left: ${attempts}\nTotal prize: ${Prize}$\nPossible prize on current attempt: ${prizeOnAttempt}$`);

            if (userGuess && !/\s/g.test(userGuess)) {
                if (userGuess == numToGuess) {
                    prize += prizeOnAttempt;
                    Prize += prize;
                    if (confirm("Do you want to continue a game?")) {
                        maxGuessNum *= 2;
                        maxPrize *= 3;
                        State = "continue;";
                        break;
                    } else {
                        console.log(`Thank you for a game. Your prize is: ${Prize}$`);
                        Prize = 0;
                        maxPrize = 10;
                        maxNum = 5;
                        State = "again";
                        break;
                    }
                }
            }
        }
    }
    if (attempts == 0) {
        Prize = 0;
        maxPrize = 10;
        maxNum = 5;
        State = "again";
        console.log("Thank you for a game. Your prize is: 0$");
    }
}