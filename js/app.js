/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGameButton = document.getElementById('btn__reset');
//const qwertyButtons = document.getElementsByClassName('keyrow');
const qwertyButtons = document.getElementById('qwerty');
const game = new Game();

//TODO: Add the final phrases to the game
game.createPhrases('dit is een test', 'nog een test', 'de laatste test');

startGameButton.addEventListener('click', function() {
    game.startGame();
});

qwertyButtons.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        game.handleInteraction(event.target);
    }
});
