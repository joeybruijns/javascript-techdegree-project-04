/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGameButton = document.getElementById('btn__reset');
const qwertyButtons = document.getElementById('qwerty');
const game = new Game();

game.createPhrases('go and make things',
    'show up everyday', 'have a positive mindset',
    'time for some coffee', 'push and keep pushing');

startGameButton.addEventListener('click', function () {
    game.startGame();
});

qwertyButtons.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        game.handleInteraction(event.target);
    }
});
