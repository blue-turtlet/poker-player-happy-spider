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
    let additionalScore = ( bettingPosition / totalNumber ) > 0.5 ? 100 : 50;
    const bettingRound = game.bettingRound();
    const multiplicatn = 1;
    if (bettingRound === "flop" || bettingRound === "turn" || bettingRound === "river") {
      score += additionalScore;
      if (bettingRound === 'turn') {
        multiplicatn = 2;
      }
      if (bettingRound === 'river') {
        multiplicatn = 5;
      }
    } else if (score < 9) {
      multiplicatn = 0;
    }
    
    bet(game.toRaiseByBlinds(score)*multiplicatn);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

