console.log('--Basic Algorithm--');
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case
let phrase = 'The quick brown fox jumps over the lazy dog';
console.log('Split() String to Array, Map() Iterate each word, Capitalize each word, Join() Array to String:', phrase.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));

function arraySplice(arr1, arr2, n) {
    let sliced = arr2.slice(0);
    sliced.splice(n, 0, ...arr1);
    return sliced;
}

console.log('Splice() Replace/Insert Array from a Sliced Array', arraySplice([1, 2, 3], [4, 5, 6], 1));

// Remove all falsy values from an array.
function filterArray(arr) {
    return arr.filter(item => item)
}

console.log('Iterate and Filter Array that is Truthy', filterArray([7, "ate", "", false, 9]));

// Return the lowest index(count) at which a value (second argument) should be inserted into an array
function getIndexToIns(arr, num) {
    return arr.filter(item => item < num).length;
}

console.log('Iterate and Filter item less than num, Count items as Index: getIndexToIns([40, 60], 50): ', getIndexToIns([40, 60], 50));


// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
    return arr[1]
        .toLowerCase()
        .split('')
        .every(function (letter) {
            return arr[0].toLowerCase().indexOf(letter) != -1;
        });
}

console.log('Loop each character and check string:', ["hello", "Hey"], mutation(["hello", "Hey"]));
