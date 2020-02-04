export function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.turnScore = 0;
}

Player.prototype.rollDice = function() {
  var diceRoll = Math.floor( Math.random() * 6) +1;
  this.turnScore += diceRoll;
}