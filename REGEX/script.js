console.log("#Matching .test");
let myString = "James has a pet cat named Pus";
let fccRegex = /Pus/;
let fccRegexOr = /cat|dog/; // two patterns
let fccRegexi = /pus/i; // ignore case
console.log("Literal Matching /Pus/: ", myString, fccRegex.test(myString));
console.log("Or Matching /cat|dog/: ", myString, fccRegexOr.test(myString));
console.log("Ignore Case Matching /pus/i:", myString, fccRegexi.test(myString));

console.log("#Wildcard Matches .test");
let wilcardString = "Let's have fun with regular expressions!";
let unRegex = /.un/;
console.log("Single Character Matches /.un/: ", wilcardString, unRegex.test(wilcardString));

console.log("#Extract Matches .match");
let extractStr = "Extract the word 'coding' from this coding string.";
let codingRegex = /coding/;
console.log("Extract Matches: /coding/", extractStr, extractStr.match(codingRegex));

console.log("#Extract with Global Matches .match");
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
console.log("Extract Global Matches: /Twinkle/g", twinkleStar, twinkleStar.match(starRegex));

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
console.log("Character Classes /[aeiou]/gi: ", quoteSample, quoteSample.match(vowelRegex));