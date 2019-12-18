/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

game.createPhrases('dit is een test', 'nog een test', 'de laatste test');

const logPhrase = (phrase) => console.log(`Phrase - phrase: ${phrase}`);

logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
