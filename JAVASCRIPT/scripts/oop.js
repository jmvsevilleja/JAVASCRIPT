console.log("--Object Oriented Programming--");
//data - properties , bahavior/functions - methods
//Objects have prototype(object) and constructor property

function Animal() { } // Supertype

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        return "nom nom nom";
    }
};

let Bird = function (name, color) { // bird constructor
    this.name = name;
    this.color = color;
}

// set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.
Bird.prototype = Object.create(Animal.prototype);
let maia = new Bird("Maia", "pink");
console.log('calling Object method: maia.eat():', maia.eat());

// set the prototype with an object
Bird.prototype = { // setting multiple bird prototype
    constructor: Bird, // define the constructor property so it will not be overwritten
    numLegs: 2,
    describe: function () {
        return 'My name is ' + this.name;
    }
}
Bird.prototype.height = 2; //setting single bird prototype

// initialize eagle object from Bird Class
let eagle = new Bird("Maia", "pink");

// calling method

console.log('calling Object method: eagle.describe():', eagle.describe());
// check instanceof
console.log('eagle instanceOf Bird:', eagle instanceof Bird, '- eagle is instance of Bird');
// constructor property
console.log('eagle.constructor == Bird:', eagle.constructor === Bird, '- prototype has a bird constructor');
// check isPrototypeOf
console.log('Bird.prototype.isPrototypeOf(eagle):', Bird.prototype.isPrototypeOf(eagle), '- eagle inherited the prototype from Bird');
console.log('Object.prototype.isPrototypeOf(Bird):', Object.prototype.isPrototypeOf(Bird), '- Bird inherited the prototype from Object');

//Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.
console.log('object.hasOwnProperty(property):', eagle.hasOwnProperty('height'), '- not the original property of the object');
console.log('object.hasOwnProperty(property): Bird:', Bird.prototype, 'eagle:', eagle, eagle.hasOwnProperty('name'), '- has name property in eagle object');

// Iterate all over Object properties/values
const vals = Object.keys(eagle).map(key => key + ':' + eagle[key]);
console.log('Object keys and map of object', Object.keys(eagle), vals);

let ownProps = [];
let prototypeProps = [];
for (let property in eagle) {
    if (eagle.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}
console.log('Object Own Properties: ', ownProps);
console.log('Object Prototype Properties', prototypeProps);