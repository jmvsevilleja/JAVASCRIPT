//Intermediate Algorithm Scripting: Seek and Destroy
function destroyer(arr) {
    return arr.filter(num => !Object.values(arguments).slice(1).some(arg => arg == num))
}
console.log('Remove all elements from an array with the same argument values.', destroyer([1, 2, 3, 1, 2, 3], 2, 3));
