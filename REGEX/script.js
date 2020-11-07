console.log("#Matching .test");
let myString = "Jess has a pet cat named Pus";
let fccRegex = /Pus/; // test if Pus
let fccRegexOr = /cat|dog/; // test if two patterns
let fccRegexi = /pus/i; // test if pus with ignore case
console.log("Literal Matching /Pus/: ", myString, fccRegex.test(myString));
console.log("Or Matching /cat|dog/: ", myString, fccRegexOr.test(myString));
console.log("Ignore Case Matching /pus/i:", myString, fccRegexi.test(myString));

let jessRegex = /^Jess/; // test if Pus
console.log("Match Beginning (^) /^Jess/:", myString, jessRegex.test(myString));
let pusRegex = /Pus$/; // test if Pus
console.log("Match Ending ($) /Pus$/:", myString, pusRegex.test(myString));

console.log("#Wildcard Matches .test");
let wilcardString = "Let's have fun with regular expressions!";
let unRegex = /.un/; // test if (.) any character and literal un
console.log("Single Character Matches /.un/: ", wilcardString, unRegex.test(wilcardString));

console.log("#Get Matches .match");
let extractStr = "Extract the word 'coding' from this coding string.";
let codingRegex = /coding/; // get Literal coding
console.log("Get Matches: /coding/", extractStr, extractStr.match(codingRegex));

console.log("#Get with Global Matches .match");
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // all twinkle
console.log("Get Global Matches: /Twinkle/g", twinkleStar, twinkleStar.match(starRegex));

let quoteSample = "<h2>The quick brown fox jumps over the lazy dog.</h2>";
let vowelRegex = /d[aeiou]g/gi; // /Literal/ -exact vs [Classes] -any
console.log("Character Literal/Classes /d[aeiou]g/gi: ", quoteSample, quoteSample.match(vowelRegex));

let alphabetRegex = /[a-z]/gi; // get letters
console.log("Character Range /[a-e]/gi: ", quoteSample.match(alphabetRegex));
let numberRegex = /[0-9]/gi; // get numbers
console.log("Number Range /[0-9]/gi: ", quoteSample.match(numberRegex));
let alphaNumericRegex = /\w/g; // shorthand character classes. \W for non alphanumeric characters
console.log("Alphanumeric Characters Range [A-Za-z0-9_] /\\w/g: ", quoteSample.match(alphaNumericRegex));
let numericRegex = /\d/g; // shorthand character classes. \D non numeric characters
console.log("Numbers Range [0-9] /\\d/g: ", quoteSample.match(numericRegex));

let negatedRegex = /[^0-9aeiou. ]/gi; // get consonants
console.log("Negated Matching /[^0-9aeiou. ]/gi:", quoteSample.match(negatedRegex));

let oneOrMoreRegex = /fx+/g; // get Literal f with one or more x
console.log("Occur One or More Matching /fx+/g:", quoteSample.match(oneOrMoreRegex));

let zeroOrMoreRegex = /fx*/g; // get Literal f and with zero or more x
console.log("Occur Zero or More Matching /fx*/g:", quoteSample.match(zeroOrMoreRegex));

// get only the tags and not the whole text (<.*>)
let lazyRegex = /<.*?>/g; // (.*?) (?) lazy match (once found) vs greedy match (every)
console.log("Lazy Matching /<.*?>/g:", quoteSample.match(lazyRegex));

//--Excersise--
let letterCriminals = "P6P2P7P4P5CCCCCP3P1"
let reCriminals = /C+/g; // find capital C one or many in a string
console.log("Literal one or many C /C+/g:", letterCriminals.match(reCriminals));

let username = "Z97"; //Your regex should match Z97 A1 J
let userCheck = /^[a-z]+\d*$/i;
console.log("Restrict Possible Username //^[a-z]+\d*$/i;", userCheck.test(username));

