import { Game } from './../src/pig-dice.js';

describe('Game', () => {

  test('should correctly instantiate a game with no arguments', () => {
    var game = new Game();
    expect(game.players).toEqual([]);
    expect(game.currentId).toEqual(0);
    expect(game.currentPlayer).toEqual(1);
  });
});

describe ('Player', () => {

  test('should correctly make two player objects', () => {
    var player1 = new Player("Michelle");
    var player2 = new Player("Brandan");
    expect(player1.name).toEqual("Michelle");
    expect(player2.name).toEqual("Brandan");
  })
})