console.log("--Matching .test--");
let myString = "Jess has a pet cat named Pus";
let fccRegex = /Pus/; // test if Pus
let fccRegexOr = /(cat|dog)/; // test if two patterns () - Grouping
let fccRegexi = /pus/i; // test if pus with ignore case
console.log("Literal Matching:", myString, fccRegex, fccRegex.test(myString));
console.log("Or Matching: ", myString, fccRegexOr, fccRegexOr.test(myString));
console.log("Ignore Case Matching:", myString, fccRegexi, fccRegexi.test(myString));

let jessRegex = /^Jess/; // test if Pus
console.log("Match Beginning (^) /^Jess/:", myString, jessRegex, jessRegex.test(myString));
let pusRegex = /Pus$/; // test if Pus
console.log("Match Ending ($):", myString, pusRegex, pusRegex.test(myString));

console.log("#Wildcard Matches .test");
let wilcardString = "Let's have fun with regular expressions!";
let unRegex = /.un/; // test if (.) any character and literal un
console.log("Single Character Matches:", wilcardString, unRegex, unRegex.test(wilcardString));

console.log("--Get Matches .match--");
let extractStr = "Extract the word 'coding' from this coding string.";
let codingRegex = /coding/; // get Literal coding
console.log("Get Matches:", extractStr, codingRegex, extractStr.match(codingRegex));

console.log("#Get with Global Matches .match");
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // all twinkle
console.log("Get Global Matches:", twinkleStar, starRegex, twinkleStar.match(starRegex));

let quoteSample = "<h2>The quick brown fox jumps over the lazy dog.</h2>";
let vowelRegex = /d[aeiou]g/gi; // /Literal/ -exact vs [Classes] -any
console.log("Character Literal/Classes:", quoteSample, vowelRegex, quoteSample.match(vowelRegex));

let alphabetRegex = /[a-z]/gi; // get letters
console.log("Character Range:", quoteSample, alphabetRegex, quoteSample.match(alphabetRegex));
let numberRegex = /[0-9]/gi; // get numbers
console.log("Number Range:", quoteSample, numberRegex, quoteSample.match(numberRegex));
let alphaNumericRegex = /\w/g; // shorthand character classes. \W for non alphanumeric characters
console.log("Alphanumeric Characters Range:", quoteSample, alphaNumericRegex, quoteSample.match(alphaNumericRegex));
let numericRegex = /\d/g; // shorthand character classes. \D non numeric characters
console.log("Numbers Range:", quoteSample, numericRegex, quoteSample.match(numericRegex));

let negatedRegex = /[^0-9aeiou. ]/gi; // get consonants
console.log("Negated Matching:", quoteSample, negatedRegex, quoteSample.match(negatedRegex));

let oneOrMoreRegex = /fx+/g; // get Literal f with one or more x
console.log("Occur One or More Matching:", quoteSample, oneOrMoreRegex, quoteSample.match(oneOrMoreRegex));

let zeroOrMoreRegex = /fx*/g; // get Literal f and with zero or more x
console.log("Occur Zero or More Matching:", quoteSample, zeroOrMoreRegex, quoteSample.match(zeroOrMoreRegex));

let upperLowerRegex = /fo{1,2}x/g; // {1} exact {1,} one or more {1,2} one or two
console.log("{Upper, Lower} Matching:", quoteSample, upperLowerRegex, quoteSample.match(upperLowerRegex));

// get only the tags and not the whole text (<.*>)
let lazyRegex = /<.*?>/g; // (?) one or none - (.*?) lazy match (once found) vs greedy match (every)
console.log("Lazy Matching:", quoteSample, lazyRegex, quoteSample.match(lazyRegex));

let countWhiteSpace = /\s/g; //[\r\t\f\n\v] White space, return, tab, formfeed, and newline characters (\S)-not
console.log("Match Whitespace:", quoteSample, countWhiteSpace, quoteSample.match(countWhiteSpace));

//Positive and Negative Lookahead
let quit = "qu";
let noquit = "qu";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
console.log("Positive:", quit, quRegex, quit.match(quRegex)); // Returns ["q"]
console.log("Negative:", noquit, quRegex, noquit.match(qRegex)); // Returns ["q"]
//looks for between 3 and 6 characters and at least one number:
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log("3 and 6 characters and at least one number:", password, checkPass, checkPass.test(password)); // Returns ["q"]

console.log("--Excersise--");
let letterCriminals = "P6P2P7P4P5CCCCCP3P1"
let reCriminals = /C+/g; // find capital C one or many in a string
console.log("Literal one or many:", letterCriminals, reCriminals, letterCriminals.match(reCriminals));

/*
1) Usernames can only use alpha-numeric characters.
2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
3) Username letters can be lowercase and uppercase.
4)Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/
let username = "Z97"; //Your regex should match Z97 AB1 and not A1 J
// let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
// start with 2 letters, ends with number | start with one letter and 2 or more numbers
let userCheck = /^[a-z]+([a-z]+|\d\d)\d*$/i;
// start with letter, the next 2 can be letters or numbers
console.log("Restrict Possible Username:", username, userCheck, userCheck.test(username));

/*
match passwords that are greater than 5 characters long,
do not begin with numbers, and have two consecutive digits.
*/
let sampleWord = "bana12";
let pwRegex = /^\D(?=\w{5,})(?=\w*\d{2})/; // Change this line
console.log("Positive lookaheads Username:", sampleWord, pwRegex, pwRegex.test(sampleWord));

/* 
Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.
*/
let myName = "Eleanor T. Roosevelt";
let myRegex = /(Franklin|Eleanor)( \w.)? Roosevelt/i; // Change this line
console.log("Grouping and middle names:", myName, myRegex, myRegex.test(myName));
