/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
    }

    // ===> PUT ALL VARIABLES IN THE CONSTRUCTOR?????? //

    resetGame() {
        // remove all li items
        

        // update and enable all keys to use key class
        const letters =  document.querySelectorAll('.keyrow > button');
        for (let i = 0; i < letters.length; i += 1) {
            letters[i].className = 'key';
            letters[i].disabled = false;
        }

        // reset all the heart images (and the counter??)
        const hearts = document.querySelectorAll('.tries img');
        for (let i = 0; i < hearts.length; i += 1) {
            let checkSrc = hearts[i].getAttribute('src');
            if (checkSrc === 'images/lostHeart.png') {
                hearts[i].setAttribute('src', 'images/liveHeart.png');
            }
        }
        this.missed = 0;
    }

    startGame() {
        // reset the game when the start button is clicked
        this.resetGame();
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        console.log(this.activePhrase); //DELETE!!
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
     * */
    createPhrases(...phrase) {
        this.phrases.push(...phrase);
    };

    /**
     * Gets a random phrase from the phrases array
     * @returns {Phrase} A random phrase from the phrases array
     */
    getRandomPhrase() {
        const randomNumber = Math.floor((Math.random() * this.phrases.length));
        const selectedPhrase = this.phrases[randomNumber];
        return new Phrase(selectedPhrase);
        //return this.phrases[randomNumber];
    }

    handleInteraction(button) {
        // disable the clicked letter
        button.disabled = true;
        // if letter is not in phrase
        if (!this.activePhrase.checkLetter(button.textContent)) {
            button.classList.replace('key', 'wrong');
            this.removeLife();
        } else {
            button.classList.replace('key', 'chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            this.checkForWin();

            // if (this.checkForWin) {
            //     console.log('win!!!');
            //     //this.gameOver(true);
            // }
        }
        // if player has won, call gameOver();
    }

    removeLife() {
        const allHearts = document.querySelectorAll('.tries');
        //let heartsIndex = 4;
        allHearts[this.missed].firstElementChild.setAttribute('src', 'images/lostHeart.png');
        
        this.missed += 1;

        if (this.missed === 5) {
            this.gameOver(false);
        }
    }

    checkForWin() {
        // check all classes from list item if nothing is hidden
        // return either true or false
        const hiding = document.getElementsByClassName('hide letter');
        if (hiding.length === 0) {
            this.gameOver(true);
        }
        return false;

        // const ul = document.querySelector('#phrase ul');
        // const listItems = ul.getElementsByTagName('li');
        //
        // for (let i = 0; i < listItems.length; i += 1) {
        //     if (listItems[i].classList.contains('hide')) {
        //         return false;
        //     } else {
        //         this.gameOver(true);
        //         console.log('WIN!!');
        //     }
        // }
    }

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