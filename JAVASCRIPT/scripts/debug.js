console.log('clear');
console.clear();
console.log('--console.log()--');
console.log('test', 'test', 'test');

console.log('--typeof variable--');
let bool = true;
console.log(typeof bool);
let seven = 7.1;
console.log(typeof seven);
let one = "1";
console.log(typeof one);
let object = []; // {}
console.log(typeof object);
console.log(typeof alert); // function
console.log('Concat strings', seven + one); // concat string
console.log('Operation', seven + (one * 1)); // convert string to number

console.log('--Common Bugs--');
console.log('Catch Misspelled Variable and Function Names', 'recievables vs receivables');
console.log('Catch Unclosed Parentheses, Brackets, Braces and Quotes', 'array = [[]],function(function())');
console.log('Catch Mixed Usage of Single and Double Quotes', "\"");
console.log('Catch Use of Assignment Operator Instead of Equality Operator', '= vs ==');
console.log('Catch Missing Open and Closing Parenthesis After a Function Call', 'function()');
console.log('Catch Arguments Passed in the Wrong Order When Calling a Function', 'function(arg1,arg2)');
let string = 'Test';
console.log('Catch Off By One Errors When Using Indexing', 'array[-1]', string[string.length - 1]);
console.log('Use Caution When Reinitializing Variables Inside a Loop', 'i=0');
console.log('Prevent Infinite Loops with a Valid Terminal Condition', 'i<=max');
