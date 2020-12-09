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
