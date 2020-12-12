//Seek and Destroy - Remove all elements from an array with the same argument values
function destroyer(arr) {
    // let args = Array.from(arguments).slice(1);
    let args = Object.values(arguments).slice(1);

    // return arr.filter(num => !args.some(arg => arg == num))
    return arr.filter(num => !args.includes(num));

}
console.log('Remove 2,3 from [1, 2, 3, 1, 2, 3]: ', destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//Wherefore art thou - returns an array of all objects that have matching name and value pairs
function whatIsInAName(collection, source) {
    let keys = Object.keys(source);
    return Object.values(collection).filter(item => keys.every(key => item.hasOwnProperty(key) && source[key] == item[key]));
}
console.log(
    'from [{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }] should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]',
    whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
);


// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
    return str
        .split(/\s|_|(?=[A-Z])/) // split spaces or underscore or any capitalized word
        .join("-")
        .toLowerCase();
}
console.log('Words to dashed lines: ', 'AllThe-small Things', spinalCase('AllThe-small Things'));

// Take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
// If a word begins with a vowel, just add "way" at the end.
function translatePigLatin(str) {
    // let vowel = str.match(/(?=[aeiou])/);

    // if (vowel) { // if has vowel
    //     if (vowel.index) { // no vowel at the beginning
    //         return str.slice(vowel.index) + str.slice(0, vowel.index) + 'ay';
    //     }
    //     // vowel at the beginning
    //     return str.slice(vowel.index) + 'way';
    // }
    // return str.slice(0) + 'ay';

    return str
        .replace(/^[aeiou]\w*/, "$&way") //  first vowel match with many|none words replace all words+way
        .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay"); // (not vowel one)(many|none words) replace second + first group +ay

}
console.log('Consonant latin Words: ', 'california', translatePigLatin('california'));
console.log('Vowel latin Words: ', 'algorithm', translatePigLatin('algorithm'));
