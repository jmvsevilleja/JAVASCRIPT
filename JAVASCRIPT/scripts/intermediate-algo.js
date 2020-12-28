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

// Smallest Common Multiple
function smallestCommons(arr) {
    let args = arr.sort((a, b) => a - b)
    let a = args[0];
    let b = args[1];

    for (let n = a; true; n++) {
        let common = true;
        for (let i = a; i <= b; i++) {
            //console.log(n%i, n, i);
            if (n % i != 0) {
                common = false;
                break;
            }
        }
        if (common) {
            return n
        }
    }
    return 0;
}

console.log('Smallest Common Multiple:', smallestCommons([2, 10]));


//Return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
function dropElements(arr, func) {
    return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
    // let index = arr.indexOf(arr.find(item => func(item)));
    // if (index >= 0) {
    //     return arr.slice(index);
    // }
    // return [];
}

console.log('dropElements', dropElements([1, 2, 3], function (n) { return n > 0; }));

// Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr, flatArr = []) {
    console.log(arr)
    console.log(flatArr)
    // iterate thru arr
    arr.map(item => {
        // check if each item in arr is array
        if (item instanceof Array)
            // call the function and pass the array to check again
            steamrollArray(item, flatArr);
        else
            // push flatArr preserving previous content
            flatArr.push(item);
    });
    // return consolidated flatted items afterward
    return flatArr
}

console.log('Flat Array using recursion: ', steamrollArray([3, [[4]]]));


//Return an English translated sentence of the passed binary string.
function binaryAgent(str) {
    return str.split(' ') //Split string in array of binary chars
        .map(item => String.fromCharCode(parseInt(item, 2))) //Map every binary char to base 10 to real char
        .join('');
}

console.log('binary to string:', binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
console.log('parseInt(string, base)', "parseInt('65', 10)", parseInt('65', 10)); // string to integer

// Intermediate Algorithm Scripting: Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// Remember, you can access object properties through either dot notation or [] notation.
function truthCheck(collection, pre) {
    return collection.every(item => Boolean(item[pre]));
}

console.log('Truth Check: ', truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"));
console.log('Boolean()', Boolean('false'), 'Number', Number('123'), 'String', String(123)); // Casting

// Intermediate Algorithm Scripting: Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

function addTogether() {
    if (Object.values(arguments).every(item => typeof item == 'number')) {
        if (arguments.length == 2) {
            return arguments[0] + arguments[1];
        }
        if (arguments.length == 1) {
            return (x) => (typeof x === 'number') ? x + arguments[0] : undefined;
        }
    }
}

console.log('Add Together: ', addTogether(2)(3));

// Fill in the object constructor with the following methods below:
// setFirstName(first)
// setFullName(firstAndLast)

var Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = function () {
        return firstAndLast;
    };
    this.setFirstName = function (first) {
        //firstAndLast = first + ' ' + firstAndLast.split(' ')[1];
        firstAndLast = firstAndLast.replace(/^([\w]+)/, first);
    }
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.setFirstName('Jess');
console.log('Class method call: ', bob.getFullName());

// Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// You can read about orbital periods on Wikipedia.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return arr.map(({ name, avgAlt }) => {
        const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow((earthRadius + avgAlt), 3) / GM));
        return { name, orbitalPeriod }
    });
}

console.log('Orbital Period: ', orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]));
