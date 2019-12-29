/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Splits the phrase into an array of letters and displays them
     * as list items to the game
     */
    addPhraseToDisplay() {
        const phraseDisplay = document.querySelector('#phrase ul');
        const phraseLetters = this.phrase.split('');

        phraseLetters.forEach(letter => {
            let li = document.createElement("li");
            li.textContent = letter;

            if (li.textContent !== ' ') {
                li.setAttribute('class', `hide letter ${letter}`);
            } else {
                li.setAttribute('class', 'space');
            }

            phraseDisplay.appendChild(li);
        });
    }

    /**
     * Checks if the selected letter is present in the active phrase
     * @param {String} selectedLetter - The selected letter by the player
     * @returns {boolean}  - True if letter is present, false if it isn't
     */
    checkLetter(selectedLetter) {
        return this.phrase.indexOf(selectedLetter) > -1;
    }

    /**
     * If a letter is a match, the class name of that letter is set to 'show'
     * @param {string} letter - the matching letter that we show on the page
     */
    showMatchedLetter(letter) {
        if (this.checkLetter(letter)) {
            const allMatchingLetters = document.querySelectorAll(`.${letter}`);
            allMatchingLetters.forEach(letter => {
                letter.className = `show letter ${letter}`;
            });
        }
    }
}
