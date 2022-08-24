// & Prototypal Inheritance and prototypal Chain

//? Object literals
const person = {
    alive: true
}

const musician = {
    plays: true
}

/*
musician.__proto__ = person; // ? old way of telling that person is the parent of the musician

console.log(musician);
console.log(musician.plays);
console.log(musician.alive);  


*/

//? new way :-

Object.setPrototypeOf(musician, person); // ? musician is the child of person
// console.log(Object.getPrototypeOf(musician)); //! {alive: true}
// console.log(musician);
// console.log(Object.getPrototypeOf(musician) === musician.__proto__); //! true
// console.log(musician.alive) // ! true, javascript has to walk up the proto chain.




// ? may find it in legacy code

// const guitarist = {
//     name: 'Dev',
//     __proto__: musician 
// }

// console.log(guitarist.alive);
// console.log(guitarist.plays);
// console.log(guitarist.name);
// console.log('guitarist is:', guitarist);


//! Things to remember about objects :
// ! 1) No circular references allowed {person.__proto__ can't be guitarist}
// ! 2) The __proto__ value must be an object or null.// @algorithm
// ! 3) An object can only directly inherit from one Object.// @algorithm


// ? Object with setter and getter methods.
// const car = {
//     doors: 4,
//     seats: 'vinyl',
//     get seatMaterial(){
//         return this.seats;
//     },
//     set seatMaterial(material){
//         this.seats = material
//     }
// }

// const luxuryCar = {};
// Object.setPrototypeOf(luxuryCar, car);
// luxuryCar.seatMaterial="leather";
// console.log('luxury car is', luxuryCar);
// console.log('(parent)car is', car);


// // ! walking up the prototype chain - properties and methods are not copied.
// console.log(luxuryCar.valueOf());
// //! getting the key of an Object

// console.log(luxuryCar.valueOf());

// //! getting keys from Object using loops

// Object.keys(luxuryCar).forEach(key => {
//     console.log(key);
// })

// //? for ..in loop includes inherited properties.
// for(let key in luxuryCar){
//     console.log(key);
// }


// & Object constructors
function Animal(species){
    this.species = species;
    this.eat = true;
}

Animal.prototype.walks = function(){
    return `A ${this.species} is walking`;
}

const Bear = new Animal("bear");
console.log(Bear);
console.log(Bear.walks());
//? The prototype property is where inheritable props and methods are.
console.log(Bear.__proto__);
console.log(Bear.__proto__ === Animal.prototype);