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
console.log(Object.getPrototypeOf(musician)); //! {alive: true}
console.log(musician);
console.log(Object.getPrototypeOf(musician) === musician.__proto__); //! true
console.log(musician.alive) // ! true, javascript has to walk up the proto chain.
