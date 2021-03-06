const languages = require("../resources/languages"); // get languages

/**
 * Class with the ability to "change" one language to another.
 */
class Changer {
    constructor() {
        this.languages = languages;
    }

    /**
     * Creates a Map from <code>fromLanguage</code> to <code>toLanguage</code>.
     *
     * This map will be used for every change() call.
     * @param {String} fromLanguage The language to "change" from.
     * @param {String} toLanguage The destination language.
     *
     * @example
     * init("English", "Hebrew")
     */
    init(fromLanguage, toLanguage) {
        this.languageMap = new Map();
        for (let i = 0; i < 40; i++) {
            this.languageMap.set(
                this.languages[fromLanguage][i],
                this.languages[toLanguage][i]
            );
        }
    }

    /**
     * Changes a given text according to the Map set with init().
     *
     * @param {String} inputText String to be "changed".
     *
     * @example
     * // assuming init("English", "Hebrew") was called sometime in the past
     * const changed = change("uutu thzv eus ndbhc")
     * console.log(changed)
     * // should print וואו איזה קוד מגניב
     *
     * @returns {String} "Changed" text.
     */
    change(inputText) {
        const lowerInputText = inputText.toLowerCase();
        let outputText = "";
        let newChar;
        // eslint-disable-next-line
        for (const letter of lowerInputText) {
            newChar = this.languageMap.get(letter);
            outputText += newChar === undefined ? letter : newChar;
        }
        return outputText;
    }
}

export default new Changer();
