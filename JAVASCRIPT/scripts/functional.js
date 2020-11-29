const add = (num1, num2) => {
    return num1 + num2;
};
console.log('function call add(1,2):', add(1, 2));
// Callbacks - function(callback); - functions that are slipped or passed into another function
// First class - variable = first_class_function(); - Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value
// Higher order functions - high_order_function(callback); - The functions that take a function as an argument, or return a function as a return value
// lambda - variable = () => 'return'; - functions are passed in to another function or returned from another function, then those functions which gets passed in or returned

// Functional Programming
//  1 Avoid Mutations and Side Effects Using Functional Programming ex. array.splice();
//  Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like var newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy. So changing a value in newArr would change the value in arrVar.
//  2 Pass Arguments to Avoid External Dependence in a Function
//  Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.


// What is really going on inside the Array.prototype.map();
var s = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (callback) { // callbacks
    var newArray = [];
    this.forEach(function (item) {
        newArray.push(callback(item));
    });
    return newArray;
};

console.log('Iterate and Multiply numbers by 2 using myMap: ', s, s.myMap(item => item * 2)); //lambda

// What is really going on inside the Array.prototype.filter();
Array.prototype.myFilter = function (callback) {
    // Only change code below this line
    var newArray = [];
    this.forEach(function (item) {
        if (callback(item)) {
            newArray.push(item);
        }
    });
    // Only change code above this line
    return newArray;
};
console.log('Iterate and Filter odd numbers using myFilter: ', s, s.myFilter(item => item % 2 === 1)); //lambda





