/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
    }

    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase;
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
     * */
    createPhrases(...phrase) {
        this.phrases.push(phrase);
    };

    /**
     *
     * @returns {string}
     */
    getRandomPhrase() {
        const randomNumber = Math.floor((Math.random() * this.phrases.length));
        return this.phrases[randomNumber];
    }

    handleInteraction() {

    }

    removeLife() {

    }

    checkForWin() {
        // check all classes from list item if nothing is hidden
        // return either true or false

    }

    gameOver() {
        const overlay = document.getElementById('overlay');
        const overlayMessage = document.querySelector('#overlay h1');
        overlay.style.display = 'block';

        if (this.checkForWin) {
            overlay.setAttribute('class', 'win');
            overlayMessage.textContent = 'Yeah, you win!!!';
        } else {
            overlay.setAttribute('class', 'lose');
            overlayMessage.textContent = 'Better luck next time..';
        }
    }
}