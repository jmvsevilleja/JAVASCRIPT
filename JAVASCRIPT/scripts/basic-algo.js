console.log('--Basic Algorithm--');
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case
let phrase = 'The quick brown fox jumps over the lazy dog';
console.log('Split() String to Array, Map() Iterate each word, Capitalize each word, Join() Array to String:', phrase.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));

