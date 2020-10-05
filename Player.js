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
    let raise = false;
    if ((bettingPosition === 1 || bettingPosition === 2) && score >=9) {
      raise = true
    }
    const bettingRound = game.bettingRound();
    let multiplicatn = 1;
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
    bet(Math.min(score, game.minimumRaise()));
  }

  static showdown(gameState) {
  }
}

module.exports = Player;