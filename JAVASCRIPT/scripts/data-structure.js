console.log('--Data Structure--');
console.log('--Arrays--');
let unshiftArray = [1, 2, 3];
console.log('Array add unshift() - first index 0:', unshiftArray.unshift(0), unshiftArray);
let pushArray = [1, 2, 3];
console.log('Array add push() - last index 4,5:', pushArray.push(4, 5), pushArray);

let shiftArray = [1, 2, 3];
console.log('Array remove shift() - first index:', shiftArray.shift(), shiftArray);
let popArray = [1, 2, 3];
console.log('Array remove pop() - last index:', popArray.pop(), popArray);

let spliceArray = [1, 2, 3, 4]
console.log('Array remove/replace splice(start index, count, replace) - remove/replace:', spliceArray.splice(1, 2, 'x'), spliceArray);
// Splice changes the original array

let sliceArray = [1, 2, 3, 4]
console.log('Array copy/extract slice(start index, stop index) - extract:', sliceArray.slice(1, 2), sliceArray);
// Slicing doesn't change the original array

let thisArray = [true, 0, true, undefined, false, null];
let thatArray = [1, ...thisArray, 2];
console.log('Spread Operator:', thisArray, thatArray);
// Spread Operator creates a new array instead of reference - newArray = oldArray

console.log('Index Of false: (-1 if not found)', false, thatArray.indexOf(false), '"false"', thatArray.indexOf('false'));
// IndexOf finds the position of a search

console.log('--Iterate Array/Objects--');
let newArray = [];
thatArray.forEach(function (item, index, arr) {
    if (index % 2 == 0)
        newArray.push(item);
});
console.log('Iiterate forEach:', newArray); // same as Array.protoype.map();

console.log('Iterate Array.map(function(){}) Method: Iterate and return item, index, array', newArray.map((item, index, arr) => arr[index] + '-' + item));
console.log('Iterate Array.map(function(){}) Method: Replace falsy to "falsy"', newArray.map(item => (item) ? item : 'falsy'));

console.log('Iterate Array.find(function(){}) Method: Return First True value: ', newArray.find(item => !(item)));

console.log('Iterate Array.filter(function(){}) Method: Return True values: ', newArray.filter(item => !(item)));

console.log('Iterate Array.every(function(){}) Method: Return True if items are all true: ', newArray.filter(item => !(item)), newArray.filter(item => !(item)).every(item => !(item)));

const reduceNumbers = [1, 2, 3, 4];
console.log('Iterate Process Array.reduce(function(){},0) Method: Return Sum value starting from 0: ', reduceNumbers, reduceNumbers.reduce(function (result, item, index, items) {
    return result + item;
}, 0)); //starting point

console.log('--Objects--');

const tekkenCharacter = {
    player: 'Hwoarang',
    'fighting style': 'Tae Kwon Doe',
    human: true
};
console.log('Access via Object.dot notation:', tekkenCharacter.player);
console.log('Access via Object["bracket"]:', tekkenCharacter['fighting style']);
console.log('Delete Object.property:', delete tekkenCharacter.human, tekkenCharacter);
console.log('Object.hasOwnProperty("player"):', tekkenCharacter.hasOwnProperty('player'));
console.log('"player" in Object:', 'player' in tekkenCharacter);


console.log('--Iterate Object--');
let newPlayer = [];
for (let property in tekkenCharacter) {
    if (property == 'player') {
        newPlayer.push(tekkenCharacter[property]);
    }
};
console.log('for(let property in Object):', newPlayer);
console.log('Object keys:', Object.keys(tekkenCharacter));