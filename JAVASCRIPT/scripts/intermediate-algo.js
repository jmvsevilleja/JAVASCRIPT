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

//Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//Preserve the case of the first character in the original word when you are replacing it.
function myReplace(str, before, after) {
    // check if 'before' has upper case or lower case
    if (/^[A-Z]/.test(before)) {
        // uppercase the after
        after = after[0].toUpperCase() + after.substring(1)
    } else {
        // uppercase the after
        after = after[0].toLowerCase() + after.substring(1)
    }
    // replace it with modified after
    return str.replace(before, after);
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

function pairElement(str) {
    let pairs = {
        'G': 'C',
        'C': 'G',
        'A': 'T',
        'T': 'A'
    };
    return str.split('').map(item => [item, pairs[item]]);
}
console.log('Fill the right pairs', pairElement("GCG"));

// Find the missing letter in the passed letter range and return it.
function fearNotLetter(str) {

    // let alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    // let sliced = alphabet.slice(alphabet.indexOf(str.charAt(0)), alphabet.indexOf(str.charAt(str.length - 1)) + 1);
    // return sliced.find((letter, index) => letter != str.charAt(index));

    // using charCodeAt() and fromCharCode()
    let start = str.charCodeAt(0);
    let index = str.indexOf(str.split('').find((letter, index) => start + index != str.charCodeAt(index)));
    if (index > 0) {
        return String.fromCharCode(str.charCodeAt(index) - 1);
    }
}

console.log('Find missing alphabet letter "abcdefg"', fearNotLetter("abcefg"));

// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
function uniteUnique(arr) {
    let arrs = Object.values(arguments);// .map(item=>item.map(num=>num));
    let unique = [];

    arrs.forEach(item => {
        item.forEach(num => {
            if (unique.indexOf(num) < 0) {
                unique.push(num);
            }
        });
    });

    return unique;
}

console.log('Return unique numbers from arrays: ', uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// Convert the characters to html entities
function convertHTML(str) {
    const chars = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    return str.replace(/([&<>"'])/g, char => chars[char]);
}

console.log('String Replace:', convertHTML('Dol\'ce & Gabba"na'));


// Sum of all odd Fibonacci numbers
function sumFibs(num) {
    let n1 = 0, n2 = 1, sum = 0, odd = 0;

    while (sum <= num) {
        if (n2 % 2 != 0) {
            odd += n2;
        }
        // add first two numbers
        sum = n1 + n2;
        // display variables
        console.log('n1:', n1, 'n2:', n2, 'sum:', sum);
        // transfer n2 to n1 and sum to n2
        n1 = n2;
        n2 = sum;
    }
    return odd;
}

console.log('Fibonacci odd sums:', sumFibs(4));

// Sum of all Prime Numbers

function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}

function sumPrimes(num) {
    let sum = 0;

    for (let n = 0; n <= num; n++) {
        if (isPrime(n)) {
            console.log(n);
            sum += n;
        }
    }
    return sum;
}

console.log('Sum of all Prime Number:', sumPrimes(10));