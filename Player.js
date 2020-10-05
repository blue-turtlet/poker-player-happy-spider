const GameState = require('./src/GameState');

class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    var game = new GameState(gameState);
    const me = game.me();
    let score = 0;
    if (me.hasPocketPair()) {
      score += 10;
    }
    const highestRank = me.highestPocketValue();
    if (highestRank > 10) {
      score += Math.round(highestRank/2);
    }
    bet(score);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

