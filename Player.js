const GameState = require('./src/GameState');

class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    var game = new GameState(gameState);
    const me = game.me();
    let score = me.score();
    const bettingPosition = game.bettingPosition();
    const totalNumber = game.playersCount();
    let additionalScore = ( bettingPosition / totalNumber ) > 0.5 ? 10 : 5;
    const bettingRound = game.bettingRound();
    if (bettingRound === "flop" || bettingRound === "turn" || bettingRound === "river") {
      score += additionalScore;
    }
    score = score * 100;
    bet(score);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

