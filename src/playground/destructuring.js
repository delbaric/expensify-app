// const person = {
//   name: 'chen',
//   age: 27,
//   location: {
//     city: "Beer sheva",
//     temp: 25
//   }
// };

// const { name, age } = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.`);

// const book = {
//   title: 'ego is the enamy',
//   author: 'ryan holiday',
//   publisher: {
//     // name: 'penguin'
//   }
// };

// const {name: publisherName = "Self-Published"} = book.publisher;

// console.log(publisherName);


const address = ['123 street', 'city', 'country', 'zip'];

const [, city, state] = address;

console.log(`you are in ${city} ${state}.`)

const item = ["coffe (hot)", "$2.00", "$2.50", "$2.75"];

const [type, , medium] = item;

console.log(`${type} cost ${medium}`);