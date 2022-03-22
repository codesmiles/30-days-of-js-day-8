// Find the person who has many skills in the users object.

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
const findPersonWithHighestSkills = () => {
  //   Gives me the necessary object keys as an array
  let userKeys = Object.keys(users);

  //all the arr length of all the skills
  const pushedArrLength = [];

  for (i = 0; i < userKeys.length; i++) {
    pushedArrLength.push(users[userKeys[i]].skills.length);
  }
  //   max array length
  let maxSkills = Math.max(...pushedArrLength);

  for (i = 0; i < userKeys.length; i++) {
    if (users[userKeys[i]].skills.length === maxSkills) {
      return userKeys[i];
    }
  }
};
console.log(findPersonWithHighestSkills());

// second method
const findPersonWithHighestSkillSecond = () => {
  let userKeys = Object.keys(users);
  let maxSkills = 0;
  let person;
  for (i = 0; i < userKeys.length; i++) {
    if (users[userKeys[i]].skills.length > maxSkills) {
      maxSkills = users[userKeys[i]].skills.length;
      person = userKeys[i];
    }
  }
  return person;
};
console.log(findPersonWithHighestSkillSecond());

// const findPerson3 = () => {
//   const userkey = Object.values(users);
//   // console.log(userkey)
//   let len = 0;
//   userkey.map((user) => {
//     if (user.skills.length > len) {
//       len = user.skills.length;
//       return user;
//     }
//   })
// };

// console.log(findPerson3());

// Count logged in users,count users having greater than equal to 50 points from the following object.

const value = Object.values(users);
const countLoggedinUsers = () => {
  for (let i = 0; i < value.length; i++) {
    if (value[i].points >= 50 && value[i].isLoggedIn === true) {
      return value[i];
    }
  }
};
// console.log(countLoggedinUsers())

// Find people who are MERN stack developer from the users object

const MERNstackDeveloper = () => {
  let userKeys = Object.keys(users);
  for (i = 0; i < userKeys.length; i++) {
    if (
      users[userKeys[i]].skills.includes("MongoDB") &&
      users[userKeys[i]].skills.includes("Express") &&
      users[userKeys[i]].skills.includes("React") &&
      users[userKeys[i]].skills.includes("Node")
    ) {
      return users[userKeys[i]];
    }
  }
};

// console.log(MERNstackDeveloper());

// Set your name in the users object without modifying the original users object
users.mike = {
  email: "mikeflows@alex.com",
  skills: ["HTML", "CSS", "JavaScript"],
  age: 29,
  isLoggedIn: true,
  points: 50,
};

// Get all keys or properties of users object
const getAllKeys = () => {
  let userKeys = Object.keys(users);
  return userKeys;
};
// console.log(getAllKeys());

// Get all the values of users object
const getAllValues = () => {
  let userValues = Object.values(users);
  return userValues;
};
// console.log(getAllValues())

// Use the countries object to print a country name, capital, populations and languages.
// import countries from "../../countries.mjs";
// console.log(countries)
