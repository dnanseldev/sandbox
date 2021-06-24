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

//const u2 = User;
//u2.name = 'Val';


/*Create instance of objects */
const usr3 = Object.create(User)

usr3.name = 'Fela'
usr3.last_name = 'Sattler'

console.log(usr3)
console.log(`${usr3.name} ${usr3.last_name}`)
