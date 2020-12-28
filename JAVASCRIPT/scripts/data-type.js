console.log('--Data Types--');
console.log('string, number, booleans, undefined, null');

console.log('--String--');

let phrase = 'The quick brown fox jumps over the lazy dog';
console.log('Char At 0', phrase.charAt(0), phrase[0]);
// replace string
console.log('Replace fox with cat: ', phrase.replace('fox', 'cat'));
// replace string with regmatch
console.log('Replace the last word with cat: ', phrase.replace(/([\w]+)$/, 'cat'));
// replace is not destructive

console.log('String to Array', phrase.split(' '));

console.log('--Array--');
num = 5;
console.log('Array of numbers: ', Array.from({ length: num }).map((_, i) => i))
