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
    const day31 = `31 days`;
    const day30 = `30 days`;
    const day29 = `29 days`;
    const day28 = `28 days`;
    const monthNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    if ((year % 4 === 0) && (year % 100 !== 0) && (year % 400 === 0)) {
        monthNum.map(el =>
         
     )
        return `leap year`
    }
    else {
        return `normal year`
    }
 }