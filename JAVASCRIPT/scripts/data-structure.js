console.log('--Data Types--');
console.log('string, number, booleans, undefined, null');

console.log('--Data Structure--');
console.log('Arrays');
let unshiftArray = [1, 2, 3];
console.log('Array add unshift() - first index 0:', unshiftArray.unshift(0), unshiftArray);
let pushArray = [1, 2, 3];
console.log('Array add push() - last index 4,5:', pushArray.push(4, 5), pushArray);

let shiftArray = [1, 2, 3];
console.log('Array remove shift() - first index:', shiftArray.shift(), shiftArray);
let popArray = [1, 2, 3];
console.log('Array remove pop() - last index:', popArray.pop(), popArray);

let spliceArray = [1, 2, 3, 4]
console.log('Array remove/replace splice(start index, count, replace) - last removed:', spliceArray.splice(1, 2, 'x', 'y', 'z'), spliceArray);

let sliceArray = [1, 2, 3, 4]
console.log('Array copy/extract slice(start index, stop index, replace) - extract:', sliceArray.slice(1, 3), sliceArray);

let thisArray = [true, true, undefined, false, null];
let thatArray = [1, ...thisArray, 2];
console.log('Spread Operator:', thisArray, thatArray);

console.log('Index Of:', thatArray.indexOf(false), thatArray.indexOf('false'));

console.log('objects');

