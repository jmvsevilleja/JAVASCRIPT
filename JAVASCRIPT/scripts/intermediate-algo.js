//Remove all elements from an array with the same argument values
function destroyer(arr) {
    // return arr.filter(num => !Object.values(arguments).slice(1).some(arg => arg == num))
    let args = Object.values(arguments).slice(1);
    return arr.filter(num => !args.includes(num));
}
console.log('Remove 2,3 from [1, 2, 3, 1, 2, 3]: ', destroyer([1, 2, 3, 1, 2, 3], 2, 3));
