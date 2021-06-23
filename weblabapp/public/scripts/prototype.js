//MyObject.__proto__ --> Object.prototype --> null

const h1 = document.querySelector("h1");

h1.innerHTML += " another text";
console.log(h1.innerHTML);

const User = {
  name: "Daniel Stonebuilt",
  age: 36,
};


// const myArray = [1, 5, 2, 19, 'a', 'z', 'x']
//myArray.__proto__ --> Array.prototype --> Object.prototype --> null

// console.log(myArray)
// console.log(`${User.name} ${User.age}`)

// User.name = 'Valdinéia'
// console.log(`${User.name} ${User.age}`)

const u2 = User;

u2.name = 'Val';

console.log(User.name)
