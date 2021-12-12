// 1. Create an empty object called dog
const dog = {}

// 2. Print the the dog object on the console
console.log(dog)
// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Rose';
dog.legs = 4;
dog.color = 'white';
dog.age = 8;
dog.bark = function() { return `woof woof`}

// console.log(dog)
// 4. Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())
// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = 'Eskimo';
dog.getDogInfo = function () { return `${this.name} is a ${this.age} year old ${this.breed} with the color ${this.color}` }


console.log(dog.getDogInfo())




const getTotalDaysInMonths = (month, year) => {

    if ((Math.round(year % 4) === 0) && (Math.round(year % 100) !== 0) && (Math.round(year % 400) === 0)) {
        if (month === 9 || month === 4 || month === 6 || month === 11) {
            return `30 days`;
        } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
            return `31 days`;
        }
        else if (month === 2) {
            return `29 days`;
        }
        else {
            return false;
        }
         
    }
    else {
        if (month === 9 || month === 4 || month === 6 || month === 11) {
            return `30 days`;
        } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
            return `31 days`;
        }
        else if (month === 2) {
            return `28 days`;
        }
        else {
            return false;
        }
    }
}

console.log(getTotalDaysInMonths(2, 2020));


function isLeap(year) {
    return new Date(year, 1, 29).getDate === 29;
}

console.log(isLeap(2020))