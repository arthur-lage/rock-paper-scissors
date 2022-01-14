const playerScoreRef = document.querySelector("#score-player");
const cpuScoreRef = document.querySelector("#score-cpu");
const gameStatusRef = document.querySelector("#game-status");
const playerChoiceRef = document.querySelector("#choice-player");
const cpuChoiceRef = document.querySelector("#choice-cpu");

const game = {
  playerScore: 0,
  cpuScore: 0,
  init() {
    this.playerScore = 0;
    this.cpuScore = 0;
    playerScoreRef.innerHTML = game.playerScore;
    cpuScoreRef.innerHTML = game.cpuScore;
  },
  addScore(to) {
    if (to == "player") {
      this.playerScore++;
      playerScoreRef.innerHTML = game.playerScore;
    } else {
      this.cpuScore++;
      cpuScoreRef.innerHTML = game.cpuScore;
    }
  },
  capitalizeName(name) {
    return name == "player"
      ? name.charAt(0).toUpperCase() + name.slice(1)
      : name.toUpperCase();
  },
  victory(winner) {
    this.addScore(winner);

    const winnerName = this.capitalizeName(winner);

    gameStatusRef.innerHTML = winnerName + " won the round";
  },
  tie() {
    playerChoiceRef.classList.remove("won");
    cpuChoiceRef.classList.remove("won");
    gameStatusRef.innerHTML = "Tie";
  },
  play(choice) {
    const options = ["rock", "paper", "scissors"];

    const cpuChoice = options[Math.floor(Math.random() * 3)];

    playerChoiceRef.innerHTML =
      this.capitalizeName("player") + " chose " + choice;
    cpuChoiceRef.innerHTML = this.capitalizeName("cpu") + " chose " + cpuChoice;

    switch (choice) {
      case "rock":
        if (cpuChoice == "rock") return this.tie();
        if (cpuChoice == "scissors") {
          this.victory("player");
          playerChoiceRef.classList.remove("won");
          cpuChoiceRef.classList.remove("won");
          playerChoiceRef.classList.add("won");
        }
        if (cpuChoice == "paper") {
          this.victory("cpu");
          playerChoiceRef.classList.remove("won");
          cpuChoiceRef.classList.remove("won");
          cpuChoiceRef.classList.add("won");
        }
        break;
      case "paper":
        if (cpuChoice == "paper") return this.tie();
        if (cpuChoice == "rock") {
          this.victory("player");
          playerChoiceRef.classList.remove("won");
          cpuChoiceRef.classList.remove("won");
          playerChoiceRef.classList.add("won");
        }
        if (cpuChoice == "scissors") {
          this.victory("cpu");
          playerChoiceRef.classList.remove("won");
          cpuChoiceRef.classList.remove("won");
          cpuChoiceRef.classList.add("won");
        }
        break;
      case "scissors":
        if (cpuChoice == "scissors") return this.tie();
        if (cpuChoice == "paper") {
          this.victory("player");
          playerChoiceRef.classList.remove("won");
          cpuChoiceRef.classList.remove("won");
          playerChoiceRef.classList.add("won");
        }
        if (cpuChoice == "rock") {
          this.victory("cpu");
          playerChoiceRef.classList.remove("won");
          cpuChoiceRef.classList.remove("won");
          cpuChoiceRef.classList.add("won");
        }
        break;
    }
  },
};

game.init();
