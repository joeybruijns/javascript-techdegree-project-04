/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
    }

    /**
     * Resets the game when you click the 'Start Game' button:
     */
    resetGame() {
        // Remove all list items
        const list = document.querySelector('#phrase ul');
        const listItems = document.querySelectorAll('#phrase ul > li');
        for (let i = 0; i < listItems.length; i += 1) {
            list.removeChild(list.lastElementChild);
        }

        // Enable and update all keys to use the 'key' class again
        const letters = document.querySelectorAll('.keyrow > button');
        for (let i = 0; i < letters.length; i += 1) {
            letters[i].className = 'key';
            letters[i].disabled = false;
        }

        // Reset all the heart images for the player's lives
        const hearts = document.querySelectorAll('.tries img');
        for (let i = 0; i < hearts.length; i += 1) {
            let checkSrc = hearts[i].getAttribute('src');
            if (checkSrc === 'images/lostHeart.png') {
                hearts[i].setAttribute('src', 'images/liveHeart.png');
            }
        }
        this.missed = 0;
    }

    /**
     * Starts the game by hiding the overlay and adding a random phrase to the display
     */
    startGame() {
        this.resetGame();

        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Receives phrases for use in the game, and pushes them to the phrases array
     * */
    createPhrases(...phrase) {
        this.phrases.push(...phrase);
    };

    /**
     * Gets a random phrase from the phrases array
     * @returns {Phrase} - A random phrase from the phrases array
     */
    getRandomPhrase() {
        const randomNumber = Math.floor((Math.random() * this.phrases.length));
        return new Phrase(this.phrases[randomNumber]);
    }

    /**
     * Disables the clicked button and checks if the letter is in the phrase
     * or not. Displays the letter or removes a life accordingly.
     * @param {Object} button - The clicked button with a letter
     */
    handleInteraction(button) {
        button.disabled = true;

        if (!this.activePhrase.checkLetter(button.textContent)) {
            button.classList.replace('key', 'wrong');
            this.removeLife();
        } else {
            button.classList.replace('key', 'chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            this.checkForWin();
        }
    }

    /**
     * Removes a heart from the player's lives and increases the missed variable,
     * if the player loses all 5 hearts they lose the game
     */
    removeLife() {
        const allHearts = document.querySelectorAll('.tries');
        allHearts[this.missed].firstElementChild.setAttribute('src', 'images/lostHeart.png');

        this.missed += 1;

        if (this.missed === 5) {
            this.gameOver(false);
        }
    }

    /**
     * Checks if any of the letters (li) have the class hide, to determine if
     * the player has won the game
     * @returns {boolean} - True if none of the letters are hidden, false otherwise
     */
    checkForWin() {
        const hiding = document.getElementsByClassName('hide');
        if (hiding.length === 0) {
            this.gameOver(true);
        }
        return false;
    }

    /**
     * Enables the overlay with either a win or lose message for the player,
     * and the Start Game button to restart the game
     * @param {boolean} result - Boolean value, true if the player has won, false if they have lost
     */
    gameOver(result) {
        const overlay = document.getElementById('overlay');
        const overlayMessage = document.querySelector('#overlay h1');
        overlay.style.display = 'block';

        if (result) {
            overlay.setAttribute('class', 'win');
            overlayMessage.textContent = 'Yeah, you win!!!';
        } else {
            overlay.setAttribute('class', 'lose');
            overlayMessage.textContent = 'Better luck next time...';
        }
    }
}